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
import ActorFoliosGuest from './views/ActorFoliosGuest';
import ProfileGuest from './views/ProfileGuest';

function App() {
  const allActors = ['import/export', 'carrier', 'forwarder', 'customsBroker'];
  const [user, setUser] = useState({email:'', password:''});
  const [newActor, setNewActor] = useState({
    companyName: '',
    tradeName: '',
    typeCompany: '',
    rfc: '',
    telephone: 0,
    companyAgent: '',
    email: '',
    password: '',
    address: '',
  })
  
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
            <Actors actors={allActors} newActor={newActor} setNewActor={setNewActor} />
          </Route>
          <Route exact path="/exportfolios">
            <ExportFolios />
          </Route>
          <Route exact path="/exportfolios/:id">
            <ExportFolioId />
          </Route>
          <Route exact path="/manageactors/:id">
            <ManageActors actors={allActors} newActor={newActor} setNewActor={setNewActor}/>
          </Route>
          <Route exact path="/exportfoliocreat">
            <ExportFolioCreat />
          </Route>
          <Route exact path="/homeguest">
            <HomeGuest />
          </Route>
          <Route exact path="/actorfoliosguest">
            <ActorFoliosGuest />
          </Route>
          <Route exact path="/profileguest">
            <ProfileGuest />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;

// mdi:clipboard-arrow-left
// mdi:truck-delivery

