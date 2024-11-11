'use client'
import React, { useState } from 'react';
import Link from 'next/link';

type FormErrors = {
  email: string;
  fullName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
};

const CheckoutForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [errors, setErrors] = useState<FormErrors>({
    email: '',
    fullName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors: FormErrors = { ...errors };

    // Check for empty fields and update error messages
    newErrors = {
      email: email ? '' : 'Email is required',
      fullName: fullName ? '' : 'Full name is required',
      phone: phone ? '' : 'Phone number is required',
      address: address ? '' : 'Address is required',
      city: city ? '' : 'City is required',
      state: state ? '' : 'State is required',
      zip: zip ? '' : 'Zip code is required',
      cardNumber: cardNumber ? '' : 'Card number is required',
      expiryDate: expiryDate ? '' : 'Expiration date is required',
      cvv: cvv ? '' : 'CVV is required',
    };

    setErrors(newErrors);

    // If no errors, proceed with form submission (in this case, logging the data)
    if (Object.values(newErrors).every((error) => error === '')) {
      console.log({
        cardNumber, expiryDate, cvv, email, fullName, phone, address, city, state, zip,
      });
    }
  };

  // Check if there are any errors
  const hasErrors = Object.values(errors).some((error) => error !== '');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded-lg p-8 max-w-screen-lg w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">Checkout Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side (Contact and Address Info) */}
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full"
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="input input-bordered w-full"
                placeholder="John Doe"
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input input-bordered w-full"
                placeholder="(123) 456-7890"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="input input-bordered w-full"
                placeholder="123 Main St"
              />
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
            </div>

            {/* City, State, and Zip in one row */}
            <div className="flex gap-4 mb-4">
              <div className="w-1/3">
                <label className="block text-sm font-medium mb-1" htmlFor="city">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="input input-bordered w-full"
                  placeholder="City"
                />
                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
              </div>
              <div className="w-1/3">
                <label className="block text-sm font-medium mb-1" htmlFor="state">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="input input-bordered w-full"
                  placeholder="State"
                />
                {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
              </div>
              <div className="w-1/3">
                <label className="block text-sm font-medium mb-1" htmlFor="zip">
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zip"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  className="input input-bordered w-full"
                  placeholder="12345"
                />
                {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip}</p>}
              </div>
            </div>
          </div>

          {/* Right Side (Payment Info) */}
          <div>
            <h3 className="text-xl font-semibold mt-8 mb-4">Payment Information</h3>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="cardNumber">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="input input-bordered w-full"
                placeholder="1234 5678 9012 3456"
                maxLength={16}
              />
              {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
            </div>

            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1" htmlFor="expiryDate">
                  Exp. Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="input input-bordered w-full"
                  placeholder="MM/YY"
                  maxLength={5}
                />
                {errors.expiryDate && <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>}
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1" htmlFor="cvv">
                  CVV
                </label>
                <input
                  type="password"
                  id="cvv"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="input input-bordered w-full"
                  placeholder="CVV"
                  maxLength={3}
                />
                {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <Link href="/thankYou">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded mt-6"
              disabled={hasErrors} // Disable the button if there are errors
            >
              Complete Purchase
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
