import axios from "axios";
import { uri } from "../axios/index";
import {store} from '../store/store'
import { getPaymentMethod, getShippingMethod } from "../store/Checkout/checkout.action";

export const setShippingAddressesOnCart = (adress, cart_id) => {
  const {
    firstname,
    lastname,
    city,
    country_code,
    postcode,
    street,
    telephone,
  } = adress;
  return {
    query: `     
        mutation ( $firstname: String! , $lastname: String! , $city: String! , $country_code: String! , $postcode: String! , $telephone: String! , $street: [String]!, $cart_id: String!  ) {
            setShippingAddressesOnCart(
                input: {
                cart_id: $cart_id
                shipping_addresses: [
                    {
                    address: {
                    firstname: $firstname
                    lastname: $lastname
                    company: ""
                    street: $street
                    city: $city
                    postcode: $postcode
                    country_code: $country_code
                    telephone: $telephone
                        }
                    }
                ]
            }
            ) {
                cart {
                    shipping_addresses {
                        firstname
                        lastname
                        company
                        street
                        city
                        region {
                            code
                            label
                        }
                        postcode
                        telephone
                        country {
                            code
                            label
                        }
                        available_shipping_methods{
                            amount {
                                currency
                                value
                            }
                            carrier_code
                            carrier_title
                            method_code
                            method_title
                        }
                    }
                    available_payment_methods {
                        code
                        title
                    }
                    prices {
                        grand_total {
                          value
                          currency
                        }
                      }
                }
            }
        }
      `,
    variables: {
      cart_id: cart_id,
      firstname: firstname,
      lastname: lastname,
      city: city,
      country_code: "TN",
      postcode: postcode,
      street: street,
      telephone: telephone,
    },
  };
};

export const setShippingAdress = async (adress, token, cartID) => {
  const mystore = store;
  const res = await axios({
    url: uri,
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
    data: setShippingAddressesOnCart(adress, cartID),
  }).catch((err) => {
    throw err;
  });

  const result = res.data.data.setShippingAddressesOnCart.cart.shipping_addresses[0]
  result.available_payment_methods = res.data.data.setShippingAddressesOnCart.cart.available_payment_methods
  mystore.dispatch(getShippingMethod(res.data.data.setShippingAddressesOnCart.cart.shipping_addresses[0].available_shipping_methods))
  mystore.dispatch(getPaymentMethod(res.data.data.setShippingAddressesOnCart.cart.available_payment_methods))

  return result;
};
