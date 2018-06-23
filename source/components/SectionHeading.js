import React from 'react';
import PropTypes from "prop-types";

const SectionHeading = ({ number, title }) => (
    <section className = 'sectionHeading'>
        <h1>
            <span className = 'sectionNumber'>{ number }</span>
            <span className = 'sectionName'>{ title }</span>
        </h1>
    </section>
);

SectionHeading.propTypes = {
    number: PropTypes.string,
    title:  PropTypes.string,
};

SectionHeading.defaultProps = {
    number: '',
    title:  '',
};

export default SectionHeading;
