import React, { Component } from 'react'

class Logo extends Component {
    render () {
        return (
            <div>
                <div class="logo">
                    <img src={require('./img/my_logo3.png')} alt="" height="176"/>
                </div>
            </div>
        )
    }
}

export default Logo