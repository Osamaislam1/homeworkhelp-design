import { GraduationCap, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-indigo-400" />
              <div>
                <span className="text-xl font-bold text-white">LOGO</span>
                <p className="text-xs text-gray-400">24/7 Homework Support</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Connecting students with expert tutors for instant homework help and academic success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-indigo-400"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-indigo-400"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-indigo-400"><Mail className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-indigo-400">How It Works</a></li>
              <li><a href="#" className="text-sm hover:text-indigo-400">Pricing Plans</a></li>
              <li><a href="#" className="text-sm hover:text-indigo-400">For Tutors</a></li>
              <li><a href="#" className="text-sm hover:text-indigo-400">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-indigo-400">Help Center</a></li>
              <li><a href="#" className="text-sm hover:text-indigo-400">Contact Us</a></li>
              <li><a href="#" className="text-sm hover:text-indigo-400">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-indigo-400">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get updates about new features and offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg flex-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg text-sm hover:bg-indigo-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} NAME. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}