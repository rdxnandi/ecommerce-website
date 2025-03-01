import React from "react";
import Hero from "../components/Hero.jsx";
import Popular from "../components/Popular.jsx";
import Offers from "../components/Offers.jsx";
import NewCollections from "../components/NewCollections.jsx";
import NewsLetter from "../components/NewsLetter.jsx";

function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
}

export default Shop;
