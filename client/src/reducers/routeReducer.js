import { SHOW_ROUTES_SCREEN } from "../actions/types";

export default function(state = [], action) {
  console.log('router reducer')
  switch (action.type) {
    case SHOW_ROUTES_SCREEN:
      console.log('caiu aqui no reducer')
      return action.payload;
      break;
    default:
      return state;
  }
}
