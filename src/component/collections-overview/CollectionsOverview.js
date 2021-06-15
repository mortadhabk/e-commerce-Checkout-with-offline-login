import React, { useEffect, useState } from "react";

import Preview from "../../component/collections-preview/Preview";
import "./CollectionsOverview.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCollectionsForPreview,
  selectFirstCollections,
  selectpadding,
} from "../../store/Product/shop-selector";
import { productisLoading } from "../../store/Product/shop-selector";
import { ProductsApi } from "./use/ProductsApi";

function CollectionsOverview({ products, isLoading, padding }) {
  console.log("products" + products);

  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      <section class="section products">
        <div class="title">
          <h2>New Products</h2>
          <span>
            Select from the premium product brands and save plenty money
          </span>
        </div>

        <Preview isLoading={isLoading} products={products} />
        {}

        {/* {numbers.map((number, index) => (
          <button key={index} onClick={() => paginationPage(index)}>
            {number}
          </button>
        ))} */}
      </section>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  products: selectCollectionsForPreview,
  padding: selectpadding,
  isLoading: productisLoading,
});

export default connect(mapStateToProps)(CollectionsOverview);
