import axios from "axios";
import { required } from "joi";
import React, { useState } from "react";
import { button, Col, Container } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"
import { Route, useNavigate } from "react-router-dom";



function PhoneNumberValidation() {
    const navigate = useNavigate();
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(true);
    const [country, setCountry] = useState('');

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
        let url = 'http://5.161.211.8:88/api/Authentication/ValidateNumber';
        axios.post(url, state.form)
            .then(response => {
                console.log(response);
                console.log(response.data.mensaje);
                if (response.data.bandera === 1) {
                    navigate("/codeOtp")
                }
            }).catch(function (error) {
                console.log(error);
            })
    };

    return (
        <Container className="text-center">
            <form onSubmit={enviarData}>
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
            </form>
        </Container>
    )
}
export default PhoneNumberValidation;