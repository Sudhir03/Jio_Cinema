import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "../pages/Home";
import Sports from "../pages/Sports";
import Movies from "../pages/Movies";
import TvShows from "../pages/TvShows";
import Premium from "../pages/Premium";
import PageNotFound from "../pages/PageNotFound";
import MoreContentPanel from "./MoreContentPanel";
import PaymentPage from "./PaymentPage";
import Footer from "./Footer";
import Sheet from "./Sheet";
import { useCinema } from "../contexts/jioCinemaContext";

function App() {
  const { profileVisibility } = useCinema();
  return (
    <div className={`${profileVisibility ? "scroll-disable" : ""}`}>
      <Header />
      <MoreContentPanel />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-shows" element={<TvShows />} />
        <Route path="/premium">
          <Route index element={<Premium />} />
          <Route
            path="payment-page/plan/:id"
            element={<PaymentPage></PaymentPage>}
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Sheet />
      <Footer />
    </div>
  );
}

export default App;
