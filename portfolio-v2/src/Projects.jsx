import React from 'react';

const Projects = ({ match }) => {
   return (
       <div class="container">
           <h2 class="center-align">Projects</h2>

           <div class="row">

           {/* stat-o-rama */}

                <div class="col s4">
                    <div class="card medium z-depth-3">
                        <div class="card-image">
                            <img class="project-img responsive-img" src={require('./stat.png')}/>
                        </div>
                        <div class="card-content">
                            <p>*App no longer works due to api changes*</p>
                            <p>A stat viewing app for League of Legends &amp; Overwatch</p>
                            <p>Frontend built with Vuejs &amp; Electron </p>
                            <a href="https://github.com/ajvalde/stat-o-rama-backend" target="_blank">Backend built with Express</a>
                        </div>
                        <div class="card-action">
                            <a href="https://github.com/ajvalde/stat-o-rama/tree/master/statorama" target="_blank">Repo</a>
                        </div>
                    </div>
                </div>
                

            {/* ArtStorm API */}

                <div class="col s4">
                    <div class="card medium z-depth-3">
                        <div class="card-image">
                            <img class="project-img responsive-img" src={require('./artstorm.png')}/>
                        </div>
                        <div class="card-content">
                            <p>Things go here about my apps</p>
                        </div>
                        <div class="card-action">
                            <a href="https://github.com/egranato/Art-Storm-API" target="_blank">Repo</a>
                        </div>
                    </div>
                </div>

            {/* fresh */}

                <div class="col s4">
                    <div class="card medium z-depth-3">
                        <div class="card-image">
                            <img class="project-img responsive-img" src={require('./fresh.png')}/>
                        </div>
                        <div class="card-content">
                            <p>Things go here about my apps</p>
                        </div>
                        <div class="card-action">
                            <a href="http://appfreshsnow.herokuapp.com/" target="_blank">Live</a>
                        </div>
                    </div>
                </div>
           </div>

           <div class="row">


            {/* lolstats */}

                <div class="col s4">
                    <div class="card medium z-depth-3">
                        <div class="card-image">
                            <img class="project-img responsive-img" src={require('./lolstat.png')}/>
                        </div>
                        <div class="card-content">
                            <p>Things go here about my apps</p>
                        </div>
                        <div class="card-action">
                            <a href="https://lolstats-2b4a5.firebaseapp.com/" target="_blank">Live</a>
                        </div>
                    </div>
                </div>

            {/* isis mock site */}

                <div class="col s4">
                    <div class="card medium z-depth-3">
                        <div class="card-image">
                            <img class="project-img responsive-img" src={require('./funnywebsite.png')}/>
                        </div>
                        <div class="card-content">
                            <p>Things go here about my apps</p>
                        </div>
                        <div class="card-action">
                            <a href="https://isiswebsite-eb6fd.firebaseapp.com/" target="_blank">Live</a>
                        </div>
                    </div>
                </div>

           </div>
                


           
       </div>
   )
}


export default Projects;