import React from 'react';
import { makeStyles, Container, Typography } from '@material-ui/core';
import HomeMessages from './HomeMessages';

const useStyles = makeStyles({
    container: {
      width: '38%', 
      background: 'white', 
      borderRadius: '8px',
      padding: '10px',  
      marginLeft: '0'  
    },
  });

const GuestMessages = () => {
    const classes = useStyles();
    return ( 
        <Container className={classes.container}>
            <Typography variant='h6'>Messages</Typography>
            <HomeMessages />
            <HomeMessages />
        </Container>
     );
}
 
export default GuestMessages;