import * as Firebase from 'firebase';
import {all, apply, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {constants, createAsyncAction} from './actions';

function* fetchUserInfo() {
  try {
    const userInfo = yield apply(Firebase.auth(), Firebase.auth().getRedirectResult);
    yield put(createAsyncAction(constants.REQUEST_USER_INFO, constants.REQUEST_STATUS.SUCCESS, userInfo));
  } catch (error) {
    console.error(error);
    yield put(createAsyncAction(constants.REQUEST_USER_INFO, constants.REQUEST_STATUS.ERROR, {
      error
    }));
  }
}

function* gatherInitialData() {
  let userInfo, adminUid;
  try {
    userInfo = yield apply(Firebase.auth(), Firebase.auth().getRedirectResult);

    if (userInfo.user) {
      const databaseRef = Firebase.database().ref('adminUid');
      adminUid = yield apply(databaseRef, databaseRef.once, ['value']);
    }

    yield put({
      type: constants.LOAD_USER_INFO,
      userInfo
    });

    yield put({
      type: constants.LOAD_ADMIN_UID,
      adminUid: adminUid.val()
    });
  } catch (error) {
    console.error(error);
  }
}

const createWatcher = (name, handler, take) =>
  function*(...args) {
    yield take(action => {
      return (action.type === name && !action.status);
    }, handler, ...args);
  };

export default function*(getState) {
  yield all([
    yield takeLatest(constants.GATHER_INITIAL_DATA, gatherInitialData),
    createWatcher(constants.REQUEST_USER_INFO, fetchUserInfo, takeLatest)()
  ]);
};
