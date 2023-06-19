import React, { useState } from 'react';
import css from './ContactForm.module.css';
import axios from 'axios';

// const endpoints=['/'];
 const endpoint=['/','/tributorE','/tributorCM'];
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  // const notify = () => toast.success("Sent Successfully");
  const [name, setName] = useState('');
  const [organisationType, setOrganisationType] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    //  const endpoint = endpoints[1];
    try {
        const response = await axios.post(`http://invicious.in${endpoint[0]}`, {
      //  const response = await axios.post('http://localhost:3000/', {
        //  const response = await axios.post(`http://localhost:3000${endpoint[1]}`, {
        //const response = await axios.post(`http://localhost:3000/tributorE`, {
        name: name,
        organisationType: organisationType,
        email: email,
        phoneNumber: phoneNumber,
      })


      //if (response.status === 201) 
      if (response.status === 200) 
      {
        console.log('Form submitted successfully');
        setName('');
        setOrganisationType('');
        setEmail('');
        setPhoneNumber('');
        setErrorMessage('');
      }

    } catch (error) {
      console.error('An error occurred:', error);
      // console.error('Response data:', error.response?.data);
    
    
    // } catch (error) {
    //    console.error('An error occurred:', error);
    //   console.error('An error occurred:', error.response?.data);

      switch (error.message) {
        case 'ER_DUP_ENTRY':
          setErrorMessage('Email or phone number already exists');
          break;
        case 'ER_PARSE_ERROR':
          setErrorMessage('Invalid query syntax');
          break;
        case 'ER_NO_REFERENCED_ROW':
          setErrorMessage('Invalid foreign key reference');
          break;
        case 'ER_DATA_TOO_LONG':
          setErrorMessage('Data too long for a column');
          break;
        case 'ER_NO_DEFAULT_FOR_FIELD':
          setErrorMessage('Missing default value for a field');
          break;
        case 'ER_ACCESS_DENIED_ERROR':
          setErrorMessage('Access denied for user');
          break;
        case 'ER_TABLE_EXISTS_ERROR':
          setErrorMessage('Table already exists');
          break;
        case 'ER_BAD_FIELD_ERROR':
          setErrorMessage('Unknown column in the query');
          break;
        case 'ER_NO_SUCH_TABLE':
          setErrorMessage('Table does not exist');
          break;
        default:
          setErrorMessage('An error occurred. Please try again.');
          break;
      }

      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else if (error.message) {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <div className={css.formcontain}>
      <h1 className={css.hone}>Register</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form className={css.contactForm} onSubmit={handleSubmit}>


        <label htmlFor="name">Name</label>
        <input 
          className={css.inputcontact}
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

        {/* <button  type="submit" onClick={handleSubmit} className={css.sendButton}> */}
        <button type="submit" className={css.sendButton}>

          Submit
        </button>
        
        {/* <ToastContainer autoClose={600} position={"bottom-right"} /> */}

      </form>
    </div>
  );
};

export default ContactForm;

