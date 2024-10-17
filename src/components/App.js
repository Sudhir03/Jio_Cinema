import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
<<<<<<< HEAD
import Main from "./Main";
import SuggestedTopics from "./SuggestedTopics";
=======
import Home from "../pages/Home";
import Sports from "../pages/Sports";
import Movies from "../pages/Movies";
import TvShows from "../pages/TvShows";
import Premium from "../pages/Premium";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import PageNotFound from "../pages/PageNotFound";
import MoreContentPanel from "./MoreContentPanel";
import PaymentPage from "../pages/PaymentPage";
>>>>>>> 3b1acbf243ca440810b616ae5dfadca7846d0f99

function App() {
  const [showMorePanel, setShowMorePanel] = useState(false);
  return (
<<<<<<< HEAD
    <>
      <Header />
      <SuggestedTopics></SuggestedTopics>
      <Main />
    </>
=======
    <div className=" ">
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
          <Route index replace element={<Premium />} />
          <Route path="payment-page" element={<PaymentPage />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
>>>>>>> 3b1acbf243ca440810b616ae5dfadca7846d0f99
  );
}

export default App;
