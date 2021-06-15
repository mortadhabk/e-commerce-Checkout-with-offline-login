export const shippingMutation = (method, cartID) => {
    const { carrier_code, method_code } = method
    return {
        query: `     
        mutation ( $carrier_code: String! , $method_code: String! , $cartID : String! ) {
            setShippingMethodsOnCart(input: {
              cart_id: $cartID
              shipping_methods: [
                {
                  carrier_code: $carrier_code
                  method_code: $method_code
                }
              ]
            }) {
              cart {
                shipping_addresses {
                  selected_shipping_method {
                    carrier_code
                    method_code
                    carrier_title
                    method_title
                  }
                }
              }
            }
          }
      `,
        variables: {
            carrier_code: carrier_code,
            method_code: method_code,
            cartID: cartID
        }
    }
}


export const paymentMutation = (code, cartID) => {
    return {
        query: `     
        mutation ($code: String! , $cartID : String!) {
            setPaymentMethodOnCart(input: {
                cart_id: $cartID
                payment_method: {
                    code: $code
                }
            }) {
              cart {
                selected_payment_method {
                  code
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
            code: code,
            cartID: cartID
        }
    }
}