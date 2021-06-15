import { uri } from '../axios/index'
import axios from "axios"

export const setOrderMutation = (cartID) => {
    return {
        query: `     
        mutation (  $cartID : String!  ){
            placeOrder(input: { cart_id: $cartID }) {
              order {
                order_number
              }
            }
          }
      `,
      variables: {
        cartID: cartID,
      }
    }
}

export const setOrderRequest = async (token , cartID) => {
    const data = await axios({
        url: uri,
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + token
        },
        data: setOrderMutation(cartID)
    }).catch((err) => {
        return ('Error message', err);
    })
    return data
}