import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "red",
  };
  return (
    <div>
      <Navbar bg="dark" variant="light">
        <Container>
          <Navbar.Brand className="nav-link text-white" href="/">
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink
              activeStyle={activeStyle}
              className="nav-link text-white"
              to="/restaurant"
            >
              Home
            </NavLink>
            <NavLink
              activeStyle={activeStyle}
              className="nav-link text-white"
              to="/about"
            >
              About
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
