import { client } from "../../../axios/index";
import { clearCustomerCart } from "../gql/clearCustomerCart";
import { addCart } from "../../../store/cart/actions";
export const clearCustomerCartApi = (values) => {
  client
    .post(
      "",
      {
        query: clearCustomerCart.query,
        variables: {
          cartId: values.cartId,
        },
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwtToken"),
        },
      }
    )
    .then((response) => {
      console.log("clear response: " + response);
    })
    .catch(function (error) {
      console.log(error.response.data.errors[0].message);
    });
};
