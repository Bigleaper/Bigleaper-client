import React from 'react';
import { makeStyles, Container, Table, TableRow, TableCell, TableBody, TableContainer, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '62%',  
      },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const createData = (name, value) => {
    return { name, value };
}

const rows = [
  createData('Folio ID:', 'value' ),
  createData('Create Date:', 'value' ),
  createData('Create By:', 'value' ),
  createData('Counterpart:', 'value' ),
  createData('Type:', 'value' ),
  createData('Incoterm:', 'value' ),
  createData('Product Description:', 'value' ),
  createData('Product Amount:', 'value' ),
  createData('Currency:', 'value' ),
  createData('Status:', 'value' ),
  createData('Delivery Address:', 'value' ),
  createData('ZIP Code:', 'value' ),
  createData('Origin Country:', 'value' ),
  createData('Destination Country:', 'value' ),
];

const FolioInformation = ({actor}) => {
  const classes = useStyles();

  return (
    <Container>
        <TableContainer component={Paper} className={classes.container}>
          <Table aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Container>
  );
}

export default FolioInformation;