import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Actors from './views/Actors';

function App() {
  return (
    <Fragment>
    <Menu />
    <Header />
    <main>
          <Router>
            <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route exact path="/actors">
                  <Actors />
              </Route>
            </Switch>
          </Router>
    </main>
    </Fragment>
  );
}

export default App;
