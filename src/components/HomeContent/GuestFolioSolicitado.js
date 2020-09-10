import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
      width: '60%', 
      padding: '15px 15px 50px', 
      borderRadius: '8px',      
    },
    tableRow: {
      border: 'solid',
      borderColor: '#CAF199',
      borderRadius: '10px',
  }
  });

const createData = (FolioID, Company, Name, Status) => {
    return { FolioID, Company, Status };
  }
  
  const rows = [
    createData(2, 'Transpotes Delux', 'Jorge Estrada', 'Pnding'),

  ];

const GuestFolioSolicitado = () => {
    const classes = useStyles();
    return ( 
          <TableContainer component={Paper} className={classes.container}>
          <Typography>Folio Solicitado</Typography>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Folio ID</TableCell>
                  <TableCell align="center">Company</TableCell>
                  <TableCell align="center">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.FolioID} className={classes.tableRow}>
                    <TableCell align="center" component="th" scope="row">
                      {row.FolioID}
                    </TableCell>
                    <TableCell align="center">{row.Company}</TableCell>
                    <TableCell align="center">{row.Name}</TableCell>
                    <TableCell align="center">{row.Status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
     );
}
 
export default GuestFolioSolicitado;