import style from './App.module.css';
import {Route, Routes, useParams} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className={style.App}>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={ <Home/> }/>
      </Routes>
      <Routes>
        {/*<Route path={'/search'}>
          <Route path={':keywords'} element={<Search/>} />
        </Route>*/}
        <Route path={'/search/:keywords'} element={ <Search/> }/>
      </Routes>
    </div>
  );
}

export default App;
