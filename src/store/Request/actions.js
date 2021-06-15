import { REQUEST_OFFLINE, CLEAR_REQUEST } from "./type";

export const requestOffline = (obj) => {
  return {
    type: REQUEST_OFFLINE,
    payload: obj,
  };
};
export const clearRequest = (index) => {
  return {
    type: CLEAR_REQUEST,
    payload: index,
  };
};
