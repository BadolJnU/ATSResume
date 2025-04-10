// src/components/FAQSection.tsx
"use client";

import React, { useState } from 'react';

const faqData = [
  {
    question: "How do I know if my resume is ATS-compliant?",
    answer: "You can check your resume's ATS compliance by using our ATS checker tool. It analyzes your resume and provides feedback on how to improve its compatibility with applicant tracking systems.",
  },
  {
    question: "What is a good ATS score for a resume?",
    answer: "A good ATS score typically means your resume is formatted correctly and includes relevant keywords. Aim for a score above 80% to ensure your resume passes through ATS filters.",
  },
  {
    question: "Do ATS scan resumes?",
    answer: "Yes, most companies use applicant tracking systems (ATS) to scan resumes for keywords and formatting before they are reviewed by a human recruiter.",
  },
  {
    question: "Can ATS detect PDF?",
    answer: "Yes, most modern ATS can detect and parse PDF files. However, it's recommended to use a plain text or Word document format for best compatibility.",
  },
  {
    question: "What is a Resume Checker?",
    answer: "A resume checker is a tool that analyzes your resume to ensure it is optimized for applicant tracking systems and human recruiters.",
  },
  {
    question: "How to make an ATS-friendly resume?",
    answer: "To make an ATS-friendly resume, use simple formatting, relevant keywords, and avoid images or tables. Use a plain text or Word document format.",
  },
  {
    question: "How does Jobscan work?",
    answer: "Jobscan analyzes your resume against a job description to identify keywords and formatting issues that could prevent it from passing through ATS filters.",
  },
  {
    question: "What is an ATS?",
    answer: "ATS stands for Applicant Tracking System. It's a software used by companies to manage and track job applications.",
  },
  {
    question: "Why do you need a resume checker?",
    answer: "A resume checker helps you optimize your resume to ensure it gets noticed by both ATS and human recruiters, increasing your chances of getting an interview.",
  },
  {
    question: "What exactly is being checked? Can you rate my resume?",
    answer: "Our resume checker analyzes your resume for keywords, formatting, and other factors that affect its compatibility with ATS. We provide a score and feedback to help you improve your resume.",
  },
  // Add more questions and answers as needed
];

const FAQSection = () => {
  const [openQuestions, setOpenQuestions] = useState([]);

  const toggleQuestion = (question) => {
    if (openQuestions.includes(question)) {
      setOpenQuestions(openQuestions.filter((q) => q !== question));
    } else {
      setOpenQuestions([...openQuestions, question]);
    }
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((item) => (
            <div key={item.question} className="border border-teal-500 rounded-lg overflow-hidden">
              <div
                className="flex justify-between items-center px-6 py-4 cursor-pointer"
                onClick={() => toggleQuestion(item.question)}
              >
                <p className="text-lg font-medium text-gray-800">{item.question}</p>
                <svg
                  className={`h-6 w-6 text-gray-500 transition-transform duration-300 ${openQuestions.includes(item.question) ? 'transform rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {openQuestions.includes(item.question) && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-base text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;