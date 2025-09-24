import React, { use, useState } from 'react';
import Countre from './Countre';
import './Countrys.css';

const Countrys = ({ countresPromise }) => {
    const [visitedCountrys, setVisitedCountrys]=useState([]);
    const handelVisitedCountrys=(countre)=>{
        console.log("visited Country is cliked",countre)
    }
    
    const countresData = use(countresPromise);
    const AllCountres = countresData.countries;
    console.log(AllCountres);

      const headStyle = {
        textAlign: "center",
        margin: "0 auto",
        padding: "10px 0",
        color: "White   "
    };

    return (
        <div>
            <h2 style={headStyle}>World On The Go : {AllCountres.length}</h2>
            <h3>Total Visited Country : </h3>
            <div className="countrys-grid">
                {
                    AllCountres.map(countre => <Countre
                      countre={countre}
                         key={countre.cca3.cca3}
                         handelVisitedCountrys={handelVisitedCountrys}></Countre>)
                }
            </div>
        </div>
    );
};

export default Countrys;
