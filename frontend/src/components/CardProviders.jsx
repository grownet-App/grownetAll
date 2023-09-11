import React from 'react';
import { useState, useEffect } from 'react';
import img_providers from "../img/img_providers.png";
import logo__foodpoint from "../img/logo__foodpoint.svg";

export default function Providers(props) {

    const [providers, setProviders] = useState([]);

        useEffect (() => {
            fetch ("http://5.161.211.8:88/api/providers/" + "all")
            .then ((response) => response.json ())
            .then (( {providers}) => setProviders(providers));
        }, [ ]);
              
    return (
        <section className='providers'>
           {/*
            <div>
            <ul>
            {providers.map (providers => <p key={providers.id}>{providers.name}</p>)}
            </ul>
            </div>*/
           }
           
            <a className="bttn-categ" id='providers-categ' href='/products'>
            {providers.filter(sup => sup.id === props.prove).map(filteredPerson => (
             <h2 className='text-supplier'>
            {filteredPerson.name}
            </h2>))}
                <img src={img_providers} alt="logo-restaurant" className='img-providers'></img>
            </a>
           

 </section>
    );
}
