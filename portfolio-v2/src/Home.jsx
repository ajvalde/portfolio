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
                        <table>
                            <thead>
                                <tr>
                                    <th>Things About Me</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>hey</td>
                                </tr>

                                 <tr>
                                    <td>hey</td>
                                </tr>

                                 <tr>
                                    <td>hey</td>
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