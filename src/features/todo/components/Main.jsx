import React from 'react';

import TodoList from './List';
import TodoForm from './Form';
import TodoFilters from './Filters';

export default () => (
  <React.Fragment>
    <TodoForm />
    <br />
    <TodoFilters />
    <br />
    <TodoList />
  </React.Fragment>
);
