import React , { Component } from 'react';
import About from './about';
import Footer from './Footer';
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
                    {/* nav */}
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
            
                {/* content */}
                <div class="row">
                
                    <div class="card-panel content col s12 z-depth-2">
                        <div class="logo">
                            <img src={require('./img/my_logo3.png')} alt="" height="176"/>
                        </div>
                        {/* <Logo/> */}
                        <About/>
                        {/* <Projects/> */}
                        

                    </div>

                    {/* footer */}
                    <Footer/>
                
                </div>
            </div>
        )
    }
}

export default App;