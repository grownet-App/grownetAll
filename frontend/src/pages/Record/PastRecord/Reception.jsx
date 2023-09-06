import React from 'react';
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
import "../../../css/pastRecord.css";

export default function Reception() {
    return(
        <section className='past-record' >
            <div className='card-past-record'>
                <h1>Check your products</h1>
                <div>
                    <div className='product-detail'>
                        <h3>Broccoli</h3>
                        <p>50 Boxes</p>
                    </div>
                    <Link to="" className='bttn btn-primary' id='record-btn'>Leave a review</Link>
                </div>
                <div>
                    <div className='product-detail'>
                        <h3>Broccoli</h3>
                        <p>50 Boxes</p>
                    </div>
                    <Link to="" className='bttn btn-primary' id='record-btn'>Leave a review</Link>
                </div>
                <div>
                    <div className='product-detail'>
                        <h3>Broccoli</h3>
                        <p>50 Boxes</p>
                    </div>
                    <Link to="" className='bttn btn-primary' id='record-btn'>Leave a review</Link>
                </div>
            </div>
            
        </section> 
    );
}