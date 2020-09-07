import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 20,
    marginLeft: 265,
  },
  button: {
    margin: theme.spacing(1),
    background: '#26364B',
    color: 'white'
  },
}));

const ButtonNew = ({assignedFunction}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={assignedFunction}
      >
        NEW
      </Button>
    </div>
  );
}

export default ButtonNew