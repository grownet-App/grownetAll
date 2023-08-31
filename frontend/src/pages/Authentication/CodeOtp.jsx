import React from "react";
import css from "../../css/otp.css";
import axios from "axios";
import { useEffect, useState } from "react";
import InputNumber from "../../components/InputNumber";
import { otpApiUrl } from "../../config/urls.config";
import logo_blancov2 from "../../img/logo_blancov2.svg";

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

  //Conexion
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const enviarData = (e) => {
    e.preventDefault();
    let id = props.idUsuario;
    let otpNumber = otp.join("");
    const state = {
      form: {
        telephone: id,
        code: otpNumber,
      },
      error: false,
      errorMsg: "",
    };
    console.log(state.form);

    axios.post(otpApiUrl, state.form)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        console.log(state.form)
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
    </section>
  );
}
