
import * as restClient from "../../services/restClient";
import { FETCH_EMPLOYEES } from "../../reducers/reducer-constants";
// return fetchCommon()(dispatch, STANDING_ORDERS_DATA);
const url="http://dummy.restapiexample.com/api/v1/employees";

export function renderSteps() {

  
  return dispatch => {
   return  restClient.get(url).then(json => {
     
      dispatch(receiveSuccess(json));
    });
  };
}
function receiveSuccess(json) {
  
  return {
    type: FETCH_EMPLOYEES,
    json
  };
}