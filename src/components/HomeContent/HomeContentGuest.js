import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Messages from './Messages';
import GuestFolioSolicitado from './GuestFolioSolicitado'
import GuestTask from './GuestTask'

const drawerWidth = 240;
const useStyles = makeStyles({
  container: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    display: 'flex',
    flexWrap: 'wrap',
  },
});

 const HomeContent = () => {
  const classes = useStyles();

  return (
      <Container className={classes.container}>
        <Messages />
        <GuestFolioSolicitado />
        <GuestTask />
    </Container>
  );
}

export default HomeContent;