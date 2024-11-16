import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { JioCinema } from "./contexts/jioCinemaContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <JioCinema>
        <App />
      </JioCinema>
    </BrowserRouter>
  </React.StrictMode>
);
