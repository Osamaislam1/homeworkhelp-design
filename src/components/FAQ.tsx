import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: "How quickly will I get an answer to my question?",
      answer: "Most questions are answered within 15 minutes. For premium users, we guarantee responses within 5 minutes.",
      category: "Timing"
    },
    {
      question: "Can I upload images with my questions?",
      answer: "Yes! You can upload images in PNG or JPG format up to 10MB in size to help tutors better understand your question.",
      category: "Features"
    },
    {
      question: "How are the tutors verified?",
      answer: "All our tutors go through a rigorous verification process including academic credential checks, teaching assessments, and background verification.",
      category: "Quality"
    },
    {
      question: "What subjects do you cover?",
      answer: "We cover a wide range of subjects including Mathematics, Physics, Chemistry, Biology, Computer Science, Literature, History, and Economics.",
      category: "Subjects"
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl p-8 mb-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-xl mb-4 animate-pulse">
          <HelpCircle className="h-7 w-7 text-indigo-600" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Find quick answers to common questions about our service
        </p>
      </div>

      <div className="max-w-3xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {filteredFaqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-100 hover:border-indigo-200 transition-all overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 text-left flex items-center justify-between group"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center gap-4">
                <span className="font-medium text-gray-800 group-hover:text-indigo-600 transition-colors">
                  {faq.question}
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-600 font-medium">
                  {faq.category}
                </span>
              </div>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500 group-hover:text-indigo-600 transition-colors" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500 group-hover:text-indigo-600 transition-colors" />
              )}
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredFaqs.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No matching questions found.</p>
        </div>
      )}
    </div>
  );
}