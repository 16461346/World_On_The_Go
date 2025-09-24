import React from 'react';

const countre = ({countre}) => {
      const boxStyle = {
        padding:'20px',
        textAlign:"center",
        border: "2px solid greenyellow",
    };
     const currencyCode = Object.keys(countre.currencies.currencies)[0]; 
    return (
        <div style={boxStyle}>
            <img src={countre.flags.flags.png} alt="" />
            <h3>Name : {countre.name.common}</h3>
            <h3>Capital : {countre.capital.capital[0]}</h3>
            <h4>Region :  {countre.region.region}</h4>
            <h4>Currence : {currencyCode}</h4>
        </div>
    );
};

export default countre;