import { createSelector } from 'reselect';
import { prop } from 'ramda';

export const getState = state => state;

export const getTodos = createSelector([getState], prop('todos'));

export const getTodosFilter = createSelector([getTodos], prop('todosFilter'));

export const getFilteredTodos = createSelector(
    getTodos,
    getTodosFilter,
    (todos, todosFilter) => {
        switch (todosFilter) {
            case 'completed':
                return todos.filter(t => t.completed);
            case 'active':
                return todos.filter(t => !t.completed);
            default:
                return todos;
        }
    }
);
