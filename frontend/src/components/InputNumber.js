import React from 'react';
import { useState} from 'react';
import css from "../css/otp.css";
import { Navigate } from 'react-router-dom';
import axios from "axios";

export default function InputNumber() {

    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
      if(isNaN(element.value))return false;
      setOtp([...otp.map((d, idx) =>(idx === index) ? element.value : d)]);

      //Focus next
      if(element.nextSibling){
        element.nextSibling.focus();
      }
    };
    console.log(otp.join(""))
    console.log(otp)
 
    return (
    <>
    {
      otp.map((data, index) =>{
        return <input 
          className='input-otp' 
          type='text' 
          name='otp' 
          maxLength="1"
          key={index}
          value={data}
          onChange={e => handleChange(e.target, index)}
          onFocus={e => e.target.select()}
        />
      })
    }</>
      
        
    );
}