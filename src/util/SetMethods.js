import { uri } from '../axios/index'
import axios from "axios"
import {paymentMutation , shippingMutation } from './SetMethods.gql'

const shippingMethod = (token , method , cartID) => {
    return axios({
        url: uri,
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + token
        },
        data: shippingMutation(method , cartID)
    }).catch((err) => {
        return ('Error message', err);
    })
}

const paymentMethod = (token , code , cartID) => {
    return axios({
        url: uri,
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + token
        },
        data: paymentMutation(code , cartID)
    }).catch((err) => {
        return ('Error message', err);
    })
}



export const setMethod = async (token , method , code , cartID) => {
   const shipping = await shippingMethod(token , method , cartID)
   const payment = await paymentMethod(token , code , cartID)
   return payment.data.data.setPaymentMethodOnCart.cart.prices.grand_total
}