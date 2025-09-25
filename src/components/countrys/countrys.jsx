import React, { use, useState } from 'react';
import Countre from './Countre';
import './Countrys.css';
import countre from './Countre';

const Countrys = ({ countresPromise }) => {
    const [visitedCountrys, setVisitedCountrys]=useState([]);
    const handelVisitedCountrys=(countre)=>{
        console.log("visited Country is cliked",countre);
        const newVisitedCountrys=[...visitedCountrys,countre];
        setVisitedCountrys(newVisitedCountrys)
    }
    const [visitedFlag, setVisitedFlag]=useState([]);
    const handelVisitedFlag=(flag)=>{
        const newVisitedFlag=[...visitedFlag,flag]
        setVisitedFlag(newVisitedFlag)
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
            <h3>Total Visited Country : {visitedCountrys.length}</h3>
           <h3>Visited Countire Name :  <ol>
                {
                    visitedCountrys.map(countre=><li
                    key={countre.cca3.cca3}>{countre.name.common}</li>)
                }
            </ol></h3>
            <div className='flag'>{
                visitedFlag.map((flag,index)=><img key={index} src={flag}></img>)
                }</div>
            <div className="countrys-grid">
                {
                    AllCountres.map(countre => <Countre
                      countre={countre}
                         key={countre.cca3.cca3}
                        handelVisitedCountrys={handelVisitedCountrys}handelVisitedFlag={handelVisitedFlag}></Countre>)
                }
            </div>
        </div>
    );
};

export default Countrys;
