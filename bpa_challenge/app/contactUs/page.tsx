import React from 'react';
import Navbar from '../components/navbar';
import ContactForm from './components/contactForm';

const page = () => {
  return (
    <div>
      <Navbar />
      {/* Image as header below navbar */}
      <div style={{ textAlign: 'center', marginBottom: '20px', width: '100%' }}>
        <img 
          src="/contactUs.jpg"  // Correct path in the public directory
          alt="Header Image" 
          style={{
            width: '100%', // Makes the image span the full width of the page
            height: 'auto', // Maintains aspect ratio
            maxHeight: '355px', // Controls the maximum height of the image
            objectFit: 'cover', // Ensures the image doesn't stretch but covers the area
          }} 
        />
      </div>
      
      {/* Contact Form Section */}
      <div style={{ padding: '5px', display: 'flex', justifyContent: 'center', marginBottom: '5px' }}>
        <ContactForm />
      </div>
    </div>
  );
}

export default page;
