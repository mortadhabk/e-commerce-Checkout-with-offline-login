import axios from "axios";
import { fetchProducts } from "../gql/fetchProducts";
export function fetcher(...args) {
  const body = {
    query: fetchProducts.query,
  };

  return axios.post(...args, body).then((res) => res.data);
}

export default fetcher;
