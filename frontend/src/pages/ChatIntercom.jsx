import React from "react";
import img_succesful from "../img/img_succesful.png";
import "../css/chatIntercom.css";

const ChatIntercom = () => {
const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get('name');

  return (
    <section className="chat-intercom">
      <img src={img_succesful} alt="Chat grownet" />
      <h1>Welcome to Grownet Support</h1>
      <p>An agent is waiting to speak to you.</p>
        <p>Thank you Mr. {userName}. </p>
      <div className="buttons-succesful">
        <button className="bttn btn-outline" id="my-intercom">
          Open chat
        </button>
      </div>
    </section>
  );
};

export default ChatIntercom;
