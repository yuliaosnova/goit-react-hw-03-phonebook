import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactsForm } from './Form/Form';
import { ContactList } from './ContactList/ContactsList';
import { Filter } from './Filter/Filter';
import { Container } from './AppStyle';

import initialContacts from './assets/contacts';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contact) {
      //   console.log('Обновились contacts');

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    //  console.log('contact in App', contact)

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    // console.log('id', id);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactsForm
          contacts={this.state.contacts}
          addContact={this.addContact}
        />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList data={filteredContacts} onDelete={this.deleteContact} />
      </Container>
    );
  }
}

export default App;
