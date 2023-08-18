import React from 'react';
import css from "../css/otp.css";
import logo_blancov2 from '../img/logo_blancov2.svg';
import InputNumber from '../components/InputNumber';
import { useState, useEffect } from 'react';

export default function CodeOtp(props) {
  const [seconds, setSeconds] = useState(20);
  const [show, setShow] = useState(false);
  console.log(props.idUsuario);
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        setShow(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <section className='otp'>
      <img className="img-otp" src={logo_blancov2} alt="logo-Grownet" />
      <h1>Enter your verification code</h1>
      <p className='text-otp'>An 4 digit code has been sent to your phone</p>
      <form action='#' className='form-otp'>
        <div className='input-field'>
          <InputNumber> </InputNumber>
        </div>
        <button className='bttn btn-secundary'>Verify & Proceed</button>
        {show ? <h2>Didn't you receive the code?<a href=''> Send again</a></h2> : <h2>Wait for {seconds} seconds</h2>}
      </form>
    </section>
  );
}