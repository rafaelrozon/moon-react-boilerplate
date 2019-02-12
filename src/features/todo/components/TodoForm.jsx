import React from 'react';
import { connect } from 'react-redux';
import TodoActions from '../actions';

class TodoForm extends React.Component {
  state = { title: '' };

  handleTitleChange = ev => {
    this.setState({ title: ev.currentTarget.value });
  };

  handleAdd = () => {
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    const { title } = this.state;

    return (
      <form>
        <input
          type="text"
          placeholder="Enter new todo"
          value={title}
          onChange={this.handleTitleChange}
        />
        &nbsp;
        <button type="button" onClick={this.handleAdd} disabled={!title}>
          Add
        </button>
      </form>
    );
  }
}

@connect(
    null,
    dispatch => ({
        addTodo: title => dispatch(TodoActions.add({ title }))
    })
)
export default class TodoFormContainer extends TodoForm {};
