import React from 'react';
import css from "../../css/settingsRestaurants.css";
import {Icon} from '@iconify/react';
import Menu from "../../components/Menu/Menu";

export default function SettingsRestaurants() {
    return(
        <section className='setting-restaurants'>
            <span></span>
            <h1>Your restaurants</h1>
            <div className='name-restaurant'>
                <button className='bttn btn-secundary'><Icon icon="ep:arrow-left-bold" /></button>
                <img src='https://placehold.co/300'/>
                <button className='bttn btn-secundary'><Icon icon="ep:arrow-right-bold" /></button>
            </div>
            <h2>Name restaurant</h2>
            <div className='users'>
                <img src='https://placehold.co/100'/>
                <div>
                    <h4>Paula Vanegas</h4>
                    <p>Admin test</p>
                </div>
            </div>
            <div className='users'>
                <img src='https://placehold.co/100'/>
                <div>
                    <h4>Paula Vanegas</h4>
                    <p>Admin test</p>
                </div>
            </div>
            <button className='bttn btn-primary'>Edit Restaurant</button>
            <Menu/>
        </section> 
    );
}