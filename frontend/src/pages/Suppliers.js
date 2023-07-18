import React from 'react';
import css from "../css/suppliers.css";
import {Icon} from '@iconify/react';
import img_suppliers from "../img/img_suppliers.png";
import logo__foodpoint from "../img/logo__foodpoint.svg";
import Menu from "../components/menu";

export default function Suppliers() {

    return (
        <section className='suppliers'>
            <div className='tittle-suppliers'>
                <a href='restaurants'><Icon href="https://www.google.com" src="google.com" icon="ic:round-arrow-back" className='arrow' /></a>
               <h1 className='tittle-restaurants'>Suppliers</h1> 
            </div>
            
            <button className="bttn-categ" id='suppliers-categ'>
                <img src={logo__foodpoint} alt="logo-restaurant" className='logo-suppliers'></img>
                <img src={img_suppliers} alt="logo-restaurant" className='img-suppliers'></img>
            </button>
            <button className="bttn-categ" id='suppliers-categ'>
                <img src={logo__foodpoint} alt="logo-restaurant" className='logo-suppliers'></img>
                <img src={img_suppliers} alt="logo-restaurant" className='img-suppliers'></img>
            </button>
            <button className="bttn-categ" id='suppliers-categ'>
                <img src={logo__foodpoint} alt="logo-restaurant" className='logo-suppliers'></img>
                <img src={img_suppliers} alt="logo-restaurant" className='img-suppliers'></img>
            </button>
            <button className="bttn-categ" id='suppliers-categ'>
                <img src={logo__foodpoint} alt="logo-restaurant" className='logo-suppliers'></img>
                <img src={img_suppliers} alt="logo-restaurant" className='img-suppliers'></img>
            </button>
            <button className="bttn-categ" id='suppliers-categ'>
                <img src={logo__foodpoint} alt="logo-restaurant" className='logo-suppliers'></img>
                <img src={img_suppliers} alt="logo-restaurant" className='img-suppliers'></img>
            </button>
            <button className="bttn-categ" id='suppliers-categ'>
                <img src={logo__foodpoint} alt="logo-restaurant" className='logo-suppliers'></img>
                <img src={img_suppliers} alt="logo-restaurant" className='img-suppliers'></img>
            </button>
            
            <Menu/>
        </section>
    )
}