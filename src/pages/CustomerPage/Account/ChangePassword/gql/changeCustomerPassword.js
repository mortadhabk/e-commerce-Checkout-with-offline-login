export const changeCustomerPassword = {
  query: `
  mutation changeCustomerPassword($currentpassword: String!, $newpassword: String!) {
  changeCustomerPassword(currentPassword: $currentpassword, newPassword: $newpassword) {
    id
  }
}
`,
};
