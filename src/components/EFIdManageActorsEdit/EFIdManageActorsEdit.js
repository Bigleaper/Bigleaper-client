import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './EFIdManageActorsEdit.css';
import ButtonSaveGray from '../Bottons/ButtonSaveGray';
import ButtonEdit from '../Bottons/ButtonEdit';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const EFIdManageActorsEdit = () => {

  const classes = useStyles();
/*   const [value, setValue] = React.useState('Controlled'); */

/*   const handleChange = (event) => {
    setValue(event.target.value);
  }; */

  return (
    <div className='containerGral'>
    <h2>Export Folios</h2>
    <h3>Export Folio / Manage Actors</h3>
    <div className='container'>
    <h5>Current Origin Carries:</h5>
      <form>
      <TextField
        id="outlined-textarea"
        label="Origin Carrier"
        placeholder="Placeholder"
        multiline
        variant="outlined"
      />
      </form>

    <h5>Current Forwarder:</h5>
      <form>
      <TextField
        id="outlined-textarea"
        label="Forwarder"
        placeholder="Placeholder"
        multiline
        variant="outlined"
      />
      </form>

    <h5>Current Origin Customs Broker:</h5>
      <form>
      <TextField
        id="outlined-textarea"
        label="Origin Customs Broker"
        placeholder="Placeholder"
        multiline
        variant="outlined"
      />
      </form>

    <h5>Current Destinity Carrier:</h5>
      <form>
      <TextField
        id="outlined-textarea"
        label="Destinity Carrier"
        placeholder="Placeholder"
        multiline
        variant="outlined"
      />
      </form>

      <div className='buttons'>
        <ButtonEdit />
        <ButtonSaveGray />
      </div>

    </div>      
  </div>
      

  )
}

export default EFIdManageActorsEdit;
