import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Form from '../pages/Form';
import Dashboard from '../pages/Dashboard';
import ShowUser from '../pages/ShowUser';

import EditForm from '../pages/EditForm';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Form} />
    <Route path="/edit" exact component={EditForm} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/show" exact component={ShowUser} />
  </Switch>
);

export default Routes;
