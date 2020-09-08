import React, { Fragment } from 'react';
import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import ViewTitle from '../components/ViewTitle/ViewTitle';
import EFIdManageActors from '../components/EFIdManageActors/EFIdManageActors';
import { makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';

const drawerWidth = 240;
const useStyles = makeStyles({
  container: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    display: 'flex',
    flexWrap: 'wrap',
  },
});
const ManageActors = ({actors, newActor, setNewActor}) => {
    const classes = useStyles();
    const {id} = useParams();
    console.log(id)
    return ( 
      <Fragment>
        <Menu />
        <Header />
        <ViewTitle title={'Export Folios'} user={'Folio Creation / Manage Actors'}/>
        <div className={classes.container}>
            <EFIdManageActors actors={actors} newActor={newActor} setNewActor={setNewActor}/>
        </div>
    </Fragment>
     );
}
 
export default ManageActors;