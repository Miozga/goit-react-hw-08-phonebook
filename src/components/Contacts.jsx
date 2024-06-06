import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const Contacts = () => {
  return (
    <div className="container">
      <h1>Your Contacts</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
