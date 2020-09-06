import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Actors from './views/Actors';

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/actors">
            <Actors />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
