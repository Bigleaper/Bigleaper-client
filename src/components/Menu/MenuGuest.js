import React from 'react';
import LogoH from '../LogoH/LogoH';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {Link} from 'react-router-dom';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      icon: {
        color: '#26364B',
      },
  }));

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  return (
      <Drawer className={classes.drawer} variant="permanent" classes={{paper: classes.drawerPaper,}} anchor="left">
        <div className={classes.toolbar} />
        <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
        <Link to='/homeguest'><LogoH/></Link>
        <h3 align='center'>Guest</h3>

        <Link to='/homeguest'><ListItem button>
            <ListItemIcon><DashboardIcon className={classes.icon}/></ListItemIcon><ListItemText primary="Home" />
        </ListItem></Link>

        <Link to='/actorfoliosguest'><ListItem button>
            <ListItemIcon><AssignmentIcon className={classes.icon}/></ListItemIcon><ListItemText primary="Actor Folios" />
        </ListItem></Link>

        <Link to='/profileguest'><ListItem button>
            <ListItemIcon><AccountCircleIcon className={classes.icon}/></ListItemIcon><ListItemText primary="Profile" />
        </ListItem></Link>
        
        </List>
      </Drawer>  
  );
}