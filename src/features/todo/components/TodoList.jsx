import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import TodoActions from '../actions';
import { getFilteredTodos }  from '../selectors';

const TodoListStyles = styled.ul`
    text-align: left;
    margin: auto;
    width: 200px;
`;

class TodoList extends React.Component {
    render() {
        const { todos, toggleTodo } = this.props;
        return (
            <TodoListStyles>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <TodoItem item={todo} toggleItem={() => toggleTodo(todo)} />
                    </li>
                ))}
            </TodoListStyles>
        );
    }
}

@connect(
    state => ({
        todos: getFilteredTodos(state.todo),
    }),
    dispatch => ({
        toggleTodo: (todo) => dispatch(TodoActions.toggle(todo))
    })
)
export default class TodoListContainer extends TodoList {}


