import React from "react";
import "./CheckoutItem.css";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../store/cart/actions";
function CheckoutItem({ cartItem, clearItem, addItem, removeItem }) {
  const { name, quantity, price_range, image } = cartItem;
  return (
    <tr>
      <td>
        <div className="cart-info">
          <img src={image.url} alt="" />
          <div>
            <p>{name}</p>
            <span>
              {" "}
              {price_range.minimum_price.regular_price.value + " "}{" "}
              {price_range.minimum_price.regular_price.currency}{" "}
            </span>
            <br />

            <button onClick={() => clearItem(cartItem)}>remove</button>
          </div>
        </div>
      </td>
      <td>
        <div className="quantity ">
          <div className="arrow" onClick={() => addItem(cartItem)}>
            ✚
          </div>
          <span className="value">{quantity} </span>

          <div className="arrow" onClick={() => removeItem(cartItem)}>
            ⚊
          </div>
        </div>
      </td>
      <td>
        {price_range.minimum_price.regular_price.value + " "}{" "}
        {price_range.minimum_price.regular_price.currency}{" "}
      </td>
    </tr>
  );
}

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
