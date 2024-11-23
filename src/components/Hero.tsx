// components/Hero.tsx
import { Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

export function Hero() {
  const benefits = [
    "24/7 Expert Support",
    "Verified Tutors", 
    "Quick Responses",
    "All Subjects Covered"
  ];

  return (
    <div className="relative py-12 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Get Expert Help
            </span>
            <br />
            <span className="text-gray-800">
              With Your Studies
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Connect with qualified tutors instantly. Get help with homework, assignments, 
            and exam prep across all subjects.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium text-white hover:from-indigo-700 hover:to-purple-700 transition-all flex items-center gap-2">
              Ask a Question <ArrowRight className="h-4 w-4" />
            </button>
            <button className="px-6 py-3 bg-white border border-gray-200 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2">
              Browse Tutors <Sparkles className="h-4 w-4" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-indigo-600" />
                <span className="text-gray-600">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-3xl" />
          <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="grid gap-4">
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Average Response Time</div>
                  <div className="text-xl font-semibold text-gray-900">15 Minutes</div>
                </div>
              </div>
              
              <div className="text-center py-8 relative">
  {/* Decorative background patterns */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]" />
  </div>
  
  {/* Floating orb effect */}
  <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
  <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-full blur-lg animate-pulse delay-300" />
  
  {/* Content with decorated border */}
  <div className="relative p-6 rounded-xl border border-gray-200/50 bg-white/50 backdrop-blur-sm">
    <div className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
      50K+
    </div>
    <div className="text-gray-600 mt-2">Questions Answered</div>
    
    {/* Decorative corners */}
    <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-indigo-500" />
    <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-indigo-500" />
    <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-indigo-500" />
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-indigo-500" />
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}