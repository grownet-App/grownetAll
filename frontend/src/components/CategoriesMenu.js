import React from 'react';
import css from '../css/categoriesMenu.css'
import {Icon} from '@iconify/react';
import broccoli_img from '../img/broccoli_img.png'
import {Nav, Navbar} from 'react-bootstrap';

export default function Prueba() {
   
    return(
        <section className='menu-categories me-auto'>
        <div className='contenido'>
            <div className='carousel-categ'>
                <article className='card-products'>
                    <Icon icon="solar:heart-bold" className='fav' />
                    <h6>Favourites</h6>
                </article>
                <article className='card-products'>
                    <img src={broccoli_img}/>
                    <h6>Vegetables</h6>
                </article>
                <article className='card-products'>
                    <img src={broccoli_img}/>
                    <h6>Fruit</h6>
                </article>
                <article className='card-products'>
                    <img src={broccoli_img}/>
                    <h6>Bread</h6>
                </article>
                <article className='card-products'>
                    <img src={broccoli_img}/>
                    <h6>Meat</h6>
                </article>
                <article className='card-products'>
                    <img src={broccoli_img}/>
                    <h6>Fruit</h6>
                </article>
                <article className='card-products'>
                    <img src={broccoli_img}/>
                    <h6>Fruit</h6>
                </article>
                <article className='card-products'>
                    <img src={broccoli_img}/>
                    <h6>Fruit</h6>
                </article>
            </div>
            
        </div>
        <a className='bttn btn-primary' href='/details'>Continue</a>
        </section>
    )
}