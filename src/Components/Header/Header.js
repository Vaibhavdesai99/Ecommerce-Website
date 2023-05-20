import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cart from "../Cart.js/Cart";
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
          <Cart />
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
