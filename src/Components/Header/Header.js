import React, { useContext } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cart from "../Cart.js/Cart";
import { useLocation } from "react-router-dom";
import AuthContext from "../Store/AuthContext";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const location = useLocation();

  const Logout = () => {
    authCtx.logout();
  };
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
            <NavLink style={{ textDecoration: "none" }} to="/Home">
              HOME
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/Store">
              STORE
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/about">
              ABOUT
            </NavLink>

            <NavLink style={{ textDecoration: "none" }} to="/ContactUs">
              CONTACT US
            </NavLink>

            {isLoggedIn ? (
              <NavLink
                style={{ textDecoration: "none" }}
                to="/LoginPage"
                onClick={Logout}
              >
                LogOut
              </NavLink>
            ) : (
              <NavLink style={{ textDecoration: "none" }} to="/LoginPage">
                LogIn
              </NavLink>
            )}
          </Nav>
          {location.pathname === "/Store" && <Cart />}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
