import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Icon } from '@iconify/react';
import css from "../css/menu.css";

export default function Menu() {

    return (
        <Navbar>
        <Container>
        <Nav className="me-auto">
            <Nav.Link className="icons" href="#settings">
                    <Icon  icon="carbon:settings"> </Icon>
                    <Icon className="icon-active" icon="iconamoon:settings-fill"/>
                    <p>Settings</p>
                 
            </Nav.Link>
            <Nav.Link className="icons" href="#order">
                    <Icon className="" icon="streamline:shopping-cart-basket-2-shopping-basket"/>
                    <Icon className="icon-active2" icon="teenyicons:basket-solid" />
                    <p>Order</p>
            </Nav.Link>
            <Nav.Link className="icons" href="#record">
                    <Icon className="" icon="basil:invoice-outline"/>
                    <Icon className="icon-active3" icon="basil:invoice-solid" />
                    <p>Record</p>
            </Nav.Link>
            <Nav.Link className="icons" href="#chat">
                    <Icon className="" icon="solar:chat-round-dots-linear"/>
                    <Icon className="icon-active4" icon="solar:chat-round-bold" />
                    <p>Chat</p> 
            </Nav.Link>
        </Nav>
        </Container>
    </Navbar>

        
    )
}