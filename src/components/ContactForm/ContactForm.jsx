import React, { useState } from 'react';
import css from './ContactForm.module.css';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [organisationType, setOrganisationType] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://invicious.in:5000/register', {
        Name: name,
        'Type of organization': organisationType,
        email,
        'phone number': phoneNumber,
      });

      if (response.status === 201) {
        console.log('Form submitted successfully');
        setName('');
        setOrganisationType('');
        setEmail('');
        setPhoneNumber('');
        setErrorMessage('');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      if (error.response && error.response.data && error.response.data.message) {
        const errorMessage = error.response.data.message;
        setErrorMessage(errorMessage);
      } else {
        let errorMessage = 'An error occurred';

        if (error.message === 'Email or phone number already exists') {
          errorMessage = 'Email or phone number already exists';
        } else if (error.message === 'Invalid query syntax') {
          errorMessage = 'Invalid query syntax';
        } else if (error.message === 'Invalid foreign key reference') {
          errorMessage = 'Invalid foreign key reference';
        } else if (error.message === 'Data too long for a column') {
          errorMessage = 'Data too long for a column';
        } else if (error.message === 'Missing default value for a field') {
          errorMessage = 'Missing default value for a field';
        } else if (error.message === 'Access denied for user') {
          errorMessage = 'Access denied for user';
        } else if (error.message === 'Table already exists') {
          errorMessage = 'Table already exists';
        } else if (error.message === 'Unknown column in the query') {
          errorMessage = 'Unknown column in the query';
        } else if (error.message === 'Table does not exist') {
          errorMessage = 'Table does not exist';
        }

        setErrorMessage(errorMessage);
      }
    }
  };

  return (
    <div className={css.formcontain}>
      <h1 className={css.hone}>Register</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form className={css.contactForm} onSubmit={handleSubmit}>

        <label htmlFor="name">Name</label>
        <input className={css.inputcontact}
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="organisationType">Type of Organisation</label>
        <select className={css.inputcontact}
          id="organisationType"
          value={organisationType}
          onChange={(e) => setOrganisationType(e.target.value)}
          required
        >
          <option value="">Select Type</option>
          <option value="Audio streaming platform">Audio streaming platform</option>
          <option value="Distribution Company">Distribution Company</option>
          <option value="Multiplex">Multiplex</option>
          <option value="OTT streaming platform">OTT streaming platform</option>
          <option value="Producer">Producer</option>
          <option value="Production House">Production House</option>
          <option value="Single Screen Cinema">Single Screen Cinema</option>
        </select>

        <label htmlFor="email">Email</label>
        <input className={css.inputcontact}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input className={css.inputcontact}
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />

        <button type="submit" className={css.sendButton}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
