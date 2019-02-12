import React from 'react';

import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFilters from './TodoFilters';

export default () => (
  <React.Fragment>
    <TodoForm />
    <br />
    <TodoFilters />
    <br />
    <TodoList />
  </React.Fragment>
);
