import React, { Fragment, useState, useEffect } from 'react';
import MenuGuest from '../components/Menu/MenuGuest';
import Header from '../components/Header/Header';
import ViewTitle from '../components/ViewTitle/ViewTitle';
import { makeStyles, Container } from '@material-ui/core';
import tokenAuth from '../config/tokenAuth';
import clientAxios from '../config/axios'
import ProfileGuestUser from '../components/ProfileGuestUser/ProfileGuestUser';


const drawerWidth = 240;
const useStyles = makeStyles({
  container: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    display: 'flex',
    flexWrap: 'wrap',
  },
});

const ProfileGuest = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <MenuGuest />
      <Header />
      <div>
        <ViewTitle title={'Profile'} user={'Welcome Guest'}/>
        <Container className={classes.container}>
        <ProfileGuestUser />
        </Container>
      </div>
    </Fragment>
  );
}

export default ProfileGuest;