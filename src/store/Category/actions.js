import { CATEGORY_ERROR, CATEGORY_SUCCESS, LOAD_CATEGORY } from "./type";
import { client } from "../../axios/index";
import axios from "axios";
export const loadCategory = () => {
  return {
    type: LOAD_CATEGORY,
  };
};
export const categorySuccess = (category) => {
  return {
    type: CATEGORY_SUCCESS,
    payload: { category },
  };
};
export const categoryError = (error) => {
  return {
    type: CATEGORY_ERROR,
    payload: { error },
  };
};
