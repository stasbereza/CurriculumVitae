import React from 'react';
import PropTypes from "prop-types";

const WorkplaceLeftColumn = ({ children }) => (
    <div className = 'leftColumn'>
        { children }
    </div>
);

WorkplaceLeftColumn.propTypes = {
    children: PropTypes.node.isRequired,
};

export default WorkplaceLeftColumn;
