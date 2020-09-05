import React from 'react';
import ViewTitle from '../components/ViewTitle/ViewTitle';
import HomeContent from '../components/HomeContent/HomeContent';

const Home = () => {
    return ( 
        <>
        <ViewTitle title={'Home'} user={'Welcome usuario'} />
        <HomeContent/>
        </>
     );
}
 
export default Home;