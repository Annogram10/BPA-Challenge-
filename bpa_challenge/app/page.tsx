'use client'

import React from 'react';
import Navbar from './components/navbar';

const Page = () => {
  return (
    <div>
      {/* Always visible Navbar */}
      <Navbar />
      
      {/* Background Image */}
      <div style={styles.imageBackground}>
        {/* Huge Text */}
        <div
          className="hover-text"
          style={{
            fontFamily: 'Poppins', // Static font (no font-changing logic)
            fontSize: '8rem', // Huge title size
            fontWeight: 'bold',
            color: '#fff',
            textShadow: '2px 2px 8px rgba(0,0,0,0.7)', // Add some shadow for readability
          }}
        >
          Stage Fright
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  imageBackground: {
    position: 'absolute',
    top: '50px', // Push the image down from the top
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url("/groupPhoto.jpeg")', // Path to image in the public folder
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'calc(100vh - 50px)', // Adjust the height to fill the screen minus the navbar
    zIndex: -1, // Ensures the image stays behind the navbar
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: '20px', // Gives space at the bottom of the image
  },
};

export default Page;
