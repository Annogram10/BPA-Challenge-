// components/CartTable.js
"use client"
import React from 'react';
import { useCart } from '@/app/context/CartContext';

const CartTable = () => {
  const { cartItems } = useCart();

  return (
    <div className="bg-gray-300 p-4 rounded-lg h-[400px] flex flex-col overflow-y-auto" style={{ width: '70%' }}>
      <table className="table-fixed w-full border-separate border-spacing-0">
        <thead>
          <tr>
            <th className="border-b border-gray-500 w-1/4 px-4 py-2 text-left" style={{ width: '10%' }}># of Items</th>
            <th className="border-b border-gray-500 w-1/2 px-4 py-2 text-left" style={{ width: '10%' }}>Item</th>
            <th className="border-b border-gray-500 w-1/4 px-4 py-2 text-left" style={{ width: '5%' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-center">Your cart is empty</td>
            </tr>
          ) : (
            cartItems.map((item, index) => (
              <tr key={index}>
                <td className="border-b border-gray-500 px-4 py-2 text-left">{item.quantity}</td>
                <td className="border-b border-gray-500 px-4 py-2">{item.title}</td>
                <td className="border-b border-gray-500 px-4 py-2 text-left">${item.price * item.quantity}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
