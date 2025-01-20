"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc"; // Google icon
import { FaFacebook } from "react-icons/fa"; // Facebook icon
import IconButton from "@/components/signup/IconButton";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    router.push("/login"); // Redirect to the login page on form submission
  };

  return (
    <div className="flex h-screen">
      {/* Video Section */}
      <div className="flex-3 w-3/4 relative">
        <video
          className="w-full h-full object-cover"
          src="/signup/sign up video.webm" // Replace with your video path
          autoPlay
          muted
          loop
        ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
      </div>

      {/* Login Form Section */}
      <div className="flex-1 w-1/4 flex justify-center bg-white shadow-lg mt-20">
        <div className="w-full max-w-md p-8">
          <h2 className="text-4xl font-semibold text-left mt-6 mb-3">
            <span>Create an</span>
            <br />
            <span>account</span>
          </h2>

          {/* 3rd source Button */}
          <div className="flex space-x-4 justify-start mb-12">
            {/* Google Button */}
            <IconButton Icon={FcGoogle} color="#000" />

            {/* Facebook Button */}
            <IconButton Icon={FaFacebook} color="#4267B2" />
          </div>

          <div className="mb-12">
            <h2>
              <span className="font-semibold text-lg">Sign up with email</span>
              <br />
              <div className="flex gap-2 mt-2 text-sm">
                <span>Already have an account?</span>
                <Link href="/login">
                  <h2 className="text-[#0D3B66] font-medium cursor-pointer hover:underline">
                    Sign in
                  </h2>
                </Link>
              </div>
            </h2>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="user@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="********"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`mt-1 block w-full px-4 py-2 border rounded-md ${
                  confirmPassword && confirmPassword !== password
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "focus:ring-blue-500 focus:border-blue-500"
                }`}
                placeholder="********"
                required
              />
              {/* Fixed-height container for the validation message */}
              <div className="h-12">
                {confirmPassword && confirmPassword !== password && (
                  <p className="text-red-500 text-sm">
                    Passwords do not match.
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-12 bg-[#0D3B66] text-white py-2 rounded-lg hover:bg-[#145EA8] transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
