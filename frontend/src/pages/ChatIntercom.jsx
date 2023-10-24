import React, { useEffect } from 'react';

const ChatIntercom = () => {
    useEffect(() => {
        // Asegurarse de que Intercom esté cargado y abierto cuando el componente se monta
        if (window.Intercom) {
            window.Intercom('show');
        }
    }, []);

    return (
        <div>
            <h1>Bienvenido al soporte de Grownet</h1>
            <p>Haz clic en el chat en la esquina inferior para empezar a conversar con nosotros.</p>
            {/* Si deseas un botón personalizado para abrir el chat: */}
            <button id="my-intercom" onClick={() => window.Intercom('show')}>
                Abrir chat de soporte
            </button>
        </div>
    );
}

export default ChatIntercom;
