import React from 'react';

const Skills = ({match}) => {
    return (
        <div class="container">

         <h2 class="header-tag">Skills</h2>

            <div class="row">
                <div class="col m8 s12 offset-m2 card-panel black white-text ">
                    <h5 class="center-align">Languages/Frameworks</h5>
                    
                        <div class="row center-align">
                            <div class="col s6">
                                <p>Vue.js</p>
                                <p>Knex.js</p>
                                <p>Materialize</p>
                                <p>HTML/CSS</p>
                                <p>PostgreSQL</p>
                            </div>

                      
                            <div class="col s6">
                                <p>JavaScript</p>
                                <p>Ruby on Rails</p>
                                <p>Node.js</p>
                                <p>AngularJS / 4+</p>
                                <p>Reactjs</p>
                            </div>
                        </div>
                        
    
                </div>
             </div>

        <div class="row">
            <div class="col m8 s12 offset-m2 card-panel black white-text">
                 <h5 class="center-align">Tools</h5>   
            </div>
        </div>

        <div class="row">
            <div class="col m8 s12 offset-m2 card-panel black white-text">
                <h5 class="center-align">Techniques</h5>
            </div>
        </div>


        </div>
    )
}


export default Skills;