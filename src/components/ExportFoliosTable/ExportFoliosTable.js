import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody, makeStyles } from '@material-ui/core';
import {Link} from 'react-router-dom';
import data from '../../prueba';

const useStyles = makeStyles({
    tableHeader: {
      background: '#CAF199',
    },
  });

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
          {data.map((folio, index) => (
            <TableRow key={folio.FolioID}>
                <TableCell component="th" scope="row">{index+1}</TableCell>
                <TableCell align="center">{folio.CreateDate}</TableCell>
                <TableCell align="center"><Link to={`/exportfolios/${folio.FolioID}`}>{folio.FolioID}</Link></TableCell>
                <TableCell align="center">{folio.CreateBy}</TableCell>
                <TableCell align="center">{folio.OriginCountry}</TableCell>
                <TableCell align="center">{folio.Counterpart}</TableCell>
                <TableCell align="center">{folio.DestinationCountry}</TableCell>
                <TableCell align="center">{folio.Status}</TableCell>
                <TableCell align="center">{folio.Currency}</TableCell>
                <TableCell align="center">{folio.ProductAmount}</TableCell>
                <TableCell align="center">{folio.Incoterm}</TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     );
}
 
export default ExportFoliosTable;