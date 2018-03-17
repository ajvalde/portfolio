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
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
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
