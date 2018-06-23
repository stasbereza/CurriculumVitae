import React from 'react';
import PropTypes from "prop-types";

const BottomRow = ({ children }) => (
    <div className = 'bottomRow'>
        { children }
    </div>
);

BottomRow.propTypes = {
    children: PropTypes.node.isRequired,
};

export default BottomRow;
