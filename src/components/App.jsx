import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Container from './Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/sliceContacts';

const App = () => {
  const dispatch = useDispatch();

  const { contacts } = useSelector(state => state);

  const isDuplicate = name => {
    return contacts.find(contact => contact.name === name);
  };

  const onHandleSubmit = data => {
    if (isDuplicate(data.name)) {
      alert(`this ${data.name} is already in your contacts!`);
      return;
    }
    dispatch(addContact(data));
  };
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form onSubmit={onHandleSubmit} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};
export default App;
