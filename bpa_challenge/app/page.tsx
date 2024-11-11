import React from 'react';
import Navbar from './components/navbar';

const Page = () => {
  return (
    <div>
      {/* Always visible Navbar */}
      <Navbar />
      
      {/* Background Image */}
      <div style={styles.imageBackground}></div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  imageBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url("/groupPhoto.jpeg")', // Path to image in the public folder
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Ensures the image fills the screen
    zIndex: -1, // Ensures the image stays behind the navbar
  },
};

export default Page;
  