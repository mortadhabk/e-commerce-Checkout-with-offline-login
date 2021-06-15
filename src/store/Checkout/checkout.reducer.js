import { CLEAR_CHECKOUT, GET_PAYEMENT_METHOD, GET_SHIPPING_METHOD, SET_PAYEMENT_METHOD, SET_SHIPPING_ADDRESS, SET_SHIPPING_METHOD, SET_CHECKOUT_LOADING, SET_ORDER } from "./checkout.constants";


const initialState = {
    loading: true,
    shipping_address: {},
    shipping_method: {},
    payement_method: {}
};

const CheckoutReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_SHIPPING_ADDRESS:
            return {
                ...state,
                shipping_address: payload
            };
        case GET_SHIPPING_METHOD:
            return {
                ...state,
                shipping_method: payload
            };
        case GET_PAYEMENT_METHOD:
            return {
                ...state,
                payement_method: payload
            };
        case SET_SHIPPING_METHOD:
            return {
                ...state,
                shipping_method: payload
            };
        case SET_PAYEMENT_METHOD:
            return {
                ...state,
                payement_method: payload
            };
        case SET_CHECKOUT_LOADING:
            return {
                ...state,
                loading: false
            };
        case SET_ORDER:
            return {
                ...state
            };
        case CLEAR_CHECKOUT:
            return initialState
        default:
            return state;
    }
};
export default CheckoutReducer;
