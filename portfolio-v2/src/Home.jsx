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
                    <div class="card-content">
                        <table >
                           
                            <tbody>
                                <tr>
                                    <td class="center-align">Fullstack Developer</td>
                                </tr>

                                <hr width="75%" color="black"></hr>

                                <tr>
                                    <td class="center-align">hey</td>
                                </tr>

                                <hr width="75%" color="black"></hr>

                                <tr>
                                    <td class="center-align">hey</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}


export default Home;