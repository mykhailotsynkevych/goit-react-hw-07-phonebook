// import React from 'react';
// import { useState, useEffect } from 'react';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../redux/contacts/contacts-operations';

import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';



class App extends Component {

    componentDidMount() {
    this.props.fetchContacts();
  }


    render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form/>
        <h2>Contacts</h2>
        <Filter />
        {this.props.isLoadingTodos && <h1>Загружаем...</h1>}
        <ContactsList/>
      </>
      );
        }
};

const mapStateToProps = state => ({
  isLoadingTodos: state.contacts.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
