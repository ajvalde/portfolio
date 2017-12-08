import React , { Component } from 'react';
import About from './about';
import Sidenav from './sidenav';
import './App.css'

class App extends Component {
    render() {
        return (
            <div>

            <nav>
            <div class="nav-wrapper z-depth-2">
              <a href="#" class="brand-logo center">Logo</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
              </ul>
            </div>
          </nav>
          <div class="row">
            <div class="side col s2">
                <Sidenav/>
            </div>

            <div class="content col s10">
                <About/>
            </div>
          </div>
            </div>
        )
    }
}

export default App;