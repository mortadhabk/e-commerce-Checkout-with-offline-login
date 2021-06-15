import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  ADD_CART,
  GET_CART_ID,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
  CLEAR_CART_ON_LOGOUT,
  AUTH_CART,
} from "./type";
export const toggleCartHidden = () => {
  return {
    type: TOGGLE_CART_HIDDEN,
  };
};
export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};
export const addCart = (item) => {
  console.log("item added to cart:" + JSON.stringify(item));
  return {
    type: ADD_CART,
    payload: item,
  };
};

export const AuthCart = (item) => {
  return {
    type: AUTH_CART,
    payload: item,
  };
};
export const clearItemFromCart = (item) => {
  return {
    type: CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};
export const clearCart = () => {
  return {
    type: CLEAR_CART_ON_LOGOUT,
  };
};
export const setCartId = (cartId) => {
  return {
    type: GET_CART_ID,
    payload: cartId,
  };
};
