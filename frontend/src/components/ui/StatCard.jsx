import React, { memo } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = memo(({ title, value, trend, icon: Icon, variant = "blue", subtitle }) => {
  const isPositive = trend >= 0;

  const bgColors = {
    blue: "bg-blue-50 text-blue-600",
    emerald: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
    rose: "bg-rose-50 text-rose-600",
    indigo: "bg-indigo-50 text-indigo-600",
    violet: "bg-violet-50 text-violet-600",
  };

  return (
    <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${bgColors[variant] || bgColors.blue}`}>
          <Icon size={22} />
        </div>
        {typeof trend === 'number' && (
          <div className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${
            isPositive ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
          }`}>
            {isPositive ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
            <span>{isPositive ? `+${trend}%` : `${trend}%`}</span>
          </div>
        )}
      </div>

      <div className="space-y-1">
        <p className="text-xs sm:text-sm font-medium text-slate-500">{title}</p>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">{value}</h3>
        {subtitle && <p className="text-xs text-slate-400 font-normal pt-1">{subtitle}</p>}
      </div>
    </div>
  );
});

export default StatCard;