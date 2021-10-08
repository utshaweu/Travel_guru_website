import React, { useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { UserContext } from '../../App';
import { initializeLoginFramework, logInWithEmailAndPassword, userCreateWithEmailAndPassword } from './loginManager';
import './Login.css';
import SubHeader from '../../components/SubHeader/SubHeader';

const Login = () => {

  const [error, setError] = useState("");
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    email: '',
    error: '',
    success: false,
  })
 //console.log(user);

 initializeLoginFramework();

 const {login} = useContext(UserContext);
 const [loggedInUser, setLoggedInUser] = login;

 const history = useHistory();
 const location = useLocation();

 let { from } = location.state || { from: { pathname: "/" } };


  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
      history.replace(from);
    }
  }

  const handleBlur = (e) => {
    //console.log(e.target.name, e.target.value);
    let isFieldValid = true;
    if(e.target.name === "email"){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === "password"){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(user.password && user.confirmPassword){
      if(user.password !== user.confirmPassword){
        setError("Password Does not Match");
      }
      else{
        setError(" ");
      }
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }

  const handleSwitch = () => {
    setNewUser(!newUser);
  }

  const handleSubmit = (e) => {
    if(newUser && user.password && user.email){
      userCreateWithEmailAndPassword(user.firstName, user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }

    if(!newUser && user.email && user.password){
      logInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }

    e.preventDefault();
  }


  return (
    <Container fluid={true}>
      <SubHeader></SubHeader>
      <Row>
        <Col lg={4} className="m-auto">
          <div className="login-register">
             <div className="login-register-form">
               {
                 newUser ? <h6>Create an Account</h6> : <h6>Login</h6>
               }
              <Form onSubmit={handleSubmit}>
                  {newUser && (<Form.Group className="mb-3">
                    <Form.Control name="firstName" onBlur={handleBlur} type="text" placeholder="First Name" required/>
                  </Form.Group>)
                  }

                  {newUser && (<Form.Group className="mb-3">
                    <Form.Control name="lastName" onBlur={handleBlur} type="text" placeholder="Last Name" required/>
                  </Form.Group>)
                  }
                  
                  <Form.Group className="mb-3">
                    <Form.Control name="email" onBlur={handleBlur} type="email" placeholder="Username or Email" required/>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control name="password" onBlur={handleBlur} type="password" placeholder="Password" required/>
                  </Form.Group>

                  {newUser && (<Form.Group className="mb-3">
                    <Form.Control name="confirmPassword" onBlur={handleBlur} type="password" placeholder="Confirm Password" required/>
                  </Form.Group>)
                  }

                  {
                    newUser ? false : (
                      <Row>
                        <Col lg={6}>
                          <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember Me" />
                          </Form.Group>
                        </Col>
                        <Col lg={6} style={{textAlign:'right'}}>
                          <span>Forgot Password</span>
                        </Col>
                      </Row>
                    )
                  }

                  <p style={{color: 'red', fontWeight: 'bold', marginBottom: '0'}}>{error}</p>
                  {newUser ? (<Button variant="primary" type="submit">
                    Create an account
                  </Button>
                  ) : (
                    <Button variant="primary" type="submit">
                    Log In
                  </Button>
                  )}

              </Form>
              <div className="text-center">
                {
                  newUser ? <span style={{textDecoration: 'none', color: '#000000', marginRight: '5px'}}> Already have an account?</span>
                   : 
                  <span style={{textDecoration: 'none', color: '#000000', marginRight: '5px'}}> Don't have an account?</span>
                }
                <span 
                  onClick={handleSwitch}
                >{newUser ? 'Login' : 'Create an account'}</span>
              </div>

              <p style={{color: 'red', fontWeight: 'bold', marginBottom: '0', textAlign: 'center'}}>{user.error}</p>
              {
                user.success && <p style={{color: 'green', fontWeight: 'bold', marginBottom: '0', textAlign: 'center'}}>User {newUser ? 'Created' : 'Logged In'} Successfully.</p>
              }
             </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;