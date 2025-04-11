// src/components/LoginModal.jsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center backdrop-blur-md">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl flex relative"> {/* Added relative here */}
        <div className="absolute top-0 right-0 p-4"> {/* Cross button at top right */}
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* Left Side (Input Fields) */}
        <div className="w-1/2 pr-8">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Right Side (SVG) */}
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src="/login.svg"
            alt="Login Illustration"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;