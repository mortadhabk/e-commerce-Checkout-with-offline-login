import { ACCOUNT_ERROR, ACCOUNT_SUCCESS, LOAD_ACCOUNT } from "./type";

export const loadApiAccount = () => {
  return {
    type: LOAD_ACCOUNT,
  };
};
export const loadAccountSuccess = () => {
  return {
    type: ACCOUNT_SUCCESS,
  };
};

export const loadAccountError = (error) => {
  return {
    type: ACCOUNT_ERROR,
    payload: { error },
  };
};
