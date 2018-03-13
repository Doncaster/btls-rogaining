import {combineReducers} from 'redux';
import {constants} from '../actions';

const currentGame = (state = null, action) => {
  return state;
};

export default combineReducers({
  currentGame
});
