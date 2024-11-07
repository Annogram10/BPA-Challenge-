// components/HoodCart.js
"use client";
import React, { useState } from 'react';
import { useCart } from '@/app/context/CartContext';

const HoodCart = () => {
  const { addToCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleAddToBag = () => {
    addToCart({
      title: 'Hoodie', price: 45,
      quantity: 0
    }); // Example item details
    openModal();
  };

  return (
    <div>
      <button className="btn btn-wide" onClick={handleAddToBag}>Add to Bag</button>
      {isOpen && (
        <dialog open className="modal" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-bold">Hello!</h3>
            <p className="py-4">Successfully added to your bag!</p>
            <button onClick={closeModal} className="btn">Close</button>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default HoodCart;
