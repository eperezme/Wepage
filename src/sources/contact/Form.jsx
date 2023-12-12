import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

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
    <form onSubmit={handleSubmit} className="col-md-11 col-lg-9">
      <div className="form-group">
        <label className='form'>
          <h4>Name</h4>
          <input className='form-control' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
        </label>
      </div>

      <div className="form-group">
        <label>
          <h4>Email</h4>
          <input className='form-control' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="user@example.com" />
        </label>
      </div>

      <div className="form-group">
        <label>
          <h4>Subject</h4>
          <input className='form-control' value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Brief Description of Inquiry/Offer" />
        </label>
      </div>

      <div className="form-group">
        <label>
          <h4>Message</h4>
          <textarea className='form-control' value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message" />
        </label>
      </div>

      <div className="d-flex flex-column flex-md-row mt-3 pb-2">
        <button type="submit" className="btn-mktg">Submit
          <svg xmlns="http://www.w3.org/2000/svg" className="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
        </button>
      </div>
    </form>
  );
};

export default Form;