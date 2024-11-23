import { Star, Award, Users, BookOpen, Sparkles } from 'lucide-react';

export function TutorPreview() {
  const tutors = [
    {
      subject: "Mathematics",
      rating: 4.9,
      students: "1.2k+",
      experience: "5+ years",
      specialties: ["Calculus", "Linear Algebra", "Statistics"]
    },
    {
      subject: "Physics",
      rating: 4.8,
      students: "800+",
      experience: "4+ years",
      specialties: ["Mechanics", "Quantum Physics", "Electromagnetism"]
    },
    {
      subject: "Chemistry",
      rating: 4.9,
      students: "950+",
      experience: "6+ years",
      specialties: ["Organic Chemistry", "Biochemistry", "Physical Chemistry"]
    },

  {
    subject: "Computer Science",
    rating: 4.8,
    students: "1.1k+",
    experience: "5+ years",
    specialties: ["Algorithms", "Data Structures", "Machine Learning"]
  }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-3 sm:p-4 lg:p-6 mb-8 text-white">
      <div className="text-center mb-4 sm:mb-6 lg:mb-8">
        <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-xl mb-2 sm:mb-3">
          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300" />
        </div>
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">Expert Tutors at Your Service</h2>
        <p className="text-indigo-100 text-xs sm:text-sm lg:text-base max-w-xl mx-auto">
          Get instant access to our network of verified experts
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:gap-3 lg:gap-4">      {tutors.map((tutor) => (
          <div key={tutor.subject} className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 lg:p-4 border border-white/20">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <span className="font-medium text-xs sm:text-sm lg:text-base overflow-hidden text-ellipsis">{tutor.subject}</span>
              <div className="flex items-center bg-yellow-400/20 px-1.5 py-0.5 rounded-full shrink-0 ml-2">
                <Star className="h-3 w-3 text-yellow-300 fill-current" />
                <span className="ml-1 text-[10px] sm:text-xs text-yellow-100">{tutor.rating}</span>
              </div>
            </div>
            <div className="space-y-1.5 mb-2 sm:mb-3">
              <div className="flex items-center text-indigo-100">
                <Award className="h-3 w-3 mr-1.5 flex-shrink-0" />
                <span className="text-[10px] sm:text-xs truncate">{tutor.experience} experience</span>
              </div>
              <div className="flex items-center text-indigo-100">
                <Users className="h-3 w-3 mr-1.5 flex-shrink-0" />
                <span className="text-[10px] sm:text-xs truncate">{tutor.students} students helped</span>
              </div>
              <div className="flex items-center text-indigo-100">
                <BookOpen className="h-3 w-3 mr-1.5 flex-shrink-0" />
                <span className="text-[10px] sm:text-xs truncate">Available 24/7</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1">
              {tutor.specialties.map((specialty) => (
                <span 
                  key={specialty} 
                  className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded-full truncate max-w-[100px] sm:max-w-[120px]"
                  title={specialty}
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}