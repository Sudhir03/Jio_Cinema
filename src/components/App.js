import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "../pages/Home";
import Sports from "../pages/Sports";
import Movies from "../pages/Movies";
import TvShows from "../pages/TvShows";
import Premium from "../pages/Premium";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import PageNotFound from "../pages/PageNotFound";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-shows" element={<TvShows />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
