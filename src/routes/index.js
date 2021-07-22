import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Games from '../pages/Games';
import Home from '../pages/home';

export default function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/details/:id" render={(props) => (
          <Games {...props} />
        )}>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}