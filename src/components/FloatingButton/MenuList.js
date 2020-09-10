import React from "react";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import './MenuList.css';



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
    backgroundColor: '#8CC841',
    color: 'white',
  },
  link: {
    color: '#ffff'
  }

}));

const MenuListPrueba = ({folioid}) => {
  const classes = useStyles();



  return (
    <div className={classes.root}>
    <Paper className={classes.paper}>

      <MenuList>
        <MenuItem>Folio History</MenuItem>
        <MenuItem className='prueba'>
          <Link to={`/manageactors/${folioid}`}>Manage Actors</Link>
        </MenuItem>
        <MenuItem>Chat</MenuItem>
      </MenuList>

    </Paper>
  </div>
);
}

export default MenuListPrueba;
