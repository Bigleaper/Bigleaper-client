import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Actors from './views/Actors';
import SignIn from './views/SignIn';
import ExportFolios from './views/ExportFolios';
import ExportFolioId from './views/ExportFolioId';
import ManageActors from './views/ManageActors';
import ExportFolioCreat from './views/ExportFolioCreat';
import HomeGuest from './views/HomeGuest';

function App() {
  const [user, setUser] = useState({email:'', password:''});
  const [newActor, setNewActor] = useState({
    companyName: '',
    actorType: '',
    tradename: '',
    rfc: '',
    companyAgent: '',
    email: '',
    password: '',
    telephone: 0,
    address: '',
  })
console.log(newActor)
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <SignIn user={user} setUser={setUser} />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/actors">
            <Actors newActor={newActor} setNewActor={setNewActor} />
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
          <Route exact path="/exportfoliocreat">
            <ExportFolioCreat />
          </Route>
          <Route exact path="/homeguest">
            <HomeGuest />
          </Route>

        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;

// mdi:clipboard-arrow-left
// mdi:truck-delivery

