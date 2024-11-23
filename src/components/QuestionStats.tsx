import React from 'react';
import { Trophy, Clock, Star } from 'lucide-react';

export function QuestionStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <StatCard
        icon={<Trophy className="h-6 w-6 text-yellow-500" />}
        title="Questions Remaining"
        value="2"
        subtitle="Basic Plan"
      />
      <StatCard
        icon={<Clock className="h-6 w-6 text-green-500" />}
        title="Avg. Response Time"
        value="15min"
        subtitle="Last 24 hours"
      />
      <StatCard
        icon={<Star className="h-6 w-6 text-purple-500" />}
        title="Satisfaction Rate"
        value="98%"
        subtitle="Based on 1.2k+ ratings"
      />
    </div>
  );
}

function StatCard({ icon, title, value, subtitle }: {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
      <div className="flex items-start space-x-3">
        <div className="p-2 bg-gray-50 rounded-lg">
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}