import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../store/Product/shop-selector";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cart/actions";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Skeleton from "@material-ui/lab/Skeleton";
import "./ProductDetails.css";
import { withRouter } from "react-router-dom";
function ProductDetails({ products, history }) {
  const redirect = (product) => {
    dispatch(addItem(product));
    history.push("/cart");
  };
  const product = products[0];
  const dispatch = useDispatch();

  const display =
    product === undefined ? (
      <div>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <Skeleton variant="text" />
              <Skeleton variant="circle" width={40} height={40} />
              <Skeleton variant="rect" width={210} height={230} />
            </Grid>
          </Grid>
        </Container>
      </div>
    ) : (
      <section className="section product-detail">
        <div className="details container">
          <div className="left">
            <div className="main">
              <img src={product.image.url} alt="" />
            </div>
            <div className="thumbnails">
              <div className="thumbnail">
                <img src={product.image.url} alt="" />
              </div>
              <div className="thumbnail">
                <img src={product.image.url} alt="" />
              </div>
              <div className="thumbnail">
                <img src={product.image.url} alt="" />
              </div>
              <div className="thumbnail">
                <img src={product.image.url} alt="" />
              </div>
            </div>
          </div>
          <div className="right">
            <span>Home/T-shirt</span>
            <h1> {product.name}</h1>
            <div className="price">
              {" "}
              {product.price_range.minimum_price.regular_price.value + " "}
              {product.price_range.minimum_price.regular_price.currency}
            </div>
            <form>
              <div>
                <select>
                  <option value="Select Size" selected disabled>
                    Select Size
                  </option>
                  <option value="1">32</option>
                  <option value="2">42</option>
                  <option value="3">52</option>
                  <option value="4">62</option>
                </select>
                <span>
                  <i className="fas fa-chevron-down"></i>
                </span>
              </div>
            </form>

            <form className="form">
              <input type="text" placeholder="1" />
              <button className="addCart" onClick={() => redirect(product)}>
                Add To Cart
              </button>
            </form>
            <h3>Stock Status : {product.stock_status}</h3>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: product.description.html }}
            ></div>
          </div>
        </div>
      </section>
    );
  return display;
}
const mapStateToProps = (state, ownProps) => ({
  products: selectCollection(ownProps.match.params.url_key)(state),
});
export default withRouter(connect(mapStateToProps)(ProductDetails));
