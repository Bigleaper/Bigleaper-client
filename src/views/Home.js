import React, { Fragment } from 'react';
import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import ViewTitle from '../components/ViewTitle/ViewTitle';
import HomeContent from '../components/HomeContent/HomeContent';
import useStyles from './Actors'
console.log(useStyles)

const Home = () => {
    const classes = useStyles();
    return ( 
        <Fragment>
            <Menu />
            <Header />
            <div className={classes.container}>
                <ViewTitle title={'Home'} user={'Welcome usuario'} />
                <HomeContent/>
            </div>
        </Fragment>
     );
}
 
export default Home;