import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Badge, Button } from "react-bootstrap";

const Header = () => {
  return (
    <div className="Main Header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">KEPTOWN SHOPCART</Navbar.Brand>
          <Nav className="header">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#STORE">STORE</Nav.Link>
            <Nav.Link href="#ABOUT">ABOUT</Nav.Link>
          </Nav>
          {/* <Button variant="outline-primary">CART : 0</Button>{" "} */}
          <Button variant="primary">
            Cart <Badge bg="secondary">9</Badge>
            <span className="visually-hidden">unread messages</span>
          </Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
