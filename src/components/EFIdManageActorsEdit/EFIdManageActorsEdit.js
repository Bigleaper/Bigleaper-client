import React, { useState, useEffect } from 'react';
import { makeStyles, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import './EFIdManageActorsEdit.css';
import ButtonSaveGray from '../Bottons/ButtonSaveGray';
import ButtonSaveGreen from '../Bottons/ButtonSaveGreen';
import tokenAuth from '../../config/tokenAuth';
import clientAxios from '../../config/axios';
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

const EFIdManageActorsEdit = ({ manageActors, idFolio, actors, newActor, setNewActor, getAllActors }) => {
  // manageActors.map(x=> console.log(Object.keys(x)))
  const classes = useStyles();
  //state to save data from selects
  const [newManageActors, setNewManageActors] = useState([])
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
  //Function to update manageActors
  const editManageActors = async () => {
    console.log('ok')
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
    // editManageActors()
    getCompanyAgents()

  }, [])

  let currentForwarder = manageActors.map(x=> x.currentForwarder)
  let currentOriginCarrier = manageActors.map(x=> x.currentOriginCarrier)
  let currentCustomsBroker = manageActors.map(x=> x.currentCustomsBroker)
  let currentDestinyCarrier = manageActors.map(x=> x.currentDestinyCarrier)

  return (
    <div className='containerGral'>
      <div className='container'>
        <div className='subtitle'>
          <h3>Export Folio / Manage Actors</h3>
        </div>
        <div className='originCarrier'>
          <h5>Current Origin Carrier:</h5>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">{currentOriginCarrier}</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={newManageActors.currentOriginCarrier}
              onChange={e=>setNewManageActors({ ...newManageActors, currentOriginCarrier: e.target.value})}
              label="oringinCarrier"
            >
            {getAllActors.filter(actor => actor.typeCompany === 'import/export').map(filteredActor => (
              <MenuItem key={filteredActor._id} value={filteredActor.companyName}>{filteredActor.companyName}</MenuItem>
            ))}
              <AddActorModal manageactors actors={actors} newActor={newActor} setNewActor={setNewActor} />
            </Select>
          </FormControl>

          <FormControl variant="outlined" className={classes.formControl}>
          {guestsSaved.filter(x=> (x.company === currentOriginCarrier[0])).map(x=> 
            <InputLabel id="demo-simple-select-outlined-label">{x.name}</InputLabel>
            )}
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={newManageActors.originCarrierAgent}
              onChange={e=>setNewManageActors({ ...newManageActors, originCarrierAgent: e.target.value})}
              label="oringinCarrier"
            >
            {guestsSaved.filter(x=> (x.company === currentOriginCarrier[0])).map(x=> 
              <MenuItem value={x.name}>{x.name}</MenuItem>
            )}
            {guestsSaved.filter(x=> (x.company === newManageActors.currentOriginCarrier)).map(x=> 
              <MenuItem value={x.name}>{x.name}</MenuItem>
            )}
              <AddActorModal manageactors actors={actors} newActor={newActor} setNewActor={setNewActor} />
            </Select>
          </FormControl>
        </div>

        <div className='currentForwarder'>
          <h5>Current Forwarder:</h5>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">{currentForwarder}</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={newManageActors.currentForwarder}
              onChange={e=>setNewManageActors({ ...newManageActors, currentForwarder: e.target.value})}
              label="forwarder"
            >
            {getAllActors.filter(actor => actor.typeCompany === 'forwarder').map(filteredActor => (
              <MenuItem key={filteredActor._id} value={filteredActor.companyName}>{filteredActor.companyName}</MenuItem>
            ))}
              <AddActorModal manageactors actors={actors} newActor={newActor} setNewActor={setNewActor} />
            </Select>
          </FormControl>

          <FormControl variant="outlined" className={classes.formControl}>
          {guestsSaved.filter(x=> (x.company === currentForwarder[0])).map(x=> 
            <InputLabel id="demo-simple-select-outlined-label">{x.name}</InputLabel>
            )}
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={newManageActors.forwarderAgent}
              onChange={e=>setNewManageActors({ ...newManageActors, forwarderAgent: e.target.value})}
              label="forwarder"
            >
            {guestsSaved.filter(x=> (x.company === currentForwarder[0])).map(x=> 
              <MenuItem value={x.name}>{x.name}</MenuItem>
            )}
            {guestsSaved.filter(x=> (x.company === newManageActors.currentForwarder)).map(x=> 
              <MenuItem value={x.name}>{x.name}</MenuItem>
            )}
              <AddActorModal manageactors actors={actors} newActor={newActor} setNewActor={setNewActor} />
            </Select>
          </FormControl>
        </div>

        <div className='customsBroker'>
          <h5>Current Origin Customs Broker:</h5>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">{currentCustomsBroker}</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={newManageActors.currentCustomsBroker}
              onChange={e=>setNewManageActors({ ...newManageActors, currentCustomsBroker: e.target.value})}
              label="originBroker"
            >
            {getAllActors.filter(actor => actor.typeCompany === 'customsBroker').map(filteredActor => (
              <MenuItem key={filteredActor._id} value={filteredActor.companyName}>{filteredActor.companyName}</MenuItem>
            ))}
              <AddActorModal manageactors actors={actors} newActor={newActor} setNewActor={setNewActor} />
            </Select>
          </FormControl>

          <FormControl variant="outlined" className={classes.formControl}>
          {guestsSaved.filter(x=> (x.company === currentCustomsBroker[0])).map(x=> 
            <InputLabel id="demo-simple-select-outlined-label">{x.name}</InputLabel>
            )}
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={newManageActors.customBrokerAgent}
              onChange={e=>setNewManageActors({ ...newManageActors, customBrokerAgent: e.target.value})}
              label="originBroker"
            >
            {guestsSaved.filter(x=> (x.company === currentCustomsBroker[0])).map(x=> 
              <MenuItem value={x.name}>{x.name}</MenuItem>
            )}
            {guestsSaved.filter(x=> (x.company === newManageActors.currentCustomsBroker)).map(x=> 
              <MenuItem value={x.name}>{x.name}</MenuItem>
            )}
              <AddActorModal manageactors actors={actors} newActor={newActor} setNewActor={setNewActor} />
            </Select>
          </FormControl>
        </div>

        <div className='destinityCarrier'>
          <h5>Current Destinity Carrier:</h5>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">{currentDestinyCarrier}</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={newManageActors.currentDestinyCarrier}
              onChange={e => setNewManageActors({ ...newManageActors, currentDestinyCarrier: e.target.value })}
              label="destinityCarrier"
            >
            {getAllActors.filter(actor => actor.typeCompany === 'carrier').map(filteredActor => (
              <MenuItem key={filteredActor._id} value={filteredActor.companyName}>{filteredActor.companyName}</MenuItem>
            ))}
              <AddActorModal manageactors actors={actors} newActor={newActor} setNewActor={setNewActor} />
            </Select>
          </FormControl>

          <FormControl variant="outlined" className={classes.formControl}>
          {guestsSaved.filter(x=> (x.company === currentDestinyCarrier[0])).map(x=> 
            <InputLabel id="demo-simple-select-outlined-label">{x.name}</InputLabel>
            )}
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={newManageActors.destinyCarrierAgent}
              onChange={e=>setNewManageActors({ ...newManageActors, destinyCarrierAgent: e.target.value})}
              label="destinityCarrier"
            >
            {guestsSaved.filter(x=> (x.company === currentDestinyCarrier[0])).map(x=> 
              <MenuItem value={x.name}>{x.name}</MenuItem>
            )}
            {guestsSaved.filter(x=> (x.company === newManageActors.currentDestinyCarrier)).map(x=> 
              <MenuItem value={x.name}>{x.name}</MenuItem>
            )}
              <AddActorModal manageactors actors={actors} newActor={newActor} setNewActor={setNewActor} />
            </Select>
          </FormControl>
        </div>


        <div className='buttons'>
          <ButtonSaveGreen title={'EDIT'} functionToExecute={editManageActors} />
        </div>
      </div>
    </div>
  )
}

export default EFIdManageActorsEdit;




// {actors.map((type,index) => 
//   <div key={index}>
//     <h5>{type}</h5>
//     <FormControl variant="outlined" className={classes.formControl}>
//     <InputLabel>Select {type}</InputLabel>
//       <Select
//         value=''
//         onChange={e => setNewManageActors({ ...newManageActors, currentOriginCarrier: e.target.value })}
//       >
//       {getAllActors.filter(actor => actor.typeCompany === type).map(filteredActor => (
//         <MenuItem key={filteredActor._id} value={filteredActor.tradeName}>{filteredActor.tradeName}</MenuItem>
//       ))}
//         <AddActorModal manageactors actors={actors} newActor={newActor} setNewActor={setNewActor} />
//       </Select>
//     </FormControl>

//     <FormControl variant="outlined" className={classes.formControl}>
//       <InputLabel>Select a {type} Agent</InputLabel>
//       <Select
//         // value={originCarrier}
//         // onChange={handleChangeCOC}
//         label="oringinCarrier"
//       >
//         <MenuItem value={'10'}>Origin Carrier</MenuItem>
//         <AddActorModal manageactors actors={actors} newActor={newActor} setNewActor={setNewActor} />
//       </Select>
//     </FormControl>
//   </div>
// )}
