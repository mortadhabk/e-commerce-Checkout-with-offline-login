import { CATEGORY_ERROR, CATEGORY_SUCCESS, LOAD_CATEGORY } from "./type";
const initialState = {
  isLoading: true,
  category: [],
  error: "",
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CATEGORY:
      return {
        ...state,

        isLoading: true,
      };
    case CATEGORY_SUCCESS:
      const category = action.payload.category;

      return {
        ...state,
        category,
        isLoading: false,

        error: "",
      };
    case CATEGORY_ERROR:
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
export default CategoryReducer;
