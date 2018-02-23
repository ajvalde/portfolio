import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Navbar, Button, Row, Col, NavItem } from 'react-materialize';
import './App.css';
import Projects from './Projects';


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)


class App extends Component {
  render() {
    return (
      <div>
        <Navbar brand="Anthony"class="Navbar" right>
          {/* <Link to="/projects"><NavItem>Projects</NavItem></Link> */}
          <Link to=""><NavItem>Skills</NavItem></Link>
          <NavItem>Hey</NavItem>
        </Navbar>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
      </Switch>

      </div>


    );
  }
}

export default App;
