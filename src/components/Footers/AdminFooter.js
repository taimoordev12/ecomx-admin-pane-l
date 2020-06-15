
import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <h3 className="text-white">Ecomx</h3>
          </Col>

          <Col xl="6">
           
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
