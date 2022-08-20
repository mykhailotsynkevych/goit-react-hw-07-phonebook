import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import ContactsEl from './ContactsEl';
import contactsOperations from '../../redux/contacts/contacts-operations';

import React from 'react';
import {useSelector, useDispatch } from 'react-redux';


const ContactsList = () => {

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  
  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim()),
    );
  };


  const filteredContacts = getFilteredContacts();


  return (
    <div className={s.wrap}>
      <ol className={s.list}>
        {filteredContacts.map((contacts) => (
          <li key={contacts.id}>
            <ContactsEl
              name={contacts.name}
              number={contacts.number}
              onDeleteContact={() => dispatch(contactsOperations.deleteContact(contacts.id))}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};

ContactsList.propTypes = {
  contactEl: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      onDeleteContact: PropTypes.func.isRequired,
    })
  ),
};

export default ContactsList;
