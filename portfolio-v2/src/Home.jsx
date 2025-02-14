import React from 'react';



const Home = ({ match }) => {
    return (
        <div class="container">
            <div class='header-tag'>
                <h2>Hi, I'm Anthony Valdez</h2>
            </div>
            
            <div class="me-card col s12 m7">
                <div class="card horizontal z-depth-3">
                <div class="card-image">
                    <img src={require('./headshot2.jpg')}/>
                </div>
                <div class="card-stacked">
                    <div class="thelist card-content">
                        <div class="thelist">

                            <ul>
                                <li class="center-align"><i class="far fa-file-code"></i> Fullstack Developer <i class="far fa-file-code"></i></li>
                                <hr width="50%" color="black"></hr>
                                <li class="center-align"><i class="fas fa-music"></i> Beat Maker <i class="fas fa-music"></i></li>
                                <hr width="50%" color="black"></hr>
                                <li class="center-align"><i class="fas fa-headphones"></i> Music Nerd <i class="fas fa-headphones"></i></li>
                                <hr width="50%" color="black"></hr>
                                <li class="center-align"><i class="fas fa-gamepad"></i> Gamer <i class="fas fa-gamepad"></i></li>
                                <hr width="50%" color="black"></hr>
                                <li class="center-align"><i class="fab fa-rebel"></i> Part time Jedi <i class="fab fa-rebel"></i></li>
                            </ul>

                        </div>
                        {/* <table class="center-align" >
                
                            <tbody>
                                <tr>
                                    <td class="center-align"> <i class="far fa-file-code"></i> Fullstack Developer <i class="far fa-file-code"></i> </td>
                                </tr>

                                <hr width="50%" color="black"></hr>

                                <tr>
                                    <td class="center-align"> <i class="fas fa-music"></i> Beat Maker <i class="fas fa-music"></i> </td>
                                </tr>

                                <hr width="50%" color="black"></hr>

                                <tr>
                                    <td class="center-align"> <i class="fas fa-headphones"></i> Music Nerd <i class="fas fa-headphones"></i> </td>
                                </tr>

                                <hr width="50%" color="black"></hr>

                                <tr>
                                    <td class="center-align"> <i class="fas fa-gamepad"></i> Gamer <i class="fas fa-gamepad"></i> </td>
                                </tr>

                                <hr width="50%" color="black"></hr>

                                 <tr>
                                    <td class="center-align"> <i class="fab fa-rebel"></i> Part time Jedi <i class="fab fa-rebel"></i></td>
                                </tr>


                            </tbody>
                        </table> */}
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}


export default Home;