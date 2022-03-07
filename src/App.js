import { Route, Router, Routes } from "react-router";
import BuycircleProject from "./components/BuycircleProject";
import Info from "./components/Info";
import MovieProject from "./components/MovieProject";
import NavBar from "./components/NavBar";
import PageProject from "./components/PageProject";
import Project from "./components/Project";
import HomeContainer from "./Container/HomeContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/movie" element={<MovieProject />} />
      <Route path="/buycircle" element={<BuycircleProject />} />
      <Route path="/my_page" element={<PageProject />} />
    </Routes>
  );
}

export default App;
