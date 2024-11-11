'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react';
import TextareaField from './TextareaField';
import InputField from './imputField';
import ResponseMessage from './responceMessage';
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height to center vertically
    fontFamily: 'Arial, sans-serif',
  },
  contactBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '400px',  // You can adjust this to your desired width
    height: '600px', // Set a height larger than the width to make it rectangular
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    overflowY: 'auto',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '24px',
    marginBottom: '20px',
  },
  paragraph: {
    marginBottom: '20px',
    fontSize: '16px',
    lineHeight: '1.5',
  },
  form: {
    width: '100%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column', // Stack the label and input vertically
    marginBottom: '15px',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  button: {
    width: '100%',
    marginTop: '10px',
    padding: '8px',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '3px',
    border: 'none',
  },
  errorMessage: {
    color: 'red', // Red color for error messages
    fontSize: '14px',
    marginTop: '5px', // Space between input and error message
  },
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [responseMessages, setResponseMessages] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newResponseMessages = {
      name: formData.name ? '' : 'Please enter your name.',
      email: formData.email ? '' : 'Please enter your email.',
      message: formData.message ? '' : 'Please enter a message.',
    };

    setResponseMessages(newResponseMessages);

    if (!formData.name || !formData.email || !formData.message) {
      setIsSuccess(false);
      return;
    }

    setIsSuccess(true);
    setResponseMessages({
      name: '',
      email: '',
      message: '',
    });

    // After submission, reset the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={styles.container}>
      <div style={styles.contactBox}>
        <h2 style={styles.title}>Contact Us</h2>
        <p style={styles.paragraph}>
          We would love to hear from you! Please fill out the form, and we'll get back to you as soon as possible.
        </p>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label htmlFor="name" style={styles.label}>Full Name</label>
            <InputField
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {responseMessages.name && (
              <div style={styles.errorMessage}>{responseMessages.name}</div>
            )}
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <InputField
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            {responseMessages.email && (
              <div style={styles.errorMessage}>{responseMessages.email}</div>
            )}
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="message" style={styles.label}>Message</label>
            <TextareaField
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />
            {responseMessages.message && (
              <div style={styles.errorMessage}>{responseMessages.message}</div>
            )}
          </div>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
        {isSuccess && <ResponseMessage message="Thank you for contacting us! We will get back to you within 4 hours." isSuccess={true} />}
      </div>
    </div>
  );
};

export default ContactForm;
