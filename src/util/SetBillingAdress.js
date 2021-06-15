import axios from "axios";
import { uri } from "../axios/index";
import {store} from '../store/store'
import { getPaymentMethod, getShippingMethod } from "../store/Checkout/checkout.action";

export const setBillingAddressesOnCart = (adress, cart_id) => {
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
        setBillingAddressOnCart(
          input: {
            cart_id: $cart_id
            billing_address: {
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
          }
        ) {
          cart {
            billing_address {
              firstname
              lastname
              company
              street
              city
              postcode
              telephone 
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

export const setBillingAdress = async (adress, token, cartID) => {
  const res = await axios({
    url: uri,
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
    data: setBillingAddressesOnCart(adress, cartID),
  }).catch((err) => {
    throw err;
  });

  return res
};
