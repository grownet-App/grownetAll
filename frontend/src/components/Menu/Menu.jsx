import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Icon } from '@iconify/react';
import "./menu.css";
import { Link } from "react-router-dom"

export default function Menu() {

    return (
        <Navbar>
        <Container className='menu'>
        <Nav className="me-auto">
            <Nav.Link className="icons">
                <Link to="/settings">
                    <Icon  icon="carbon:settings"> </Icon>
                    <Icon className="icon-active" icon="iconamoon:settings-fill"/>
                    <p>Settings</p>
                 </Link>
            </Nav.Link>
            <Nav.Link className="icons" href="/suppliers">
                    <Icon className="" icon="streamline:shopping-cart-basket-2-shopping-basket"/>
                    <Icon className="icon-active2" icon="teenyicons:basket-solid" />
                    <p>Order</p>
            </Nav.Link>
            <Nav.Link className="icons" href="/record">
                    <Icon className="" icon="basil:invoice-outline"/>
                    <Icon className="icon-active3" icon="basil:invoice-solid" />
                    <p>Record</p>
            </Nav.Link>
            <Nav.Link className="icons" href="" id='my-intercom'>
                    <Icon className="" icon="solar:chat-round-dots-linear"/>
                    <Icon className="icon-active4" icon="solar:chat-round-bold" />
                    <p>Chat</p> 
            </Nav.Link>
        </Nav>
        </Container>
    </Navbar>

        
    )
}
