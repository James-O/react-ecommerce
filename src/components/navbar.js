import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';

function Header() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#">Ecommerce Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/">home</Nav.Link>
                    <Nav.Link href="/about">about</Nav.Link>
                    <Nav.Link href="/product">products</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 rounded-pill"
                    aria-label="Search"
                    />
                </Form>

                <Nav.Link href="/login">login</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet/>
    </div>
  );
}

export default Header;

