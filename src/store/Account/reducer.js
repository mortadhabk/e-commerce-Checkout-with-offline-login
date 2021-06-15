import { ACCOUNT_ERROR, ACCOUNT_SUCCESS, LOAD_ACCOUNT } from "./type";
const initialState = {
  isLoading: false,
  success: "",
  error: "",
};
const AccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ACCOUNT:
      return {
        ...state,

        isLoading: true,
      };

    case ACCOUNT_SUCCESS:
      return {
        isLoading: false,
        success: "Success",

        error: "",
      };
    case ACCOUNT_ERROR:
      const error = action.payload.error;
      return {
        isLoading: false,
        error,
        success: "",
      };

    default:
      return state;
  }
};
export default AccountReducer;
