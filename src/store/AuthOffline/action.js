import { OFFLINE_LOGIN } from "./type";
import bcrypt from "bcryptjs";

export const addCredencial = ({ customer, token, credencials, cart }) => {
  const hashpassword = bcrypt.hashSync(
    credencials.password,
    bcrypt.genSaltSync()
  );

  return {
    type: OFFLINE_LOGIN,
    payload: { customer, token, hashpassword, cart },
  };
};
