import { FETCH_USER, FETCH_SURVEY, SHOW_SCREEN_ALERT } from "../actions/types";

export default function(state = {}, action) {
  console.log("authReducer");
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case SHOW_SCREEN_ALERT:
      const newState = Object.assign({}, state, { showAlert: true });
      return newState;
    default:
      return state;
  }
}
