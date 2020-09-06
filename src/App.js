import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Actors from './views/Actors';
import SignIn from './views/SignIn';
import ExportFolios from './views/ExportFolios';
import ExportFolioId from './views/ExportFolioId';
import ManageActors from './views/ManageActors';

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/actors">
            <Actors />
          </Route>
          <Route exact path="/exportfolios">
            <ExportFolios />
          </Route>
          <Route exact path="/exportfolios/id">
            <ExportFolioId />
          </Route>
          <Route exact path="/manageactors">
            <ManageActors />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;

// mdi:clipboard-arrow-left
// mdi:truck-delivery

