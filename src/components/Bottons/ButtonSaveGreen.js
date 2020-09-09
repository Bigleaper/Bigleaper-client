import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    background: 'linear-gradient(90deg, #D3E100 0%, #6DC732 100%)',
    borderRadius: 4,
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      background: 'linear-gradient(90deg, #D3E100 0%, #6DC732 100%)',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      background: 'linear-gradient(90deg, #D3E100 0%, #6DC732 100%)',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    background: 'linear-gradient(90deg, #D3E100 0%, #6DC732 100%)',
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    color: '#fff',
    background: 'linear-gradient(90deg, #D3E100 0%, #6DC732 100%)',
  },
}));

const BotonSaveGreen = ({ title, functionToExecute }) => {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" color="primary" className={classes.margin} onClick={() => functionToExecute}>
        {title}
      </Button>

    </div>
  );
}

export default BotonSaveGreen;
