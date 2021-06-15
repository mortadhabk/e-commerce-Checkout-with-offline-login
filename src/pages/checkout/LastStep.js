import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";
import { setMethod } from "../../util/SetMethods";
import ProductReview from "../../component/step3-checkout/product_review";
import { requestOffline } from "../../store/Request/actions";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

function LastStep() {
  const classes = useStyles();

  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.Auth.token) || null;
  const cart = useSelector((state) => state.Cart) || null;
  const checkout = useSelector((state) => state.Checkout) || null;
  const [TotalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    setloading(true);
    if (window.navigator.onLine) {
      setMethod(token, checkout.shipping_method, checkout.payement_method.code, cart.cartID).then((result) => {
        setTotalPrice(result.value)
        setloading(false);
      });
    } else {
      dispatch(requestOffline({
        type: 'SET_METHOD',
        shipping: checkout.shipping_address,
        payment : checkout.payement_method.code ,
        cartID : cart.cartID , 
        token : token
      }));
      setloading(false);
    }

  }, []);

  return (
    <React.Fragment>
      {loading === true ? (
        <div>
          <LinearProgress />
        </div>
      ) : (
        <div>
          <Typography variant="h6" gutterBottom>
            Résumé du commande
          </Typography>

          <ProductReview items={cart.cartItems} />
          <ListItem className={classes.listItem}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" className={classes.total}>
              {TotalPrice} TND
          </Typography>
          </ListItem>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                Adresse de Livraison
              </Typography>
              <Typography gutterBottom>{checkout.shipping_address.firstname + " " + checkout.shipping_address.lastname}</Typography>
              <Typography gutterBottom>{checkout.shipping_address.street[0]}</Typography>
              <Typography gutterBottom>{checkout.shipping_address.city}, {checkout.shipping_address.postcode}</Typography>
              <Typography gutterBottom>{checkout.shipping_address.telephone}</Typography>
            </Grid>
            <Grid item container direction="column" xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                Methode de paiement
              </Typography>
              <Typography gutterBottom>{checkout.payement_method.title}</Typography>
            </Grid>
          </Grid>
        </div>
      )}
    </React.Fragment>
  );
}

export default LastStep;
