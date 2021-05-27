import React from "react";
import { Header } from "./Header";
import { Container, Row } from "react-bootstrap";

export const Layout = ({ children }) => (
  <Container fluid>
    <Row>
      <Header />
    </Row>

    {children}
  </Container>
);
