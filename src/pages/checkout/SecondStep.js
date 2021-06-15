import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addShippingToCart } from "../../store/Checkout/checkout.action";
import { setShippingAdress } from "../../util/SetShippingAddress";
import LinearProgress from "@material-ui/core/LinearProgress";
import ShippingMethods from "../../component/step2-checkout/shipping_methods";
import PaymentMethod from "../../component/step2-checkout/payment_method";
import { store } from "../../store/store";
import { requestOffline } from "../../store/Request/actions";
import Box from '@material-ui/core/Box';
import { setBillingAdress } from "../../util/SetBillingAdress";



function SecondStep() {
  const mystore = store;
  const dispatch = useDispatch();
  const address = useSelector((state) => state.Auth.customer.addresses[0]) || null;
  const token = useSelector((state) => state.Auth.token) || null;
  const cartID = useSelector((state) => state.Cart.cartID) || null;

  const [loading, setloading] = useState(false);

  const [Checkout, setCheckout] = useState({
    available_payment_methods: [
      {
        code: 'checkmo',
        title: 'Check / Money order'
      }
    ],
    available_shipping_methods: [
      {
        amount: {
          currency: 'USD',
          value: 5
        },
        carrier_code: 'flatrate',
        carrier_title: 'Flat Rate',
        method_code: 'flatrate',
        method_title: 'Fixed'
      }
    ]
  })



  useEffect(() => {
    setloading(true)
    if (window.navigator.onLine) {
      setBillingAdress(address, token, cartID)
      setShippingAdress(address, token, cartID).then(async (data) => {
        setCheckout({ ...data })
        setloading(false)
      });
    } else {
      mystore.dispatch(requestOffline({
        type: 'SET_SHIPPING_ADDRESS',
        payload: address,
        token: token,
        cartID: cartID,
      }));
      mystore.dispatch(requestOffline({
        type: 'SET_BILLING_ADDRESS',
        payload: address,
        token: token,
        cartID: cartID,
      }));
      setloading(false)
    }
    dispatch(addShippingToCart(address));
  }, []);


  // );

  return (
    <div>
      {loading === true ? (
        <div>
          <LinearProgress />
        </div>
      ) : (
        <div>
          <Box component="span" m={1}>
            <ShippingMethods method={Checkout.available_shipping_methods} />  
          </Box>

          <Box component="span" m={1}>
            <PaymentMethod method={Checkout.available_payment_methods} />
          </Box>
        </div>
      )}
    </div>
  );
}

export default SecondStep;
