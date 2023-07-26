import React from 'react';
import { useState} from 'react';
import css from "../css/otp.css";

export default function InputNumber() {
    const [num, setNum] = useState('');
    const handleNumChange = event => {
      const limit = 1;
      setNum(event.target.value.slice(0, limit));
    };
            
    return (
        <input className='input-otp' type='number' value={num} onChange={handleNumChange}/>
    );
}