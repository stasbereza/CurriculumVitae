// Core
import React, { Component } from 'react';

// Components
import SectionHeading from './SectionHeading';
import Eduspace from './Eduspace';

// Instruments
import education from '../theme/assets/data/education.json';

export default class Education extends Component {
    render () {
        const educationItems = education.map((educationItem) => (
            <Eduspace
                degree = { educationItem.degree }
                eduspace = { educationItem.eduspace }
                key = { educationItem.id }
                period = { educationItem.period }
            />
        ));

        return (
            <section className = 'education'>
                <SectionHeading number = '04.' title = 'Education' />
                { educationItems }
                <span className = 'copyright'>2018 &#169; Stanislav Bereza</span>
            </section>
        );
    }
}
