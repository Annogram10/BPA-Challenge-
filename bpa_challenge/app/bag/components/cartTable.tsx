"use client"
import React from 'react';
import { useCart } from '@/app/context/CartContext';

const CartTable = () => {
  const { cartItems, removeFromCart } = useCart();

  const handleRemoveClick = (itemId: number) => {
    removeFromCart(itemId);
  };

  return (
    <div className="bg-gray-300 p-4 rounded-lg h-[400px] flex flex-col overflow-y-auto" style={{ width: '70%' }}>
      <table className="table-fixed w-full border-separate border-spacing-0">
        <thead>
          <tr>
            <th className="border-b border-gray-500 w-1/5 px-4 py-2 text-left"># of Items</th>
            <th className="border-b border-gray-500 w-2/5 px-4 py-2 text-left">Item</th>
            <th className="border-b border-gray-500 w-1/5 px-4 py-2 text-left">Size</th>
            <th className="border-b border-gray-500 w-1/5 px-4 py-2 text-left">Price</th>
            <th className="border-b border-gray-500 w-1/5 px-4 py-2 text-left">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <tr><td colSpan={5} className="text-center text-black">Your cart is empty</td></tr>
          ) : (
            cartItems.map((item) => (
              <tr key={item.id}>
                <td className="border-b border-gray-500 px-4 py-2 text-left">{item.quantity}</td>
                <td className="border-b border-gray-500 px-4 py-2">{item.title}</td>
                <td className="border-b border-gray-500 px-4 py-2 text-left">{item.size}</td>
                <td className="border-b border-gray-500 px-4 py-2 text-left">${item.price * item.quantity}</td>
                <td className="border-b border-gray-500 px-4 py-2 text-left">
                  <button 
                    onClick={() => handleRemoveClick(item.id)} 
                    className="text-red-500 hover:text-red-700"
                  >
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
