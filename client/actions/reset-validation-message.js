import constants from '../constants';

const actionTypes = constants.ActionTypes;

export default function resetMessage() {
  return (dispatch) => {
    dispatch({ type: actionTypes.RESET_VALIDATE_MESSAGE });
  }
}
