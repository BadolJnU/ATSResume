// src/components/UserReviews.tsx
"use client";

import React, { useState, useEffect } from 'react';

const reviews = [
  {
    rating: 5,
    message: "ATSResume made my job search so much easier! The templates are excellent, and I got more interviews.",
    userName: "Alice Johnson",
    date: "2023-10-26",
  },
  {
    rating: 4,
    message: "Great tool for creating professional resumes. The ATS optimization really helped me get noticed.",
    userName: "Bob Smith",
    date: "2023-10-25",
  },
  {
    rating: 5,
    message: "I love the user-friendly interface. It's so easy to build and customize my resume with ATSResume.",
    userName: "Charlie Brown",
    date: "2023-10-24",
  },
  {
    rating: 3,
    message: "It was okay, but I wish there were more template options.",
    userName: "David Lee",
    date: "2023-10-23",
  },
  {
    rating: 5,
    message: "Absolutely fantastic! I landed my dream job thanks to ATSResume.",
    userName: "Eve White",
    date: "2023-10-22",
  },
  // Add more reviews as needed
];

const UserReviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPreviousReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const goToNextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const currentReview = reviews[currentReviewIndex];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">User Reviews</h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-4">
            {Array.from({ length: currentReview.rating }).map((_, index) => (
              <svg key={index} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.505L.27 7.26l6.027-.875L10 2.13l2.703 4.255 6.027.875-4.973 4.245L15.878 18.09z" />
              </svg>
            ))}
            {Array.from({ length: 5 - currentReview.rating }).map((_, index) => (
              <svg key={index} className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.505L.27 7.26l6.027-.875L10 2.13l2.703 4.255 6.027.875-4.973 4.245L15.878 18.09z" />
              </svg>
            ))}
          </div>
          <p className="text-lg text-gray-700 mb-4">"{currentReview.message}"</p>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-800">{currentReview.userName}</p>
              <p className="text-sm text-gray-500">{currentReview.date}</p>
            </div>
            <div>
              <button
                onClick={goToPreviousReview}
                className="bg-gray-200 hover:bg-teal-600 rounded-full p-2 mr-2"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNextReview}
                className="bg-gray-200 hover:bg-teal-600 rounded-full p-2"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReviews;