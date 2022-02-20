import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProduct, setKeywords} from "../store/bestSearchSlice";
import {useEffect} from "react";
import SkeletonCard from "../components/SkeletonCard";
import {Stack, Container, Grid} from "@mui/material";
import styled from '@emotion/styled';
import ProductTrendCard from "../components/ProductTrendCard";
// import Container from "../components/Container";

const Title = styled.div`
  font-size: 20px;
  margin: 30px auto 20px;
`

function Search() {
  const { keywords: keywordsParam } = useParams();
  const dispatch = useDispatch();
  const bestSearch = useSelector(state => state.bestSearch);
  const {productTrends, searchLoading} = bestSearch;
  useEffect(() => {
    const keywords = keywordsParam.split('+');
    dispatch(setKeywords({
      keywords
    }));
    dispatch(getProduct(keywords));
  }, [keywordsParam]);
  return (
    <Container maxWidth={"md"}>
      <Title>
        Related product trends
      </Title>
      {
        searchLoading ?
          <Stack direction="row" justifyContent={'space-between'} alignItems={'center'}>
            {
              Array.from(new Array(4)).map((item, index) => (<SkeletonCard key={index}/>))
            }
          </Stack> :
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 4 }}>
            {
              productTrends.map((item, index) => (
                <Grid item key={index} xs={1} sm={1} md={1}>
                  <ProductTrendCard {...item} />
                </Grid>
              ))
            }
          </Grid>
      }
    </Container>
  )
}

export default Search;
