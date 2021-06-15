import { REQUEST_OFFLINE, CLEAR_REQUEST } from "./type";
import { addItemToRequest, clearItem } from "./request.utils";

const initialState = {
  requests: [],
};

const RequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_OFFLINE:
      return {
        requests: addItemToRequest(state.requests, action.payload),
      };
    case CLEAR_REQUEST:
      return {
        requests: clearItem(state.requests, action.payload),
      };
    default:
      return state;
  }
};

export default RequestReducer;
