import React from 'react';
import { makeStyles, Container, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
      width: '35%', 
      background: 'white', 
    },
  });

const Messages = () => {
    const classes = useStyles();
    return ( 
        <Container className={classes.container}>
            <Typography>Messages</Typography>
        </Container>
     );
}
 
export default Messages;