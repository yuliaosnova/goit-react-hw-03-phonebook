import PropTypes from 'prop-types';
import { Formik, Field, ErrorMessage } from 'formik';
import { Btn, PhoneForm } from './FormStyle';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(7, 'too short').max(13, 'too long').required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactsForm = ({ contacts, addContact }) => {
  // console.log('contacts in form', contacts)

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);

    const check = contacts.find(contact => contact.name === values.name);
    if (check) {
      alert(`${values.name} is already in contacts`);
    } else {
      addContact(values);
    }

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <PhoneForm>
        <label>Name</label>
        <Field
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ErrorMessage name="name" component="div" />

        <label>Number</label>
        <Field
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ErrorMessage name="number" component="div" />
        <Btn type="submit">Add contact</Btn>
      </PhoneForm>
    </Formik>
  );
};

ContactsForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
};
