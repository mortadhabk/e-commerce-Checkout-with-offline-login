import { client } from "../../../../axios/index";
import {
  loadApiLogin,
  loadLoginSuccess,
  loadLoginError,
} from "../../../../store/Auth/actions";
import { getUserCart } from "../../../cart/use/getUserCart";
import { setCartId, addCart, AuthCart } from "../../../../store/cart/actions";
import { fetchRegister } from "../../gql/fetchRegister";
import { requestOffline } from "../../../../store/Request/actions";
export const RegisterApi = (values) => {
  return (dispatch) => {
    if (window.navigator.onLine) {
      dispatch(loadApiLogin());
      localStorage.removeItem("jwtToken");
      client
        .post("", {
          query: fetchRegister.query,
          variables: {
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email,
            password: values.password,
          },
        })
        .then((response) => {
          const cust = response.data.data.createCustomer;
          const customer = cust.customer;
          const token = response.data.data.generateCustomerToken.token;

          dispatch(loadLoginSuccess({ customer, token }));
          localStorage.setItem("jwtToken", token);
          getUserCart(token).then((cart) => {
            dispatch(setCartId(cart.id));
            console.log("item cart: " + cart);
            dispatch(AuthCart(cart.items));
          });
        })
        .catch(function (error) {
          dispatch(loadLoginError(error.response.data.errors[0].message));
        });
    } else {
      const obj = {
        type: "REGISTER_API",
        payload: values,
      };
      dispatch(requestOffline(obj));
    }
  };
};
