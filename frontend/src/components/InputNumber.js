import React from 'react';
import { useState} from 'react';
import css from "../css/otp.css";
import { Navigate } from 'react-router-dom';
import axios from "axios";

export default function InputNumber(props) {

    const [otp, setOtp] = useState(new Array(4).fill(""));
    const handleChange = (element, index) => {
      if(isNaN(element.value))return false;
      props.setOtp2([...props.otp2.map((d, idx) =>(idx === index) ? element.value : d)]);

      //Focus next
      if(element.nextSibling){
        element.nextSibling.focus();
      }
    };
   console.log(props.otp2.join(""))
   //console.log(otp)
   //console.log(props.idUsuario);
    return (
    <>
    {
      props.otp2.map((data, index) =>{
        return <input 
          className='input-otp' 
          type='text' 
          name='otp' 
          maxLength="1"
          key={index}
          /*value={data}*/
          onChange={e => handleChange(e.target, index)}
          onFocus={e => e.target.select()}
        />
      })
  
    }</>
      
        
    );
}