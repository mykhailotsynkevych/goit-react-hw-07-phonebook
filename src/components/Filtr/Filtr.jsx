import PropTypes from 'prop-types';
import React from "react";
import s from './Filtr.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import contactsActions from '../../redux/contacts/contacts-actions';

const Filtr = () => {
    const value = useSelector(getFilter);
  const dispatch = useDispatch();
    return (
      <>
          <label className={s.filtr}>
            <span> Filtr by Name </span>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={value}
            onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
            />
          </label>
      </>
    );
  }

Filtr.propTypes = {
  value: PropTypes.string,
};

export default Filtr;