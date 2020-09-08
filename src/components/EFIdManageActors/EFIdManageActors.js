import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ButtonSaveGreen from '../Bottons/ButtonSaveGreen';
import './EFIdManageActors.css';

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
      <div className='container'>
        <div className='subtitle'>
          <h3>Manage Actors</h3>
        </div>
        <div className='originCarrier'>
          <h5>Current Origin Carries:</h5>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Select origin carrier</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={originCarrier}
              onChange={handleChangeCOC}
              label="oringinCarrier"
            >
              <MenuItem value={10}>Origin Carrier</MenuItem>
              <MenuItem value={20}>Origin Carrier</MenuItem>
              <MenuItem value={30}>Origin Carrier</MenuItem>
              <MenuItem value="">Add other</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Select a carrier agent</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={originCarrier}
              onChange={handleChangeCOC}
              label="oringinCarrier"
            >
              <MenuItem value={10}>Origin Carrier</MenuItem>
              <MenuItem value={20}>Origin Carrier</MenuItem>
              <MenuItem value={30}>Origin Carrier</MenuItem>
              <MenuItem value="">Add other</MenuItem>
            </Select>
          </FormControl>
        </div>
        
        <div className='currentForwarder'>
          <h5>Current Forwarder:</h5>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Select forwarder</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={forwarder}
              onChange={handleChangeCF}
              label="forwarder"
            >
              <MenuItem value={10}>Forwarder</MenuItem>
              <MenuItem value={20}>Forwarder</MenuItem>
              <MenuItem value={30}>Forwarder</MenuItem>
              <MenuItem value="">Add other</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Select a forwarder agent</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={forwarder}
              onChange={handleChangeCF}
              label="forwarder"
            >
              <MenuItem value={10}>Forwarder</MenuItem>
              <MenuItem value={20}>Forwarder</MenuItem>
              <MenuItem value={30}>Forwarder</MenuItem>
              <MenuItem value="">Add other</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className='customsBroker'>
          <h5>Current Origin Customs Broker:</h5>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Select customs broker</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={originBroker}
              onChange={handleChangeOB}
              label="originBroker"
            >
              <MenuItem value={10}>Forwarder</MenuItem>
              <MenuItem value={20}>Forwarder</MenuItem>
              <MenuItem value={30}>Forwarder</MenuItem>
              <MenuItem value="">Add other</MenuItem>
            </Select>
          </FormControl>
          
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Select a customs agent</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={originBroker}
              onChange={handleChangeOB}
              label="originBroker"
            >
              <MenuItem value={10}>Forwarder</MenuItem>
              <MenuItem value={20}>Forwarder</MenuItem>
              <MenuItem value={30}>Forwarder</MenuItem>
              <MenuItem value="">Add other</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className='destinityCarrier'>
          <h5>Current Destinity Carrier:</h5>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Select destinity carrier</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={destinityCarrier}
              onChange={handleChangeDC}
              label="destinityCarrier"
            >
              <MenuItem value={10}>Destinity Carrier</MenuItem>
              <MenuItem value={20}>Destinity Carrier</MenuItem>
              <MenuItem value={30}>Destinity Carrier</MenuItem>
              <MenuItem value="">Add other</MenuItem>
            </Select>
          </FormControl>
          
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Select a carrier agent</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={destinityCarrier}
              onChange={handleChangeDC}
              label="destinityCarrier"
            >
              <MenuItem value={10}>Destinity Carrier</MenuItem>
              <MenuItem value={20}>Destinity Carrier</MenuItem>
              <MenuItem value={30}>Destinity Carrier</MenuItem>
              <MenuItem value="">Add other</MenuItem>
            </Select>
          </FormControl>
        </div>
        
      <div className='button'>
        <ButtonSaveGreen title={'SAVE'}/>
      </div>
      </div>      
    </div>
  )
}

export default EFIdManageActors
