import React from "react";
import "./Home.css";
import hero from "../../images/hero.png";
import CollectionOverview from "../../component/collections-overview/CollectionsOverview";
import { Route } from "react-router-dom";
function Home() {
  return (
    <div>
      <div className="hero">
        <div className="left">
          <span>Exclusive Sales</span>
          <h1>UP TO 50% OFF ON SALES</h1>
          <small>Get all exclusive offers for the season</small>
          <a>View Collection </a>
        </div>
        <div className="right">
          <img src={hero} alt="" />
        </div>
      </div>

      <Route exact path={`/`} component={CollectionOverview} />
    </div>
  );
}

export default Home;
