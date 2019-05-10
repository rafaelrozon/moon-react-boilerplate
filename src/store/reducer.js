import { combineReducers } from 'redux';
import {
    TodoReducer,
    TodoConstants
} from '~/features/todo';

export default combineReducers({
  [TodoConstants.NS]: TodoReducer
});


