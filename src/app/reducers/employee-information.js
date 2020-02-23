import { FETCH_EMPLOYEES } from "./reducer-constants";
const initialState = {

}


export default function employeeInformation(
  state = { fetching: false, error: [], data: { ...initialState } },
  action = { type: "", payload: "" }
) {
 
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return Object.assign({}, state, {
        json: action.json
      });

    default:
      return state;
  }
}