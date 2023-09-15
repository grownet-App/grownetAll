
import React, { useRef, useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import bread_img from "../img/bread_img.png"
export default function OrderInformation() {
 
  

      const serviceId = "service_zthtpco";
      const templateId = "template_iierimt";
      const userId = "KDimKCkRePZ73euid";
      function sendCanvasAsAttachment(canvas) {
        var base64 = canvas.toDataURL({bread_img});
        emailjs.send("service_zthtpco", "template_iierimt", {
            content: base64
        });
    }
 
  


  
  return (
  
    <section className="details">
      <form onSubmit={sendCanvasAsAttachment}>
        
        <button type="submit"className="bttn btn-primary">hola</button>
  
      </form>
        </section>
  );
}