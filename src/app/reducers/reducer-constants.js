/**********************************
 *      Action and Reducer keys
 * ********************************/
export const getActionTypes = (actionKey) => {
  return {
    FETCHING: `${actionKey}_fetching`,
    FULFILLED: `${actionKey}_fulfilled`,
    REJECTED: `${actionKey}_rejected`,
  };
};

// API related actions
export const FETCH_DATA = "FETCH_DATA";
