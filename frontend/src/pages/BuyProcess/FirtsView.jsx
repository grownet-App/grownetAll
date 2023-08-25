import React from 'react';
import css from "../../css/firtsView.css";
import img_basket from '../../img/img_basket.png';
import {Icon} from '@iconify/react';

export default function FirtsView() {
    return(
        <section className='main' >
            <img src={img_basket} alt='Imagenes'/>
            <h1>You don't have restaurants</h1>
            <p>Add your restaurants to continue</p>
            <a className="bttn btn-primary" href='addRestaurants' id='bttn-restaurant'>
                <Icon className="icon_plus" icon="simple-line-icons:plus" />Add restaurant
            </a>
        </section> 
    );
}