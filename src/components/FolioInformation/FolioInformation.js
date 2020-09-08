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

const FolioInformation = ({actor, folio}) => {
  const classes = useStyles();
  const rows = [
    createData('Folio ID:', folio[0].FolioID ),
    createData('Create Date:', folio[0].CreateDate ),
    createData('Create By:', folio[0].CreateBy ),
    createData('Counterpart:', folio[0].Counterpart ),
    createData('Type:', folio[0].Type ),
    createData('Incoterm:', folio[0].Incoterm ),
    createData('Product Description:', folio[0].ProductDescription ),
    createData('Product Amount:', folio[0].ProductAmount ),
    createData('Currency:', folio[0].Currency ),
    createData('Status:', folio[0].Status ),
    createData('Delivery Address:', folio[0].DeliveryAddress ),
    createData('ZIP Code:', folio[0].ZIPCode ),
    createData('Origin Country:', folio[0].OriginCountry ),
    createData('Destination Country:', folio[0].DestinationCountry ),
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