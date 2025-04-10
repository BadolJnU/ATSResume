// src/components/Features.tsx
import React from 'react';

const Features = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Key Features of ATSResume
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Explore the powerful features that make ATSResume stand out.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3">
            <div className="relative transition duration-300 ease-in-out hover:bg-white hover:shadow-md p-6 rounded-lg"> {/* Added hover effect classes */}
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                  {/* Icon */}
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3m0 6l-3 3-3-3" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">ATS Optimization</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Ensure your resume gets past applicant tracking systems.
              </dd>
            </div>

            <div className="relative transition duration-300 ease-in-out hover:bg-white hover:shadow-md p-6 rounded-lg"> {/* Added hover effect classes */}
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                  {/* Icon */}
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Template Variety</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Choose from a wide range of professionally designed templates.
              </dd>
            </div>

            <div className="relative transition duration-300 ease-in-out hover:bg-white hover:shadow-md p-6 rounded-lg"> {/* Added hover effect classes */}
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                  {/* Icon */}
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-4l-2 2L10 6z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Easy to Use</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Our intuitive interface makes resume building a breeze.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;