import { Icon } from "@iconify/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import InputNumber from "../../components/InputNumber";
import { otpApiUrl } from "../../config/urls.config";
import "../../css/otp.css";
import logo_blancov2 from "../../img/logo_blancov2.svg";

export default function CodeOtp(props) {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(20);
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleCloseError = () => setShowError(false);
  const handleShowError = () => setShowError(true);

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

  //Conexion
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const enviarData = (e) => {
    e.preventDefault();
    let id = props.idUsuario;
    let otpNumber = otp.join("");
    let countrie = props.countrie;
    const state = {
      form: {
        countrie: countrie,
        telephone: id,
        code: otpNumber,
      },
      error: false,
      errorMsg: "",
    };

    axios
      .post(otpApiUrl, state.form)
      .then((response) => {
        if (response.data.flag === 1) {
          handleShowError(false);
          navigate("/restaurants");
          console.log(response.data);
        } else {
          handleShowError(false);
          setShowAlert(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section className="otp">
      <img className="img-otp" src={logo_blancov2} alt="logo-Grownet" />
      <h1>Enter your verification code</h1>
      <p className="text-otp">An 4 digit code has been sent to your phone</p>
      <form action="#" className="form-otp">
        <div className="input-field">
          <InputNumber otp2={otp} setOtp2={setOtp}>
            {" "}
          </InputNumber>
        </div>
        <button className="bttn btn-secundary" onClick={enviarData}>
          Verify & Proceed
        </button>
        {show ? (
          <h2>
            Didn't you receive the code?<a href=""> Send again</a>
          </h2>
        ) : (
          <h2>Wait for {seconds} seconds</h2>
        )}
      </form>
      {showAlert ? (
        <Modal show={showError} onHide={handleCloseError}>
          <section className="alerta">
            <Icon className="error" icon="pajamas:error" />
            <h1>We apologize</h1>
            <p>The code you entered is wrong.</p>
            <p id="number-otp">{otp}</p>
            <button className="bttn btn-primary" onClick={handleCloseError}>
              Try again
            </button>
          </section>
        </Modal>
      ) : (
        <></>
      )}
    </section>
  );
}
