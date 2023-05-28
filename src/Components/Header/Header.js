import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cart from "../Cart.js/Cart";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="Main Header">
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home" style={{ fontFamily: "Merriweather" }}>
            KEPTOWN
          </Navbar.Brand>
          <Nav
            className={
              location.pathname === "/Store" ? "header" : "headerWithoutCart "
            }
          >
            <NavLink activeClasses="active" to="/Home">
              HOME
            </NavLink>
            <NavLink to="/Store">STORE</NavLink>
            <NavLink to="/about">ABOUT</NavLink>

            <NavLink to="/ContactUs">CONTACT US</NavLink>

            <NavLink to="/LoginPage">Login</NavLink>
          </Nav>
          {location.pathname === "/Store" && <Cart />}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
