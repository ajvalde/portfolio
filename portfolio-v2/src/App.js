import React, { Component } from 'react';
import { Navbar, Button, Row, Col, NavItem } from 'react-materialize';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar brand='hey' right>
          <NavItem href='get-started.html'>Getting started</NavItem>
          <NavItem href='components.html'>Components</NavItem>
        </Navbar>
      </div>
    );
  }
}

export default App;
