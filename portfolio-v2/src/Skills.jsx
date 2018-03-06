import React from 'react';
import { Table, Card } from 'react-materialize';

const Skills = ({match}) => {
    return (
        <div class="container">
        <h2 class="header-tag">Skills</h2>

        <div class="card-panel black white-text">
        <h3 class="center-align">Languages</h3>
            <table>
                <thead>
                    {/* <th class="center-align">Languages</th> */}
                </thead>
                <tbody>
                    <tr>
                        <td>Hey</td>
                        <td>You</td>
                    </tr>
                    <tr>
                        <td>Are</td>
                        <td>Awesome</td>
                    </tr>
                   
                    
                    
                </tbody>
            </table>
        </div>

       <div class="card-panel black white-text">
            <table>
                <thead>
                    <th class="center-align">Tools</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Hey</td>
                        <td>You</td>
                    </tr>
                    <tr>
                        <td>Are</td>
                        <td>Awesome</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="card-panel black white-text">
        <table>
            <thead>
                <th class="center-align">Techniques</th>
            </thead>
            <tbody>
                <tr>
                    <td>Hey</td>
                    <td>You</td>
                </tr>
                <tr>
                    <td>Are</td>
                    <td>Awesome</td>
                </tr>
            </tbody>
        </table>
    </div>


        </div>
    )
}


export default Skills;