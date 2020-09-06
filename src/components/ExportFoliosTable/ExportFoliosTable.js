import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    tableHeader: {
      background: '#CAF199',
    },
  });

const createData = (number, creationDate, folioId, expCompany, expCountry, impCompany, impCountry, status, sumary, expenses, incotermRiskStatus) => {
    return { number, creationDate, folioId, expCompany, expCountry, impCompany, impCountry, status, sumary, expenses, incotermRiskStatus };
  }
  
  const rows = [
    createData(1, '04/04/2020', '4U5H6HJYN45N6J', 'Exportadora M', 'MX', 'Importadora US', 'US', 'Accepted', 'Sumary', 'Expenses', 'Exporter'),
    createData(2, '04/04/2020', '4U5YN45JK76N6J', 'Exportadora M', 'MX', 'Importadora US', 'US', 'Accepted', 'Sumary', 'Expenses', 'Exporter'),
    createData(3, '04/04/2020', '4U5H6HN6JPLK54', 'Exportadora M', 'MX', 'Importadora US', 'US', 'Accepted', 'Sumary', 'Expenses', 'Exporter')
  ];

const ExportFoliosTable = () => {
    const classes = useStyles();
    return ( 
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
          {rows.map((row) => (
            <TableRow key={row.folioId}>
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell align="center">{row.creationDate}</TableCell>
              <TableCell align="center">{row.folioId}</TableCell>
              <TableCell align="center">{row.expCompany}</TableCell>
              <TableCell align="center">{row.expCountry}</TableCell>
              <TableCell align="center">{row.impCompany}</TableCell>
              <TableCell align="center">{row.impCountry}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.sumary}</TableCell>
              <TableCell align="center">{row.expenses}</TableCell>
              <TableCell align="center">{row.incotermRiskStatus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     );
}
 
export default ExportFoliosTable;