import React from 'react';
import { Fab, makeStyles, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1),
      background: '#8CC841',
    },
  }));

const FloatingButton = () => {
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
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        </div>
     );
}
 
export default FloatingButton;