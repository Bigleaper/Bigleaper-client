import React, { Fragment } from 'react';
import MenuGuest from '../components/Menu/MenuGuest';
import Header from '../components/Header/Header';
import ViewTitle from '../components/ViewTitle/ViewTitle';
import HomeContentGuest from '../components/HomeContent/HomeContentGuest';

const HomeGuest = () => {
    return ( 
        <Fragment>
            <MenuGuest />
            <Header />
            <div>
                <ViewTitle title={'Home'} user={'Welcome Guest'} />
                <HomeContentGuest/>
            </div>
        </Fragment>
     );
}
 
export default HomeGuest;