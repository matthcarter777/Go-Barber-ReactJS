import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SingnIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';

const Router: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SingnIn} />
    <Route path="/signup" component={SignUp} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Router;
