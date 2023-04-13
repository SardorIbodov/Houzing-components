import React from "react";
import ReactDOM from "react-dom/client";
import CardsContainer from "./components/cardsContainer/cardsContainer";
import { Nav } from "./components/header/nav/nav";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nav />
    {/* <CardsContainer /> */}
  </React.StrictMode>
);
