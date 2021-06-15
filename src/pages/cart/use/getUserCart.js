import { createCartQuery } from "../gql/createCartQuery";
import { client } from "../../../axios/index";
export const getUserCart = async (token) => {
  const data = await client({
    url: "",
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
    data: createCartQuery,
  });

  const cart = {
    id: data.data.data.customerCart.id,
    items: [],
  };
  data.data.data.customerCart.items.forEach((element) => {
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

    cart.items.push(ob);
  });

  console.log("mycart", cart);

  return cart;
};
