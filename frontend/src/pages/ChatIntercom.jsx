import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import img_succesful from '../img/img_succesful.png';

const ChatIntercom = () => {
    const { t } = useTranslation();
    useEffect(() => {
        // Asegurarse de que Intercom esté cargado y abierto cuando el componente se monta
        if (window.Intercom) {
            window.Intercom('show');
        }
    }, []);

    return (
        <section className="order-succesful">
      <img src={img_succesful} alt="Chat Image" />
      <h1>{/* {t("orderSuccessful.title")} */} Bienvenido al soporte de Grownet</h1>
      <p>{/* {t("orderSuccessful.message")} */} Un agente está del otro lado esperando hablar contigo.</p>
      <div className="buttons-succesful">
        
        <button
          className="bttn btn-outline"
          id="my-intercom"
          onClick={() => window.Intercom('show')}
        >
          {/* {t("orderSuccessful.pdfButton")} */} Abrir chat de soporte
        </button>
      </div>
    </section>
    );
}

export default ChatIntercom;