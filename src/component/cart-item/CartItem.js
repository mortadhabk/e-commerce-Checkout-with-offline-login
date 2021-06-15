import React from "react";
import "./CartItem.css";
function CartItem(props) {
  const display = (
    <div className="cart-item">
      <img src={props.item.image.url} alt="item" />
      <div className="item-details">
        <span className="name">{props.item.name}</span>
        <span className="price">
          {props.item.quantity}
          &#10007;
          {props.item.price_range.minimum_price.regular_price.value}
          {props.item.price_range.minimum_price.regular_price.currency}
        </span>
      </div>
    </div>
  );

  return display;
}

export default CartItem;
