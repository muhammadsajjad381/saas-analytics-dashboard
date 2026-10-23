import React from 'react';
import StatCard from '../components/ui/StatCard';
import { DollarSign, Users, ShoppingBag, Activity } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { title: 'Total Revenue', value: '$45,231', trend: 12.5, icon: DollarSign, variant: 'blue' },
    { title: 'Active Users', value: '2,420', trend: 8.2, icon: Users, variant: 'emerald' },
    { title: 'Total Sales', value: '1,210', trend: -3.1, icon: ShoppingBag, variant: 'amber' },
    { title: 'Conversion Rate', value: '4.8%', trend: 2.4, icon: Activity, variant: 'rose' },
  ];

  return (
    <div className="p-8">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dashboard Overview</h1>
        <p className="text-slate-500 mt-1 font-medium">Welcome back, Sajjad. Here's your business at a glance.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <StatCard key={index} {...item} />
        ))}
      </div>

      {/* Chart Section (Coming Soon) */}
      <div className="mt-8 bg-white rounded-3xl border border-slate-200 h-[450px] shadow-sm flex items-center justify-center">
        <p className="text-slate-400 font-medium italic">Interactive Charts Engine Implementation - Day 2</p>
      </div>
    </div>
  );
};

export default Dashboard;