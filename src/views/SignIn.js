import React from 'react'
import { FormControl, FormControlLabel, Input, InputAdornment, Checkbox, makeStyles } from '@material-ui/core';

import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import logo from '../images/Logo_1.png';
import './SignIn.css'
import BotonSI from '../components/Bottons/ButtonSI';
import background from '../images/bg-bigleaper.png';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${background})`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
  }
}));
const SignIn = ({user, setUser}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className='form'>
        <img src={logo} alt="logo" className='logo'/>
        <h1>Sign In</h1>
        <FormControl className='inputs'>
          <Input
            type='email'
            placeholder="Email Address *"
            startAdornment={
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            }
            onChange={e=>setUser({...user, email: e.target.value})}
          />         
          
          <Input
            type='password'
            placeholder="Password *"
            startAdornment={
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            }
            onChange={e=>setUser({...user, password: e.target.value})}
          /> 
          <div className='checkbox'>
          <FormControlLabel
            className='checkbox'
            control={
              <Checkbox
                name="checkedB"
                color="primary"
              />
            }
            label="Remember me" size='5px'
          />

          <FormControlLabel
          className='checkbox'
            control={
              <label />
            }
            label="Forgot my password"
          />
          </div>
          <div className={classes.button}>
            <BotonSI />
          </div>
          </FormControl>      

        
      </div>
    </div>

  )
}

export default SignIn;
