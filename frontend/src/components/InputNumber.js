import React from 'react';
import { useState} from 'react';
import css from "../css/otp.css";

export default function InputNumber() {
    const [num, setNum] = useState('');
    const handleNumChange = event => {
      const limit = 1;
      setNum(event.target.value.slice(0, limit));
    };

    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
      if(isNaN(element.value))return false;
      setOtp([...otp.map((d, idx) =>(idx === index) ? element.value : d)]);

      //Focus next
      if(element.nextSibling){
        element.nextSibling.focus();
      }
  };
  //console.log(otp.join(""))
  
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