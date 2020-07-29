import React from 'react';
import style from'./contactList.module.css';
import {connect} from 'react-redux';
import contactAction from '../../redux/contactAction';

const ContactList = ({contacts, onRemoveContact}) =>(
  <ul>
    {contacts.map(({id, name, number}) => 
    
      <li key={name}>
        <span>{name} : {number}</span>
        <button type="button" className={style.BthDelete} onClick={() => onRemoveContact(id)}>Delete</button>
      </li>
    )}
  </ul>
);

const mapStateToProps = (state) => {
  const {items, filter} = state.contacts;
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = items.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  return {
    contacts: visibleContacts
  }
};

const mapDispatchToProps = ({
  onRemoveContact: contactAction.removeContact
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);