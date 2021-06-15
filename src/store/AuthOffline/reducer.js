import { OFFLINE_LOGIN } from "./type";
import { addItemToAuth } from "./utils";
const initialState = {
  data: [],
};

const AuthOfflineStore = (state = initialState, { type, payload }) => {
  switch (type) {
    case OFFLINE_LOGIN:
      return {
        data: addItemToAuth(state.data, {
          token: payload.token,
          customer: payload.customer,
          credencials: payload.hashpassword,
          cart: payload.cart,
        }),
      };

    default:
      return state;
  }
};
export default AuthOfflineStore;
