import React, {useState} from 'react';
import {Icon} from '@iconify/react';
import Form from 'react-bootstrap/Form';
import css from '../css/products.css'
import Stepper from '../components/Stepper';
import CategoriesMenu from '../components/CategoriesMenu'


export default function Products() {

    const[isFavorite, setIsFavorite] = useState(false); 
    const [counter, setCounter] = useState(0); 
    const addFavorite = () =>{
        console.log("Agrego a favoritos");
        setIsFavorite(true);
    }
    const removeFavorite = () =>{
        console.log("Removio de favoritos");
        setIsFavorite(false);
    }
   return(
    <section className='products'>
    <div className='tittle-products'>
        <a href=''><Icon href="https://www.google.com" src="google.com" icon="ic:round-arrow-back" className='arrow' /></a>
        <h1 className='tittle-products'>Make your order</h1> 
    </div>
    <div className='elements'>
        <img src='https://images.heb.com/is/image/HEBGrocery/002599549-1'/>
        <div>
            <div className='titlle-products'>
                <h1>Avocado</h1>
                <Icon className='heart-icon'
                icon={isFavorite ? "ph:heart-fill" : "ph:heart"}
                onClick={isFavorite ? removeFavorite : addFavorite} 
                color="#62C471" size={35} 
                underlayColor="transparent">
                </Icon>
            </div>
            <p>GBP $12</p>
            <div className='product-amount'>              
                <Stepper  counter={counter} setCounter={setCounter}/>
                <Form.Select aria-label="Default select example" placeholder='Choose the quantity'>
                    <option value="1">Each</option>
                    <option value="2">Box</option>
                    <option value="3">Kg</option>
             </Form.Select>
            </div>
        </div>
    </div>
    
    <div className='promo'>
        <h4>Promo price</h4>
        <h5>$20.9 Bag</h5>
        <Form.Check aria-label="option 1" />
    </div> 
    <CategoriesMenu/>
    </section>
   );
} 