import { PRODUCT_ERROR, PRODUCT_SUCCESS, LOAD_PRODUCT } from "./type";
import { pushproducts } from "./utils";
const initialState = {
  isLoading: true,
  products: [],
  pages: "",
  error: "",
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCT:
      return {
        ...state,

        isLoading: true,
      };
    case PRODUCT_SUCCESS:
      const products = action.payload.products.items;
      const count = action.payload.products.total_count;

      return {
        ...state,
        products,
        isLoading: false,
        pages: Math.ceil(count / 20),
        error: "",
      };
    case PRODUCT_ERROR:
      const error = action.payload.error;
      console.log("this error : " + error);
      return {
        ...state,
        error,
      };
    default:
      return state;
  }
};
export default ProductReducer;
