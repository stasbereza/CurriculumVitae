// Core
import React, { Component } from 'react';

import myPhoto from '../theme/assets/images/stanislav-bereza.jpg';

export default class Header extends Component {
    render () {
        return (
            <div className = 'header'>
                <div>
                    <h1>
                        Stanislav Bereza
                    </h1>
                    <span>Front-End Developer</span>
                    <p>My mission is to manage data by creating awesome innovative user interfaces and web application for elevating user experience to the higher level. I am a highly motivated person who wants to be involved in projects that I could be proud of, join an amazing team and advance my development career.</p>
                </div>
                <img src = { myPhoto } />
            </div>
        );
    }
}
