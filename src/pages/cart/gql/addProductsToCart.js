export const addProductsToCart = {
  query: `
          mutation addProductsToCart(
            $cartId: String!
              $quantity: Float!
              $sku: String!
      
          ) {
         addProductsToCart(
   
      cartId: $cartId
      cartItems: [
      {
        quantity: $quantity
        sku: $sku
      }
    ]
  ) {
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
