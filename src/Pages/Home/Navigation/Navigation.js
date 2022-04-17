import { signOut } from "firebase/auth";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Navigation = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ background: "#efb701" }}
        bg=""
        className="shadow shadow-large py-3"
        variant="dark"
      >
        <Container>
          <Navbar.Brand
            className="fs-3 text-primary fw-bold"
            as={Link}
            to="/"
          >
            Mr. Tutor
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto  fs-5">
              <Nav.Link
                className="text-primary fw-bold"
                as={Link}
                to="/"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="text-primary fw-bold"
                href="/#service"
              >
                Services
              </Nav.Link>
              <Nav.Link
                className="text-primary fw-bold"
                href="#blogs"
              >
                Blogs
              </Nav.Link>
              <Nav.Link
                className="text-primary fw-bold"
                href="#about"
              >
                About
              </Nav.Link>
              {user ? (
                <Nav.Link
                  className="text-primary fw-bold"
                  onClick={handleSignOut}
                  as={Link}
                  to=""
                >
                  SignOut
                </Nav.Link>
              ) : (
                <Nav.Link
                  className="text-primary fw-bold"
                  as={Link}
                  to="login"
                >
                  Sign In
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
