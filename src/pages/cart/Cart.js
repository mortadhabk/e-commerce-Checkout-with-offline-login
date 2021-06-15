import React from "react";
import "./Cart.css";
import {
  selectCartItems,
  selectCartTotal,
  selectCartID,
  selectCartItemsDistruct,
} from "../../store/cart/cart.selector";
import { connect } from "react-redux";
import CheckoutItem from "../../component/checkout-item/CheckoutItem";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import { updateCartItemsApi } from "./use/updateCartItemsApi";
import { addProductsToCartApi } from "./use/addProductsToCartApi";
import { selectCartCustomer } from "../../store/cart/cart.selector";
import { useHistory } from "react-router-dom";
function Cart({
  cartItems,
  total,
  UpdateCartItems,
  cartId,
  cartDestructure,
  cartCustomer,
  AddCartItems,
}) {
  let history = useHistory();
  const updatecart = () => {
    if (localStorage.getItem("jwtToken")) {
      const ob = cartDestructure.ob;
      const addElement = cartDestructure.addElement;
      console.log("addElement" + JSON.stringify(addElement));
      if (ob) {
        UpdateCartItems({ cartId, ob });
      }
      if (addElement) {
        addElement.forEach((item) => {
          const { quantity, sku } = item;
          AddCartItems({ cartId, quantity, sku });
        });
      }
      if (!cartDestructure) {
        history.push("/");
      }
      history.push("/checkout");
    } else {
      history.push("/login");
    }
  };
  return (
    <div className="container cart">
      <table>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        {cartItems.map((cartItem) =>
          cartItem.quantity !== 0 ? (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ) : (
            ""
          )
        )}
      </table>

      <div className="total-price">
        <table>
          <tr>
            <td>Subtotal</td>
            <td>{total + " USD"}</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>00 USD</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{total + " USD"}</td>
          </tr>
        </table>
        <a className="checkout btn" onClick={() => updatecart()}>
          Proceed To Checkout
        </a>
      </div>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  cartId: selectCartID,
  cartDestructure: selectCartItemsDistruct,

  cartCustomer: selectCartCustomer,
});
const mapDispatchToProps = (dispatch) => ({
  UpdateCartItems: (cart) => dispatch(updateCartItemsApi(cart)),
  AddCartItems: (cart) => dispatch(addProductsToCartApi(cart)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
