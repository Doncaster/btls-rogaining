
const REQUEST_USER_INFO = 'REQUEST_USER_INFO';
const REQUEST_STATUS = {
    SUCCESS: 'success',
    ERROR: 'error'
};

const fetchUser = () => createAsyncAction(REQUEST_USER_INFO);

const constants = {
  REQUEST_USER_INFO,
  REQUEST_STATUS
};

const createAsyncAction = (type, status = null, payload = null) => Object.assign({type, status, payload, async: true});

export {
  constants,
  createAsyncAction
};

export default {
  fetchUser
};
