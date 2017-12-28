import * as Firebase from 'firebase';
import {all, apply, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {constants, createAsyncAction} from './actions';

function* fetchUserInfo() {
  try {
    const userInfo = yield apply(Firebase.auth(), Firebase.auth().getRedirectResult);
    yield put(createAsyncAction(constants.REQUEST_USER_INFO, constants.REQUEST_STATUS.SUCCESS, userInfo));
  } catch (error) {
    console.error(error);
    yield put(createAsyncAction(constants.REQUEST_USER_INFO, constants.REQUEST_STATUS.SUCCESS, {
      error
    }));
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
    createWatcher(constants.REQUEST_USER_INFO, fetchUserInfo, takeLatest)()
  ]);
};
