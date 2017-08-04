/* global fetch, Request, Headers, window */
import 'whatwg-fetch';
import createHistory from 'history/createBrowserHistory'
import { config as endpoints } from '../config/endpoints';
import constants from '../constants';

const history = createHistory({ basename: '/#/ezoro', forceRefresh: true });
const headers = new Headers({ 'Content-Type': 'application/json' });
const actionTypes = constants.ActionTypes;

export default function registerUser(user, form) {
  return (dispatch) => {
    fetch(endpoints.users, {
      method: 'POST',
      headers,
      body: JSON.stringify(user),
    }).then(response => response.json()).then((data) => {
      if(data.id){
        form.reset();
        dispatch({ type: actionTypes.SET_REGISTERED_USER, payload: data });
      }
      else{
        let message;
        const errorDetails = data.error.details;

        if(errorDetails && errorDetails.messages && errorDetails.messages.email){
          message = 'Email is already exist with us. Please try with different email address.';
        }
        else{
          message = 'Oops! something bad happened.'
        }

        dispatch({ type: actionTypes.SET_VALIDATE_MESSAGE, payload: { message } });
      }
    });
  }
};

