import React, { Fragment, useState, useEffect } from 'react';
import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import ButtonNew from '../components/Bottons/ButtonNew';
import ViewTitle from '../components/ViewTitle/ViewTitle';
import { makeStyles, Container } from '@material-ui/core';
import ExportFoliosTable from '../components/ExportFoliosTable/ExportFoliosTable';
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

const ExportFolios = () => {
  const classes = useStyles();
  const [folios, setFolios] = useState([])

  const getFolios = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      tokenAuth(token)
    }
    try {
      const response = await clientAxios.get('/exportfolios')
      console.log(response);
      setFolios(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getFolios()
  }, [])

  return (
    <Fragment>
      <Menu />
      <Header />
      <div>
        <ViewTitle title={'Export Folios'} />
        <ButtonNew />
        <Container className={classes.container}>
          <ExportFoliosTable />
        </Container>
      </div>
    </Fragment>
  );
}

export default ExportFolios;