import React, { useState, useEffect } from "react";
export default function CodeCountry() {
    const [code, setCode] = useState([]);

        useEffect (() => {
            fetch ("http://ec2-18-191-177-149.us-east-2.compute.amazonaws.com/grownet/api/countries/all")
            .then ((response) => response.json ())
            .then (( {countries}) => setCode(countries));
        }, [ ]);
    return(
        <div>
            <ul>
            {code.map (countries => <p >{countries.name}</p>)}
            </ul>
            </div>
    );
}