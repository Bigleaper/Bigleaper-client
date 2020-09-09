import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody, makeStyles } from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    tableHeader: {
      background: '#CAF199',
    },
  });

const ExportFoliosTable = ({folios}) => {
  console.log(folios)
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
          {folios.map((folio, index) => (
            <TableRow key={folio._id}>
                <TableCell component="th" scope="row">{index+1}</TableCell>
                <TableCell align="center">{folio.createDate}</TableCell>
                <TableCell align="center"><Link to={`/exportfolios/${folio._id}`}>{folio._id}</Link></TableCell>
                <TableCell align="center">{folio.creator}</TableCell>
                <TableCell align="center">{folio.originCountry}</TableCell>
                <TableCell align="center">{folio.counterPart}</TableCell>
                <TableCell align="center">{folio.destinationCountry}</TableCell>
                <TableCell align="center">{folio.status}</TableCell>
                <TableCell align="center">{folio.currency}</TableCell>
                <TableCell align="center">{folio.productAmount}</TableCell>
                <TableCell align="center">{folio.incoterm}</TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     );
}
 
export default ExportFoliosTable;