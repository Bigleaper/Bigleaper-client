import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Messages from './Messages';
import ActorValidation from './ActorValidation';
import LastFolios from './LastFolios';

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

const HomeContent = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Messages/>
      <ActorValidation/>
      <LastFolios/>
    </Container>
  );
}

export default HomeContent;