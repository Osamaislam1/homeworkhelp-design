import React from 'react';
import { Check, Zap, Star } from 'lucide-react';

export function PricingPlans() {
  const plans = [
    {
      name: "Starter",
      price: "9.99",
      questions: "5",
      features: [
        "5 questions per month",
        "24/7 tutor support",
        "Image uploads",
        "Basic response time (15min)"
      ]
    },
    {
      name: "Premium",
      price: "24.99",
      questions: "20",
      features: [
        "20 questions per month",
        "Priority support (5min)",
        "Image uploads",
        "Video explanations",
        "Solution archives"
      ],
      popular: true
    },
    {
      name: "Unlimited",
      price: "49.99",
      questions: "∞",
      features: [
        "Unlimited questions",
        "Instant support",
        "Video explanations",
        "Solution archives",
        "1-on-1 tutor sessions",
        "Practice exercises"
      ]
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Choose Your Plan</h2>
        <p className="text-gray-600 mt-2">Get the help you need with our flexible plans</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.name} className={`rounded-xl p-6 ${
            plan.popular 
              ? 'border-2 border-indigo-600 relative' 
              : 'border border-gray-200'
          }`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-gray-800">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-3xl font-bold">${plan.price}</span>
                <span className="text-gray-500">/month</span>
              </div>
              <div className="mt-2 flex items-center justify-center text-gray-600">
                <Zap className="h-4 w-4 mr-1 text-yellow-500" />
                <span>{plan.questions} questions</span>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center text-sm text-gray-600">
                  <Check className="h-4 w-4 mr-2 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full py-2 px-4 rounded-lg font-medium ${
              plan.popular
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            } transition-colors`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}