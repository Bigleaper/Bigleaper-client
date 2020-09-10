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
    marginBottom: 12,
  },
  avatar: {
    backgroundColor: '#26364B',
    margin: 7,
  },
}));

const ActorsTable = ({actor, getAllActors}) => {
  const classes = useStyles();
  const filtered = getAllActors.filter(a => a.typeCompany === actor)

  return (
    <Container className={classes.root}>
    <Typography variant='h6'>{actor}</Typography>
      {filtered.map(ac => 
        <Accordion key={ac._id} className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Avatar className={classes.avatar}>C</Avatar>
          <ListItemText primary={ac.tradeName} secondary={ac.companyAgent} />
        </AccordionSummary>
        <AccordionDetails>
          <table>
            <tr><th>Actor number: </th><td>{ac._id}</td></tr>
            <tr><th>Company: </th><td>{ac.companyName}</td></tr>
            <tr><th>RFC: </th><td>{ac.rfc}</td></tr>
            <tr><th>Telephone: </th><td>{ac.telephone}</td></tr>
            <tr><th>Email: </th><td>{ac.email}</td></tr>
            <tr><th>Address: </th><td>{ac.address}</td></tr>
            <tr><th>Status: </th><td>{ac.status}</td></tr>
          </table>
        </AccordionDetails>
      </Accordion>)}
    </Container>
  );
}

export default ActorsTable;