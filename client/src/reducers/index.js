import { combineReducers } from "redux";
import { reducer as reduxForm } from 'redux-form';
import authReducer from "./authReducer";
import routeReducer from "./routeReducer";

//redux-form need to be assigned to the key 'form'
export default combineReducers({
  user: authReducer,
  form: reduxForm,
  routes: routeReducer
})
