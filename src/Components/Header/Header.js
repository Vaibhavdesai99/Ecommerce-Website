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
          <Navbar.Brand href="#home">KEPTOWN </Navbar.Brand>
          <Nav className="header">
            <NavLink to="/Home">HOME</NavLink>
            <NavLink to="/Store">STORE</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
          </Nav>
          <Cart />
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

// import React from "react";
// import "./Header.css";
// import { NavLink } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Cart from "../Cart.js/Cart";
// const Header = () => {
//   return (
//     <div className="Main Header">
//       <Navbar bg="dark" variant="dark" fixed="top">
//         <Container>
//           <Navbar.Brand href="#home">KEPTOWN SHOPCART</Navbar.Brand>
//           <Nav className="header">
//             <NavLink to="/">HOME</NavLink>
//             <NavLink to="/Store">STORE</NavLink>
//             <NavLink to="/about">ABOUT</NavLink>
//           </Nav>
//           <Cart />
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default Header;
