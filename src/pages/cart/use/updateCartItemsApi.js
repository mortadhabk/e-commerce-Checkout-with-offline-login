import { client } from "../../../axios/index";
import { updateCartItems } from "../gql/updateCartItems";
import { addCart } from "../../../store/cart/actions";
import { clearCustomerCartApi } from "./clearCustomerCartApi";
import { requestOffline } from "../../../store/Request/actions";
export const updateCartItemsApi = (values) => {
  console.log("UpdateProductsToCartApiInput : " + JSON.stringify(values));
  return (dispatch) => {
    if (window.navigator.onLine) {
      client
        .post(
          "",
          {
            query: updateCartItems.query,
            variables: {
              cartId: values.cartId,
              items: values.ob,
            },
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("jwtToken"),
            },
          }
        )
        .then((response) => {
          let cartItems = [];

          response.data.data.addProductsToCart.cart.items.forEach((element) => {
            let ob = {};
            ob.id = element.id;
            ob.quantity = element.quantity;
            ob.name = element.product.name;
            ob.sku = element.product.sku;
            ob.url_key = element.product.url_key;
            ob.description = element.product.description;
            ob.image = element.product.image;
            ob.stock_stauts = element.product.stock_stauts;
            ob.price_range = element.product.price_range;
            cartItems.push(ob);
          });
          dispatch(addCart(cartItems));
        })

        .catch(function (error) {});
    } else {
      const obj = {
        type: "UPDATE_CART",
        payload: values,
      };
      dispatch(requestOffline(obj));
    }
  };
};
