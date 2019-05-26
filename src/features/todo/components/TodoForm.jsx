import React from 'react';
import { connect } from 'react-redux';
import { actions as TodoActions } from '../state';

export class TodoForm extends React.Component {
  state = { title: '' };

  handleTitleChange = ev => {
    ev.preventDefault();
    this.setState({ title: ev.currentTarget.value });
  };

  handleAdd = () => {
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    const { title } = this.state;

    return (
      <div>
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
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    addTodo: title => dispatch(TodoActions.add({ title }))
});
export default connect(null, mapDispatchToProps)(TodoForm);
