export const clearCustomerCart = {
  query: `
     {
    mutation clearCustomerCart( $cartId: String!){
  clearCustomerCart(
      cartUid: $cartId
    ) {
        status
    }
}
  }
        `,
};
