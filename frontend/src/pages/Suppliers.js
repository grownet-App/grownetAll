import React from 'react';
import css from "../css/suppliers.css";
import {Icon} from '@iconify/react';
import Menu from "../components/menu";
import CardSuppliers from "../components/CardSuppliers.js"

export default function Suppliers() {

    return (
        <section className='suppliers'>
          <div className='tittle-suppliers'>
                <a href='restaurants'><Icon href="https://www.google.com" src="google.com" icon="ic:round-arrow-back" className='arrow' /></a>
               <h1 className='tittle-restaurants'>Suppliers</h1> 
            </div>
            <CardSuppliers></CardSuppliers>
            
            
            <Menu/>
        </section>
    );
}