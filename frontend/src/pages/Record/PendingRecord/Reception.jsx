import React, {useState} from "react";
import { Icon } from '@iconify/react';
import { Tabs, Tab, Row, Nav, Col, Form, Button } from "react-bootstrap";
import "../../../css/reception.css";
import MenuPrimary from "../../../components/Menu/MenuPrimary";

export default function Reception() {
  const [item, setItem] = useState({ kindOfStand: "", another: "another" });

  const { kindOfStand } = item;

  const handleChange = e => {
    e.persist();
    console.log(e.target.value);

    setItem(prevState => ({
      ...prevState,
      kindOfStand: e.target.value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    alert(`${kindOfStand}`);
  };
  return (
    <>
    <section className="reception">
      <h1>What went wrong?</h1>
      <div className="reception-tittle">
        <Icon id="error-icon" icon="pajamas:error" />
        <div>
          <h3>Broccoli</h3>
          <p>1 box</p> 
        </div>
        
      </div>
      
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Nav variant="pills" className="flex-column">
          <Nav.Item>
            <Nav.Link eventKey="first">Missing product</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Wrong quantity</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third">Defective</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="fourth">Other</Nav.Link>
          </Nav.Item>
        </Nav>
        <h4>Leave your comments here</h4>
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <form className="wrong-reception" controlId="kindOfStand">
            <div className="wrong-product">
                <h3>Add a comment:</h3>
                <textarea type="text"></textarea>
            </div>
            <div className="wrong-product">
                <h3>Attach photo:</h3>
                <label class="custom-file-upload">
                    <input type="file"/>
                    <Icon id="upload-icon" icon="tabler:upload"/>  Custom Upload
                </label>
            </div>
            
            <button type="submit" className="bttn btn-primary">Send</button>
            </form>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
          <form className="wrong-reception" controlId="kindOfStand">
            <div className="wrong-product">
              <h3>Enter quantity delivered:</h3>
              <div className="unit-reception">
                <input type="text" placeholder="11 total recived" required/>
                <h3>Add a comment:</h3>
                <textarea type="text"></textarea>
              </div>
            </div>
            <div className="wrong-product">
              <div id="wrong-detail">
                <h3>Send with next order</h3>
                <Form.Check value="sendNextOrder" type="radio" aria-label="radio 1" onChange={handleChange} checked={kindOfStand === "sendNextOrder"} />
              </div>
              <div id="wrong-detail">
                <h3>Credit note</h3>
                <Form.Check value="creditNote" type="radio" aria-label="radio 1" onChange={handleChange} checked={kindOfStand === "creditNote"} />
              </div>
            </div>
            <button type="submit" className="bttn btn-primary">Send</button>
            </form>
          </Tab.Pane>
          <Tab.Pane eventKey="third">
          <form className="wrong-reception" controlId="kindOfStand">
            <div className="wrong-product">
              <h3>Enter defective quantity:</h3>
              <div className="unit-reception">
                <input type="text" placeholder="11 total recived" required/>
                <h3>Add a comment:</h3>
                <textarea type="text"></textarea>
              </div>
            </div>
            <div className="wrong-product">
                <h3>Attach photo:</h3>
                <label class="custom-file-upload">
                    <input type="file" required/>
                    <Icon id="upload-icon" icon="tabler:upload"/>  Custom Upload
                </label>
            </div>
            <button type="submit" className="bttn btn-primary">Send</button>
            </form>
          </Tab.Pane>
          <Tab.Pane eventKey="fourth">
          <form className="wrong-reception" controlId="kindOfStand">
            <div className="wrong-product">
                <h3>Add a comment:</h3>
                <textarea type="text"></textarea>
            </div>
            <div className="wrong-product">
                <h3>Attach photo:</h3>
                <label class="custom-file-upload">
                    <input type="file" required/>
                    <Icon id="upload-icon" icon="tabler:upload"/>  Custom Upload
                </label>
            </div>
            <button type="submit" className="bttn btn-primary">Send</button>
            </form>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </section>
    <div className="space-menu"></div>
    <MenuPrimary/>
    </>
  );
}
