import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Box, Button } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { green } from "@material-ui/core/colors";
import { useDispatch, useSelector } from "react-redux";
// import { setShippingAdress, createCustomerAdress } from './checkout.helper'
import CircularProgress from "@material-ui/core/CircularProgress";
import { saveAdress, setAdressBook } from "../../util/SetAdressBook";
import { setToAddressBook } from "../../store/Auth/actions";
// import { clearRequest, pushRequest } from '../../store/offline/offline.actions';
// import { setAdressForm , setShipMethod } from '../../stores/checkout/checkout.action'

export default function AddAdressForm() {
  const [loading, setloading] = useState(false);
  const [adressForm, setadressForm] = useState({
    street: [],
  });

  const handleFnameChange = (e) => {
    setadressForm(() => {
      return {
        ...adressForm,
        firstname: e.target.value,
      };
    });
  };
  const handleLnameChange = (e) => {
    setadressForm(() => {
      return {
        ...adressForm,
        lastname: e.target.value,
      };
    });
  };
  const handleAddressChange = (e) => {
    setadressForm(() => {
      return {
        ...adressForm,
        street: [e.target.value],
      };
    });
  };
  const handleCityChange = (e) => {
    setadressForm(() => {
      return {
        ...adressForm,
        city: e.target.value,
      };
    });
  };
  const handleCountryChange = (e) => {
    setadressForm(() => {
      return {
        ...adressForm,
        country_code: e.target.value,
      };
    });
  };
  const handleZipChange = (e) => {
    setadressForm(() => {
      return {
        ...adressForm,
        postcode: e.target.value,
      };
    });
  };
  const handleTelChange = (e) => {
    setadressForm(() => {
      return {
        ...adressForm,
        telephone: e.target.value,
      };
    });
  };

  const online = useSelector((state) => state.offline.online);
  const token = useSelector((state) => state.Auth.token);
  const dispatch = useDispatch();

  const PostForm = (e) => {
    setloading(true);
    dispatch(setToAddressBook(token, adressForm));
    setloading(false);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Adresse de livraison
      </Typography>
      <Box border={1} p={2} borderColor="primary.main">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={handleFnameChange}
              required
              id="firstName"
              name="firstName"
              label="Prénom"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={handleLnameChange}
              required
              id="lastName"
              name="lastName"
              label="Nom"
              fullWidth
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={handleAddressChange}
              required
              id="address1"
              name="address1"
              label="Addresse "
              fullWidth
              autoComplete="shipping address-line1"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={handleCityChange}
              required
              id="city"
              name="city"
              label="Ville"
              fullWidth
              autoComplete="shipping address-level2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={handleCountryChange}
              id="country"
              name="country"
              label="Pays"
              placeholder="Tunisie"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={handleZipChange}
              required
              id="zip"
              name="zip"
              label="Code postal"
              fullWidth
              autoComplete="shipping postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={handleTelChange}
              required
              id="telephone"
              name="telephone"
              label="Telephone"
              fullWidth
              autoComplete="shipping tel"
            />
          </Grid>
          <Grid item xs={12} className="buttonEdit" sm={12}>
            <Button
              color="primary"
              variant="outlined"
              size="small"
              disabled={loading}
              onClick={PostForm}
            >
              {" "}
              {loading ? (
                <CircularProgress size={20} style={{ color: green[500] }} />
              ) : (
                <CheckCircleIcon style={{ color: green[500] }} />
              )}{" "}
              Valider
            </Button>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
