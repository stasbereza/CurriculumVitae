// Core
import React, { Component } from 'react';

// Components
import SectionHeading from './SectionHeading';
import Skill from './Skill';

// Instruments
import skillSet from '../theme/assets/data/skillset.json';

export default class SkillSet extends Component {
    render () {
        const skills = skillSet.map((skill) => (
            <Skill
                key = { skill.id }
                points = { skill.points }
                title = { skill.title }
            />
        ));

        return (
            <section className = 'skillset'>
                <SectionHeading number = '01.' title = 'Skills' />
                { skills }
            </section>
        );
    }
}
