import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PeopleIcon from '@material-ui/icons/People';
import BusinessIcon from '@material-ui/icons/Business';
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
        <h3>Administrator</h3>
        <Link to='/home'><ListItem button>
            <ListItemIcon><DashboardIcon className={classes.icon}/></ListItemIcon><ListItemText primary="Home" />
        </ListItem></Link>
        <ListItem button>
            <ListItemIcon><AssignmentReturnIcon className={classes.icon}/></ListItemIcon><ListItemText primary="Import Folios" />
        </ListItem>
        <Link to='/exportfolios'><ListItem button>
            <ListItemIcon><AssignmentReturnIcon className={classes.icon}/></ListItemIcon><ListItemText primary="Export Folios" />
        </ListItem></Link>
        <Link to='/actors'><ListItem button>
            <ListItemIcon><LocalShippingIcon className={classes.icon}/></ListItemIcon><ListItemText primary="Actors" />
        </ListItem></Link>
        <ListItem button>
            <ListItemIcon><PeopleIcon className={classes.icon}/></ListItemIcon><ListItemText primary="Users" />
        </ListItem>
        <ListItem button>
            <ListItemIcon><BusinessIcon className={classes.icon}/></ListItemIcon><ListItemText primary="Company" />
        </ListItem>
        </List>
      </Drawer>
  );
}