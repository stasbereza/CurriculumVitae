import React from 'react';
import PropTypes from "prop-types";

const Skill = ({ points, title }) => {
    const skillPoints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className = 'skill'>
            <span>{ title }</span>
            <ul>
                {skillPoints.map((skillPoint) => (
                    <li className = { skillPoint > points ? 'inactive' : '' } key = { skillPoint } />))}
            </ul>
        </div>
    );
};

Skill.propTypes = {
    points: PropTypes.number,
    title:  PropTypes.string,
};

Skill.defaultProps = {
    points: 1,
    title:  '',
};

export default Skill;
