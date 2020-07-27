import * as restClient from "../services/restClient";
import { FETCH_DATA } from "../reducers/reducer-constants";

//const url = "https://dummy.restapiexample.com/api/v1/employees";

const url = "https://jsonplaceholder.typicode.com/todos/";

export function retrieveData() {
  return (dispatch) => {
    return restClient.get(url).then((json) => {
      dispatch(receiveSuccess(json));
    });
  };
}
function receiveSuccess(json) {
  return {
    type: FETCH_DATA,
    json,
  };
}
