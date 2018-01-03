import React , { Component } from 'react';
import About from './about';
import Sidenav from './sidenav';
import Logo from './Logo';
import Projects from './project'
import './App.css'

class App extends Component {
    constructor () {
        super()
        this.state = {
            isHidden: true
        }
    }
    toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
        return (
            <div class="top-nav">

            <nav class="top-nav fixed-nav">
            <div class="nav-wrapper z-depth-2 ">
              <a href="#" class="brand-logo center black-text"><img src={require('./img/my_logo3.png')} alt="" height="176"/></a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a class="btn">Sass</a></li>
                <li><a class="btn">Components</a></li>
                <li><a class="btn">JavaScript</a></li>
              </ul>
            </div>
          </nav>
          
          <div class="row">
            

            <div class="card-panel content col s12">

                {/* <Logo/> */}
                <About/>
                <Projects/>

            </div>
          </div>
            </div>
        )
    }
}

export default App;