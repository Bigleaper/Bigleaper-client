import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const messages = [
  {
    id: 1,
    primary: 'CINLAT Importer',
    secondary: "Would you tell me if is uploaded....",
    person: '/static/images/avatar/5.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(1, 1, 0),
  },
  paper: {
    paddingBottom: 1,
    backgroundColor: 'white',
  },
  list: {
    marginBottom: theme.spacing(1),
    backgroundColor: '#CAF199',
    color: '#26364B',
  },
  subheader: {
    backgroundColor: 'red',
  },
  avatar: {
    backgroundColor: '#26364B',

  },
  buttons: {
    textAlign: "right",
    color: '#395166',
    marginTop: '-10px'
  },
  buttons1: {
    textAlign: "right",
    color: '#395166',
    marginRight: '30px',
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment >
      <CssBaseline />
      <Paper square className={classes.paper}>
        <List className={classes.list}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {id === 1 && <ListSubheader className={classes.subheader}></ListSubheader>}
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} className={classes.avatar}/>
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItem>
              <div className={classes.buttons}>
                <Button className={classes.buttons1}>REPLY</Button>
                <Button className={classes.buttons1}>ARCHIVE</Button>
              </div>
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </React.Fragment>
  );
}