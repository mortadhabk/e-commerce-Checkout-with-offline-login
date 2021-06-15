import React from 'react'
import { useDispatch } from 'react-redux'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { setPaymentMethod } from '../../store/Checkout/checkout.action';
import FormLabel from '@material-ui/core/FormLabel';

function PaymentMethod(props) {
    const dispatch = useDispatch()
    const [value, setValue] = React.useState(null);

    const handleChange = (event) => {
        setValue(+event.target.value);
        dispatch(setPaymentMethod(props.method[+value]))
    };
    // console.log('Payemmenytrtd',props);

    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Méthode de Paiement</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    {!props.method ? (<div>
                        {/*  */}
                    </div>) : (<div>
                        {
                            props.method.map((row, index) => (
                                <FormControlLabel value={index} control={<Radio />} label={row.title} />
                            ))
                        }
                    </div>)}
                </RadioGroup>
            </FormControl>
        </div>
    )
}


export default PaymentMethod
