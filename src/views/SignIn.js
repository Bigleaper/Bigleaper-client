import React from 'react'
import { FormControl, FormControlLabel, Input, InputAdornment, Checkbox } from '@material-ui/core';

import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import logo from '../images/Logo_1.png';
import '../views/Styles/SignIn.css'
import BotonSI from '../components/Bottons/ButtonSI';


const SignIn = () => {


  return (
    <div className='container'>
      <div className='form'>
        <img src={logo} alt="logo" className='logo'/>
        <h1>Sign In</h1>
        <FormControl className='inputs'>
          <Input
            type='email'
            placeholder="Email Address *"
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            }
          />         
          
          <Input
            type='password'
            placeholder="Password *"
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            }
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
          <div className='button'>
            <BotonSI />
          </div>
          </FormControl>      

        
      </div>
    </div>

  )
}

export default SignIn;
