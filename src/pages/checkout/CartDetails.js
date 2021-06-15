import React from "react";
import "./Checkout.css";
import {
    selectCartItems,
    selectCartTotal,
} from "../../store/cart/cart.selector";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import CheckoutItem from "../../component/checkout-item/CheckoutItem";
import { createStructuredSelector } from "reselect";
import { Box, Button } from "@material-ui/core";
import { useSelector } from 'react-redux'

function CartDetails({ cartItems, total }) {
    let history = useHistory();
    const user = useSelector(state => state.Auth)

    const goToCheckout = () => {
        if(user.token === ""){
            history.push('/login')
        }else{
            history.push('/checkout')
        }
    }

    //TODO
    //disable go to checkout when **guest **empty cart

    return (
        <div className="container cart">
            <table>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
                {cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))}
            </table>

            <div className="total-price">
                <table>
                    <tr>
                        <td>Subtotal</td>
                        <td>{total + " USD"}</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>00 USD</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>{total + " USD"}</td>
                    </tr>
                </table>
                <Box m={3} >
                    <a href="#" type="button" className="checkout btn" onClick={goToCheckout}>
                        Proceed To Checkout
                    </a>
                </Box>
            </div>
        </div>
    );
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

export default connect(mapStateToProps)(CartDetails);
