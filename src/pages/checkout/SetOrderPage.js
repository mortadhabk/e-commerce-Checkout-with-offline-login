import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { requestOffline } from "../../store/Request/actions";
import LinearProgress from "@material-ui/core/LinearProgress";
import { setOrderRequest } from '../../util/SetOrderRequest';
import { useHistory } from 'react-router';
import { addCart, clearCart, setCartId } from '../../store/cart/actions';
import { getUserCart } from '../cart/use/getUserCart';
// import { syncCart } from '../../store/AuthOffline/AuthOffline.action';


function SetOrderPage() {

    const history = useHistory();
    const [loading, setloading] = useState(false);
    const dispatch = useDispatch()
    const cartID = useSelector(state => state.Cart.cartID)
    const token = useSelector(state => state.Auth.token)


    useEffect(() => {
        setloading(true)
        if (window.navigator.onLine) {
            setOrderRequest(token, cartID).then(data => {
                setloading(false)
                history.push('/')
                dispatch(clearCart())
                getUserCart(token).then((cart) => {
                    dispatch(setCartId(cart.id));
                    // dispatch(addCart(cart.items));
                    // dispatch(syncCart(cart.id, cart.items))
                });
            })
        } else {
            dispatch(requestOffline({
                type: 'SET_ORDER',
                payload: cartID,
                token: token
            }))
            setloading(false)
        }
        // dispatch(setOrder)
    }, [])


    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom>
                Merci pour votre commande
            </Typography>
            <Typography variant="subtitle1">
                Merci de verifier votre boite email pour confirmer votre commande
                </Typography>
            { loading ? (
                <div>
                    <LinearProgress />
                </div>
            ) : (
                <div></div>
            )
            }

        </React.Fragment >
    )
}

export default SetOrderPage
