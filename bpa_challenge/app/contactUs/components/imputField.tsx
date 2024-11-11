import React from 'react';

interface InputFieldProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ name, placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        width: '100%',
        padding: '10px',
        borderRadius: '3px',
        border: '1px solid #ccc', // Normal border, no highlight
        outline: 'none',  // No default focus outline
      }}
    />
  );
};

export default InputField;
