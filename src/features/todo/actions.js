import { createActions } from 'redux-actions';
import { identity } from 'ramda';
import types from './types';

const actions = createActions({
    [types.CHANGE_FILTER]: identity,
    [types.ADD]: identity,
    [types.TOGGLE]: identity
});

export default actions.todos;
