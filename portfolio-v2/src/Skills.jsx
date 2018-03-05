import React from 'react';
import { Table, Card } from 'react-materialize';

const Skills = ({match}) => {
    return (
        <div class="container">
        <Card>
            <Table>
                <thead>
                    <th>Languages/Frameworks</th>
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
            </Table>
        </Card>

        <Card>
            <Table>
                <thead>
                    <th>Tools</th>
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
            </Table>
        </Card>

        <Card>
            <Table>
                <thead>
                    <th>Techniques</th>
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
            </Table>
        </Card>


        </div>
    )
}


export default Skills;