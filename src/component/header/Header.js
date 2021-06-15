import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";

import { CategoryApi } from "./use/thunk/CategoryApi";
import { connect } from "react-redux";
import ShoppingIcon from "../../images/shoppingBag.svg";

import { selectCategoriesForPreview } from "../../store/Category/category-selector";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../store/cart/cart.selector";
import Megabox from "../Megabox/Megabox";
import { toggleCartHidden } from "../../store/cart/actions";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Cartdropdown from "../cart-dropdown/Cartdropdown";
import { LogoutApi } from "../../store/Auth/actions";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

function Header({
  CategoryApi,
  history,
  ShowCategories,
  itemCount,
  toggleCartHidden,
}) {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.Auth.token);
  const logout = () => {
    history.push("/");
    dispatch(LogoutApi());
  };
  const cartHidden = useSelector((state) => state.Cart.hidden);
  useEffect(() => {
    CategoryApi();
  }, []);
  const [menu, setMenu] = useState("nav-list");
  const openMenu = () => {
    menu === "nav-list" ? setMenu("nav-list show") : setMenu("nav-list");
  };
  const closeMenu = () => {
    setMenu("nav-list");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuBar = token ? (
    <nav className="nav">
      <div className="wrapper container">
        <div className="logo">
          <Link to="/">OFFLINESHOP</Link>
        </div>
        <ul className={menu}>
          <div className="top">
            <label for="" className="btn close-btn" onClick={() => closeMenu()}>
              <i className="fas fa-times"></i>
            </label>
          </div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#" className="desktop-item">
              Category
              <span>
                <i className="fas fa-chevron-down"></i>
              </span>
            </a>
            <input type="checkbox" id="showMega" />
            <label for="showMega" className="mobile-item">
              Category
              <span>
                <i className="fas fa-chevron-down"></i>
              </span>
            </label>
            <Megabox category={ShowCategories} />
          </li>

          <li>
            <IconButton
              className="desktop-item"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <Link to="/customer">
                <MenuItem>Account </MenuItem>
              </Link>

              <MenuItem onClick={() => logout()}>logout</MenuItem>
            </Menu>
            <label for="showMega" className="mobile-item">
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </label>
          </li>

          <li className="icons">
            <span onClick={toggleCartHidden}>
              <img src={ShoppingIcon} className="imgAccount" />
              <small className=" count d-flex">{itemCount}</small>
            </span>
          </li>
        </ul>
        {cartHidden ? "" : <Cartdropdown />}
        <label for="" className="btn open-btn" onClick={() => openMenu()}>
          <i className="fas fa-bars"></i>
        </label>
      </div>
    </nav>
  ) : (
    <nav className="nav">
      <div className="wrapper container">
        <div className="logo">
          <Link to="/">OFFLINESHOP</Link>
        </div>
        <ul className={menu}>
          <div className="top">
            <label for="" className="btn close-btn" onClick={() => closeMenu()}>
              <i className="fas fa-times"></i>
            </label>
          </div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="products.html">Products</a>
          </li>
          <li>
            <a href="#" className="desktop-item">
              Category
              <span>
                <i className="fas fa-chevron-down"></i>
              </span>
            </a>
            <input type="checkbox" id="showMega" />
            <label for="showMega" className="mobile-item">
              Category
              <span>
                <i className="fas fa-chevron-down"></i>
              </span>
            </label>
            <Megabox category={ShowCategories} />
          </li>

          <li>
            <Link
              to={{
                pathname: "/register",
              }}
            >
              Register
            </Link>
          </li>

          <li>
            <Link
              to={{
                pathname: "/login",
              }}
            >
              Login
            </Link>
          </li>

          <li className="icons">
            <span onClick={toggleCartHidden}>
              <img src={ShoppingIcon} className="imgAccount" />
              <small className=" count d-flex">{itemCount}</small>
            </span>
          </li>
        </ul>
        {cartHidden ? "" : <Cartdropdown />}
        <label for="" className="btn open-btn" onClick={() => openMenu()}>
          <i className="fas fa-bars"></i>
        </label>
      </div>
    </nav>
  );
  return menuBar;
}

const mapDispatchToProps = (dispatch) => ({
  CategoryApi: () => dispatch(CategoryApi()),
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  ShowCategories: selectCategoriesForPreview,
  itemCount: selectCartItemsCount,
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
