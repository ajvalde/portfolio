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

    // $(function() {
    //     // Handler for .ready() called.
    //   });

    render() {
        return (
            <div>

            <div class="top-nav">


            <nav class="top-nav fixed-nav">
            <div class="nav-wrapper z-depth-2 ">
              <a href="#" class="brand-logo center black-text"></a>
              <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a class="btn">Sass</a></li>
                <li><a class="btn">Components</a></li>
                <li><a class="btn">JavaScript</a></li>
              </ul>
              <ul class="side-nav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
              </ul>
            </div>
          </nav>
            </div>
          
          <div class="row">
          
            

            <div class="card-panel content col s12">
                <div class="logo">
                    <img src={require('./img/my_logo3.png')} alt="" height="176"/>
                </div>
                {/* <Logo/> */}
                <About/>
                {/* <Projects/> */}
                

            </div>

            {/* footer */}
            <footer class="page-footer foot">
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
             </footer>
        
          </div>
            </div>
        )
    }
}

export default App;