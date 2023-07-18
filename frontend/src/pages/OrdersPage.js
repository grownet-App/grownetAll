import NavigationMobile from "../components/NavigationMobile";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import cssChat from "../css/chat.css";

export default function OrdersPage() {
    return (
        <>
            <Container>
                <Row className="vh90">
                    <Col md={{ span: 3, offset: 0 }} className="br-1">
                        <h1>Chats</h1>
                        <Form.Control size="md" type="text" placeholder="Buscar..." />
                        <hr />
                        <div className="cont-chats">
                            <Card className="card-chat">
                                <Card.Body><Card.Img variant="left" width={50} className="pr-1" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />Proveedor</Card.Body>
                            </Card>

                        </div>
                    </Col>
                    <Col md={{ span: 9, offset: 0 }}>
                        <div className="cont-profile">
                            <Card>
                                <Card.Body className="d-flex center">
                                    <div className="info-profile">
                                        <Card.Img variant="left" width={70} className="pr-1" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
                                        <span>Proveedor</span>
                                    </div>
                                    <div className="cont-btns">
                                        <Button variant="success" className="btn btn-primary">
                                            Iniciar pedido
                                        </Button>
                                        <Button variant="default" className="btn btn-primary">
                                            Editar listado de productos
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="cont-msg">

                        </div>
                    </Col>
                </Row>
            </Container>
            <NavigationMobile />
        </>
    )
}