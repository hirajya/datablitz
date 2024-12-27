"use client"
import React, { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu on small screens
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white text-black pt-1 fixed top-0 left-0 right-0 shadow-md z-50 w-full">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Image
            src="/navbar/Logo.png"
            alt="Logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>

        {/* Categories in the center for larger screens */}
        <div className="flex-grow hidden md:flex justify-center">
          <ul className="flex space-x-8">
            <li className="hover:text-[#0D3B66] cursor-pointer font-light">Home</li>
            <li className="hover:text-[#0D3B66] cursor-pointer font-light">Featured</li>
<<<<<<< HEAD
            <li className="hover:text-[#0D3B66] cursor-pointer font-light">Peripherals</li>
=======
            <li className="hover:text-[#0D3B66] cursor-pointer font-light">Products</li>
>>>>>>> origin
            <li className="hover:text-[#0D3B66] cursor-pointer font-light">Games</li>
            <li className="hover:text-[#0D3B66] cursor-pointer font-light">Collectibles</li>
            <li className="hover:text-[#0D3B66] cursor-pointer font-light">Orders</li>
          </ul>
        </div>

        {/* Icons for larger screens */}
        <div className="hidden md:flex space-x-6">
          <Image
            src="/navbar/Search.png"
            alt="Search"
            width={24}
            height={24}
            className="object-contain cursor-pointer"
          />
          <Image
            src="/navbar/Shopping Cart.png"
            alt="Shopping Cart"
            width={24}
            height={24}
            className="object-contain cursor-pointer"
          />
          <Image
            src="/navbar/User.png"
            alt="User"
            width={24}
            height={24}
            className="object-contain cursor-pointer"
          />
        </div>

        {/* Hamburger Menu Icon (visible on mobile) */}
        <div className="md:hidden flex items-center space-x-6 p-2">
          <button onClick={toggleMenu}>
            <Image
              src="/navbar/Menu.png" // Replace with the hamburger menu icon path
              alt="Menu"
              width={24}
              height={24}
              className="object-contain cursor-pointer"
            />
          </button>
        </div>
      </div>

      {/* Separator Line */}
      <div className="bg-[#0D3B66] h-1 w-full mt-1"></div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center bg-white py-4">
          <li className="hover:text-[#0D3B66] cursor-pointer font-light py-2">Home</li>
          <li className="hover:text-[#0D3B66] cursor-pointer font-light py-2">Featured</li>
          <li className="hover:text-[#0D3B66] cursor-pointer font-light py-2">Products</li>
          <li className="hover:text-[#0D3B66] cursor-pointer font-light py-2">Games</li>
          <li className="hover:text-[#0D3B66] cursor-pointer font-light py-2">Collectibles</li>
          <li className="hover:text-[#0D3B66] cursor-pointer font-light py-2">Orders</li>
        </ul>
      </div>
    </nav>
  );
}
