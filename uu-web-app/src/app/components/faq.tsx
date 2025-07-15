import React from "react";

const faqs = [
  {
    question: "How do I post an item for sale?",
    answer: "Click on the 'Post an Item' button and fill out the form with your item details."
  },
  {
    question: "How do I contact a seller?",
    answer: "Open the item listing and use the contact form or provided contact details."
  },
  {
    question: "Is there a fee for posting?",
    answer: "No, posting items is currently free for all users."
  },
  {
    question: "How do I report inappropriate content?",
    answer: "Use the 'Report' button on the listing or contact our support team."
  }
];

export default function FAQ() {
  return (
    <div id="faq" className="max-w-2xl mx-auto my-12 p-6 bg-white rounded-lg shadow" >
      <p className="text-xl font-bold mb-4">Frequently Asked Questions</p>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx}>
            <p className="font-semibold text-gray-800">{faq.question}</p>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 