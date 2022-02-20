import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";
import _ from 'lodash';

export const bestSearchSlice = createSlice({
  name: 'bestSearch',
  initialState: {
    keywords: [],
    productTrends: [],
    searchLoading: false,
  },
  reducers: {
    setSearchLoading: (state, action) => {
      return {
        ...state,
        searchLoading: action.payload.searchLoading
      }
    },
    productTrendsLoaded: (state, action) => {
      const productTrends = action.payload.productTrends;
      return {
        ...state,
        productTrends
      }
    },
    setKeywords: (state, action) => {
      return {
        ...state,
        keywords: action.payload.keywords
      }
    }
  }
});

export const {
  setSearchLoading,
  productTrendsLoaded,
  setKeywords
} = bestSearchSlice.actions;

export const getProduct = (keywords) => dispatch => {
  console.log('getProduct keywords', keywords.join(' '));
  dispatch(setSearchLoading({
    searchLoading: true
  }));
  axios.post('http://3.141.23.218:5000/interview/keyword_search', {
    "login_token":"INTERVIEW_SIMPLY2021",
    "search_phrase": keywords.join(' ')
  }).then(resp => {
    dispatch(setSearchLoading({
      searchLoading: false
    }));
    if (_.get(resp, ['data', 'status']) === 'OK') {
      const productTrends = _.get(resp, ['data', 'data', 'product_trends'], []);
      console.log(productTrends, 'product trends');
      dispatch(productTrendsLoaded({productTrends}));
    } else {
      dispatch(productTrendsLoaded({
        productTrends: []
      }));
    }
  }).catch(e => {
    dispatch(setSearchLoading({
      searchLoading: false
    }));
    console.log(e)
  }).finally(() => {
    dispatch(setSearchLoading({
      searchLoading: false
    }));
  });
}

export default bestSearchSlice.reducer;
