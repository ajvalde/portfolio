import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Navbar, Button, Row, Col, NavItem, Footer } from 'react-materialize';
import './App.css';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';




class App extends Component {
  render() {
    return (
      <div>
        
        <Navbar className="black" right>
          <NavItem><Link to="/">Home</Link></NavItem>
          <NavItem ><Link to="/projects">Projects</Link></NavItem>
          <NavItem><Link to="/skills">Skills</Link></NavItem>
        </Navbar>

        
        
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/skills" component={Skills}/>
      </Switch>
      <Footer class="black page-footer" copyrights=""
          moreLinks={
          <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
          }
            links={
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
              </ul>
            } 
            className='example' >
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
        </Footer>
      </div>


    );
  }
}

export default App;
