import React from 'react';
import { Typography, makeStyles, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
      width: '100%',
      marginTop: 20,
    },
    tableRow: {
        border: 'solid',
        borderColor: '#CAF199',
    }
  });

  function createData(number, date, folioId, exportingCompany, importingCompany, status) {
    return { number, date, folioId, exportingCompany, importingCompany, status };
  }
  
  const rows = [
    createData(8, '04/09/2020', '34iu5hjytbgd345n4bjk', 'Squad Winders', 'CINLAT', 'In progress'),
    createData(7, '04/09/2020', '34iu5hjytbgd345n4bjk', 'Squad Winders', 'CINLAT', 'In progress'),
    createData(6, '04/09/2020', '34iu5hjytbgd345n4bjk', 'Squad Winders', 'CINLAT', 'In progress'),
  ];
  
const LastFolios = () => {
    const classes = useStyles();
    return ( 
            <TableContainer component={Paper} className={classes.container}>
                <Typography>Last Folios</Typography>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Folio ID</TableCell>
                        <TableCell align="right">Exporting Company</TableCell>
                        <TableCell align="right">Importing Company</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.number} className={classes.tableRow}>
                        <TableCell component="th" scope="row">
                            {row.number}
                        </TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                        <TableCell align="right">{row.folioId}</TableCell>
                        <TableCell align="right">{row.exportingCompany}</TableCell>
                        <TableCell align="right">{row.importingCompany}</TableCell>
                        <TableCell align="right">{row.status}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
     );
}
 
export default LastFolios;