import React, { Fragment, useState, useEffect } from 'react';
import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import ViewTitle from '../components/ViewTitle/ViewTitle';
import EFIdManageActors from '../components/EFIdManageActors/EFIdManageActors';
import ExportFolioCreat from './ExportFolioCreat';
import { makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import tokenAuth from '../config/tokenAuth';
import clientAxios from '../config/axios'

const drawerWidth = 240;
const useStyles = makeStyles({
  container: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    display: 'flex',
    flexWrap: 'wrap',
  },
});
  //state with actors
  const [getAllActors, setGetAllActors] = useState([]);
  const getActors = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      tokenAuth(token)
    }
    try {
      const response = await clientAxios.get('/actors')
      console.log(response);
      setGetAllActors(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getActors()
  }, [])

const ManageActors = ({ actors, newActor, setNewActor }) => {
  const classes = useStyles();
  const { id } = useParams();
  console.log(id)
  //State where the info from selects will be save in DB
  const [newManageActor, setNewManageActor] = useState({
    currentOriginCarrier: '',
    currentForwarder: '',
    currentCustomsBroker: '',
    currentDestinyCarrier: ''
  })


  const [statusActorsFolio, setStatusActorsFolio] = useState(false)


  const getActorsFolio = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      tokenAuth(token)
    }
    try {
      const response = await clientAxios.get(`/exportfolios/${id}/manageactors`)
      console.log(response.data);
      if (response.data.length !== 0) {
        setStatusActorsFolio(true)
      }
    } catch (error) {
      console.log(error.response)
    }
  }

  getActorsFolio()

  //const [manageActors, setManageActors] = useState([])
  const { currentOriginCarrier, currentForwarder, currentCustomsBroker, currentDestinyCarrier } = newManageActor

  const postManageActors = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      tokenAuth(token)
    }
    try {
      console.log(newManageActor);
      if (currentOriginCarrier !== '' || currentForwarder !== '' || currentCustomsBroker !== '' || currentDestinyCarrier !== '') {
        console.log('holi');
        const response = await clientAxios.post(`/exportfolios/${id}/manageactors`, newManageActor)
        console.log(response);
        /*setManageActors(response.data) */
        return
      }
      console.log('state vacío')
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    postManageActors()
  }, [])

  return (
    <Fragment>
      <Menu />
      <Header />
      <ViewTitle title={'Export Folios'} user={'Folio Creation / Manage Actors'} />
      <div className={classes.container}>
        {statusActorsFolio ? (
          <ExportFolioCreat idFolio={id} actors={actors} newActor={newActor} setNewActor={setNewActor} getAllActors={getAllActors}/>
        ) : (
            <EFIdManageActors actors={actors} newActor={newActor} setNewActor={setNewActor} setNewManageActor={setNewManageActor} newManageActor={newManageActor} postManageActors={postManageActors} getAllActors={getAllActors}/>
          )}


      </div>
    </Fragment>
  );
}

export default ManageActors;