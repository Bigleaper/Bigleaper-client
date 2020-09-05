import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ButtonNew from './ButtonNew'
import '../components/styles/EFIdManageActorsAdd.css';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const EFIdManageActorsAdd = () => {

  const classes = useStyles();
/*   const [value, setValue] = React.useState('Controlled'); */

/*   const handleChange = (event) => {
    setValue(event.target.value);
  }; */

  return (
    <div className='containerGral'>
    <h2>Export Folios</h2>
    <h3>Export Folio / Manage Actors / Add New Actor</h3>
    <div className='container'>
      <form>
      <TextField
        id="outlined-textarea"
        label="Label"
        placeholder="Placeholder"
        multiline
        variant="outlined"
      />
      </form>

      <form>
      <TextField
        id="outlined-textarea"
        label="Label"
        placeholder="Placeholder"
        multiline
        variant="outlined"
      />
      </form>

      <form>
      <TextField
        id="outlined-textarea"
        label="Label"
        placeholder="Placeholder"
        multiline
        variant="outlined"
      />
      </form>

      <div className='buttons'>
        <ButtonNew />

      </div>

    </div>      
  </div>
      

  )
}

export default EFIdManageActorsAdd;
