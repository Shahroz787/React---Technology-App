import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-lg-10 col-md-12 col-sm-12 mx-auto">
            <Navbar expand="lg">
              <Container fluid>
                <Navbar.Brand className="Navbar" to="/">
                  <NavLink to="/home">Shahroz Tech</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse>
                  <Nav
                    className="ms-auto my-2 my-lg-0 text-center"
                    style={{ maxHeight: "100%" }}
                  >
                    <NavLink className="nav-link" to="/">
                      Home
                    </NavLink>
                    <NavLink className="nav-link" to="/services">
                      Services
                    </NavLink>
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                    <NavLink className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
