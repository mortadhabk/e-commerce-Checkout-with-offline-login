export const fetchLogin = {
  query: `
          mutation createCustomer(
            $email: String!
            $password: String!
          ) {
            generateCustomerToken(email: $email, password: $password) {
              token
            }
          }
        `,
};
