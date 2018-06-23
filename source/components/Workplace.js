import React from 'react';
import PropTypes from "prop-types";

// Components
import WorkplaceLeftColumn from './WorkplaceLeftColumn';
import WorkplaceRightColumn from './WorkplaceRightColumn';

const Workplace = ({ company, location, period, position }) => (
    <div className = 'workplace'>
        <WorkplaceLeftColumn>
            <span className = 'period'>{ period }</span>
            <span className = 'position'>{ position }</span>
        </WorkplaceLeftColumn>
        <WorkplaceRightColumn>
            <span className = 'location'>{ location }</span>
            <span className = 'company'>{ company }</span>
        </WorkplaceRightColumn>
    </div>
);

Workplace.propTypes = {
    company:  PropTypes.string,
    location: PropTypes.string,
    period:   PropTypes.string,
    position: PropTypes.string,
};

Workplace.defaultProps = {
    company:  '',
    location: '',
    period:   '',
    position: '',
};

export default Workplace;
