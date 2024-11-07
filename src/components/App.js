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
import { useState } from "react";
import MoreContentPanel from "./MoreContentPanel";
import PaymentPage from "./PaymentPage";
import Footer from "./Footer";

function App() {
  const [showMorePanel, setShowMorePanel] = useState(false);
  return (
    <>
      <Header
        showMorePanel={showMorePanel}
        setShowMorePanel={setShowMorePanel}
      />
      {showMorePanel && <MoreContentPanel />}

      <Routes>
        <Route index element={<Home />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-shows" element={<TvShows />} />
        <Route path="/premium">
          <Route index element={<Premium />} />
          <Route path="payment-page" element={<PaymentPage></PaymentPage>} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
