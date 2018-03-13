import {combineReducers} from 'redux';
import {constants} from './actions';
import admin from './reducers/admin';
import user from './reducers/user';

const userInfo = (state = null, action) => {
  if (action.type === constants.LOAD_USER_INFO) {
    return action.userInfo;
  }
  return state;
};

const adminUid = (state = null, action) => {
  if (action.type === constants.LOAD_ADMIN_UID) {
    return action.adminUid;
  }
  return state;
};

export default combineReducers({
  userInfo,
  adminUid,
  admin,
  user
});
