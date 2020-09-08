import React, { Fragment, useEffect, useState } from 'react';
import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import ViewTitle from '../components/ViewTitle/ViewTitle';
import EFIdManageActorsEdit from '../components/EFIdManageActorsEdit/EFIdManageActorsEdit'
import { makeStyles } from '@material-ui/core';
import tokenAuth from '../config/tokenAuth';
import clientAxios from '../config/axios';


const drawerWidth = 240;
const useStyles = makeStyles({
  container: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    display: 'flex',
    flexWrap: 'wrap',
  },
});
const ExportFolioCreat = ({ idFolio }) => {
  const classes = useStyles();

  const [manageActors, setManageActors] = useState([])

  const getManageActors = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      tokenAuth(token)
    }
    try {
      const response = await clientAxios.get(`/exportfolios/${idFolio}/manageactors/`)
      console.log(response);
      setManageActors(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getManageActors()
  }, [])



  return (
    <Fragment>
      <Menu />
      <Header />
      <ViewTitle title={'Export Folios'} user={'Folio Creation / Manage Actors'} />
      <div className={classes.container}>
        <EFIdManageActorsEdit manageActors={manageActors} />
      </div>
    </Fragment>
  );
}

export default ExportFolioCreat;