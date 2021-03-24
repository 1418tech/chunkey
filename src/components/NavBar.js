import '../App.css';
import {Navbar,Nav,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Main'
import { useState } from 'react';

function NavBar() {

  return (
    <div className = "nb">
      <Navbar className = "nx" variant="dark" id ='nr'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <div>
              {
                document.location.pathname !== '/login' ? <Nav.Link id = 'l' href="/login">Login</Nav.Link> : null
              }
            </div>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link id = "h" href="/">Home</Nav.Link>
            <Nav.Link id = "d" href="/documentation">Documentation</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  </div>
  );
}

export default NavBar;
