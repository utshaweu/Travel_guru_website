import React from 'react';
import { Form, Nav, Navbar, Button, FormControl, Container } from 'react-bootstrap';
import './Header.css';
import logo from '../../Assets/images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
           >
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search your Destination..."
                className="mr-2"
                aria-label="Search"
              />
              <Button>
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Form>
            <Nav.Link href="#">News</Nav.Link>
            <Nav.Link href="#">Destination</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link href="#" className="mr">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;