import React, { use } from 'react';
import Countre from './Countre';

const countrys = ({countresPromise}) => {
    const countresData=use(countresPromise);
    const AllCountres=countresData.countries;
    console.log(AllCountres)
    return (
        <div>
            <h2>World On The Go :{AllCountres.length}</h2>
            {
                AllCountres.map(countre=><Countre countre={countre}
                key={countre.cca3.cca3}></Countre> )
            }
        </div>
    );
};

export default countrys;