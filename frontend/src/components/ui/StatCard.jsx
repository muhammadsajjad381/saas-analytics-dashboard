import React, { memo } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = memo(({ title, value, trend, icon: Icon, variant = "blue" }) => {
  const isPositive = trend > 0;

  // Manual class mapping (Faster than utility functions for small scale)
  const bgColors = {
    blue: "bg-blue-50 text-blue-600",
    emerald: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
    rose: "bg-rose-50 text-rose-600",
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${bgColors[variant] || bgColors.blue}`}>
          <Icon size={22} />
        </div>
        <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${
          isPositive ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
        }`}>
          {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          {Math.abs(trend)}%
        </div>
      </div>
      
      <div className="space-y-1">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{value}</h3>
      </div>
    </div>
  );
});

export default StatCard;