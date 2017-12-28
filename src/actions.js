
const REQUEST_USER_INFO = 'REQUEST_USER_INFO';
const REQUEST_ADMIN_UID = 'REQUEST_ADMIN_UID';
const GATHER_INITIAL_DATA = 'GATHER_INITIAL_DATA';
const LOAD_USER_INFO = 'LOAD_USER_INFO';
const LOAD_ADMIN_UID = 'LOAD_ADMIN_UID';

const REQUEST_STATUS = {
    SUCCESS: 'success',
    ERROR: 'error'
};

const fetchUser = () => createAsyncAction(REQUEST_USER_INFO);

const fetchInitialData = () => {
  return {
    type: GATHER_INITIAL_DATA
  }
};

const constants = {
  LOAD_ADMIN_UID,
  LOAD_USER_INFO,
  REQUEST_USER_INFO,
  REQUEST_ADMIN_UID,
  GATHER_INITIAL_DATA,
  REQUEST_STATUS
};

const createAsyncAction = (type, status = null, payload = null) => Object.assign({type, status, payload, async: true});

export {
  constants,
  createAsyncAction
};

export default {
  fetchUser,
  fetchInitialData
};
