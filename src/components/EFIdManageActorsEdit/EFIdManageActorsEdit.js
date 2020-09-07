import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './EFIdManageActorsEdit.css';
import ButtonSaveGray from '../Bottons/ButtonSaveGray';
import ButtonSaveGreen from '../Bottons/ButtonSaveGreen';



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
        <ButtonSaveGreen title={'EDIT'}/>
        <ButtonSaveGray />
      </div>

    </div>      
  </div>
      

  )
}

export default EFIdManageActorsEdit;
