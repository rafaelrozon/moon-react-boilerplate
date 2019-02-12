
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TodoPage  from '@pages/Todos';
import Home from '@pages/Home';

const RootRoutes = () => (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/todos" component={TodoPage} />
    </Switch>
);

export default RootRoutes;