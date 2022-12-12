import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='countryStyle'>
            <h2>{props.name}</h2>
            <p>Population:{props.population}</p>

            <img src={props.flags} alt="" />
        </div>
    );
};

export default Country;