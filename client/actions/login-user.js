/* global fetch, Request, Headers, window */
import 'whatwg-fetch';
import createHistory from 'history/createBrowserHistory'
import { config as endpoints } from '../config/endpoints';
import constants from '../constants';

const history = createHistory({ basename: '/#/ezoro', forceRefresh: true });
const headers = new Headers({ 'Content-Type': 'application/json' });
const actionTypes = constants.ActionTypes;

export default function loginUser(credentials) {
  return (dispatch) => {
    fetch(endpoints.login, {
      method: 'POST',
      headers,
      body: JSON.stringify(credentials),
    }).then(response => response.json()).then((data) => {
      if(data.id){
        dispatch({ type: actionTypes.SET_USER_DETAILS, payload: data });
        history.push('/permissions');
      }
      else{
        let message = 'Sign in failed. Please check your username and password.';
        dispatch({ type: actionTypes.SET_VALIDATE_MESSAGE, payload: { message } });
      }
    });
  }
};

export function resetMessage() {
  return (dispatch) => {
    dispatch({ type: actionTypes.RESET_VALIDATE_MESSAGE });
  }
}
