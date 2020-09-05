import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import '../components/styles/EFIdManageActors.css';

import ButtonSave from './ButtonSave';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },

}));

const EFIdManageActors = () => {

  const classes = useStyles();
  const [originCarrier, setOriginCarrier] = React.useState('');

  const handleChangeCOC = (event) => {
    setOriginCarrier(event.target.value);
  };

  const [forwarder, setForwarder] = React.useState('');
  const handleChangeCF = (event) => {
    setForwarder(event.target.value);
  };

  const [originBroker, setOriginBroker] = React.useState('');
  const handleChangeOB = (event) => {
    setOriginBroker(event.target.value);
  };

  const [destinityCarrier, setDestinityCarrier] = React.useState('');
  const handleChangeDC = (event) => {
    setDestinityCarrier(event.target.value);
  };


  return (
    <div className='containerGral'>
      <h2>Export Folios</h2>
      <h3>Export Folio / Manage Actors</h3>
      <div className='container'>
        <h5>Current Origin Carries</h5>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Select origin carrier</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={originCarrier}
            onChange={handleChangeCOC}
            label="oringinCarrier"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        
        <h5>Current Forwarder</h5>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Select forwarder</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={forwarder}
            onChange={handleChangeCF}
            label="forwarder"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <h5>Current Origin Customs Broker</h5>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Select forwarder</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={originBroker}
            onChange={handleChangeOB}
            label="originBroker"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <h5>Current Destinity Carrier</h5>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Select destinity carrier</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={destinityCarrier}
            onChange={handleChangeDC}
            label="destinityCarrier"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      <div className='button'>
        <ButtonSave />
      </div>
      </div>      
    </div>
  )
}

export default EFIdManageActors