import React from "react";

import "./Cartdropdown.css";
import { useSelector } from "react-redux";
import CartItem from "../cart-item/CartItem";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../store/cart/cart.selector";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../store/cart/actions";

function Cartdropdown({ cartItems, history, dispatch }) {
  console.log("hiii " + cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={CartItem.sku} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <button
        onClick={() => {
          history.push("/cart");
          dispatch(toggleCartHidden());
        }}
      >
        {" "}
        GO TO CHECKOUT
      </button>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(Cartdropdown));
