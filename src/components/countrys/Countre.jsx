import React, { useState } from 'react';
import './Countrys.css'

const countre = ({countre,handelVisitedCountrys}) => {
     
     const currencyCode = Object.keys(countre.currencies.currencies)[0]; 
     // eslint-disable-next-line react-hooks/rules-of-hooks
     const [Visited, setVisited]=useState(false);

     const handleVisited=()=>{
        //Besic System-----
        // if(Visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        //Second System----
        // setVisited(Visited ? false :true)

        //Advance And Most Use System---
        setVisited(!Visited)
        handelVisitedCountrys(countre)
     }
    return (
        <div className={`visited ${Visited ? 'visited-color' :"boxStyle"}`}>
            <img src={countre.flags.flags.png} alt="" />
            <h3>Name : {countre.name.common}</h3>
            <h3>Capital : {countre.capital.capital[0]}</h3>
            <h4>Region :  {countre.region.region}</h4>
            <p>Currence : {currencyCode}</p>
              <p>Area : { countre.area.area>300000 ? "Big Country" : "Small Country"}</p>
              <button onClick={handleVisited}>
                {
                    Visited ? "Visited" : "Not Visited"
                }
              </button>
        </div>
    );
};

export default countre;