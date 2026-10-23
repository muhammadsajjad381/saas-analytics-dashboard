import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import {
  TrendingUp,
  Percent,
  Layers,
  Globe2,
  Filter,
} from 'lucide-react';

const mrrGrowthData = [
  { month: 'Oct', newArr: 12400, churned: 1800, netExpansion: 4200 },
  { month: 'Nov', newArr: 14800, churned: 1600, netExpansion: 5100 },
  { month: 'Dec', newArr: 16200, churned: 2100, netExpansion: 6400 },
  { month: 'Jan', newArr: 19100, churned: 1900, netExpansion: 7800 },
  { month: 'Feb', newArr: 22400, churned: 1500, netExpansion: 8900 },
  { month: 'Mar', newArr: 26800, churned: 1700, netExpansion: 10400 },
];

const retentionCohortData = [
  { day: 'Day 1', rate: 100 },
  { day: 'Day 7', rate: 76 },
  { day: 'Day 14', rate: 64 },
  { day: 'Day 30', rate: 58 },
  { day: 'Day 60', rate: 52 },
  { day: 'Day 90', rate: 49 },
];

const funnelStages = [
  { name: 'Website Visitors', count: '48,500', rate: '100%', drop: null },
  { name: 'Free Trial Signups', count: '6,200', rate: '12.8%', drop: '-87.2%' },
  { name: 'Product Activated', count: '3,840', rate: '61.9%', drop: '-38.1%' },
  { name: 'Paid Conversions', count: '1,280', rate: '33.3%', drop: '-66.7%' },
];

const topCountries = [
  { name: 'United States', flag: '🇺🇸', users: '24,100', share: 48, trend: '+14%' },
  { name: 'United Kingdom', flag: '🇬🇧', users: '9,400', share: 19, trend: '+9%' },
  { name: 'Germany', flag: '🇩🇪', users: '6,800', share: 14, trend: '+11%' },
  { name: 'Canada', flag: '🇨🇦', users: '4,600', share: 9, trend: '+6%' },
  { name: 'Others', flag: '🌐', users: '5,100', share: 10, trend: '+4%' },
];

const Analytics = () => {

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Analytics & Intelligence</h2>
          <p className="text-slate-500 text-sm mt-1">Cohort retention, ARR growth trajectories, and user acquisition funnels.</p>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 shadow-xs hover:bg-slate-50 transition-colors">
            <Filter size={15} />
            <span>Filter Cohorts</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Customer LTV</span>
            <span className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
              <TrendingUp size={16} />
            </span>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-slate-900">$1,480</p>
          <p className="text-xs text-emerald-600 font-semibold mt-1">↑ 12.4% vs last quarter</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Blended CAC</span>
            <span className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
              <Percent size={16} />
            </span>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-slate-900">$184</p>
          <p className="text-xs text-emerald-600 font-semibold mt-1">↓ 6.2% acquisition cost</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">LTV : CAC Ratio</span>
            <span className="p-2 bg-violet-50 text-violet-600 rounded-xl">
              <Layers size={16} />
            </span>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-slate-900">8.04x</p>
          <p className="text-xs text-slate-400 font-medium mt-1">Target is &gt; 3.0x</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Net Retention (NRR)</span>
            <span className="p-2 bg-amber-50 text-amber-600 rounded-xl">
              <Globe2 size={16} />
            </span>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-slate-900">114.2%</p>
          <p className="text-xs text-emerald-600 font-semibold mt-1">Top tier SaaS benchmark</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">ARR Trajectory Breakdown</h3>
              <p className="text-xs text-slate-500">New ARR additions versus monthly churn volume</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">H2 Performance</span>
            </div>
          </div>

          <div className="h-72 sm:h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mrrGrowthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val / 1000}k`} />
                <Tooltip
                  cursor={{ fill: '#f8fafc' }}
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-slate-900 text-white p-3 rounded-xl shadow-xl text-xs space-y-1">
                          <p className="font-semibold text-slate-300">{label}</p>
                          <p className="text-indigo-400">New ARR: +${payload[0]?.value?.toLocaleString()}</p>
                          <p className="text-rose-400">Churned: -${payload[1]?.value?.toLocaleString()}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="newArr" fill="#4f46e5" radius={[6, 6, 0, 0]} name="New ARR" />
                <Bar dataKey="churned" fill="#fb7185" radius={[6, 6, 0, 0]} name="Churned" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-slate-100 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-md bg-indigo-600 inline-block" />
              <span className="text-slate-600 font-medium">New Added ARR</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-md bg-rose-400 inline-block" />
              <span className="text-slate-600 font-medium">Lost Churn</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-slate-900">User Retention Cohort</h3>
            <p className="text-xs text-slate-500">Average % retained over 90 days</p>
          </div>

          <div className="h-52 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={retentionCohortData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="day" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} />
                <Tooltip />
                <Line type="monotone" dataKey="rate" stroke="#06b6d4" strokeWidth={3} dot={{ fill: '#06b6d4', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-auto pt-4 border-t border-slate-100 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">Day 30 Benchmark:</span>
              <span className="font-bold text-emerald-600">58% (Healthy)</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">Churn Peak:</span>
              <span className="font-bold text-slate-800">Days 7 - 14</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-900">Conversion Funnel</h3>
            <p className="text-xs text-slate-500">Step-by-step visitor conversion pipeline</p>
          </div>

          <div className="space-y-4">
            {funnelStages.map((stage, idx) => (
              <div key={stage.name} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 font-bold flex items-center justify-center text-[11px]">
                      {idx + 1}
                    </span>
                    <span className="font-semibold text-slate-800">{stage.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-900">{stage.count}</span>
                    <span className="text-indigo-600 font-semibold">{stage.rate}</span>
                  </div>
                </div>

                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-indigo-600 h-full rounded-full transition-all duration-500"
                    style={{ width: stage.rate }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Geographic Spread</h3>
              <p className="text-xs text-slate-500">Top user locations and volume distribution</p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg">
              52 Countries
            </span>
          </div>

          <div className="space-y-3.5">
            {topCountries.map((c) => (
              <div key={c.name} className="flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{c.flag}</span>
                  <span className="font-medium text-slate-800">{c.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-slate-900">{c.users}</span>
                  <div className="w-20 bg-slate-100 h-2 rounded-full overflow-hidden hidden sm:block">
                    <div className="bg-indigo-500 h-full rounded-full" style={{ width: `${c.share}%` }} />
                  </div>
                  <span className="text-emerald-600 font-semibold w-10 text-right">{c.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
