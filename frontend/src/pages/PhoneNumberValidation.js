import axios from "axios";
import { required } from "joi";
import React, { useState } from "react";
import { button, Col, Container } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"
import { Route, useNavigate } from "react-router-dom";
import CodeOtp from "./CodeOtp";
import css from "../css/otp.css";
import InputNumber from '../components/InputNumber';
import logo_blancov2 from '../img/logo_blancov2.svg';
import Modal from 'react-bootstrap/Modal';
import {Icon} from '@iconify/react';

function PhoneNumberValidation() {
    const navigate = useNavigate();
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(true);
    const [country, setCountry] = useState('');
    const [showOtp, setShowOtp] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (value, selectedCountry) => {
        console.log(value);
        setPhoneNumber(value);
        setCountry(selectedCountry.dialCode)
        setValid(validatePhoneNumber(value));
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\d{10}$/;
        console.log(phoneNumberPattern);
        return phoneNumberPattern.test(phoneNumber);
    };

    const enviarData = (e) => {
        e.preventDefault();
        let phone = PhoneNumber;
        let phoneNumberClean = phone.split(country);
        let parseCountry = parseInt(country);
        let numero = parseInt(phoneNumberClean[1]);
        console.log(numero);
        const state = {
            form: {
                "indicador": parseCountry,
                "numero": numero
            },
            error: false,
            errorMsg: ""
        }
        console.log(state.form);
        console.log("numero enviado:", parseCountry, numero);
        let url = 'http://5.161.211.8:88/api/authentication/validateNumber';
        axios.post(url, state.form)
            .then(response => {
                console.log(response);
                console.log(response.data.mensaje);
                if (response.data.bandera === 1) {
                    setShowOtp(true);
                    handleShow(false);
                    setShowAlert(false);
                }
                else{
                    setShowAlert(true);
                    handleShow(false);
                }
            }).catch(function (error) {
                console.log(error);
            })
    };
    return (
        <Container className="text-center">
            {
                showOtp ? <CodeOtp></CodeOtp>: <><img className="img-login" src={logo_blancov2} alt="logo-Grownet"/> 
                <p><form onSubmit={enviarData}>
                <label className="text-form">
                    <p>Enter your mobile number:</p>
                    <PhoneInput
                        country={'co'}
                        value={PhoneNumber}
                        onChange={handleChange}
                        inputProps={{ required: true, }}
                        selectedCountry={country}
                    />
                </label>
                {!valid && <p></p>}
                <Col>
                    <button className="bttn btn-secundary mt-4" type="submit">Let’s Begin</button>
                </Col>
                </form></p></>
            }
            {
                showAlert ? <Modal show={show} onHide={handleClose} > 
                <section className='alerta'>
                    <Icon className="error" icon="pajamas:error" />
                    <h1>We apologize</h1>
                    <p>We didn't find the mobile number registered</p><p id='number-phone'>3214631125</p>
                    <a onClick={handleClose} id="close" >Change mobile number</a>
                    <a className='bttn btn-primary' href='/restaurants'>Register now</a>
                </section></Modal> : <></>
            }
        </Container>
    )
}
export default PhoneNumberValidation;