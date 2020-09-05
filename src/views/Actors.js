import React from 'react';
import ActorsTable from '../components/ActorsTable/ActorsTable'
import ViewTitle from '../components/ViewTitle/ViewTitle';

const Actors = () => {
    return ( 
        <div>
            <ViewTitle title={'Actors'} user={'Welcome usuario'}/>
            <ActorsTable />
        </div>
     );
}
 
export default Actors;