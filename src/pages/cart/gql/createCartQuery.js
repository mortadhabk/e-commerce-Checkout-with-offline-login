export const createCartQuery = {
  query: `
     {
    customerCart {
      id
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
        `,
};
