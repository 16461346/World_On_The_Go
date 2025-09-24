import React, { use } from 'react';
import Countre from './Countre';
import './Countrys.css';

const Countrys = ({ countresPromise }) => {
    
    const countresData = use(countresPromise);
    const AllCountres = countresData.countries;
    console.log(AllCountres);

    return (
        <div>
            <h2>World On The Go : {AllCountres.length}</h2>
            <div className="countrys-grid">
                {
                    AllCountres.map(countre => (
                        <Countre 
                            countre={countre}
                            key={countre.cca3.cca3}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Countrys;
