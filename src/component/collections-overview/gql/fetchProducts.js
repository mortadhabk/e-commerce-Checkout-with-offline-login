export const fetchProducts = {
  query: `
         {
  products(filter: {category_id: {in : ["2"]}},pageSize: 300 ) {
      items {
          categories {
         id
       }
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
      total_count
      page_info {
        page_size
      }
    }
}
                `,
};
