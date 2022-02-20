import styled from '@emotion/styled';
import Search from "../components/Search";
const Title = styled.p`
  font-size: 32px;
  color: #232323;
`
const Center = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: -56px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 156px;
`
function Home() {
  return (
    <>
      <Center>
        <Title>
          Search Trends
        </Title>
        <Search/>
      </Center>
    </>
  )
}

export default Home;
