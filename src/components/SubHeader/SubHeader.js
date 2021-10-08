import React, { useContext } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo2 from '../../Assets/images/Logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const SubHeader = () => {
  const {login} = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = login;
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <Link to="/">
            <img src={logo2} alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
           >
            <Nav.Link href="#" style={{color: '#222222'}}>News</Nav.Link>
            <Nav.Link href="#" style={{color: '#222222'}}>Destination</Nav.Link>
            <Nav.Link href="#" style={{color: '#222222'}}>Blog</Nav.Link>
            <Nav.Link href="#" style={{color: '#222222'}}>Contact</Nav.Link>
            {
              loggedInUser.email && (
                <Nav.Link href="#" style={{color: '#F9A51A', fontWeight: '600'}}>{loggedInUser.displayName}</Nav.Link>
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

export default SubHeader;