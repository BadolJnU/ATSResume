// src/components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">ATSResume</h3>
            <p className="text-sm text-gray-400">
              Your go-to platform for creating ATS-friendly resumes and landing your dream job.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="hover:text-gray-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Social Icon (Facebook) */}
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.952 10.125 11.854v-8.385H7.078v-3.469h3.047V9.87c0-3.008 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-2.463.923-2.463 2.256v2.99H18.83l-.758 3.469h-2.28V23.92c5.738-.902 10.125-5.863 10.125-11.847z" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Social Icon (Twitter) */}
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184A4.92 4.92 0 0016.616 3c-2.828 0-4.548 2.447-3.99 4.873A13.905 13.905 0 011.678 3.149 4.93 4.93 0 001.527 2.406a4.923 4.923 0 002.231 4.103 4.92 4.92 0 01-2.223-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.89 9.89 0 01-6.114 2.104c-.398 0-.79-.023-1.175-.068a13.953 13.953 0 007.568 2.219c9.084 0 14.031-7.508 14.031-14.031 0-.211 0-.422-.015-.631A9.856 9.856 0 0024 4.57z" />
                </svg>
              </Link>
              {/* Add more social icons here */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/builder" className="hover:text-gray-300">
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link href="/templates" className="hover:text-gray-300">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              {/* Add more links */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-400">
              Email: <a href="mailto:info@atsresume.com" className="hover:text-gray-300">info@atsresume.com</a>
            </p>
            <p className="text-sm text-gray-400">
              Phone: +1 (123) 456-7890
            </p>
            <p className="text-sm text-gray-400">
              Address: 123 Main St, Anytown, USA
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ATSResume. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;