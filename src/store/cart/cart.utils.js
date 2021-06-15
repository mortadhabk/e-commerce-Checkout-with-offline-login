export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.sku === cartItemToAdd.sku
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.sku === cartItemToAdd.sku
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
export const NewItemToCart = (cartItems, cartItemToAdd) => {
  const newRequests = cartItems.filter(
    (Item) => Item.url_key !== cartItemToAdd[0].url_key
  );

  return [...newRequests, cartItemToAdd[0]];
};
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.sku === cartItemToRemove.sku
  );

  if (existingCartItem.quantity === 0) {
    return cartItems;
  }

  return cartItems.map((cartItem) =>
    cartItem.sku === cartItemToRemove.sku
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
export const ClearItems = (cartItems, cartItemToRemove) => {
  return cartItems.map((cartItem) =>
    cartItem.sku === cartItemToRemove.sku
      ? { ...cartItem, quantity: 0 }
      : cartItem
  );
};
