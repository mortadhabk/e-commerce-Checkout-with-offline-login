import React from "react";
import "./Home.css";
import hero from "../../images/hero.png";
import CollectionOverview from "../../component/collections-overview/CollectionsOverview";
import { Route } from "react-router-dom";
function ProductFilters() {
  return (
    <div>
      <Route exact path={`/category/:id`} component={CollectionOverview} />
    </div>
  );
}

export default ProductFilters;
