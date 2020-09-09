import React from 'react'
import { FormControl, FormControlLabel, Input, InputAdornment, Checkbox, makeStyles, useRadioGroup } from '@material-ui/core';


const ProfileGuestUser = () => {
  return (
    <div>
      <FormControl className='inputs'>
          <Input
            type='email'
            placeholder="Email Address *"
          />

          <Input
            type='password'
            placeholder="Password *"
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

        </FormControl>
      
    </div>
  )
}

export default ProfileGuestUser;
