export const addItemToAuth = (requests, requestToAdd) => {
  const newRequests = requests.filter(
    (Item) => Item.cart.cartID !== requestToAdd.cart.cartID
  );

  return [
    ...newRequests,
    {
      token: requestToAdd.token,
      customer: requestToAdd.customer,
      credencials: requestToAdd.credencials,
      cart: requestToAdd.cart,
    },
  ];
};
