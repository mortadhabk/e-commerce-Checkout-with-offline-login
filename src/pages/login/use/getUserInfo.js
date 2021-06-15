import { userInfo } from "../gql/userInfo";
import { client } from "../../../axios/index";

export const getUserInfo = async (token) => {
  const data = await client({
    url: "",
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
    data: userInfo,
  });
  return data.data.data.customer;
};
