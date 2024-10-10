import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Home />} />
          <Route path="/movies" element={<Home />} />
          <Route path="/tv-shows" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
