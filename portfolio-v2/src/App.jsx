import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Navbar, NavItem } from 'react-materialize';
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

      <footer class="page-footer black">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Contact</h5>
                <p class="grey-text text-lighten-4"> <i class="far fa-envelope fa-lg"></i> ajvcodes@gmail.com</p>
                <p class="grey-text text-lighten-4"> <a link="white" href="https://github.com/ajvalde" target="_blank"><i class="fab fa-github fa-lg"></i> GitHub</a></p>
                <p class="grey-text text-lighten-4"> <a href="https://www.linkedin.com/in/ajvalde/" target="_blank"><i class="fab fa-linkedin fa-lg"></i> Linkedin</a></p>
              </div>
             
            </div>
          </div>
          <div class="black footer-copyright">
            
          </div>
        </footer>
      </div>


    );
  }
}

export default App;
