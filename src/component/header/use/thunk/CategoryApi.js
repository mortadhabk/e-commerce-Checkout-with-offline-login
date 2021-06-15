import { client } from "../../../../axios/index";
import { FetchCategory } from "../../gql/FetchCategory";
import {
  loadCategory,
  categorySuccess,
  categoryError,
} from "../../../../store/Category/actions";
export const CategoryApi = () => {
  return (dispatch) => {
    dispatch(loadCategory());
    let body = {
      query: FetchCategory.query,
      variables: { id: 2 },
    };
    let options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    client
      .post("", body, options)
      .then((response) => {
        dispatch(categorySuccess(response.data.data.categoryList[0].children));
      })
      .catch(function (error) {
        console.log("error action : " + error);
        dispatch(categoryError(error));
      });
  };
};
