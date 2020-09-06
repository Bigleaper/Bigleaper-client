import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles, Container, ListItemText, Table, TableRow, TableCell, TableBody, Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    width: '35%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function createData(name, value) {
  return { name, value };
}

const rows = [
  createData('Actor number:', 'value' ),
  createData('Company:', 'value' ),
  createData('RFC:', 'value' ),
  createData('Telephone:', 'value' ),
  createData('Email:', 'value' ),
  createData('Address:', 'value' ),
  createData('Status:', 'value' ),

];

const ActorsTable = ({actor}) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
    <Typography>{actor}</Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ListItemText primary="Tradename" secondary="Company Agent" />
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}

export default ActorsTable;