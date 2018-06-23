import React from 'react';
import PropTypes from "prop-types";

const Eduspace = ({ degree, eduspace, period }) => (
    <div className = 'eduspace'>
        <span className = 'period'>{ period }</span>
        <span className = 'eduspace'>{ eduspace }</span>
        <span className = 'degree'>{ degree }</span>
    </div>
);

Eduspace.propTypes = {
    degree:   PropTypes.string,
    eduspace: PropTypes.string,
    period:   PropTypes.string,
};

Eduspace.defaultProps = {
    degree:   '',
    eduspace: '',
    period:   '',
};

export default Eduspace;
