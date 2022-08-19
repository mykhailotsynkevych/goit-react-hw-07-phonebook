import React, { Component } from 'react';
import { connect } from 'react-redux';
import todosOperations from '../../redux/contacts/contacts-operations';
import s from './Form.module.css';

class Form extends Component {
    state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

    handleSubmit = e => {
      e.preventDefault();
      const { name, number } = this.state;

    if (this.state.name !== '' && this.state.number !== '') {
      this.props.onSubmit({name, number});
      this.props.onSave();
      this.setState({ name: '' , number: ''});
      return;
    }

    alert('Заполни текст заметки.');
  };

    render() {
  return (
    <>
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label className={s.form}>
          <span> Name </span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.form}>
          <span> Number </span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    </>
      );
        }
}


const mapDispatchToProps = dispatch => ({
  onSubmit: ({name, number}) => dispatch(todosOperations.addContact({name, number})),
});

export default connect(null, mapDispatchToProps)(Form);
