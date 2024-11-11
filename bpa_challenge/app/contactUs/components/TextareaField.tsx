import React from 'react';

interface TextareaFieldProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaField: React.FC<TextareaFieldProps> = ({ name, placeholder, value, onChange }) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ width: '100%', padding: '10px', borderRadius: '3px', border: '1px solid #ccc' }}
    />
  );
};

export default TextareaField;
