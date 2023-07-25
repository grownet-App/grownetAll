import React from 'react';
import css from "../css/suppliers.css";
import {Icon} from '@iconify/react';
import Menu from "../components/menu";
import CardSuppliers from "../components/CardSuppliers.js";
import Form from 'react-bootstrap/Form';

export default function Suppliers() {
    
    return (
        <section className='suppliers'>
          <div className='tittle-suppliers'>
                <a href='restaurants'><Icon href="https://www.google.com" src="google.com" icon="ic:round-arrow-back" className='arrow' /></a>
               <h1 className='tittle-restaurants'>Suppliers</h1> 
            </div>
                <CardSuppliers prove= {1}></CardSuppliers>
                <CardSuppliers prove= {2}></CardSuppliers>
                <CardSuppliers prove= {3}></CardSuppliers>
                <div className='products'>
                    <img src='http://placekitten.com/g/140/140' className='img-product'/>
                    <div className='text-product'>
                        <h1>Avocado</h1>
                        <p>GBP $12</p>
                        <div>
                             
                        <input min="1" max="100" type="number" id="typeNumber" class="form-control" />
                        <Form.Select aria-label="Default select example" placeholder='Choose the quantity'>
                        <option value="1">Each</option>
                        <option value="2">Box</option>
                        <option value="3">Kg</option>
                        </Form.Select>
                        </div>
                    </div>
                </div>
                <Menu/>
        </section>
    );
}