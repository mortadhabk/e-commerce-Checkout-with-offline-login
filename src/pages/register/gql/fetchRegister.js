export const fetchRegister = {
  query: `
          mutation createCustomer(
            $firstname: String!
            $lastname: String!
            $email: String!
            $password: String!
          ) {
            createCustomer(
              input: {
                firstname: $firstname
                lastname: $lastname
                email: $email
                password: $password
                is_subscribed: true
              }
            ) {
              customer {
                firstname
                lastname
                email
                is_subscribed
              }
            }
            generateCustomerToken(email: $email, password: $password) {
              token
            }
          }
        `,
};
