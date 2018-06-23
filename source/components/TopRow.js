import React from 'react';
import PropTypes from "prop-types";

const TopRow = ({ children }) => (
    <div className = 'topRow'>
        { children }
    </div>
);

TopRow.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TopRow;
