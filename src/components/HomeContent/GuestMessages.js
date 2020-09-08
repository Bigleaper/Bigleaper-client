import React from 'react';
import { makeStyles, Container, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
      width: '35%', 
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
        </Container>
     );
}
 
export default GuestMessages;