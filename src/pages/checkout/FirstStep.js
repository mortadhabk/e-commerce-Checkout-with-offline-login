import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import FormAdress from "../../component/checkout-adress/FormAdress";
import AddAdressForm from "../../component/checkout-adress/AddAdressForm";

function FirstStep() {
  let content = <div></div>;
  const user = useSelector((state) => state.Auth);
  if (user.customer.addresses.length === 0) {
    //form adress **add to adressBook **add to cart shipping **
    content = <AddAdressForm />;
  } else {
    content = <FormAdress info={user.customer.addresses} />;
    //add to cart shipp
  }
  return (
    <React.Fragment>
      <Box mt={3} p={2}>
        {content}
      </Box>
    </React.Fragment>
  );
}

export default FirstStep;
