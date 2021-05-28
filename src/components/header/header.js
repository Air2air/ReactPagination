import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar variant="pills" className="justify-content-around">
      <Container>
      <Navbar.Brand href="#home">Doodle pants</Navbar.Brand>
      <Navbar.Toggle />
        <Nav.Item>
          <Link to="/">Topics</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/settings">Settings</Link>
        </Nav.Item>
      </Container>
    </Navbar>
  );
}

export default Header;
