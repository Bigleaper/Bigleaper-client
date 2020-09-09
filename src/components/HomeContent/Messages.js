import React from 'react';
import { makeStyles, Container, Typography } from '@material-ui/core';
import HomeMessages from './HomeMessages';

const useStyles = makeStyles({
    container: {
      width: '40%', 
      height: 'auto',
      background: 'white', 
      borderRadius: '8px',
      padding: '10px'      
    },
  });

const Messages = () => {
    const classes = useStyles();
    return ( 
        <Container className={classes.container}>
            <Typography variant='h6'>Messages</Typography>
            <HomeMessages />
            <HomeMessages />
        </Container>
     );
}
 
export default Messages;