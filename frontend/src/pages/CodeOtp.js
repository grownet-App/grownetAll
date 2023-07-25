import React from 'react';
import css from "../css/otp.css";
import logo_blancov2 from '../img/logo_blancov2.svg';

export default function CodeOtp() {
    
    return (
        <section className='otp'>
          <img src={logo_blancov2} alt="logo-Grownet"/>
            <h1>Enter your verification code</h1>
            <p className='text-otp'>An 4 digit code has been sent to your phone</p>
            <form action='#' className='form-otp'>
                <div className='input-field'>
                <input className='input-otp' type='number'/>
                <input className='input-otp'type='number'/>
                <input className='input-otp'type='number'/>
                <input className='input-otp' type='number'/>
            </div>
            <button className='bttn btn-secundary'>Verify & Proceed</button>
            <h2 href=''>Don't receive the OTP? <a href=''>Resend again</a></h2>
            </form>
          
        </section>
    );
}