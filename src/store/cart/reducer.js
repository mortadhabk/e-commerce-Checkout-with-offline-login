import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
  GET_CART_ID,
  CLEAR_CART_ON_LOGOUT,
  GET_CART_ITEMS,
  ADD_CART,
  AUTH_CART,
} from "./type";
import {
  addItemToCart,
  removeItemFromCart,
  ClearItems,
  NewItemToCart,
} from "./cart.utils";
const initialState = {
  hidden: true,
  cartItems: [],
  cartID: "",
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,

        hidden: !state.hidden,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case ADD_CART:
      return {
        ...state,
        cartItems: NewItemToCart(state.cartItems, action.payload),
      };
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: ClearItems(state.cartItems, action.payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case GET_CART_ID:
      return {
        ...state,
        cartID: action.payload,
      };

    case CLEAR_CART_ON_LOGOUT:
      return {
        ...state,
        cartItems: [],
        cartID: "",
      };

    default:
      return state;
  }
};
export default CartReducer;
