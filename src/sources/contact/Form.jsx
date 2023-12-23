import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaCheck } from 'react-icons/fa';

// CSS
import './Form.css'

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      const errorMessage = 'Please fill in all fields.'; // Set error message if any field is empty
      setErrorMessage(errorMessage); // Update the state
      alert(errorMessage); // Display error message in a popup alert
      return;
    }

    // Replace with your own emailjs service ID, template ID, and public key
    const serviceId = 'service_5shgyrp';
    const templateId = 'template_06nu5j3';
    const publicKey = 'DQAugBa3VxR7ks47b';

    emailjs.send(serviceId, templateId, {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    }, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Reset form fields and error message
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        alert('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  useEffect(() => {
    setIsFormValid(name.trim() !== '' && email.trim() !== '' && subject.trim() !== '' && message.trim() !== '');
  }, [name, email, subject, message]);

  return (
    <form onSubmit={handleSubmit} className='col-md-11 col-lg-9'>
      <div className="form-group js-build-in-item build-in-slideY-top" >
        <label className='form'>
          <h4>Name</h4>
          <input className='form-control' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
        </label>
      </div>

      <div className="form-group js-build-in-item build-in-slideY-top">
        <label>
          <h4 className=''>Email</h4>
          <input className='form-control' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="user@example.com" />
        </label>
      </div>

      <div className="form-group js-build-in-item build-in-slideY-top">
        <label>
          <h4>Subject</h4>
          <input className='form-control' value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Brief Description of Inquiry/Offer" />
        </label>
      </div>

      <div className="form-group js-build-in-item build-in-slideY-top">
        <label>
          <h4>Message</h4>
          <textarea className='form-control' value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message" />
        </label>
      </div>

      <div className="d-flex flex-column flex-md-row mt-3 pb-2 js-build-in-item build-in-fade">
        <button type="submit" className="btn-mktg">Submit
        <i>
        <FaCheck/>
        </i>
        </button>
      </div>
    </form>
  );
};

export default Form;