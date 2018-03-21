import React, { Component } from 'react';
import { NavItem, Navbar, Nav, NavDropdown, MenuItem, Row, Col, Button } from 'react-bootstrap';
/*import buchlogo from '../navbar/buchlogo.png';*/
/*import './navbar.css';*/

class navbar extends Component {

  constructor() {
    super();
    this.handleCarrito = this.handleCarrito.bind(this);
  }

  handleCarrito(booleano) {
    this.props.onUpdateCarritoData(booleano); 
  }

  render() {
    return (
      <div className="navFont">
        <Navbar>
          <Navbar.Header >
            <Navbar.Brand>
              <a href="#"><img className="logo" /> logo</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                <div onClick={this.handleHome} className="" bsstyle="link" >home</div>
              </NavItem>    
              <NavItem eventKey={2} href="#" onClick={() => this.handleCarrito(true)}>
                <i className=" shopping fas fa-shopping-cart fa-2x"></i>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

    );
  }
}

export default navbar;