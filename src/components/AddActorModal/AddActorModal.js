import React, { useState } from 'react';
import ButtonNew from '../Bottons/ButtonNew';
import { makeStyles, Modal, TextField, Container, Select, MenuItem, InputLabel, FormControl, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ButtonSaveGreen from '../Bottons/ButtonSaveGreen';

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
    width: '50%',
    backgroundColor: 'white',
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
  },
  textField: {
    width: '90%',
    margin: 10,
  },
  closeBtn: {
    position: 'fixed',
    top: 5,
    right: 5,
  }
}));

const AddActorModal = ({actors, newActor, setNewActor}) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const body = (
    <div style={modalStyle} className={classes.paper}>
        <IconButton className={classes.closeBtn} onClick={handleClose}><CloseIcon/></IconButton>
        <Container>
            <h2>Validation Info</h2>
            <p>Your new actor will add to your Actors List as a guest actor when you complete this form.</p>
            <p>Bigleaper will contact your new company actor to request legal information.</p>
            <p>You will be able to check status validation of that company on Home or Agents module.</p>
            <p>Important: estimated time for validation is from 48 to 72 hours.</p>
        </Container>
        <Container>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField 
                    className={classes.textField} 
                    label="Company Name" 
                    variant="outlined" 
                    onChange={e=>setNewActor({...newActor, companyName: e.target.value})} 
                />
                <FormControl variant="outlined" className={classes.textField}>
                    <InputLabel id="actor-type">Actor Type</InputLabel>
                    <Select
                        labelId="actor-type"
                        value={newActor.actorType}
                        onChange={e=>setNewActor({...newActor, actorType: e.target.value})}
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
                    onChange={e=>setNewActor({...newActor, tradename: e.target.value})} 
                />
                <TextField 
                    className={classes.textField} 
                    label="RFC" 
                    variant="outlined" 
                    onChange={e=>setNewActor({...newActor, rfc: e.target.value})}
                />
                <TextField 
                    className={classes.textField} 
                    label="Email" 
                    variant="outlined" 
                    onChange={e=>setNewActor({...newActor, email: e.target.value})}
                />
                <TextField 
                    className={classes.textField} 
                    type="number" 
                    label="Telephone" 
                    variant="outlined" 
                    onChange={e=>setNewActor({...newActor, telephone: e.target.value})}
                />
                <ButtonSaveGreen/>
            </form>
        </Container>
    </div>
  );

  return (
    <div>
      <ButtonNew assignedFunction={handleOpen}/>
      <Modal
        open={open}
        onClose={handleClose}
      >
        {body}
      </Modal>
    </div>
  );
}

export default AddActorModal;