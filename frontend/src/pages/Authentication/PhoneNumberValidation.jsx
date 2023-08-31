import axios from "axios";
import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import CodeOtp from "./CodeOtp";
import css from "../../css/otp.css";
import { Icon } from "@iconify/react";
import Modal from "react-bootstrap/Modal";
import { validationApiUrl } from "../../config/urls.config";
import logo_blancov2 from "../../img/logo_blancov2.svg";

function PhoneNumberValidation() {
  //const navigate = useNavigate();
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);
  const [country, setCountry] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  //const [userId, setUserId] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (value, selectedCountry) => {
    console.log(value);
    setPhoneNumber(value);
    setCountry(selectedCountry.dialCode);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10}$/;
    console.log(phoneNumberPattern);
    return phoneNumberPattern.test(phoneNumber);
  };
  
  //TODO insertar variables dentro de funcion enviardata cuando se cambie la prop que envio a codeOtp
  let phone = PhoneNumber;
  let phoneNumberClean = phone.split(country);
  let parseCountry = parseInt(country);
  let numero = parseInt(phoneNumberClean[1]);
  const enviarData = (e) => {
    e.preventDefault();

    console.log(numero);
    const state = {
      form: {
        countrie: parseCountry,
        telephone: numero,
      },
      error: false,
      errorMsg: "",
    };
    console.log(state.form);
    console.log("numero enviado:", parseCountry, numero);

    axios
      .post(validationApiUrl, state.form)
      .then((response) => {
        console.log('This is my response:' + response);
        if (response.data.flag === 1) {
          setShowOtp(true);
          handleShow(false);
          setShowAlert(false);
          setPhoneNumber(PhoneNumber);
          console.log('Check this phonenumber:' + numero + '  ' + PhoneNumber);
        } else {
          setShowAlert(true);
          handleShow(false);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log("Este es el celular registrado: " + PhoneNumber)
  return (
    <Container className="text-center">
      {showOtp ? (
        /* TODO idUsuario={PhoneNumber}  */
        <CodeOtp idUsuario={numero}></CodeOtp>
      ) : (
        <>
          <img className="img-login" src={logo_blancov2} alt="logo-Grownet" />
          <p>
            <form onSubmit={enviarData}>
              <label className="text-form">
                <p>Enter your mobile number:</p>
                <PhoneInput
                  country={"gb"}
                  value={PhoneNumber}
                  onChange={handleChange}
                  inputProps={{ required: true }}
                  selectedCountry={country}
                  onlyCountries={['co', 'es', 'pt', 'gb']}
                />
              </label>
              {!valid && <p></p>}
              <Col>
                <button className="bttn btn-secundary mt-4" type="submit">
                  Let’s Begin
                </button>
              </Col>
            </form>
          </p>
        </>
      )}
      {showAlert ? (
        <Modal show={show} onHide={handleClose}>
          <section className="alerta">
            <Icon className="error" icon="pajamas:error" />
            <h1>We apologize</h1>
            <p>We didn't find the mobile number registered</p>
            <p id="number-phone">{"+ " + country + " " + numero}</p>
            <a onClick={handleClose} id="close">
              Change mobile number
            </a>
            <a className="bttn btn-primary" href="/restaurants">
              Register now
            </a>
          </section>
        </Modal>
      ) : (
        <></>
      )}
    </Container>
  );
}
export default PhoneNumberValidation;