// ShirtSize.tsx
'use client'
import React from 'react';

interface ShirtSizeProps {
  selectedSize: string | null;
  onSizeSelect: (size: string | null) => void;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const ShirtSize: React.FC<ShirtSizeProps> = ({ selectedSize, onSizeSelect, quantity, setQuantity }) => {

  const handleSizeClick = (size: string) => {
    onSizeSelect(selectedSize === size ? null : size);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => (prevQuantity < 10 ? prevQuantity + 1 : 10));
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Size buttons */}
      <div className="flex space-x-4">
        {['S', 'M', 'L'].map((size: string) => (
          <button
            key={size}
            aria-pressed={selectedSize === size ? 'true' : 'false'}
            className={`btn rounded-lg ${selectedSize === size ? 'bg-black text-white font-bold' : 'btn-outline border-gray-400'}`}
            onClick={() => handleSizeClick(size)}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Quantity selector */}
      <div className="flex items-center space-x-2 border border-gray-400 rounded-lg px-3 py-1">
        <button
          onClick={handleDecrease}
          className="text-gray-500 hover:text-black font-bold px-2 py-1"
          disabled={quantity <= 1}
        >
          -
        </button>
        <span className="mx-2 font-semibold">{quantity}</span>
        <button
          onClick={handleIncrease}
          className="text-gray-500 hover:text-black font-bold px-2 py-1"
          disabled={quantity >= 10}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ShirtSize;
