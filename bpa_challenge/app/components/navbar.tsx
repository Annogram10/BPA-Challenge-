"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">daisyUI</Link>
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
  )
}

export default Navbar;
