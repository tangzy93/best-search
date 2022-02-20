import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import bestSearchReducer from "./bestSearchSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    bestSearch: bestSearchReducer
  },
})
