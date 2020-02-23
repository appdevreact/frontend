
import * as restClient from "../../services/restClient";
import { FETCH_EMPLOYEES } from "../../reducers/reducer-constants";
// return fetchCommon()(dispatch, STANDING_ORDERS_DATA);


export function renderSteps() {

  
  return dispatch => {
   return  restClient.get('http://dummy.restapiexample.com/api/v1/employees').then(json => {
     
      dispatch(receiveSuccess(json));
    });
  };
}
function receiveSuccess(json) {
  console.log("....receiveSuccess.....");
  return {
    type: FETCH_EMPLOYEES,
    json
  };
}