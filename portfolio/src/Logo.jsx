import React, { Component } from 'react'

class Logo extends Component {
    render () {
        return (
            <div>
                <div class="logo">
                    <img src={require('./img/my_logo.png')} alt="" height="300" width="300"/>
                </div>
            </div>
        )
    }
}

export default Logo