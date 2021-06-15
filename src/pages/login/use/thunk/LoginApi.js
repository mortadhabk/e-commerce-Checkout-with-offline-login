import { client } from "../../../../axios/index";
import {
  loadApiLogin,
  loadLoginSuccess,
  loadLoginError,
  setUserInfo,
} from "../../../../store/Auth/actions";
import { getUserCart } from "../../../cart/use/getUserCart";
import { setCartId, AuthCart } from "../../../../store/cart/actions";
import { requestOffline } from "../../../../store/Request/actions";
import { getUserInfo } from "../getUserInfo";
import { fetchLogin } from "../../gql/fetchLogin";
import { addCredencial } from "../../../../store/AuthOffline/action";
import { store } from "../../../../store/store";
import bcrypt from "bcryptjs";
export const LoginApi = (values) => {
  console.log("value : " + JSON.stringify(values));
  return (dispatch) => {
    if (window.navigator.onLine) {
      console.log("6-isOnline send request  ");
      dispatch(loadApiLogin());
      localStorage.removeItem("jwtToken");

      client
        .post("", {
          query: fetchLogin.query,
          variables: {
            email: values.email,
            password: values.password,
          },
        })
        .then((response) => {
          const obj = {
            customer: {},
            token: "",
            credencials: values,
            cart: {
              cartID: "",
              cartItems: [],
            },
          };
          if (response.data.error) {
          }
          console.log(JSON.stringify(response));
          const token = response.data.data.generateCustomerToken.token;
          obj.token = token;
          localStorage.setItem("jwtToken", token);
          getUserInfo(token).then((data) => {
            const customer = data;
            obj.customer = data;
            dispatch(loadLoginSuccess({ token, customer }));
          });
          getUserCart(token).then((cart) => {
            dispatch(setCartId(cart.id));
            console.log("item cart: " + cart);
            dispatch(AuthCart(cart.items));
            obj.cart.cartID = cart.id;
            obj.cart.cartItems = cart.items;
            dispatch(addCredencial(obj));
          });
        })
        .catch(function (error) {
          if (error.response !== undefined) {
            dispatch(loadLoginError(error.response.data.errors[0].message));
          } else {
            dispatch(loadLoginError(JSON.stringify(error.message)));
          }
        });
    } else {
      const offlineCustomer = store.getState().AuthOffline.data;

      if (Object.keys(offlineCustomer).length === 0) {
        console.log("you must login at least one time when login");
      } else {
        offlineCustomer.forEach((element) => {
          const { token, customer, credencials, cart } = element;
          if (
            bcrypt.compareSync(values.password, credencials) &&
            values.email === customer.email
          ) {
            dispatch(loadLoginSuccess({ token, customer }));
            dispatch(setCartId(cart.cartID));
            dispatch(AuthCart(cart.cartItems));

            const obj = {
              type: "LOGIN_API",
              payload: values,
            };
            dispatch(requestOffline(obj));
          } else {
            dispatch(loadLoginError("inputs fails"));
          }
        });
      }
    }
  };
};
