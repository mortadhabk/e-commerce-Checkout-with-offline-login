export const updateCartItems = {
  query: `
          mutation updateCartItems(
            $cartId: String!
            $items: [CartItemUpdateInput]!
          ) {
        updateCartItems(
  input: {
      cart_id: $cartId,
      cart_items: $items
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
