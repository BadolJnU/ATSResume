// src/components/Banner.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center mt-10">
        {/* Left Side (Text Content) */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Create ATS-Friendly Resumes Effortlessly
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Our powerful resume builder helps you create job-winning resumes that get noticed by applicant tracking systems (ATS).
          </p>
          <Link
            href="/builder"
            className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700"
          >
            Start Building Now
          </Link>
        </div>

        {/* Right Side (SVG Image) */}
        <div className="md:w-1/2 md:block hidden">
          <Image
            src="/banner.svg" // Replace with your SVG path
            alt="ATS-Friendly Resume Builder"
            width={500} // Adjust as needed
            height={400} // Adjust as needed
            className="mx-auto" // Center the image horizontally
          />
        </div>
      </div>
    </div>
  );
}