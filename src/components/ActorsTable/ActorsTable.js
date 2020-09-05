import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Container, ListItemText, Table, TableRow, TableCell, TableBody } from '@material-ui/core';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    width: '35%',
    marginLeft: drawerWidth,
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