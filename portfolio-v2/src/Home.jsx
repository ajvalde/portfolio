import React from 'react';
import { Navbar, Button, Row, Col, NavItem, Card, CardTitle } from 'react-materialize';



const Home = ({ match }) => {
    return (
        <div class="container">
            <div class='name-tag'>
                <h2>Anthony J Valdez</h2>
            </div>
            <Row>
            <div class="about">
                <Card header={<CardTitle reveal image={require('./headshot2.jpg')} waves='light'/>}
                title="About Me"
                reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                </Card>
            </div>
            </Row>
        </div>
    )
}


export default Home;