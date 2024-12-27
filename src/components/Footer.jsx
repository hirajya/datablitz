import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0D3B66] text-white pt-12 pb-5">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[0.5fr_0.5fr_0.5fr_3fr] gap-4 mb-10">

        {/* Shop Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Shop</h3>
          <ul className="text-xs font-light">
            <li><a href="#" className="hover:text-[#f4f4f4]">Products</a></li>
            <li><a href="#" className="hover:text-[#f4f4f4]">Games</a></li>
            <li><a href="#" className="hover:text-[#f4f4f4]">Collectibles</a></li>
            <li><a href="#" className="hover:text-[#f4f4f4]">Brands</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Support</h3>
          <ul className="text-xs font-light">
            <li><a href="#" className="hover:text-[#f4f4f4]">Get Help</a></li>
            <li><a href="#" className="hover:text-[#f4f4f4]">DataBlitz Care</a></li>
            <li><a href="#" className="hover:text-[#f4f4f4]">FAQs</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <ul className="text-xs font-light">
            <li><a href="#" className="hover:text-[#f4f4f4]">About Us</a></li>
            <li><a href="#" className="hover:text-[#f4f4f4]">Values</a></li>
            <li><a href="#" className="hover:text-[#f4f4f4]">Careers</a></li>
            <li><a href="#" className="hover:text-[#f4f4f4]">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription Section */}
        <div className='ml-40'>
          <h3 className="text-lg font-semibold mb-2">Subscribe to our Newsletter</h3>
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-3/4 p-1.5 mb-4 rounded text-black h-8 text-sm"
          />
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-xs font-light">
<<<<<<< HEAD
              I want to subscribe to newsletter from Loop. You can unsubscribe anytime. See our <a href="#" className="text-[#f4f4f4]">privacy policy</a>.
=======
              I want to subscribe to newsletter from DataBlitz. You can unsubscribe anytime. See our <a href="#" className="text-[#f4f4f4]">privacy policy</a>.
>>>>>>> origin
            </span>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="px-6 py-4 border-t border-[#f4f4f4] flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <div className="flex space-x-6">
          <a href="#" className="hover:text-[#f4f4f4]"><FaFacebook size={24} /></a>
          <a href="#" className="hover:text-[#f4f4f4]"><FaInstagram size={24} /></a>
          <a href="#" className="hover:text-[#f4f4f4]"><FaTwitter size={24} /></a>
        </div>

        <div className="text-center sm:text-left text-xs">
<<<<<<< HEAD
          <span className="block sm:inline">Copyright ©2024 Loop. All rights reserved</span>
=======
          <span className="block sm:inline">Copyright ©2024 DataBlitz. All rights reserved</span>
>>>>>>> origin
          <span className="hidden sm:inline"> | </span>
          <a href="#" className="text-[#f4f4f4]">Terms of Use</a> |
          <a href="#" className="text-[#f4f4f4]"> Privacy Policy</a> |
          <a href="#" className="text-[#f4f4f4]"> Cookie Settings</a> |
          <a href="#" className="text-[#f4f4f4]"> Legal Terms</a>
        </div>

        <div className="flex items-center space-x-2">
          <img src="/footer/Globe.png" alt="Globe" className="h-6 w-6" />
          <span className="text-[#f4f4f4] text-sm">Philippines</span>
        </div>
      </div>
    </footer>
  );
}