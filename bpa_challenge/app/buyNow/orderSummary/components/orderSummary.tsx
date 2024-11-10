'use client'
import React from 'react'
import { useCart } from '@/app/context/CartContext'

const OrderSummary = () => {
  const { cartItems } = useCart()

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
      
      {/* List Cart Items */}
      <div className="mb-4">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex justify-between py-2 border-b border-gray-300">
              <span className="text-sm">{item.title} x {item.quantity}</span>
              <span className="text-sm">${item.price * item.quantity}</span>
            </div>
          ))
        )}
      </div>
      
      {/* Total Price */}
      <div className="flex justify-between font-semibold text-lg mt-4">
        <span>Total</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default OrderSummary
