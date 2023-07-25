import React from 'react';
import { useState, useEffect } from 'react';
import css from "../css/suppliers.css";
import img_suppliers from "../img/img_suppliers.png";
import logo__foodpoint from "../img/logo__foodpoint.svg";

export default function Suppliers(props) {

    const [suppliers, setSuppliers] = useState([]);

        useEffect (() => {
            fetch ("http://5.161.211.8:88/api/providers/all")
            .then ((response) => response.json ())
            .then (( {providers}) => setSuppliers(providers));
            }, [ ]);
            
         var prueba = 1;

            
    return (
        <section className='suppliers'>
           {
            
           /* <div>
            <ul>
            {suppliers.map (providers => <p key={providers.id}>{providers.name}</p>)}
            </ul>
            </div>*/
           }
           
           
            <button className="bttn-categ" id='suppliers-categ'>
            {suppliers.filter(sup => sup.id === props.prove).map(filteredPerson => (
             <h2 className='text-supplier'>
            {filteredPerson.name}
            </h2>))}
                <img src={img_suppliers} alt="logo-restaurant" className='img-suppliers'></img>
            </button>
           

 </section>
    );
}