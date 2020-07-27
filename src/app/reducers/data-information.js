import { FETCH_DATA } from "./reducer-constants";
const initialState = {};

export default function dataInformation(
  state = { fetching: false, error: [], data: { ...initialState } },
  action = { type: "", payload: "" }
) {
  switch (action.type) {
    case FETCH_DATA:
      return Object.assign({}, state, {
        json: action.json,
      });

    default:
      return state;
  }
}
