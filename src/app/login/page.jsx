"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc"; // Google icon
import { FaFacebook } from "react-icons/fa"; // Facebook icon

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form from refreshing
    setError(null);

    // Simulate API login call
    const isLoginSuccessful =
      email === "user@example.com" && password === "password123";
    if (isLoginSuccessful) {
      router.push("/"); // Redirect to a dashboard page on successful login
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Video Section */}
      <div className="flex-3 w-3/4 relative">
        <video
          className="w-full h-full object-cover"
          src="/login/login video.webm" // Replace with your video path
          autoPlay
          muted
          loop
        ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
      </div>

      {/* Login Form Section */}
      <div className="flex-1 w-1/4 flex justify-center bg-white shadow-lg mt-20">
        <div className="w-full max-w-md p-8">
          <h2 className="text-4xl font-semibold text-left mt-6 mb-3">Sign in</h2>

          {/* New User? Create An Account */}
          <div className="flex mb-12 gap-2">
            <h2 className="font-light">Don&apos;t have an account?</h2>
            <Link href="/signup">
              <h2 className="text-[#0D3B66] font-medium cursor-pointer hover:underline">
                Create an Account
              </h2>
            </Link>
          </div>

          {error && <div className="text-red-500 text-center mb-4">{error}</div>}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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

            <div className="mt-12">
              <button
                type="submit" // Ensure this button submits the form
                className="w-full bg-[#0D3B66] text-white py-2 rounded-lg hover:bg-[#145EA8] transition-colors"
              >
                Login
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            <a href="/login" className="text-[#0D3B66] hover:underline font-light text-center">
              Forgot Password?
            </a>
          </p>

          {/* Social Login Buttons */}
          <div className="mt-16 space-y-4">
            <button
              type="button"
              className="w-full flex items-center justify-center bg-white text-black py-2 border rounded-md shadow-sm hover:bg-gray-100 transition-colors"
              onClick={() => alert("Google login clicked!")}
            >
              <FcGoogle className="h-6 w-6 mr-2" />
              <span className="text-md leading-none text-gray-700">Continue with Google</span>
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center bg-white text-black py-2 border rounded-md shadow-sm hover:bg-gray-100 transition-colors"
              onClick={() => alert("Facebook login clicked!")}
            >
              <FaFacebook className="h-6 w-6 mr-2 text-blue-600" />
              <span className="text-md leading-none text-gray-700">Continue with Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
