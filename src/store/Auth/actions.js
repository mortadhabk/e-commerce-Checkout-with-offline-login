import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOAD_LOGIN,
  LOGOUT,
  SET_ADDRESS_BOOK,
} from "./type";
import { clearCart } from "../cart/actions";
import { requestOffline } from "../Request/actions";
import { clearCheckout } from "../Checkout/checkout.action";

import { saveAdress } from "../../util/SetAdressBook";
import { store } from "../store";
export const loadApiLogin = () => {
  return {
    type: LOAD_LOGIN,
  };
};
export const loadLoginSuccess = ({ customer, token }) => {
  return {
    type: LOGIN_SUCCESS,
    payload: { customer, token },
  };
};

export const loadLoginError = (error) => {
  return {
    type: LOGIN_ERROR,
    payload: { error },
  };
};
export const addLogout = () => {
  return {
    type: LOGOUT,
  };
};

export const setToAddressBook = (token, adress) => {
  const mystore = store;
  const tab = [];
  tab.push(adress);

  const obj = {
    type: SET_ADDRESS_BOOK,
    payload: tab,
    token: token,
  };

  if (window.navigator.onLine) {
    saveAdress(token, adress);
  } else {
    mystore.dispatch(requestOffline(obj));
  }
  return obj;
};

export const LogoutApi = () => {
  return (dispatch) => {
    localStorage.removeItem("jwtToken");
    dispatch(clearCart());
    dispatch(clearCheckout());
    dispatch(addLogout());
  };
};
