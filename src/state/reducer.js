import { combineReducers } from 'redux';
import {
    todoReducer,
    TodoConstants
} from '~/features/todo';

export default combineReducers({
  [TodoConstants.NS]: todoReducer
});
