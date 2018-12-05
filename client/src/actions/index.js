import axios from "axios";
import { FETCH_USER, SHOW_SCREEN_ALERT, SHOW_ROUTES_SCREEN } from "./types";


export const fetchRoutesFromUser = promoCode => async dispatch => {
  const res = await axios.post("/api/routes/findUsersRoutes", {promoCode});
  console.log('res', res)
  if (res.data.length) {
    console.log('res com sucesso')
    dispatch({ type: SHOW_ROUTES_SCREEN, payload: res.data });
  } else {
    dispatch({ type: SHOW_SCREEN_ALERT })
  }
};

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/teste");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchRoutes = () => async dispatch => {
  const res = await axios.get("/api/surveys");
  console.log('res', res)
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  console.log("token", token);
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleInput = (type, value) => {
  console.log("action 1 -  handleInput");
  return { type: FETCH_USER, payload: { type, value } };
};

export const createSurvey = (values, history) => async dispatch => {
  console.log('createSurvey action')
  //send email
  const res = await axios.post("/api/surveys", values)
  console.log('res', res)
  history.push('/surveys')
  dispatch({ type: FETCH_USER, payload: res })
}
