"use client"; // not-found.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="text-center text-gray-800 max-w-lg mx-auto">
        <h1 className="text-8xl font-semibold mb-6 text-[#0D3B66]">Lost your way?</h1>
        <h2 className="text-2xl font-medium mb-6">
          Sorry, we can’t find that page
        </h2>
        <p className="text-lg mb-8">
          The page you are looking for might have been moved or doesn’t exist
          anymore. Let’s get you back to where you belong.
        </p>

        <Link href="/" passHref>
          <button className="px-8 py-3 bg-[#0D3B66] text-white text-xl font-medium rounded-lg hover:bg-[#125A99] transition ease-in-out">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}
