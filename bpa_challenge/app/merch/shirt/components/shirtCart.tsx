// ShirtCart.tsx
'use client'
import React, { useState } from 'react';
import { useCart } from '@/app/context/CartContext';
import ShirtSize from './shirtSize';

const ShirtCart = () => {
  const { addToCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleAddToBag = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    const newItem = {
      id: Date.now(),
      title: 'Shirt',
      price: 30,  // Adjust the price for shirts if different
      quantity: quantity,
      size: selectedSize,
    };

    addToCart(newItem);
    openModal();
  };

  return (
    <div>
      <h2>Select Size:</h2>
      <ShirtSize selectedSize={selectedSize} onSizeSelect={setSelectedSize} quantity={quantity} setQuantity={setQuantity} />

      <button className="btn btn-wide mt-4" onClick={handleAddToBag}>Add to Bag</button>

      {isOpen && (
        <dialog open className="modal" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-bold">Item Added!</h3>
            <p className="py-4">Successfully added to your bag!</p>
            <button onClick={closeModal} className="btn">Close</button>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default ShirtCart;
