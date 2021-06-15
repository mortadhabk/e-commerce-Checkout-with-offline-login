import { client } from "../../../../../../axios/index";
import {
  loadAccountError,
  loadAccountSuccess,
  loadApiAccount,
} from "../../../../../../store/Account/actions";
import { requestOffline } from "../../../../../../store/Request/actions";
import { changeCustomerPassword } from "../../gql/changeCustomerPassword";

export const ChangepasswordApi = (values) => {
  return (dispatch) => {
    if (window.navigator.onLine) {
      dispatch(loadApiAccount());

      client
        .post(
          "",
          {
            query: changeCustomerPassword.query,
            variables: {
              currentpassword: values.currentpassword,
              newpassword: values.newpassword,
            },
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("jwtToken"),
            },
          }
        )
        .then(() => {
          dispatch(loadAccountSuccess());
        })
        .catch((error) => {
          if (error) {
            dispatch(loadAccountError(error.response.data.errors[0].message));
          }
        });
    } else {
      const obj = {
        type: "CHANGE_PASSWORD_API",
        payload: values,
      };
      dispatch(requestOffline(obj));
    }
  };
};
