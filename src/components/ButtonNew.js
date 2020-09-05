import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    background: '#26364B',
    color: 'white'
  },
}));

const ButtonNew = () => {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<AddIcon />}
      >
        NEW
      </Button>
    </div>
  );
}

export default ButtonNew