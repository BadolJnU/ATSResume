// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation"; // Import usePathname
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };

  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-teal-600">
              ATSResume
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className={`hover:text-teal-600 ${pathname === "/" ? "border-b-2 border-teal-600" : ""
                }`}
            >
              Home
            </Link>
            <Link
              href="/builder"
              className={`hover:text-teal-600 ${pathname === "/builder" ? "border-b-2 border-teal-600" : ""
                }`}
            >
              Builder
            </Link>
            <Link
              href="/templates"
              className={`hover:text-teal-600 ${pathname === "/templates" ? "border-b-2 border-teal-600" : ""
                }`}
            >
              Templates
            </Link>
            <Link
              href="/about"
              className={`hover:text-teal-600 ${pathname === "/about" ? "border-b-2 border-teal-600" : ""
                }`}
            >
              About
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <button
              onClick={openLoginModal} // Open the modal
              className="text-gray-600 hover:text-teal-600"
            >
              Login
            </button>
            <button
              onClick={openSignUpModal} // Open the modal
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
            >
              Sign Up
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              className={`hover:text-teal-600 ${pathname === "/" ? "border-b-2 border-teal-600" : ""
                }`}
            >
              Home
            </Link>
            <Link
              href="/builder"
              className={`hover:text-teal-600 ${pathname === "/builder" ? "border-b-2 border-teal-600" : ""
                }`}
            >
              Builder
            </Link>
            <Link
              href="/templates"
              className={`hover:text-teal-600 ${pathname === "/templates" ? "border-b-2 border-teal-600" : ""
                }`}
            >
              Templates
            </Link>
            <Link
              href="/about"
              className={`hover:text-teal-600 ${pathname === "/about" ? "border-b-2 border-teal-600" : ""
                }`}
            >
              About
            </Link>
            <button
              onClick={openLoginModal} // Open the modal
              className="text-gray-600 hover:text-teal-600"
            >
              Login
            </button>
            <button
              onClick={openSignUpModal} // Open the modal
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
      <SignupModal isOpen={isSignUpModalOpen} onClose={closeSignUpModal} />
    </nav>
  );
}