import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './EFIdManageActorsEdit.css';
import ButtonSaveGray from '../Bottons/ButtonSaveGray';
import ButtonSaveGreen from '../Bottons/ButtonSaveGreen';
import tokenAuth from '../../config/tokenAuth';
import clientAxios from '../../config/axios';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const EFIdManageActorsEdit = ({ manageActors }) => {

  const classes = useStyles();
  /*   const [value, setValue] = React.useState('Controlled'); */

  /*   const handleChange = (event) => {
      setValue(event.target.value);
    }; */

  const [newManageActors, setNewManageActors] = useState([])

  //Function to update manageActors
  const editManageActors = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      tokenAuth(token)
    }
    try {
      // const response = await clientAxios.put(`/exportfolios/${id}/manageactors/`, newManageActors)
      /* console.log(response);
     */
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

        <div className='originCarrier'>
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
        </div>

        <div className='buttons'>
          <ButtonSaveGreen title={'EDIT'} functionToExecute={editManageActors} />
          <ButtonSaveGray />
        </div>

      </div>
    </div>


  )
}

export default EFIdManageActorsEdit;
