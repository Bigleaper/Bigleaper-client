
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './views/SignIn';
/* import EFIdManageActors from './components/EFIdManageActors/EFIdManageActors'; */
/* import EFIdManageActorsAdd from './components/EFIdManageActorsAdd/EFIdManageActorsAdd' */
import EFIdManageActorsEdit from './components/EFIdManageActorsEdit/EFIdManageActorsEdit'



function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
{/*           <Route exact path='/'>
            <SignIn />
          </Route> */}

{/*           <Route exact path='/EFIdManageActors'>
            <EFIdManageActors />
          </Route>
 */}
{/*           <Route>
            <EFIdManageActorsAdd />
          </Route> */}

          <Route>
            <EFIdManageActorsEdit />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
