import React, { useEffect, useState } from 'react';

import Country from './../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))

    }, [])
    return (
        <div>
            <h1>Load Countries Data</h1>
            <h2>Available Countries:{countries.length}</h2>

            {
                countries.map(country => <Country name={country.name.common} population={country.population} flags={country.flags.png}></Country>)
            }
        </div>
    );
};

export default Countries;