import PropTypes from 'prop-types';
import s from './Filter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import {changeFilter} from '../../redux/contacts/contacts-actions';

const Filter = () => {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    dispatch(changeFilter(value));
  };
  return (
    <>
      <label className={s.filtr}>
        <span> Filtr by Name </span>
        <input
          type="text"
          name="value"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={value}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};

export default Filter;

// // import PropTypes from 'prop-types';
// import React from "react";
// import s from './Filter.module.css';

// import { connect } from 'react-redux';
// import {changeFilter} from '../../redux/contacts/contacts-actions';

// const Filter = ({ value, onChange }) => {
//     return (
//       <>
//           <label className={s.filtr}>
//             <span> Filtr by Name </span>
//             <input
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={value}
//             onChange={onChange}
//             />
//           </label>
//       </>
//     );
//   }

// // Filter.propTypes = {
// //   value: PropTypes.string,
// // };

// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
