import axios from "axios";
import { required } from "joi";
import React, { useState } from "react";
import { button, Col, Container } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"

function PhoneNumberValidation() {

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
        console.log(phoneNumberClean[1]);
        const state = {
            form: {
                "indicador": country,
                "numero": PhoneNumber
            },
            error: false,
            errorMsg: ""
        }
        console.log(state.form);
        console.log("numero enviado:", country, phoneNumberClean[1]);
        let url = 'http://5.161.211.8:88/api/Authentication/ValidateNumber';
        axios.post(url, state.form)
            .then(response => {
                console.log(response);
                console.log(response.data.mensaje);
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