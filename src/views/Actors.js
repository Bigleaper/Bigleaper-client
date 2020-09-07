import React, { Fragment } from 'react';
import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import ActorsTable from '../components/ActorsTable/ActorsTable'
import ViewTitle from '../components/ViewTitle/ViewTitle';
import AddActorModal from '../components/AddActorModal/AddActorModal';
import { makeStyles } from '@material-ui/core';

const drawerWidth = 240;
const useStyles = makeStyles({
  container: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 30,
  },
});

const allActors = ['Origin Career', 'Custom Broker', 'Forwarder', 'Destiny Career'];

const Actors = ({newActor, setNewActor}) => {
  const classes = useStyles();
  return ( 
    <Fragment>
      <Menu />
      <Header />
      <div>
        <ViewTitle title={'Actors'} user={'Welcome usuario'}/>
        <AddActorModal actors={allActors} newActor={newActor} setNewActor={setNewActor}/>
        <div className={classes.container}>
          {allActors.map((actor, index) => (<ActorsTable key={index} actor={actor}/>))}
        </div>
      </div>
    </Fragment>
     );
}
 
export default Actors;