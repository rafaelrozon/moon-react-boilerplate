import { createReducer } from 'reduxsauce'
import cuid from 'cuid';
import { clone } from 'ramda';
import { DEFAULT_STATE } from './constants';
import Types from './types';

const handleAdd = (state, action) => {
    const todo = {
        id: cuid(),
        title: action.payload.title,
        completed: false
    };
    const newTodos = state.todos.concat(todo);
    return { ...state, todos: newTodos };
};

const handleToggle = (state, action) => {
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
};

const handleChangeFitler = (state, action) => {
    return {
        ...state,
        todosFilter: action.payload
    };
};

export const HANDLERS = {
    [Types.ADD]: handleAdd,
    [Types.TOGGLE]: handleToggle,
    [Types.CHANGE_FILTER]: handleChangeFitler
};

export default createReducer(DEFAULT_STATE, HANDLERS);

