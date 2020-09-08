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


  //const [manageActors, setManageActors] = useState([])


  const postManageActors = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      tokenAuth(token)
    }
    try {
      console.log(newManageActor);
      const response = await clientAxios.post(`/exportfolios/${id}/manageactors/`, newManageActor)
      console.log(response);
      /*setManageActors(response.data) */
    } catch (error) {
      console.log(error)
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
        <EFIdManageActors actors={actors} newActor={newActor} setNewActor={setNewActor} setNewManageActor={setNewManageActor} newManageActor={newManageActor} postManageActors={postManageActors} />
        <ExportFolioCreat idFolio={id} />
      </div>
    </Fragment>
  );
}

export default ManageActors;