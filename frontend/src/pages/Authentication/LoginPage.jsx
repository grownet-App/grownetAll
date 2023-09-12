import { Icon } from "@iconify/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { onlyCountries, validationApiUrl } from "../../config/urls.config";
import "../../css/login.css";
import "../../css/otp.css";
import logo_blancov2 from "../../img/logo_blancov2.svg";
import CodeOtp from "./CodeOtp";

function Login() {
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [showOtp, setShowOtp] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [show, setShow] = useState(false);
  //TODO ELIMINAR ESTE OTP CODE, ES SOLO PARA VER EL CODIGO EN PANTALLA
  const [otpCode, setOtpCode] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get(onlyCountries)
      .then((response) => {
        const countriesData = response.data.countries;
        const countryNames = countriesData.map((country) => country.short_name);
        setCountries(countryNames);
      })
      .catch((error) => {
        console.error("Error obteniendo los paises disponibles:", error);
      });
  }, []);

  const handleChange = (value, selectedCountry) => {
    setPhoneNumber(value);
    setCountry(selectedCountry.dialCode);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  let phone = PhoneNumber;
  let phoneNumberClean = phone.split(country);
  let parseCountry = parseInt(country);
  let numero = parseInt(phoneNumberClean[1]);

  const enviarData = (e) => {
    e.preventDefault();
    const state = {
      form: {
        countrie: parseCountry,
        telephone: numero,
      },
      error: false,
      errorMsg: "",
    };

    axios
      .post(validationApiUrl, state.form)
      .then((response) => {
        if (response.data.flag === 1) {
          //TODO ELIMINAR ESTE SETOTP, SOLO PARA MOSTRAR CODIGO EN PANTALLA
          setOtpCode(response.data.code);
          setShowOtp(true);
          handleShow(false);
          setShowAlert(false);
          setPhoneNumber(PhoneNumber);
//TODO QUITAR ESTE CONSOLE LOG CUANDO YA LLEGUEN LOS MENSAJES POR TWILIO
          console.log("Respuesta con CODIGO TWILIO:", response.data);
        } else {
          setShowAlert(true);
          handleShow(false);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  
  const resendCode = (e) => {
    enviarData(e);
  };

  return (
    <section className="login">
      <div className="login-form">
      <Container className="text-center">
      {showOtp ? (
        <CodeOtp idUsuario={numero} countrie={country} onResendCode={resendCode} code={otpCode}></CodeOtp>
      ) : (
        <>
          <img className="img-login" src={logo_blancov2} alt="logo-Grownet" />
            <form onSubmit={enviarData}>
              <label className="text-form">
                <p>Enter your mobile number:</p>
                {countries && countries.length > 0 ? (
                  <PhoneInput
                    country={"gb"}
                    value={PhoneNumber}
                    onChange={handleChange}
                    inputProps={{ required: true }}
                    selectedCountry={country}
                    onlyCountries={countries}
                  />
                ) : null}
              </label>
              {!valid && <p></p>}
              <Col>
                <button className="bttn btn-secundary" type="submit">
                  Let’s Begin
                </button>
              </Col>
            </form>
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
        <h2 href="">
          Don't have an account? <a href="/register">Sign Up</a>
        </h2>
      </div>
    </section>
  );
}

export default Login;