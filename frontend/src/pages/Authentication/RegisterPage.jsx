import { Container, Row, Col, Form, Button, FormGroup } from 'react-bootstrap';
import { useState, } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
//TODO Reutilizar este código para el nuevo registro

export default function RegisterPage() {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    const { firstName, lastName, email, password } = data;

    const handleSubmit = async (e) => {
        console.log("djkddhf");
        e.preventDefault();
        console.log(data);
        try {
            const url = "http://localhost:5000/register";
            const { data: res } = await axios.post(url, data);
            navigate("/providers")
            console.log(res.message);
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message)
            }
        }
    }

    return (
        <Container>
            <Row className="justify-content-md-center cont-forms">
                <Col md={{ span: 5, offset: 0 }} className='form'>
                    <h1>Registrarme</h1>
                    <Form>
                        <FormGroup>
                            <Form.Label>Nombres:</Form.Label>
                            <Form.Control required name="firstName" type="text" placeholder="Nombre" value={firstName} onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Form.Label>Apellidos:</Form.Label>
                            <Form.Control required name="lastName" type="text" placeholder="Apellidos" value={lastName} onChange={handleChange} />
                        </FormGroup>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo:</Form.Label>
                            <Form.Control required name='email' type="email" placeholder="Email" value={email} onChange={handleChange} />
                            {/* <Form.Text className="text-muted">
                            correo
                        </Form.Text> */}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control required name="password" type="password" placeholder="Contraseña" value={password} onChange={handleChange} />
                        </Form.Group>

                        <Button variant="primary" type='submit' onClick={handleSubmit}>Enviar información</Button>
                        <p>{error && <div>{error}</div>}</p>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}