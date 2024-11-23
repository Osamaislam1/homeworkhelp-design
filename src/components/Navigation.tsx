import React, { useState } from 'react';
import { GraduationCap, History, Settings, CreditCard, LogOut, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-indigo-600" />
            <div>
              <span className="text-xl font-bold text-gray-800">LOGO</span>
              <p className="text-xs text-gray-500">24/7 Homework Support</p>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <NavLink active icon={<GraduationCap />} text="Ask" />
            <NavLink icon={<History />} text="History" />
            <NavLink icon={<Settings />} text="Settings" />
            <NavLink icon={<CreditCard />} text="Billing" />
            <button className="flex items-center text-gray-600 hover:text-gray-800">
              <LogOut className="h-5 w-5" />
              <span className="ml-2">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
            <MobileNavLink active icon={<GraduationCap />} text="Ask" />
            <MobileNavLink icon={<History />} text="History" />
            <MobileNavLink icon={<Settings />} text="Settings" />
            <MobileNavLink icon={<CreditCard />} text="Billing" />
            <button className="w-full flex items-center px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-md">
              <LogOut className="h-5 w-5" />
              <span className="ml-2">Logout</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ icon, text, active = false }: { icon: React.ReactNode; text: string; active?: boolean }) {
  return (
    <a
      href="#"
      className={`flex items-center space-x-2 ${
        active
          ? 'text-indigo-600 border-b-2 border-indigo-600'
          : 'text-gray-600 hover:text-gray-800'
      } py-2`}
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}

function MobileNavLink({ icon, text, active = false }: { icon: React.ReactNode; text: string; active?: boolean }) {
  return (
    <a
      href="#"
      className={`flex items-center px-3 py-2 rounded-md ${
        active
          ? 'text-indigo-600 bg-indigo-50'
          : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
      }`}
    >
      {icon}
      <span className="ml-2">{text}</span>
    </a>
  );
}