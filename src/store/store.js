import { applyMiddleware, createStore, combineReducers } from "redux";
import { offline } from "@redux-offline/redux-offline";
import offlineConfig from "@redux-offline/redux-offline/lib/defaults";
import { composeWithDevTools } from "redux-devtools-extension";
import CategoryReducer from "./Category/reducer";
import AuthReducer from "./Auth/reducer";
import ProductReducer from "./Product/reducer";
import CartReducer from "./cart/reducer";
import AccountReducer from "./Account/reducer";
import RequestReducer from "./Request/reducer";
import AuthOfflineStore from "./AuthOffline/reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import * as localforage from "localforage";
import CheckoutReducer from "./Checkout/checkout.reducer";
const reducers = combineReducers({
  Auth: AuthReducer,
  Category: CategoryReducer,
  Product: ProductReducer,
  Cart: CartReducer,
  Request: RequestReducer,
  Checkout: CheckoutReducer,
  AuthOffline: AuthOfflineStore,
  Account: AccountReducer,
});
offlineConfig.persistOptions = { storage: localforage };
const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(thunk, logger), offline(offlineConfig))
);

export { store };
