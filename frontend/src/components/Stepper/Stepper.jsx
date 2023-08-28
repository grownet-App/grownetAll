import React from 'react';
import css from './stepper.css'

export default function Stepper(props) {
    return(
    <div className='counter'>
        <button id='decrement'onClick={()=>{
            if (props.counter>0) {
                props.setCounter(props.counter-1)
            }
            }}>-</button>
        <input type='number' min={0} max={100} step={5} value={props.counter} id="my-input"/>
        <button id='increment'onClick={()=>{props.setCounter(props.counter+1)}}>+</button>
    </div>   
    )
}