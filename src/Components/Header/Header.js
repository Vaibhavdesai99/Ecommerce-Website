import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cart from "../Cart.js/Cart";

const Header = () => {
  return (
    <div className="Main Header">
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home" style={{ fontFamily: "Merriweather" }}>
            KEPTOWN
          </Navbar.Brand>
          <Nav className="header">
            <NavLink activeClasses="active" to="/Home">
              HOME
            </NavLink>
            <NavLink to="/Store">STORE</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/ContactUs">CONTACT US</NavLink>
          </Nav>
          <Cart />
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
