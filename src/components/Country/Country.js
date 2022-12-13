import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='countryStyle'>
            <h2>Country Name:{props.country.name.common}</h2>
            <h2>Capital:{props.country.capital}</h2>
            <p>Population:{props.country.population}</p>
            <p>Area:{props.country.area}</p>

            <img src={props.country.flags.png} alt="" />
        </div>
    );
};

export default Country;