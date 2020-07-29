import React from 'react';
import Section from './Sections';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter'

import { Toast } from "toaster-js"
import "toaster-js/default.css";

export default function App() {

    return (

      <Section title="Phonebook">
        <ContactForm/>

        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
      </Section>

    )
}


