// Core
import React, { Component } from 'react';

// Components
import SectionHeading from './SectionHeading';
import Contact from './Contact';

// Instruments
import contacts from '../theme/assets/data/contacts.json';

export default class Contacts extends Component {
    render () {
        const contactItems = contacts.map((contactItem) => (
            <Contact
                action = { contactItem.action }
                address = { contactItem.address }
                key = { contactItem.id }
            />
        ));

        return (
            <section className = 'contacts'>
                <SectionHeading number = '03.' title = 'Contacts' />
                { contactItems }
            </section>
        );
    }
}
