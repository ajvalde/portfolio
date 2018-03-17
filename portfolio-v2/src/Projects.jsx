import React from 'react';

const Projects = ({ match }) => {
   return (
       <div class="container">
           <h2 class="center-align">Projects</h2>

           <div class="row">

           {/* stat-o-rama */}

                <div class="col s4">
                    <div class="card pro-card z-depth-3">
                        <div class="card-image">
                            <img class="project-img responsive-img" src={require('./stat.png')}/>
                        </div>
                        <div class="card-content">
                            <p>*App no longer works due to api changes*</p>
                            <p>My capston e project. A stat viewing app for League of Legends &amp; Overwatch</p>
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
                    <div class="card pro-card  z-depth-3">
                        <div class="card-image">
                            <img class="project-img responsive-img" src={require('./artstorm.png')}/>
                        </div>
                        <div class="card-content">
                            <p>Art Storm was my Q3 group project at Galvanize. It was a web app where artist can share
                                work &amp; for customers to commisson artist for work.
                                I helped make the backend in Ruby on Rails.
                            </p>
                            <a href="https://github.com/egranato/Art-Storm-API" target="_blank">Github</a>
                        </div>
                        <div class="card-action">
                            <a href="https://github.com/egranato/Art-Storm-API" target="_blank">Repo</a>
                        </div>
                    </div>
                </div>

            {/* fresh */}

                <div class="col s4">
                    <div class="card pro-card  z-depth-3">
                        <div class="card-image">
                            <img class="project-img responsive-img" src={require('./fresh.png')}/>
                        </div>
                        <div class="card-content">
                            <p>This app was developed as a school group project for the purpose of getting up-to-date information on ski resorts across Colorado. </p>
                            <a href="https://github.com/JaaM-team/q2-project" target="_blank">Github</a>
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
                    <div class="card pro-card  z-depth-3">
                        <div class="card-image">
                            <img class="project-img responsive-img" src={require('./lolstat.png')}/>
                        </div>
                        <div class="card-content">
                            <p>LoL Stats was my Q1 project at Galvanize. It's a web app used to look at your League of Legends stats.</p>
                            <a href="https://github.com/ajvalde/q1_LoL_Site" target="_blank">Github</a>
                        </div>
                        <div class="card-action">
                            <a href="https://lolstats-2b4a5.firebaseapp.com/" target="_blank">Live</a>
                        </div>
                    </div>
                </div>

            {/* isis mock site */}

                <div class="col s4">
                    <div class="card pro-card  z-depth-3">
                        <div class="card-image">
                            <img class="project-img responsive-img" src={require('./funnywebsite.png')}/>
                        </div>
                        <div class="card-content">
                            <p>This is the first web app I deployed. We had to make a mock news site. It's a nice reminder of how far I've come on my coding quest!</p>
                            <a href="https://github.com/ajvalde/week-1-project" target="_blank">Github</a>
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