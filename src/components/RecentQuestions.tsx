import { MessageSquare, Clock, CheckCircle, XCircle } from 'lucide-react';

export function RecentQuestions() {
  const questions = [
    {
      id: 1,
      subject: "Mathematics",
      question: "How do I solve this quadratic equation?",
      status: "answered",
      time: "2 hours ago",
      hasImage: true
    },
    {
      id: 2,
      subject: "Physics",
      question: "Can you explain Newton's third law with examples?",
      status: "pending",
      time: "15 minutes ago",
      hasImage: false
    },
    {
      id: 3,
      subject: "Chemistry",
      question: "Help with balancing this chemical equation",
      status: "answered",
      time: "1 day ago",
      hasImage: true
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Recent Questions</h2>
        <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {questions.map((q) => (
          <div key={q.id} className="flex items-start space-x-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="p-2 bg-indigo-50 rounded-lg">
              <MessageSquare className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">{q.subject}</span>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">{q.time}</span>
                </div>
              </div>
              <p className="text-gray-800 mt-1">{q.question}</p>
              <div className="flex items-center mt-2 space-x-3">
                {q.hasImage && (
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    Has attachment
                  </span>
                )}
                <span className={`text-xs px-2 py-1 rounded flex items-center ${
                  q.status === 'answered' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {q.status === 'answered' ? (
                    <><CheckCircle className="h-3 w-3 mr-1" /> Answered</>
                  ) : (
                    <><Clock className="h-3 w-3 mr-1" /> Pending</>
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}