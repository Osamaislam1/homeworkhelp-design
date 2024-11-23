import React from 'react';
import { Zap } from 'lucide-react';

export function UpgradeCard() {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6 text-white mb-8">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">Upgrade to Premium</h3>
          <p className="text-indigo-100 text-sm mb-4">Get unlimited questions and priority support</p>
          <ul className="space-y-2 text-sm mb-4">
            <li className="flex items-center">
              <Zap className="h-4 w-4 mr-2" />
              Unlimited questions per month
            </li>
            <li className="flex items-center">
              <Zap className="h-4 w-4 mr-2" />
              Priority support (5min response)
            </li>
            <li className="flex items-center">
              <Zap className="h-4 w-4 mr-2" />
              Access to video explanations
            </li>
          </ul>
        </div>
        <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
          Upgrade Now
        </button>
      </div>
    </div>
  );
}