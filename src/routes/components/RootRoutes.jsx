import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../constants';
import TodosPage  from '~/pages/Todos';
import Home from '~/pages/Home';

const RootRoutes = () => (
    <Switch>
      <Route exact path={routes.Home.route} component={Home} />
      <Route exact path={routes.Todos.route} component={TodosPage} />
    </Switch>
);

export default RootRoutes;
