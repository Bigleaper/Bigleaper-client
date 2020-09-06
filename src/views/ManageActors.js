import React, { Fragment } from 'react';
import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
// import ViewTitle from '../components/ViewTitle/ViewTitle';
import EFIdManageActors from '../components/EFIdManageActors/EFIdManageActors';
import { makeStyles } from '@material-ui/core';

const drawerWidth = 240;
const useStyles = makeStyles({
  container: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    display: 'flex',
    flexWrap: 'wrap',
  },
});
const ManageActors = () => {
    const classes = useStyles();
    return ( 
        <Fragment>
        <Menu />
        <Header />
        <div className={classes.container}>
            <EFIdManageActors/>
        </div>
    </Fragment>
     );
}
 
export default ManageActors;