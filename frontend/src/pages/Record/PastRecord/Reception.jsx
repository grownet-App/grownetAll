import React from 'react';
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
import "../../../css/pastRecord.css";

export default function Reception() {
    return(
        <section className='past-record' >
            <div>
                <h1>Reception</h1>
                <div className='product-detail'>
                    <h3>Broccoli</h3>
                    <Form.Check aria-label="option 1" /> 
                </div>
                <Link to="" className='bttn btn-primary' id='record-btn'>Leave a review</Link>
            </div>
            
        </section> 
    );
}