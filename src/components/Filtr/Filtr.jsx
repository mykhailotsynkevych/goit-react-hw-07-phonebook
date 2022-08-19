import PropTypes from 'prop-types';
import React from "react";
import s from './Filtr.module.css';

// import { useSelector, useDispatch } from 'react-redux';
// import { getFilter } from '../../redux/contacts/contacts-selectors';
// import contactsActions from '../../redux/contacts/contacts-actions';

import { connect } from 'react-redux';
import * as todosActions from '../../redux/contacts/contacts-actions';

const Filtr = ({ value, onChange }) => {
  //   const value = useSelector(getFilter);
  // const dispatch = useDispatch();
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
            onChange={onChange}
            />
          </label>
      </>
    );
  }

Filtr.propTypes = {
  value: PropTypes.string,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(todosActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filtr);