import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import ContactsEl from './ContactsEl';

import React from 'react';
import {useSelector } from 'react-redux';


const ContactsList = ({onDeleteContact }) => {
  const contacts = useSelector(state => state.contacts.items);
  return (
    <div className={s.wrap}>
      <ul className={s.list}>
        {contacts && contacts.map(({ id, name, number }) => (
          <li key={id}>
            <ContactsEl
              name={name}
              number={number}
              onDeleteContact={() => onDeleteContact(id)}
            />
          </li>
        ))}
      </ul>
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
