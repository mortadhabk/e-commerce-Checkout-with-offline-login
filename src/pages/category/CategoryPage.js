import React from "react";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionsOverview from "../../component/collections-overview/CollectionsOverview";
import {
  categoriefilter,
  selectCollectionsForPreview,
} from "../../store/Product/shop-selector";
import { selectCollection } from "../../store/Product/shop-selector";
import { productisLoading } from "../../store/Product/shop-selector";
import "./CategoryPage.css";
import { withRouter } from "react-router-dom";
import { addItem } from "../../store/cart/actions";
import { ProductsApi } from "../../component/collections-overview/use/ProductsApi";

const CategoryPage = ({ products, history }) => {
  console.log("product" + JSON.stringify(products));
  const dispatch = useDispatch();
  return (
    <div className="categorypage">
      <section className="section products">
        <div className="products-layout container">
          <div className="col-1-of-4">
            <div>
              <div className="block-title">
                <h3>Category</h3>
              </div>

              <ul className="block-content">
                <li>
                  <input type="checkbox" name="" id="" />
                  <label>
                    <span>Shoes</span>
                    <small>(10)</small>
                  </label>
                </li>

                <li>
                  <input type="checkbox" name="" id="" />
                  <label>
                    <span>Bags</span>
                    <small>(7)</small>
                  </label>
                </li>

                <li>
                  <input type="checkbox" name="" id="" />
                  <label>
                    <span> Accessories</span>
                    <small>(3)</small>
                  </label>
                </li>

                <li>
                  <input type="checkbox" name="" id="" />
                  <label>
                    <span>Clothings</span>
                    <small>(3)</small>
                  </label>
                </li>
              </ul>
            </div>

            <div>
              <div className="block-title">
                <h3>Brands</h3>
              </div>

              <ul className="block-content">
                <li>
                  <input type="checkbox" name="" id="" />
                  <label>
                    <span>Gucci</span>
                    <small>(10)</small>
                  </label>
                </li>

                <li>
                  <input type="checkbox" name="" id="" />
                  <label>
                    <span>Burberry</span>
                    <small>(7)</small>
                  </label>
                </li>

                <li>
                  <input type="checkbox" name="" id="" />
                  <label>
                    <span> Accessories</span>
                    <small>(3)</small>
                  </label>
                </li>

                <li>
                  <input type="checkbox" name="" id="" />
                  <label>
                    <span>Valentino</span>
                    <small>(3)</small>
                  </label>
                </li>

                <li>
                  <input type="checkbox" name="" id="" />
                  <label>
                    <span>Dolce & Gabbana</span>
                    <small>(3)</small>
                  </label>
                </li>

                <li>
                  <input type="checkbox" name="" id="" />
                  <label>
                    <span>Hogan</span>
                    <small>(3)</small>
                  </label>
                </li>

                <li>
                  <input type="checkbox" name="" id="" />
                  <label>
                    <span>Moreschi</span>
                    <small>(3)</small>
                  </label>
                </li>

                <li>
                  <input type="checkbox" name="" id="" />
                  <label>
                    <span>Givenchy</span>
                    <small>(3)</small>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3-of-4">
            <form action="">
              <div className="item">
                <label for="sort-by">Sort By</label>
                <select name="sort-by" id="sort-by">
                  <option value="title" selected="selected">
                    Name
                  </option>
                  <option value="number">Price</option>
                  <option value="search_api_relevance">Relevance</option>
                  <option value="created">Newness</option>
                </select>
              </div>
              <div className="item">
                <label for="order-by">Order</label>
                <select name="order-by" id="sort-by">
                  <option value="ASC" selected="selected">
                    ASC
                  </option>
                  <option value="DESC">DESC</option>
                </select>
              </div>
              <a href="">Apply</a>
            </form>
            <div class="product-layout">
              {products.map((item) => (
                <div class="product">
                  <div class="img-container">
                    <img
                      className="image"
                      src={item.image.url}
                      onClick={() => history.push(`/${item.url_key}`)}
                    />
                    <div
                      class="addCart"
                      onClick={() => dispatch(addItem(item))}
                    >
                      <i class="fas fa-shopping-cart"></i>
                    </div>

                    <ul class="side-icons">
                      <span>
                        <i class="fas fa-search"></i>
                      </span>
                      <span>
                        <i class="far fa-heart"></i>
                      </span>
                      <span>
                        <i class="fas fa-sliders-h"></i>
                      </span>
                    </ul>
                  </div>
                  <div class="bottom">
                    <a href="">{item.name}</a>
                    <div class="price">
                      <span>
                        {" "}
                        {item.price_range.minimum_price.regular_price.value +
                          " "}
                        {item.price_range.minimum_price.regular_price.currency}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <ul className="pagination">
              <span>1</span>
              <span>2</span>
              <span className="icon">››</span>
              <span className="last">Last »</span>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  ProdutApi: () => dispatch(ProductsApi()),
});

const mapStateToProps = (state, ownProps) => ({
  products: categoriefilter(ownProps.match.params.id)(state),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CategoryPage)
);
