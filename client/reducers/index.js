import constants from '../constants';

function rootReducer (state = {}, action) {
	const actionTypes = constants.ActionTypes;
	
	switch(action.type) {
		case actionTypes.SET_REGISTERED_USER:
			return { 
				...state,
				validationError: null,
				registeredUser: action.payload 
			};
		
		case actionTypes.SET_VALIDATE_MESSAGE:
			return { 
				...state,
				registeredUser: null,
				userDetails: null,
				validationError: action.payload 
			};
		
		case actionTypes.RESET_VALIDATE_MESSAGE:
			return { 
				...state,
				registeredUser: null,
				userDetails: null,
				validationError: null 
			};

		case actionTypes.SET_USER_DETAILS:
			return {
				...state,
				userDetails: action.payload
			}

		default:
			return state;
	}
}

export default rootReducer;

/*
 * Redux suggests use multiple reducers instead of creating multiple stores, 
 * if more than one reducer is needed, use combineReducer from 'redux' module.
 * 
 * import { composeReducers } from 'redux'
 * 
 * export default combineReducers({
 *     rootReducer
 * 	   subReducer
 * });
 * 
 */