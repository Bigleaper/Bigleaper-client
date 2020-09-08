import React, { useState } from 'react';
import ButtonNew from '../Bottons/ButtonNew';
import { makeStyles, Modal, TextField, Container, Select, MenuItem, InputLabel, FormControl, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ButtonSaveGreen from '../Bottons/ButtonSaveGreen';
import clientAxios from '../../config/axios';


const getModalStyle = () => {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '60%',
    backgroundColor: 'white',
    padding: 5,
    display: 'flex',
  },
  textField: {
    width: '90%',
    margin: 5,
  },
  closeBtn: {
    position: 'fixed',
    top: 5,
    right: 5,
  }
}));

const AddActorModal = ({actors, newActor, setNewActor, manageactors}) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const addActor = async () => {
    try {
      console.log(newActor);
      const response = await clientAxios.post('/actors', newActor)
      console.log(response);
    } catch (err) {
      console.log(err.response)
    }
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <IconButton className={classes.closeBtn} onClick={handleClose}><CloseIcon/></IconButton>
      <Container>
        <h2>Validation Info</h2>
        <p>Your new actor will add to your Actors List as a guest actor when you complete this form.</p>
        <p>Bigleaper will contact your new company actor to request legal information.</p>
        <p>You will be able to check status validation of that company on Home or Agents module.</p>
        <p>You must asign a provisional password for your Guest Actor.</p>
        <p>Important: estimated time for validation is from 48 to 72 hours.</p>
      </Container>
      <Container>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            className={classes.textField}
            label="Company Name"
            variant="outlined"
            onChange={e => setNewActor({ ...newActor, companyName: e.target.value })}
          />
          <FormControl variant="outlined" className={classes.textField}>
            <InputLabel id="actor-type">Actor Type</InputLabel>
            <Select
              labelId="actor-type"
              value={newActor.actorType}
              onChange={e => setNewActor({ ...newActor, typeCompany: e.target.value })}
            >
              {actors.map((actor, index) => (
                <MenuItem key={index} value={actor}>{actor}</MenuItem>
              ))
              }
            </Select>
          </FormControl>
          <TextField
            className={classes.textField}
            label="Tradename"
            variant="outlined"
            onChange={e => setNewActor({ ...newActor, tradeName: e.target.value })}
          />
          <TextField
            className={classes.textField}
            label="RFC"
            variant="outlined"
            onChange={e => setNewActor({ ...newActor, rfc: e.target.value })}
          />
          <TextField
            className={classes.textField}
            label="Address"
            variant="outlined"
            onChange={e => setNewActor({ ...newActor, adress: e.target.value })}
          />
          <TextField
            className={classes.textField}
            label="Company Agent"
            variant="outlined"
            onChange={e => setNewActor({ ...newActor, companyAgent: e.target.value })}
          />
          <TextField
            className={classes.textField}
            label="Email"
            variant="outlined"
            onChange={e => setNewActor({ ...newActor, email: e.target.value })}
          />
          <TextField
            className={classes.textField}
            label="Password"
            variant="outlined"
            onChange={e => setNewActor({ ...newActor, password: e.target.value })}
          />
          <TextField
            className={classes.textField}
            type="number"
            label="Telephone"
            variant="outlined"
            onChange={e => setNewActor({ ...newActor, telephone: e.target.value })}
          />
          <ButtonSaveGreen
            functionToExecute={addActor}
          />
        </form>
      </Container>
    </div>
  );

  return (
    <div>
      {manageactors ?  <MenuItem value="" onClick={handleOpen} >Add other</MenuItem>
      : <ButtonNew assignedFunction={handleOpen}/>
      }
      <Modal open={open} onClose={handleClose}>{body}</Modal>
    </div>
  );
}

export default AddActorModal;