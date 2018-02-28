import React from 'react';
import { Navbar, Button, Row, Col, NavItem, Card, CardTitle } from 'react-materialize';

const Home = ({ match }) => {
    return (
        <div class="container">
            <div class="about">
                <Card header={<CardTitle reveal image={"./logo.svg"} waves='light'/>}
                title="About Me"
                reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                </Card>
            </div>
        </div>
    )
}


export default Home;