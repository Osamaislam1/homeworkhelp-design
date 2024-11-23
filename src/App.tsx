import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { QuestionStats } from './components/QuestionStats';
import { UpgradeCard } from './components/UpgradeCard';
import { QuestionForm } from './components/QuestionForm';
import { RecentQuestions } from './components/RecentQuestions';
import { PricingPlans } from './components/PricingPlans';
import { TutorPreview } from './components/TutorPreview';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      <Hero />

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
    <div className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8">
      <QuestionStats />
      <QuestionForm />
      <RecentQuestions />
    </div>
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      <UpgradeCard />
      <TutorPreview />
    </div>
  </div>

  <div className="space-y-8 sm:space-y-12 lg:space-y-16 mt-8 sm:mt-12 lg:mt-16">
    <PricingPlans />
    <Testimonials />
    <FAQ />
  </div>
</main>

      <Footer />
    </div>
  );
}

export default App;