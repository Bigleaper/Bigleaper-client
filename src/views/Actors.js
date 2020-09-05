import React from 'react';
import ActorsTable from '../components/ActorsTable/ActorsTable'
import ViewTitle from '../components/ViewTitle/ViewTitle';

const allActors = ['Origin Career', 'Custom Broker', 'Forwarder', 'Destiny Career'];

const Actors = () => {
    return ( 
        <div>
            <ViewTitle title={'Actors'} user={'Welcome usuario'}/>
            {allActors.map(actor => (<ActorsTable actor={actor}/>))}
        </div>
     );
}
 
export default Actors;