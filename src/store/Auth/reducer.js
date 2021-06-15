import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOAD_LOGIN,
  LOGOUT,
  SET_ADDRESS_BOOK,
} from "./type";
const initialState = {
  isLoading: false,
  customer: { 
    addresses: [] 
  },
  token: "",
  error: "",
};
if (localStorage.getItem("jwtToken")) {
  const decodedToken = localStorage.getItem("jwtToken");
  initialState.token = decodedToken;
}
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LOGIN:
      return {
        ...state,
        customer: {
          addresses: []
        },
        token: "",
        isLoading: true,
      };

    case LOGIN_SUCCESS:

      const customer = action.payload.customer;
      const token = action.payload.token;

      return {
        ...state,
        isLoading: false,
        customer: {
          ...customer
        },
        token,
        error: "",
      };
    case LOGIN_ERROR:
      const error = action.payload.error;
      console.log("this error : " + error);
      return {
        ...state,
        isLoading: false,
        error,
        customer: {},
        token: "",
      };
    case SET_ADDRESS_BOOK:
      return {
        ...state,
        isLoading: true,
        customer: {
          ...state.customer,
          addresses: action.payload,
        },
      };
    case LOGOUT:
      return {
        ...state,
        customer: {},
        token: undefined,
        error: undefined,
      };

    default:
      return state;
  }
};
export default AuthReducer;
