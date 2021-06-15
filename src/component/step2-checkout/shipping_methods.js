import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { useDispatch } from 'react-redux';
import { setShippingMethod } from '../../store/Checkout/checkout.action';
import FormLabel from '@material-ui/core/FormLabel';


function ShippingMethods(props) {
    const dispatch = useDispatch()
    const [value, setValue] = React.useState(null);

    const handleChange = (event) => {
        setValue(+event.target.value);
        dispatch(setShippingMethod(props.method[+value]))
    };
    // console.log('shippinggggggggggggggggg', props);
    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Méthode de livraison</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    {!props.method ? (<div>
                        {/*  */}
                    </div>) : (<div>
                        
                        {
                            props.method.map((row, index) => (
                                <FormControlLabel value={index} control={<Radio />} label={row.method_title + " | " + row.amount.value + " DT"} />
                            ))
                        }
                    </div>)}
                </RadioGroup>
            </FormControl>
        </div>


    )
}

export default ShippingMethods
