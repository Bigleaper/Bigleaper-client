import React from 'react';
import { makeStyles, Container, Table, TableRow, TableCell, TableBody, TableContainer, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  tablecontainer: {
    width: '55%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const createData = (name, value) => {
  return { name, value };
}

const FolioInformation = ({ actor, folio }) => {
  const classes = useStyles();
  const rows = [
    createData('Folio ID:', folio._id),
    createData('Create Date:', folio.createDate),
    createData('Create By:', folio.creator),
    createData('Counterpart:', folio.counterPart),
    // createData('Type:', folio[0].Type ),
    createData('Incoterm:', folio.incoterm),
    createData('Product Description:', folio.productDescription),
    createData('Product Amount:', folio.productAmount),
    createData('Currency:', folio.currency),
    createData('Status:', folio.status),
    createData('Delivery Address:', folio.deliveryAddress),
    createData('ZIP Code:', folio.zipCode),
    createData('Origin Country:', folio.originCountry),
    createData('Destination Country:', folio.destinationCountry),
  ];

  return (
    <Container className={classes.container}>
      <TableContainer component={Paper} className={classes.tablecontainer}>
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