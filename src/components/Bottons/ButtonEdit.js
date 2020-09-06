import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    background: '#26364B',
    color: 'white'
  },
}));

const ButtonEdit = () => {
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
      >
        Edit
      </Button>
    </div>
  )
}

export default ButtonEdit;
