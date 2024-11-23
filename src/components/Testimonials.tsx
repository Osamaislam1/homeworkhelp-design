import { Quote, Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Alex Thompson",
      subject: "Calculus",
      rating: 5,
      text: "The tutors here helped me understand complex calculus concepts in just one session. Incredible service!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces"
    },
    {
      name: "Sarah Chen",
      subject: "Physics",
      rating: 5,
      text: "Quick responses and clear explanations. This platform has been a lifesaver for my physics homework.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces"
    },
    {
      name: "Michael Rodriguez",
      subject: "Chemistry",
      rating: 5,
      text: "The step-by-step explanations are fantastic. Worth every penny for the premium subscription!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
      <div className="text-center mb-12">
        <Quote className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-3">What Our Students Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Join thousands of satisfied students who've improved their grades with our help
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="flex flex-col">
            <div className="flex-1 bg-gray-50 rounded-xl p-6 relative">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="absolute -bottom-6 left-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-4 border-white"
                />
              </div>
            </div>
            <div className="pt-8 pl-6">
              <p className="font-medium text-gray-800">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.subject} Student</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}