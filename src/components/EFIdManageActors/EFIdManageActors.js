import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ButtonSaveGreen from '../Bottons/ButtonSaveGreen';
import './EFIdManageActors.css';
import AddActorModal from '../AddActorModal/AddActorModal';
import tokenAuth from '../../config/tokenAuth';
import clientAxios from '../../config/axios';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },

}));

const EFIdManageActors = ({ actors, newActor, setNewActor, newManageActor, setNewManageActor, postManageActors, getAllActors, idFolio }) => {

    //state to save companyAgents added by the user
    const [guestsSaved, setGuestsSaved] = useState([])
  
    //Function to get companyAgents
    const getCompanyAgents = async () => {
      const token = localStorage.getItem('token')
      if (token) {
        tokenAuth(token)
      }
      try {
        const response = await clientAxios.get('/users')
        console.log(response);
        setGuestsSaved(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() => {
      // editManageActors()
      getCompanyAgents()
  
    }, [])
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
          <h5>Current Origin Carrier:</h5>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Select origin carrier</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={newManageActor.currentOriginCarrier}
              onChange={e => setNewManageActor({ ...newManageActor, currentOriginCarrier: e.target.value })}
              label="oringinCarrier"
            >
            {getAllActors.filter(actor => actor.typeCompany === 'import/export').map(filteredActor => (
              <MenuItem key={filteredActor._id} value={filteredActor.companyName}>{filteredActor.companyName}</MenuItem>
            ))}
              <AddActorModal manageactors actors={actors} newActor={newActor} setNewActor={setNewActor} />
            </Select>
          </FormControl>

          <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Select a origin carrier</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={newManageActor.originCarrierAgent}
              onChange={e=>setNewManageActor({ ...newManageActor, originCarrierAgent: e.target.value})}
              label="oringinCarrier"
            >
            {guestsSaved.filter(x=> (x.company === newManageActor.currentOriginCarrier)).map(x=> 
              <MenuItem value={x.name}>{x.name}</MenuItem>
            )}
              <AddActorModal manageactors actors={actors} newActor={newActor} setNewActor={setNewActor} />
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
              value={newManageActor.currentForwarder}
              onChange={e => setNewManageActor({ ...newManageActor, currentForwarder: e.target.value })}
              label="forwarder"
            >
            {getAllActors.filter(actor => actor.typeCompany === 'forwarder').map(filteredActor => (
              <MenuItem key={filteredActor._id} value={filteredActor.companyName}>{filteredActor.companyName}</MenuItem>
            ))}
              <AddActorModal manageactors actors={actors} newActor={newActor} setNewActor={setNewActor} />
            </Select>
          </FormControl>

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Select a forwarder agent</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={newManageActor.forwarderAgent}
              onChange={e=>setNewManageActor({ ...newManageActor, forwarderAgent: e.target.value})}
              label="oringinCarrier"
            >
            {guestsSaved.filter(x=> (x.company === newManageActor.currentForwarder)).map(x=> 
              <MenuItem value={x.name}>{x.name}</MenuItem>
            )}
              <AddActorModal manageactors actors={actors} newActor={newActor} setNewActor={setNewActor} />
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
              value={newManageActor.currentCustomsBroker}
              onChange={e => setNewManageActor({ ...newManageActor, currentCustomsBroker: e.target.value })}
              label="originBroker"
            >
            {getAllActors.filter(actor => actor.typeCompany === 'customsBroker').map(filteredActor => (
              <MenuItem key={filteredActor._id} value={filteredActor.companyName}>{filteredActor.companyName}</MenuItem>
            ))}
              <AddActorModal manageactors actors={actors} newActor={newActor} setNewActor={setNewActor} />
            </Select>
          </FormControl>

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Select a customs agent</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={newManageActor.customBrokerAgent}
              onChange={e=>setNewManageActor({ ...newManageActor, customBrokerAgent: e.target.value})}
              label="oringinCarrier"
            >
            {guestsSaved.filter(x=> (x.company === newManageActor.currentCustomsBroker)).map(x=> 
              <MenuItem value={x.name}>{x.name}</MenuItem>
            )}
              <AddActorModal manageactors actors={actors} newActor={newActor} setNewActor={setNewActor} />
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
              value={newManageActor.currentDestinyCarrier}
              onChange={e => setNewManageActor({ ...newManageActor, currentDestinyCarrier: e.target.value })}
              label="destinityCarrier"
            >
            {getAllActors.filter(actor => actor.typeCompany === 'carrier').map(filteredActor => (
              <MenuItem key={filteredActor._id} value={filteredActor.companyName}>{filteredActor.companyName}</MenuItem>
            ))}
              <AddActorModal manageactors actors={actors} newActor={newActor} setNewActor={setNewActor} />
            </Select>
          </FormControl>

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Select a Destiny Carrier Agent</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={newManageActor.destinyCarrierAgent}
              onChange={e=>setNewManageActor({ ...newManageActor, destinyCarrierAgent: e.target.value})}
              label="oringinCarrier"
            >
            {guestsSaved.filter(x=> (x.company === newManageActor.currentDestinyCarrier)).map(x=> 
              <MenuItem value={x.name}>{x.name}</MenuItem>
            )}
              <AddActorModal manageactors actors={actors} newActor={newActor} setNewActor={setNewActor} />
            </Select>
          </FormControl>
        </div>

        <div className='button'>
          <Link to={`/exportfolios/${idFolio}`}>
            <ButtonSaveGreen title={'SAVE'} functionToExecute={postManageActors} />
          </Link>
        </div>
      </div>
    </div >
  )
}

export default EFIdManageActors
