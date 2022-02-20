import styled from '@emotion/styled';
import {Link, useLocation, useParams, useRouteMatch} from "react-router-dom";
import Search from "./Search";
const BrandLink = styled.span`
  a {
    text-decoration: none;
    color: #232323;
  }
  font-size: 20px;
  margin-right: 10px;
`
const Bold = styled.span`
  font-weight: bold;
`
function _Navbar(props) {
  const {className} = props;
  const location = useLocation();
  const isHomePage = location.pathname === '/'
  return (
    <div className={className}>
      <BrandLink>
        <Link to={'/'}>
          <Bold>Best</Bold>
          Search
        </Link>
      </BrandLink>
      {!isHomePage ? <Search/> : null}
    </div>
  )
}

const Navbar = styled(_Navbar)`
  width: 100%;
  height: 56px;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid #dddddd;
  background-color: rgba(251, 247, 237, 1);
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 1000;
`;

export default Navbar;
