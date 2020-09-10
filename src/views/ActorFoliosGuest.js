import React, { Fragment, useState, useEffect } from 'react';
import MenuGuest from '../components/Menu/MenuGuest';
import Header from '../components/Header/Header';
import ButtonNew from '../components/Bottons/ButtonNew';
import ViewTitle from '../components/ViewTitle/ViewTitle';
import ExportFoliosTable from '../components/ExportFoliosTable/ExportFoliosTable';
import tokenAuth from '../config/tokenAuth';
import clientAxios from '../config/axios'
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody, makeStyles, Container } from '@material-ui/core';


const drawerWidth = 240;
const useStyles = makeStyles({
  container: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    display: 'flex',
    flexWrap: 'wrap',
  },
  tableHeader: {
    background: '#CAF199',
  },
});

const ActorFoliosGuest = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <MenuGuest />
      <Header />
      <div>
        <ViewTitle title={'Actor Folios'} user={'Welcome Guest'}/>
        <Container className={classes.container}>
        <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead className={classes.tableHeader}>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="center">Creation Date</TableCell>
            <TableCell align="center">Folio ID</TableCell>
            <TableCell align="center">Exporting Company</TableCell>
            <TableCell align="center">Exporting Country</TableCell>
            <TableCell align="center">Importing Company</TableCell>
            <TableCell align="center">Importing Country</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Sumary</TableCell>
            <TableCell align="center">Expenses</TableCell>
            <TableCell align="center">Incoterm Risk Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
  
            <TableRow>
                <TableCell component="th" scope="row">1</TableCell>
                <TableCell align="center">06/08/2019</TableCell>
                <TableCell align="center">239h12xfkufjydgsfu</TableCell>
                <TableCell align="center">4565798067</TableCell>
                <TableCell align="center">US6394767</TableCell>
                <TableCell align="center">Importadora US(Importer)</TableCell>
                <TableCell align="center">Colombia</TableCell>
                <TableCell align="center">Accepted</TableCell>
                <TableCell align="center">USD</TableCell>
                <TableCell align="center">1000</TableCell>
                <TableCell align="center">DPU DestinyCountry</TableCell>
              </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
         {/*  <ExportFoliosTable /> */}
        </Container>
      </div>
    </Fragment>
  );
}

export default ActorFoliosGuest;