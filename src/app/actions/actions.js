import * as restClient from "../services/restClient";
import { FETCH_EMPLOYEES } from "../reducers/reducer-constants";

const url = "https://dummy.restapiexample.com/api/v1/employees";

export function renderSteps() {
  return (dispatch) => {
    return restClient.get(url).then((json) => {
      dispatch(receiveSuccess(json));
    });
  };
}
function receiveSuccess(json) {
  return {
    type: FETCH_EMPLOYEES,
    json,
  };
}
