import React from "react";

import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";

const CustomerMenu = () => {
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <Link to="/customer" role="button">
          <ListItemText primary="Dashboard" />
        </Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <Link to="/customer" role="button">
          <ListItemText primary="Orders" />
        </Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>

        <Link to="/customer" className="nav-link" role="button">
          <ListItemText primary="addressbook" />
        </Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <Link to="/customer" className="nav-link" role="button">
          <ListItemText primary="My Wish List" />
        </Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <Link to="/customer" className="nav-link" role="button">
          <ListItemText primary="Integrations" />
        </Link>
      </ListItem>
    </div>
  );
};

export default CustomerMenu;
