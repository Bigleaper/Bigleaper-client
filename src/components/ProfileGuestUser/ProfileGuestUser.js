import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './ProfileGuestUser.css';
import ButtonSaveGreen from '../Bottons/ButtonSaveGreen';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
}));

const ProfileGuestUser = () => {

  const classes = useStyles();

  return (
    <div className={classes.root} className='containerGral'>
      <div className='container'>
        <div className='subtitle'>
          <h3>Guest Profile</h3>
        </div>

        <div className='name'>
          <h5>Name:</h5>
          <form className={classes.root} noValidate autoComplete="off">
            <div className='fields'>
              <div className='field_1'>
                <TextField
                  id="outlined-textarea"
                  label="Name"
                  variant="outlined"
                  size="small"
                />
              </div>
            </div>
          </form>
        </div>

        <div className='email'>
          <h5>Email:</h5>
          <form className={classes.root} noValidate autoComplete="off">
            <div className='fields'>
              <div className='field_1'>
                <TextField
                  id="outlined-textarea"
                  type="email"
                  label="Email"
                  variant="outlined"
                  size="small"
                />
              </div>
            </div>
          </form>
        </div>

        <div className='user'>
          <h5>User:</h5>
          <form className={classes.root} noValidate autoComplete="off">
            <div className='fields'>
              <div className='field_1'>
                <TextField
                  id="outlined-textarea"
                  label="User"
                  variant="outlined"
                  size="small"
                />
              </div>
            </div>
          </form>
        </div>

        <div className='buttons'>
          <ButtonSaveGreen title={'SHARE USER'} />
        </div>

      </div>
     
     
      <div className='container'>
        <div className='subtitle'>
          <h3>Change Password</h3>
        </div>

        <div className='password'>
          <form className={classes.root} noValidate autoComplete="off">
            <div className='fields'>
              <div className='field_1'>
                <TextField
                  id="outlined-textarea"
                  type="password"
                  label="Current password *"
                  variant="outlined"
                  size="small"
                />
              </div>
            </div>
          </form>
        </div>

        <div className='password'>
          <h5></h5>
          <form className={classes.root} noValidate autoComplete="off">
            <div className='fields'>
              <div className='field_1'>
                <TextField
                  id="outlined-textarea"
                  type="password"
                  label="New password *"
                  variant="outlined"
                  size="small"
                />
              </div>
            </div>
          </form>
        </div>

        <div className='password'>
          <form className={classes.root} noValidate autoComplete="off">
            <div className='fields'>
              <div className='field_1'>
                <TextField
                  id="outlined-textarea"
                  label="Confirm password *"
                  variant="outlined"
                  size="small"
                />
              </div>
            </div>
          </form>
        </div>

        <div className='buttons'>
          <ButtonSaveGreen title={'SAVE'} />
        </div>

      </div>
    </div>


  )
}

export default ProfileGuestUser;
