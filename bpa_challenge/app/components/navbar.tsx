'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar bg-zinc-800 rounded-xl text-base-100">
      <div className="flex-1">
        {/* Link with downloadable image */}
        <Link href="/" className="btn btn-ghost text-xl">
          {/* Image as a logo with rounded corners */}
          <img 
            src="/logo.jpeg"  // Replace with your image path
            alt="Logo"
            style={{ height: '40px', width: 'auto' }} // Adjust size as needed
            className="no-underline rounded-lg" // Removes any underlines and adds rounded corners
          />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/tourdates">Tour Dates</Link>
          </li>
          <li>
            <Link href="/merch">Merch</Link>
          </li>
          <li>
            <Link href="/contactUs">Contact Us</Link>
          </li>
          <li>
            <Link href="/bag">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
