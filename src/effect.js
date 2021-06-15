import { addProductsToCartApi } from "./pages/cart/use/addProductsToCartApi";
import { updateCartItemsApi } from "./pages/cart/use/updateCartItemsApi";
import { ChangepasswordApi } from "./pages/CustomerPage/Account/ChangePassword/use/thunk/ChangepasswordApi";
import { LoginApi } from "./pages/login/use/thunk/LoginApi";
import { RegisterApi } from "./pages/register/use/thunk/RegisterApi";
import { setToAddressBook } from "./store/Auth/actions";
import { addShippingToCart } from "./store/Checkout/checkout.action";
import { clearRequest } from "./store/Request/actions";
import { store } from "./store/store";
import { setBillingAdress } from "./util/SetBillingAdress";
import { setShippingAdress } from "./util/SetShippingAddress";

export const switchOnline = () => {
  const newStore = store;
  const requests = newStore.getState().Request.requests;
  console.log("will online");
  requests.map((item, index) => {
    switch (item.type) {
      case "LOGIN_API":
        console.log("2-LOGIN-Api");
        newStore.dispatch(LoginApi(item.payload));
        newStore.dispatch(clearRequest(index));
        break;
      case "REGISTER_API":
        console.log("2-REGISTER-Api");
        newStore.dispatch(RegisterApi(item.payload));
        newStore.dispatch(clearRequest(index));
        break;
      case "UPDATE_CART":
        console.log("3-UPDATE_CART-Api");
        newStore.dispatch(updateCartItemsApi(item.payload));
        newStore.dispatch(clearRequest(index));
        break;
      case "ADD_CART":
        console.log("4-UPDATE_CART-Api");
        newStore.dispatch(addProductsToCartApi(item.payload));
        newStore.dispatch(clearRequest(index));
        break;
      case "SET_ADDRESS_BOOK":
        newStore.dispatch(setToAddressBook(item.token, item.payload[0]));
        newStore.dispatch(clearRequest(index));
        break;
      case "SET_SHIPPING_ADDRESS":
        setShippingAdress(item.payload, item.token, item.cartID)
        newStore.dispatch(
          addShippingToCart(item.payload, item.token, item.cartID)
        );
        newStore.dispatch(clearRequest(index));
        break;
      case "CHANGE_PASSWORD_API":
        newStore.dispatch(ChangepasswordApi(item.payload));
        newStore.dispatch(clearRequest(index));
        break;
      case "SET_BILLING_ADDRESS":
        setBillingAdress(item.payload, item.token, item.cartID)
        newStore.dispatch(clearRequest(index));
        break;
      default:
        return "";
    }
  });
};
