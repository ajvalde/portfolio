import React, { Component } from 'react'

class Topnav extends Component {
    render () {
        return (
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
        )
    }
}

export default Topnav