import React from 'react';
import css from "../css/restaurants.css";
import {Icon} from '@iconify/react';
import { Link } from "react-router-dom";

export default function Restaurants() {

    return (
        <section className='restaurants'>
            <h1 className='tittle-restaurants'>Choose your restaurant</h1>
            <Link className="bttn-categ" to="/suppliers">
                <div className="text-categ">
                    <h2>Restaurant</h2>
                    <p>Address restaurant</p> 
                </div>
                <img src="http://placekitten.com/200/200" alt="logo-restaurant" className="img-categ"></img>
            </Link>
            <button className="bttn-categ">
                <div className="text-categ">
                    <h2>Restaurant</h2>
                    <p>Address restaurant</p> 
                </div>
                <img src="http://placekitten.com/200/200" alt="logo-restaurant" className="img-categ"></img>
            </button>
            <button className="bttn-categ">
                <div className="text-categ">
                    <h2>Restaurant</h2>
                    <p>Address restaurant</p> 
                </div>
                <img src="http://placekitten.com/200/200" alt="logo-restaurant" className="img-categ"></img>
            </button>
            <button className="bttn btn-primary" id='bttn-restaurant'>
                <Icon className="icon_plus" icon="simple-line-icons:plus" />Add restaurant</button>
        </section>
    )
}