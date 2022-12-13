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
                countries.map(country => console.log(country))
            }

            {
                countries.map(country => <Country
                    country={country}
                //name={country.name.common}
                // population={country.population}
                // flags={country.flags.png}
                // area={country.area}
                // capital={country.capital}
                ></Country>)
                /*ei vabe ekta ekta kore na pathiye multiple data pass kora jay. mane jodi 'country' kei pathiye dei tahole map korar somoy Attribute hisebe data lagbe na. just props theke data ber kore nilei hbe.*/
            }
        </div>
    );
};

export default Countries;