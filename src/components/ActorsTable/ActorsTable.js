import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles, Container, ListItemText, Table, TableRow, TableCell, TableBody, Accordion, AccordionSummary, AccordionDetails, Typography, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '45%',
    background: 'white',
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordion: {
    borderRadius: 5,
    background: '#CAF199',
  },
  avatar: {
    backgroundColor: '#26364B',
    margin: 7,
  }
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
    <Typography variant='h6'>{actor}</Typography>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Avatar className={classes.avatar}>C</Avatar>
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