import React, { useEffect } from "react";
import Header from "./component/header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Checkout from "./pages/checkout/Checkout";
import Product from "./pages/productDetails/ProductDetails";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useDispatch, useSelector } from "react-redux";
import { switchOnline } from "./effect";
import CategoryPage from "./pages/category/CategoryPage";
import customerPages from "./component/account/customerPages";
import CustomerPage from "./pages/CustomerPage/CustomerPages";
import {
  loadProduct,
  productError,
  productSuccess,
} from "./store/Product/actions";
import { useProduct } from "./component/collections-overview/use/useProduct";

function App() {
  const online = useSelector((state) => state.offline.online);

  //RUN ALL THE REQUESTS AFTER OFFILNE MODE
  if (!online) {
    console.log("was offline");
    window.addEventListener("online", switchOnline);
  }
  const { data, isLoading, isError } = useProduct();
  const dispatch = useDispatch();
  if (isLoading) {
    dispatch(loadProduct());
  }
  if (data) {
    dispatch(productSuccess(data.data.products));
  } else {
    dispatch(productError(isError));
  }
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/cart" component={Cart} />
          {customerPages.map((customerPage) => {
            return (
              <Route
                key={customerPage.path}
                exact
                path={customerPage.path}
                render={(props) => {
                  return (
                    <CustomerPage {...props} content={customerPage.component} />
                  );
                }}
              />
            );
          })}
          {/* <Route exact path="/account" component={Account} /> */}

          <Route exact path="/:url_key" component={Product} />
          <Route exact path="/category/:id" component={CategoryPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
