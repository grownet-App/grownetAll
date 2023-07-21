import React from 'react';
import { useState, useEffect } from 'react';
import css from "../css/suppliers.css";
import {Icon} from '@iconify/react';
import img_suppliers from "../img/img_suppliers.png";
import logo__foodpoint from "../img/logo__foodpoint.svg";
import Menu from "./menu";

export default function Suppliers() {

    const [suppliers, setSuppliers] = useState([]);

        useEffect (() => {
            fetch ("http://5.161.211.8:88/api/providers/all")
            .then ((response) => response.json ())
            .then (( {providers}) => setSuppliers(providers));
            }, [ ]);
        
    return (
        <section className='suppliers'>
           {/* <div>
            <ul>
            {suppliers.map (providers => <p key={providers.id}>{providers.name}</p>)}
            </ul>
            </div>*/
           }
            <button className="bttn-categ" id='suppliers-categ'>
            {suppliers.filter(sup => sup.id === 1).map(filteredPerson => (
             <h2 className='text-supplier'>
            {filteredPerson.name}
            </h2>))}
                <img src={img_suppliers} alt="logo-restaurant" className='img-suppliers'></img>
            </button>
            <button className="bttn-categ" id='suppliers-categ'>
            {suppliers.filter(sup => sup.id === 2).map(filteredPerson => (
             <h2 className='text-supplier'>
            {filteredPerson.name}
            </h2>))}
                <img src={img_suppliers} alt="logo-restaurant" className='img-suppliers'></img>
            </button>
            <button className="bttn-categ" id='suppliers-categ'>
            {suppliers.filter(sup => sup.id === 3).map(filteredPerson => (
             <h2 className='text-supplier'>
            {filteredPerson.name}
            </h2>))}
                <img src={img_suppliers} alt="logo-restaurant" className='img-suppliers'></img>
            </button>

            <Menu/>    

 </section>
    );
}