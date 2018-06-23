// Core
import React, { Component } from 'react';

// Components
import SectionHeading from './SectionHeading';
import Workplace from './Workplace';

// Instruments
import experience from '../theme/assets/data/experience.json';

export default class WorkplaceSet extends Component {
    render () {
        const workplaces = experience.map((workplace) => (
            <Workplace
                company = { workplace.company }
                key = { workplace.id }
                location = { workplace.location }
                period = { workplace.period }
                position = { workplace.position }
            />
        ));

        return (
            <section className = 'workplaceset'>
                <SectionHeading number = '02.' title = 'Experience' />
                { workplaces }
            </section>
        );
    }
}
