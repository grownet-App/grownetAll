import React, {useState} from 'react';
import {Icon} from '@iconify/react';
import css from '../css/orderDetail.css'
import Stepper from '../components/Stepper';
import img_succesful from "../img/img_succesful.png"

export default function OrderDetails(props) {
    const [counter, setCounter] = useState(0); 
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    return(
    <section className='details'>
        <div className='tittle-detail'>
            <a href='restaurants'><Icon href="https://www.google.com" src="google.com" icon="ic:round-arrow-back" className='arrow' /></a>
            <h1 className='tittle-orderDetail'>Order detail</h1> 
        </div>
        {show ? 
        <>
        <div className='data-shipping'>
        <h3>Address</h3>
        <input></input>
        <h3>Deliver</h3>
        <input type='date'></input>
        <h3>Any special requirements?</h3>
        <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
        </div>
        <button className='bttn btn-primary' onClick={e => setShow2(true)}>Continue</button>
        {show2 ? <div className='order-succesful'>
                <img src={img_succesful}/>
                <h1>Succesful!</h1>
                <p>Your order is successful</p>
                <div>
                    <button className='bttn btn-primary'>View your orders</button>
                    <button className='bttn btn-outline'>Re-order</button>
                </div>
            </div> : <></>}
        </>
        :
        <>
            <div className='card-invoices'>
                <div>
                    <div className='product-detail'>
                        <h3>Broccoli</h3>
                        <div className='product-detail'>
                           <h3>€{2*counter}</h3>
                            <Icon id='trash' icon="ph:trash" /> 
                        </div>
                    </div>
                    <div className='product-detail'>
                    <Stepper counter={counter} setCounter={setCounter}/>
                        <p>{counter} Box/Boxes</p>
                    </div>
                </div>
                <div>
                   <h2  id='tax-font'>Payment details</h2>
                    <div className='product-detail'>
                        <h3>Tax</h3>
                        <h3>€2.82</h3>
                    </div>
                </div>
                <div className='total-detail'>
                    <h2>Current value</h2>
                    <h2>€54.11</h2>
                </div>
            </div>
            <button className='bttn btn-primary' onClick={e => setShow(true)}>Continue</button>
        </>
    }
    </section>    
    )
}