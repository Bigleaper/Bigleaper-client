import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import ViewTitle from '../components/ViewTitle/ViewTitle';
import { makeStyles, Container } from '@material-ui/core';
import ExportSteps from '../components/ExportSteps/ExportSteps';
import FloatingButton from '../components/FloatingButton/FloatingButton';
import FolioInformation from '../components/FolioInformation/FolioInformation';
import data from '../prueba';
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
  fbutton: {
    position: 'fixed',
    bottom: 80,
    right: 20,
  }
});

const ExportFolioId = () => {
  const classes = useStyles();
  const { id } = useParams();
  //let folio = data.filter((folio) => folio.FolioID === id);

  const [folio, setFolio] = useState([])
  console.log(folio)

  const getFolio = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      tokenAuth(token)
    }
    try {
      const response = await clientAxios.get(`/exportfolios/${id}`)
      console.log(response);
      setFolio(response.data)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    getFolio()
  }, [])


  return (
    <Fragment>
      <Menu />
      <Header />
      <div>
        <ViewTitle title={'Export Folios'} />
        <Container className={classes.container}>
          <ExportSteps />
          <div className={classes.fbutton}><FloatingButton folioid={id} /></div>
          <FolioInformation folio={folio} />
        </Container>
      </div>
    </Fragment>
  );
}

export default ExportFolioId;