import React from "react";
import img_succesful from "../img/img_succesful.png";

const ChatIntercom = () => {

  return (
    <section className="order-succesful">
      <img src={img_succesful} alt="Chat grownet" />
      <h1>Welcome to Grownet Support</h1>
      <p>An agent is on the other side waiting to talk to you.</p>
      <div className="buttons-succesful">
        <button className="bttn btn-outline" id="my-intercom">
          Open chat
        </button>
      </div>
    </section>
  );
};

export default ChatIntercom;
