import React, { useContext } from 'react';
import { Form, Nav, Navbar, Button, FormControl, Container } from 'react-bootstrap';
import './Header.css';
import logo from '../../Assets/images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
  const {login} = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = login;
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
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
            {
              loggedInUser.email && (
                <Nav.Link href="#" style={{color: '#ffffff', fontWeight: '600'}}>{loggedInUser.displayName || loggedInUser.firstName}</Nav.Link>
              )
            }
            {
              loggedInUser.email ? (
                <Nav.Link href="#" onClick={() => setLoggedInUser({})} className="mr" style={{color: '#222222'}}>Sign Out</Nav.Link>
              ) : (
                <Nav.Link href="#" className="mr">
                  <Link to="/login" style={{textDecoration: 'none'}}>Login</Link>
                </Nav.Link>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;