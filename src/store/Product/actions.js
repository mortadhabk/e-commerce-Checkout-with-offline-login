import { PRODUCT_ERROR, PRODUCT_SUCCESS, LOAD_PRODUCT } from "./type";

export const loadProduct = () => {
  return {
    type: LOAD_PRODUCT,
  };
};
export const productSuccess = (products) => {
  return {
    type: PRODUCT_SUCCESS,
    payload: { products },
  };
};
export const productError = (error) => {
  return {
    type: PRODUCT_ERROR,
    payload: { error },
  };
};
