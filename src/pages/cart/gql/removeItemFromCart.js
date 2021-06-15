export const removeItemFromCart = {
  query: `
          mutation removeItemFromCart(
            $cartId: String!
            $items: ID!
          ){
        removeItemFromCart(
  input: {
      cart_id: $cartId,
      cart_item_id: $items
    }
  ){
    cart {
         items {
        id
        quantity
        product {
           name
        sku
        url_key
        description {
          html
        }
        image {
          url
          label
        }
        stock_status
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
          }
        }
        }
    
      }
    }
  }

          }
        `,
};
