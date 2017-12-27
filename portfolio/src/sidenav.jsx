import React, {Component} from 'react';
import './App.css';

class Sidenav extends Component {
    render() {
        return (
            <div>
                <div class="nav-buttons">
                    <div class="side-buttons">
                        <a class="z-depth-4 waves-effect waves-light btn">About</a>
                    </div>
                    <div class="side-buttons">
                        <a class="z-depth-4 waves-effect waves-light btn">Project</a>
                    </div>
                    <div class="side-buttons">
                        <a class="z-depth-4 waves-effect waves-light btn">Skills</a>
                    </div>
                </div>
            </div>
           
        )
    }
}

export default Sidenav