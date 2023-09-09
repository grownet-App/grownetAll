import React, {useEffect} from "react";
import { useIntercom } from 'react-use-intercom';
import Menu from "../../components/Menu/Menu";

const Chat = () => {
    const { boot, shutdown, hide, show, update } = useIntercom();

    useEffect(() => {
        show();
    }, [boot]);
    
  return (
    <section className="">
      <h1>CHAT</h1>
      <button onClick={show}>¡Abrir el chat! ☎️</button>;
      <div id="intercom-container"></div>
      <Menu />
    </section>
  );
};

export default Chat;
