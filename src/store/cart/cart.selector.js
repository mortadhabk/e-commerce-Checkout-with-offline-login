import { createSelector } from "reselect";

const selectCart = (state) => state.Cart;
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
export const selectCartCustomer = createSelector(
  [selectCart],
  (cart) => cart.cartCustomer
);

export const selectCartID = createSelector([selectCart], (cart) => cart.cartID);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity +
      cartItem.quantity *
        cartItem.price_range.minimum_price.regular_price.value,
    0
  )
);
export const selectCartItemsDistruct = createSelector(
  [selectCartItems],
  selectCartItems
    ? (cartItems) => {
        let ob = [];
        let addElement = [];
        cartItems.forEach((element) => {
          if (element.id) {
            let cart_item_id = element.id;
            let quantity = element.quantity;

            ob.push({ quantity, cart_item_id });
          } else {
            let sku = element.sku;
            let quantity = element.quantity;

            addElement.push({ quantity, sku });
          }
        });
        return { ob, addElement };
      }
    : ""
);
