import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../constants';
import TodoPage  from '~/pages/Todos';
import Home from '~/pages/Home';

const RootRoutes = () => (
    <Switch>
      <Route path={routes.Home.route} component={Home} />
      <Route path={routes.Todo.route} component={TodoPage} />
    </Switch>
);

export default RootRoutes;
