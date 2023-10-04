import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Form, Nav, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import MenuPrimary from "../../../components/Menu/MenuPrimary";
import "../../../css/reception.css";
import { useTranslation } from "react-i18next";

export default function Reception() {
  const { t } = useTranslation();
  const [item, setItem] = useState({ kindOfStand: "", another: "another" });

  const { kindOfStand } = item;

  const handleChange = (e) => {
    e.persist();
    console.log(e.target.value);

    setItem((prevState) => ({
      ...prevState,
      kindOfStand: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${kindOfStand}`);
  };
  return (
    <>
      <section className="reception">
        <div className="tittle-page">
          <Link to="/record/pendingRecord">
            {" "}
            <Icon src="google.com" icon="ic:round-arrow-back" id="arrow-icon" />
          </Link>
          <h1>{t("reception.title")}</h1>
        </div>
        <div className="reception-tittle">
          <Icon id="error-icon" icon="pajamas:error" />
          <div>
            <h3>Broccoli</h3>
            <p>1 box</p>
          </div>
        </div>

        <Tab.Container id="left-tabs-example" defaultActiveKey="second">
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="second">{t("reception.wrong")}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">{t("reception.defective")}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">{t("reception.other")}</Nav.Link>
            </Nav.Item>
          </Nav>
          <h4>{t("reception.comments")}</h4>
          <Tab.Content>
            <Tab.Pane eventKey="second">
              <form className="wrong-reception" controlId="kindOfStand">
                <div className="wrong-product">
                  <h3>{t("reception.enterQuantity")}</h3>
                  <div className="unit-reception">
                    <input
                      type="text"
                      placeholder="11 total recived"
                      required
                    />
                    <h3>{t("reception.addComent")}</h3>
                    <textarea type="text"></textarea>
                  </div>
                </div>
                <div className="wrong-product">
                  <div id="wrong-detail">
                    <h3>{t("reception.sendNextOrder")}</h3>
                    <Form.Check
                      value="sendNextOrder"
                      type="radio"
                      aria-label="radio 1"
                      onChange={handleChange}
                      checked={kindOfStand === "sendNextOrder"}
                    />
                  </div>
                  <div id="wrong-detail">
                    <h3>{t("reception.crediteNote")}</h3>
                    <Form.Check
                      value="creditNote"
                      type="radio"
                      aria-label="radio 1"
                      onChange={handleChange}
                      checked={kindOfStand === "creditNote"}
                    />
                  </div>
                </div>
                <button type="submit" className="bttn btn-primary">
                {t("reception.send")}
                </button>
              </form>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <form className="wrong-reception" controlId="kindOfStand">
                <div className="wrong-product">
                  <h3>{t("reception.defectiveQuantity")}</h3>
                  <div className="unit-reception">
                    <input
                      type="text"
                      placeholder="11 total recived"
                      required
                    />
                    <h3>{t("reception.addComent")}</h3>
                    <textarea type="text"></textarea>
                  </div>
                </div>
                <div className="wrong-product">
                  <h3>{t("reception.attachPhoto")}</h3>
                  <label class="custom-file-upload">
                    <input type="file" required />
                    <Icon id="upload-icon" icon="tabler:upload" /> {t("reception.customUpload")}
                  </label>
                </div>
                <button type="submit" className="bttn btn-primary">
                  {t("reception.send")}
                </button>
              </form>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <form className="wrong-reception" controlId="kindOfStand">
                <div className="wrong-product">
                  <h3>{t("reception.addComent")}</h3>
                  <textarea type="text"></textarea>
                </div>
                <div className="wrong-product">
                  <h3>{t("reception.attachPhoto")}</h3>
                  <label class="custom-file-upload">
                    <input type="file" required />
                    <Icon id="upload-icon" icon="tabler:upload" /> {t("reception.customUpload")}
                  </label>
                </div>
                <button type="submit" className="bttn btn-primary">
                  {t("reception.send")}
                </button>
              </form>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </section>
      <div className="space-menu"></div>
      <MenuPrimary />
    </>
  );
}
