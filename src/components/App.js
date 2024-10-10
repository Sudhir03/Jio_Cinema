import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import Sports from "../pages/Sports";
import Movies from "../pages/Movies";
import TvShows from "../pages/TvShows";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
