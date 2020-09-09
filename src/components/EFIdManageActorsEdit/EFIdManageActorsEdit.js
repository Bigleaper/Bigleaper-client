import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './EFIdManageActorsEdit.css';
import ButtonSaveGray from '../Bottons/ButtonSaveGray';
import ButtonSaveGreen from '../Bottons/ButtonSaveGreen';
import tokenAuth from '../../config/tokenAuth';
import clientAxios from '../../config/axios';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import AddActorModal from '../AddActorModal/AddActorModal';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
}));

const EFIdManageActorsEdit = ({ manageActors, idFolio, actors, newActor, setNewActor }) => {
  const classes = useStyles();
  /*   const [value, setValue] = React.useState('Controlled'); */

  /*   const handleChange = (event) => {
      setValue(event.target.value);
    }; */
    const actrs = actors.map(a=> manageActors.filter(ac=> ac.typeCompany === a))
    console.log(actrs)
  // const filtered = manageActors.filter(actor => actor.typeCompany === actors)
  // console.log(actors)
  const [newManageActors, setNewManageActors] = useState([])
  //Function to update manageActors
  const editManageActors = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      tokenAuth(token)
    }
    try {
      const response = await clientAxios.put(`/exportfolios/${idFolio}/manageactors/`, newManageActors)
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    editManageActors()
  }, [])

  return (
    <div className='containerGral'>
      <div className='container'>
        <div className='subtitle'>
          <h3>Export Folio / Manage Actors</h3>
        </div>
          {actors.map(type => 
            <div className='originCarrier'>
              <h5>{type}</h5>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Select origin carrier</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  // value={newManageActor.currentOriginCarrier}
                  // onChange={e => setNewManageActor({ ...newManageActor, currentOriginCarrier: e.target.value })}
                  label="oringinCarrier"
                >
                  <MenuItem value={'10'}>Origin Carrier</MenuItem>
                  <MenuItem value={'20'}>Origin Carrier</MenuItem>
                  <MenuItem value={'30'}>Origin Carrier</MenuItem>
                  <AddActorModal manageactors actors={actors} newActor={newActor} setNewActor={setNewActor} />
                </Select>
              </FormControl>

              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Select a carrier agent</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  // value={originCarrier}
                  // onChange={handleChangeCOC}
                  label="oringinCarrier"
                >
                  <MenuItem value={'10'}>Origin Carrier</MenuItem>
                  <MenuItem value={'20'}>Origin Carrier</MenuItem>
                  <MenuItem value={'30'}>Origin Carrier</MenuItem>
                  <AddActorModal manageactors actors={actors} newActor={newActor} setNewActor={setNewActor} />
                </Select>
              </FormControl>
            </div>
          )}


        {/* <div className='originCarrier'>
          <h5>Current Origin Carries:</h5>
          <form className={classes.root} noValidate autoComplete="off">
            <div className='fields'>
              <div className='field_1'>
                <TextField
                  id="outlined-textarea"
                  label="Origin Carrier"
                  placeholder="Placeholder"
                  variant="outlined"
                />
              </div>
              <div className='fiel_2'>
                <TextField
                  id="outlined-textarea"
                  label="Agent name"
                  placeholder="Placeholder"
                  variant="outlined"
                />
              </div>
            </div>
          </form>
        </div>

        <div className='forwarder'>
          <h5>Current Forwarder:</h5>
          <form className={classes.root} noValidate autoComplete="off">
            <div className='fields'>
              <div className='field_1'>
                <TextField
                  id="outlined-textarea"
                  label="Forwarder"
                  placeholder="Placeholder"
                  variant="outlined"
                />
              </div>
              <div className='fiel_2'>
                <TextField
                  id="outlined-textarea"
                  label="Agent name"
                  placeholder="Placeholder"
                  variant="outlined"
                />
              </div>
            </div>
          </form>
        </div>

        <div className='customBroker'>
          <h5>Current Origin Customs Broker:</h5>
          <form className={classes.root} noValidate autoComplete="off">
            <div className='fields'>
              <div className='field_1'>
                <TextField
                  id="outlined-textarea"
                  label="Customs broker"
                  placeholder="Placeholder"
                  variant="outlined"
                />
              </div>
              <div className='fiel_2'>
                <TextField
                  id="outlined-textarea"
                  label="Agent name"
                  placeholder="Placeholder"
                  variant="outlined"
                />
              </div>
            </div>
          </form>
        </div>

        <div className='destonityCarrier'>
          <h5>Current Origin Customs Broker:</h5>
          <form className={classes.root} noValidate autoComplete="off">
            <div className='fields'>
              <div className='field_1'>
                <TextField
                  id="outlined-textarea"
                  label="Current Destinity Carrier"
                  placeholder="Placeholder"
                  variant="outlined"
                />
              </div>
              <div className='fiel_2'>
                <TextField
                  id="outlined-textarea"
                  label="Agent name"
                  placeholder="Placeholder"
                  variant="outlined"
                />
              </div>
            </div>
          </form>
        </div> */}

        <div className='buttons'>
          <ButtonSaveGreen title={'EDIT'} functionToExecute={editManageActors} />
          {/* <ButtonSaveGray /> */}
        </div>

      </div>
    </div>


  )
}

export default EFIdManageActorsEdit;
