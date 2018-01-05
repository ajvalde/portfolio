import React , { Component } from 'react';
import Topnav from './topnav'
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
                <Topnav/>
            
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