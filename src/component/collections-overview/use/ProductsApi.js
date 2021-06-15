import { client } from "../../../axios/index";
import { fetchProducts } from "../gql/fetchProducts";
import {
  loadProduct,
  productSuccess,
  productError,
} from "../../../store/Product/actions";
export const ProductsApi = () => {
  return (dispatch) => {
    dispatch(loadProduct());
    let body = {
      query: fetchProducts.query,
    };
    let options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    client
      .post("", body, options)
      .then((response) => {
        dispatch(productSuccess(response.data.data.products));
      })
      .catch(function (error) {
        console.log("error action : " + error);
        dispatch(productError(error));
      });
  };
};
