import React, { Fragment } from 'react';
import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import ViewTitle from '../components/ViewTitle/ViewTitle';
import { makeStyles, Container } from '@material-ui/core';
import ExportSteps from '../components/ExportSteps/ExportSteps';
import FloatingButton from '../components/FloatingButton/FloatingButton';
import FolioInformation from '../components/FolioInformation/FolioInformation';

const drawerWidth = 240;
const useStyles = makeStyles({
  container: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    display: 'flex',
    flexWrap: 'wrap',
  },
});

const ExportFolioId = () => {
    const classes = useStyles();
    return ( 
        <Fragment>
        <Menu />
        <Header />
        <div>
            <ViewTitle title={'Export Folios'}/>
                <Container className={classes.container}>
                    <ExportSteps />
                    <FloatingButton/>
                    <FolioInformation/>
                </Container>
        </div>
    </Fragment>
     );
}
 
export default ExportFolioId;