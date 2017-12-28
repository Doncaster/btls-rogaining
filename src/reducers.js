import {combineReducers} from 'redux';
import {constants} from './actions';

const userInfo = (state = null, action) => {
  if (action.type === constants.REQUEST_USER_INFO && action.status === constants.REQUEST_STATUS.SUCCESS) {
    return action.payload;
  }
  return state;
}

export default combineReducers({
  userInfo
});
