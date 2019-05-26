import { makeActionCreator, makeReducer, composeReducers } from 'redux-toolbelt';
import { clone } from 'ramda';
import cuid from 'cuid';
import { DEFAULT_STATE } from './constants';

const makeAction = makeActionCreator.withDefaults({prefix: "@todo/"});

export const actions = {
    add: makeAction('ADD'),
    toggle: makeAction('TOGGLE'),
    changeFilter: makeAction('CHANGE_FILTER')
};


// Reducers /
export const handleAdd = makeReducer(actions.add, (state = DEFAULT_STATE, action) => {
    const todo = {
        id: cuid(),
        title: action.payload.title,
        completed: false
    };
    const newTodos = state.todos.concat(todo);
    return { ...state, todos: newTodos };
});

export const handleToggle = makeReducer(actions.toggle, (state = DEFAULT_STATE, action) => {
    return {
        ...state,
        todos: state.todos.map(td => {
            if (td.id === action.payload.id) {
                const completedTodo = clone(td);
                completedTodo.completed = !td.completed;
                return completedTodo;
            }
            return td;
        })
    }
});

export const handleChangeFitler = makeReducer(actions.changeFilter, (state = DEFAULT_STATE, action) => {
    return {
        ...state,
        todosFilter: action.payload
    };
});

export const reducer = composeReducers(handleAdd, handleToggle, handleChangeFitler);
