import React, { useState, ChangeEvent } from 'react';
import { Upload, Clock, Sparkles } from 'lucide-react';

interface FormData {
  subject: string;
  questionNumber: string;
  priority: 'normal' | 'urgent';
  question: string;
  file?: File;
}

export function QuestionForm() {
  const [formData, setFormData] = useState<FormData>({
    subject: '',
    questionNumber: '',
    priority: 'normal',
    question: '',
  });
  const [dragActive, setDragActive] = useState(false);

  const subjects = [
    "Mathematics", "Physics", "Chemistry", "Biology",
    "Computer Science", "Literature", "History", "Economics"
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData(prev => ({ ...prev, file: e.dataTransfer.files[0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Ask a new question</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Clock className="h-4 w-4" />
          <span>Average response time: 15 minutes</span>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject Area
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select a subject</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Question No. (If Multiple)
            </label>
            <input
              type="text"
              name="questionNumber"
              value={formData.questionNumber}
              onChange={handleInputChange}
              placeholder="e.g. Q2"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Priority Level
            </label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="normal">Normal (15min)</option>
              <option value="urgent">Urgent (5min) +2 credits</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Question
          </label>
          <textarea
            name="question"
            value={formData.question}
            onChange={handleInputChange}
            className="w-full h-32 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Describe your question in detail. The more specific you are, the better help you'll receive."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Image (Optional)
          </label>
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-6 text-center ${
              dragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'
            }`}
          >
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">
              Drag and drop your image here, or{' '}
              <button type="button" className="text-indigo-600 hover:text-indigo-700 font-medium">
                browse files
              </button>
            </p>
            <p className="mt-1 text-xs text-gray-500">
              PNG, JPG up to 10MB
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all font-medium flex items-center justify-center space-x-2"
        >
          <Sparkles className="h-5 w-5" />
          <span>Submit Question</span>
        </button>
      </div>
    </form>
  );
}