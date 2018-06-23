import React from 'react';
import PropTypes from "prop-types";

const Contact = ({ action, address }) => (
    <div className = 'contact'>
        <span className = 'action'>{ action }</span>
        <span className = 'address'>{ address }</span>
    </div>
);

Contact.propTypes = {
    action:  PropTypes.string,
    address: PropTypes.string,
};

Contact.defaultProps = {
    action:  '',
    address: '',
};

export default Contact;
