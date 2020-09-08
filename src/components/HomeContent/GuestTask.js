import React from 'react';
import { Typography, makeStyles, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, TextField } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    container: {
      width: '100%',
      marginTop: 20,
      padding: '30px 30px 50px',
      marginBottom: '50px',
      borderRadius: '8px'
    },
    tableRow: {
        border: 'solid',
        borderColor: '#CAF199',
        borderRadius: '10px',
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
  }));

  function createData(number, date, folioId, exportingCompany, importingCompany, status) {
    return { number, date, folioId, exportingCompany, importingCompany, status };
  }
  
  const rows = [
    createData(8, '04/09/2020', '34iu5hjytbgd345n4bjk', 'Squad Winders', 'CINLAT', 'In progress'),
  ];
  
const GuestTask = () => {
    const classes = useStyles();
    return ( 
            <TableContainer component={Paper} className={classes.container}>
                <Typography>Task</Typography>
                <div>
                <TextField
                  className={classes.tableRow}
                  id=""
                  label=""
                  style={{ margin: 8 }}
                  placeholder=""
                  helperText=""
                  fullWidth
                  multiline
                  margin="normal"
                  variant="outlined"
                />
                </div>
                
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>No.</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Folio ID</TableCell>
                        <TableCell align="center">Exporting Company</TableCell>
                        <TableCell align="center">Importing Company</TableCell>
                        <TableCell align="center">Status</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.number} className={classes.tableRow}>
                        <TableCell component="th" scope="row">
                            {row.number}
                        </TableCell>
                        <TableCell align="center">{row.date}</TableCell>
                        <TableCell align="center">{row.folioId}</TableCell>
                        <TableCell align="center">{row.exportingCompany}</TableCell>
                        <TableCell align="center">{row.importingCompany}</TableCell>
                        <TableCell align="center">{row.status}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
     );
}
 
export default GuestTask;