import React from 'react';
import { Fab, makeStyles, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(2),
      background: '#8CC841',
    },
  }));

const FloatingButton = ({folioid}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return ( 
        <div>
        <Fab aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.fab}>
            <MenuIcon />
        </Fab>
        <Menu
            className={classes.menu}
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>Folio History</MenuItem>
            <MenuItem onClick={handleClose}><Link to={`/manageactors/${folioid}`}>Manage Actors</Link></MenuItem>
            <MenuItem onClick={handleClose}>Folio Chat</MenuItem>
        </Menu>
        </div>
     );
}
 
export default FloatingButton;