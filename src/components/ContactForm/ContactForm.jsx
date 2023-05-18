import React, { useState } from 'react';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [organisationType, setOrganisationType] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', name, organisationType, email, phoneNumber);
    setName('');
    setOrganisationType('');
    setEmail('');
    setPhoneNumber('');
  };

  return (
    <div className={css.formcontain}>
      <h1>Sent us a message</h1>
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