import React from 'react';
import { Typography, makeStyles, Container } from '@material-ui/core';

const drawerWidth = 240;
const useStyles = makeStyles({
  container: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
});

const ViewTitle = ({title, user}) => {
    const classes = useStyles();
    return ( 
        <Container className={classes.container}>
            <Typography variant="h4" gutterBottom>{title}</Typography>
            <Typography variant="h6" gutterBottom>{user}</Typography>
        </Container>
     );
}
 
export default ViewTitle;