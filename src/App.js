import { Route, Routes } from "react-router";
import BuycircleProject from "./components/BuycircleProject";
import MovieProject from "./components/MovieProject";
import PageProject from "./components/PageProject";
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
