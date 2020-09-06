import React, { Fragment } from 'react';
import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import ViewTitle from '../components/ViewTitle/ViewTitle';
import HomeContent from '../components/HomeContent/HomeContent';

const Home = () => {
    return ( 
        <Fragment>
            <Menu />
            <Header />
            <div>
                <ViewTitle title={'Home'} user={'Welcome usuario'} />
                <HomeContent/>
            </div>
        </Fragment>
     );
}
 
export default Home;