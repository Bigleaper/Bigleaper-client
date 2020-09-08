import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import ViewTitle from '../components/ViewTitle/ViewTitle';
import { makeStyles, Container } from '@material-ui/core';
import ExportSteps from '../components/ExportSteps/ExportSteps';
import FloatingButton from '../components/FloatingButton/FloatingButton';
import FolioInformation from '../components/FolioInformation/FolioInformation';
import data from '../prueba';

const drawerWidth = 240;
const useStyles = makeStyles({
  container: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    display: 'flex',
    flexWrap: 'wrap',
  },
  fbutton: {
    position: 'fixed',
    bottom: 80,
    right: 20,
  }
});

const ExportFolioId = () => {
  const classes = useStyles();
  const {id} = useParams();
  let folio = data.filter((folio) => folio.FolioID === id);
  return ( 
        <Fragment>
        <Menu />
        <Header />
        <div>
            <ViewTitle title={'Export Folios'}/>
                <Container className={classes.container}>
                    <ExportSteps />
                    <div className={classes.fbutton}><FloatingButton folioid={id}/></div>
                    <FolioInformation folio={folio} />
                </Container>
        </div>
    </Fragment>
     );
}
 
export default ExportFolioId;