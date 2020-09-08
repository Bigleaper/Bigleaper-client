import React, { Fragment, useState, useEffect } from 'react';
import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import ActorsTable from '../components/ActorsTable/ActorsTable'
import ViewTitle from '../components/ViewTitle/ViewTitle';
import AddActorModal from '../components/AddActorModal/AddActorModal';
import { makeStyles } from '@material-ui/core';
import tokenAuth from '../config/tokenAuth';
import clientAxios from '../config/axios'


const drawerWidth = 240;
const useStyles = makeStyles({
  container: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 30,
  },
});

const allActors = ['import/export', 'carrier', 'forwarder', 'customsBroker'];

const Actors = () => {
  const classes = useStyles();
  const [newActor, setNewActor] = useState({
    companyName: '',
    tradeName: '',
    typeCompany: '',
    rfc: '',
    telephone: 0,
    companyAgent: '',
    email: '',
    password: '',
    address: '',
  })
  //state with actors
  const [actors, setActors] = useState([]);

  const getActors = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      tokenAuth(token)
    }
    try {
      const response = await clientAxios.get('/actors')
      console.log(response);
      setActors(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getActors()
  }, [])




  return (
    <Fragment>
      <Menu />
      <Header />
      <div>
        <ViewTitle title={'Actors'} user={'Welcome usuario'} />
        <AddActorModal actors={allActors} newActor={newActor} setNewActor={setNewActor} />
        <div className={classes.container}>
          {allActors.map((actor, index) => (<ActorsTable key={index} actor={actor} />))}
        </div>
      </div>
    </Fragment>
  );
}

export default Actors;