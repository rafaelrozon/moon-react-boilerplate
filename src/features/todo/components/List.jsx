import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { actions as TodoActions} from '../state';
import { getFilteredTodos }  from '../selectors';

const TodoListStyles = styled.ul`
    text-align: left;
    margin: auto;
    width: 200px;
`;

class TodoList extends React.Component {

    static defaultProps = {
        todos: []
    };

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

const mapStateToProps = state => ({
    todos: getFilteredTodos(state)
});
const mapDispatchToProps = dispatch => ({
    toggleTodo: (todo) => dispatch(TodoActions.toggle(todo))
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
