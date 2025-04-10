// src/components/UploadProcess.tsx
"use client"; 
import React, { useState } from 'react';

const UploadProcess = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Steps Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <div className={`flex items-center justify-center h-10 w-10 rounded-full border-2 ${step >= 1 ? 'bg-teal-500 text-white border-teal-500' : 'border-gray-300 text-gray-500'}`}>
              1
            </div>
            <p className="ml-2 mx-2 text-sm font-medium text-gray-700">Upload Resume</p>
            {step >= 2 && <div className="flex-1 border-t-2 border-gray-300 mx-2"></div>}
            <div className={`flex items-center justify-center h-10 w-10 rounded-full border-2 ${step >= 2 ? 'bg-teal-500 text-white border-teal-500' : 'border-gray-300 text-gray-500'}`}>
              2
            </div>
            <p className="ml-2 mx-2 text-sm font-medium text-gray-700">Add Job</p>
            {step >= 3 && <div className="flex-1 border-t-2 border-gray-300 mx-2"></div>}
            <div className={`flex items-center justify-center h-10 w-10 rounded-full border-2 ${step >= 3 ? 'bg-teal-500 text-white border-teal-500' : 'border-gray-300 text-gray-500'}`}>
              3
            </div>
            <p className="ml-2 text-sm font-medium text-gray-700">View Results</p>
          </div>
        </div>

        {/* Step Content */}
        {step === 1 && (
          <div className="border-2 border-dashed border-gray-300 p-8 rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Upload Your Resume</h2>
            <p className="text-lg text-gray-600 mb-6">Upload your resume to get started</p>
            <button className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600">
              Upload your resume
            </button>
            <p className="text-sm text-gray-500 mt-2">as .pdf or .docx file</p>
            <p className="text-sm text-blue-500 mt-4 cursor-pointer">Or paste resume text</p>
            <div className="mt-6 flex justify-end">
              <button onClick={handleNext} className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600">Next</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="border-2 border-dashed border-gray-300 p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Add Job Description</h2>
            <textarea className="w-full h-48 border border-gray-300 rounded-md p-2" placeholder="Paste job description here..."></textarea>
            <div className="mt-6 flex justify-between">
              <button onClick={handleBack} className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">Back</button>
              <button onClick={handleNext} className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600">Next</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="border-2 border-dashed border-gray-300 p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">View Results</h2>
            <p className="text-lg text-gray-600 mb-6">Results will be displayed here after analysis.</p>
            <div className="mt-6 flex justify-start">
              <button onClick={handleBack} className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">Back</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadProcess;