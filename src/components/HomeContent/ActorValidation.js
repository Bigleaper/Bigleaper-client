import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
      width: '56%',
      borderRadius: '8px',
      padding: 30, 
    },
  });

const createData = (Actor, SupportAgent, Status) => {
    return { Actor, SupportAgent, Status };
  }
  
  const rows = [
    createData('Actor1', 'Support Agent', 'Status'),
    createData('Actor2', 'Support Agent', 'Status'),
  ];

const ActorValidation = () => {
    const classes = useStyles();
    return ( 
          <TableContainer component={Paper} className={classes.container}>
          <Typography variant='h6'>Actor Validation</Typography>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Actor</TableCell>
                  <TableCell align="right">Support Agent</TableCell>
                  <TableCell align="right">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.Actor}>
                    <TableCell component="th" scope="row">
                      {row.Actor}
                    </TableCell>
                    <TableCell align="right">{row.SupportAgent}</TableCell>
                    <TableCell align="right">{row.Status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
     );
}
 
export default ActorValidation;