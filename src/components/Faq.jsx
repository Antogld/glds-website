import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900 dark:text-white">{question}</span>
        <svg
          className={`w-6 h-6 transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600 dark:text-gray-300">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQs = () => {
  const faqData = [
    {
      question: "What is React?",
      answer: "React is a popular JavaScript library for building user interfaces, particularly single-page applications. It's used for handling the view layer in web and mobile apps."
    },
    {
      question: "How do I install React?",
      answer: "You can create a new React project using Create React App. Run 'npx create-react-app my-app' in your terminal, replace 'my-app' with your project name."
    },
    {
      question: "What are React hooks?",
      answer: "React hooks are functions that let you use state and other React features in functional components. Common hooks include useState, useEffect, and useContext."
    },
    {
      question: "What is JSX?",
      answer: "JSX is a syntax extension for JavaScript, recommended for use with React. It looks similar to XML/HTML and allows you to write HTML structures in the same file as your JavaScript code."
    },
    {
      question: "What is the virtual DOM?",
      answer: "The virtual DOM is a programming concept where an ideal, or 'virtual', representation of a UI is kept in memory and synced with the 'real' DOM by a library such as ReactDOM."
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
        <div className="max-w-7xl mx-auto">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;