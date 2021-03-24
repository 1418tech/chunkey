import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Documentation from './Documentation'
import Login from './Login'

const Main = () => {
  return (
    <Switch > {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/documentation' component={Documentation}></Route>
      <Route exact path='/login' component={Login}></Route>
    </Switch>
  );
}

export default Main;