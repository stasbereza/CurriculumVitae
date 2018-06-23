import React from 'react';
import PropTypes from "prop-types";

const WorkplaceRightColumn = ({ children }) => (
    <div className = 'rightColumn'>
        { children }
    </div>
);

WorkplaceRightColumn.propTypes = {
    children: PropTypes.node.isRequired,
};

export default WorkplaceRightColumn;
