import React from 'react';

interface ResponseMessageProps {
  message: string;
  isSuccess: boolean;
}

const ResponseMessage: React.FC<ResponseMessageProps> = ({ message, isSuccess }) => {
  return (
    <div
      style={{
        padding: '10px',
        backgroundColor: isSuccess ? 'lightgreen' : 'lightcoral',
        color: isSuccess ? 'green' : 'red',
        borderRadius: '3px',
        marginTop: '5px',  // Reduced margin so the message fits closer
        textAlign: 'center',
      }}
    >
      {message}
    </div>
  );
};

export default ResponseMessage;
