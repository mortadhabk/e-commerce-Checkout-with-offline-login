import { client } from "../../../axios/index";
import { removeItemFromCart } from "../gql/removeItemFromCart";
import { addCart } from "../../../store/cart/actions";
import { clearCustomerCartApi } from "./clearCustomerCartApi";
export const updateCartItemsApi = (values) => {
  console.log("valuessss!!!! : " + JSON.stringify(values));
  return (dispatch) => {
    client
      .post(
        "",
        {
          query: removeItemFromCart.query,
          variables: {
            cartId: values.cartId,
            items: values.cartDestructure,
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
  };
};
