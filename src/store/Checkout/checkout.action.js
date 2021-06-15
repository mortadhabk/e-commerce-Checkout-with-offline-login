import { setShippingAdress } from "../../util/SetShippingAddress";
import {
  SET_SHIPPING_ADDRESS,
  CLEAR_CHECKOUT,
  SET_SHIPPING_METHOD,
  SET_PAYEMENT_METHOD,
  GET_PAYEMENT_METHOD,
  GET_SHIPPING_METHOD,
  SET_CHECKOUT_LOADING,
  SET_ORDER
} from "./checkout.constants";


export const addShippingToCart = (adress) => {
  return {
    type: SET_SHIPPING_ADDRESS,
    payload : adress
  };
};

export const setCheckoutLoading = () => {
  return {
    type: SET_CHECKOUT_LOADING,
  };
};

export const getShippingMethod = (method) => {
  return {
    type: GET_SHIPPING_METHOD,
    payload: method,
  };
};

export const getPaymentMethod = (method) => {
  return {
    type: GET_PAYEMENT_METHOD,
    payload: method,
  };
};

export const setShippingMethod = (method) => {
  return {
    type: SET_SHIPPING_METHOD,
    payload: method,
  };
};

export const setPaymentMethod = (method) => {
  return {
    type: SET_PAYEMENT_METHOD,
    payload: method,
  };
};

export const setOrder = (cartID) => {
  return {
    type: SET_ORDER,
    payload: cartID,
  };
};
export const clearCheckout = () => {
  return {
    type: CLEAR_CHECKOUT,
  };
};
