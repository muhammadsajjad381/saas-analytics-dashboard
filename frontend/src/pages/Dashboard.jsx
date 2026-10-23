import React, { useState } from 'react';
import StatCard from '../components/ui/StatCard';
import {
  DollarSign,
  Users,
  Activity,
  ArrowUpRight,
  TrendingUp,
  Download,
  Calendar,
  MoreVertical,
  CheckCircle2,
  Clock,
  AlertCircle,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const revenueDataByRange = {
  '7D': [
    { name: 'Mon', revenue: 6200, mrr: 5100 },
    { name: 'Tue', revenue: 7100, mrr: 5300 },
    { name: 'Wed', revenue: 6800, mrr: 5200 },
    { name: 'Thu', revenue: 8400, mrr: 5600 },
    { name: 'Fri', revenue: 9200, mrr: 5800 },
    { name: 'Sat', revenue: 7600, mrr: 5700 },
    { name: 'Sun', revenue: 8900, mrr: 6100 },
  ],
  '30D': [
    { name: 'Week 1', revenue: 28400, mrr: 24000 },
    { name: 'Week 2', revenue: 34200, mrr: 29500 },
    { name: 'Week 3', revenue: 39800, mrr: 33200 },
    { name: 'Week 4', revenue: 48250, mrr: 39800 },
  ],
  '90D': [
    { name: 'Jan', revenue: 32000, mrr: 28000 },
    { name: 'Feb', revenue: 41000, mrr: 34500 },
    { name: 'Mar', revenue: 48250, mrr: 41200 },
  ],
};

const acquisitionChannels = [
  { name: 'Organic Search', value: 42, color: '#4f46e5' },
  { name: 'Direct Traffic', value: 28, color: '#06b6d4' },
  { name: 'Referral & Partner', value: 18, color: '#10b981' },
  { name: 'Social Media', value: 12, color: '#f59e0b' },
];

const recentTransactions = [
  {
    id: 'TX-9021',
    customer: 'Sarah Jenkins',
    email: 'sarah.j@acmecorp.com',
    plan: 'Enterprise Annual',
    amount: '$2,400.00',
    date: '10 mins ago',
    status: 'completed',
  },
  {
    id: 'TX-9020',
    customer: 'Alexander Wright',
    email: 'alex@fintechscale.io',
    plan: 'Pro Tier',
    amount: '$149.00',
    date: '42 mins ago',
    status: 'completed',
  },
  {
    id: 'TX-9019',
    customer: 'Elena Rostova',
    email: 'elena@designlab.de',
    plan: 'Starter Plan',
    amount: '$49.00',
    date: '2 hours ago',
    status: 'pending',
  },
  {
    id: 'TX-9018',
    customer: 'Marcus Chen',
    email: 'marcus@cloudops.sg',
    plan: 'Pro Tier',
    amount: '$149.00',
    date: '5 hours ago',
    status: 'completed',
  },
  {
    id: 'TX-9017',
    customer: 'David Miller',
    email: 'd.miller@growthio.com',
    plan: 'Enterprise Monthly',
    amount: '$299.00',
    date: 'Yesterday',
    status: 'failed',
  },
];

const CustomChartTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 text-white p-3 rounded-xl shadow-xl text-xs space-y-1.5 border border-slate-800">
        <p className="font-semibold text-slate-300">{label}</p>
        <p className="text-indigo-400">Revenue: ${payload[0]?.value?.toLocaleString()}</p>
        {payload[1] && <p className="text-emerald-400">MRR: ${payload[1]?.value?.toLocaleString()}</p>}
      </div>
    );
  }
  return null;
};

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('30D');

  const stats = [
    { title: 'Monthly Recurring Revenue', value: '$48,250', trend: 14.2, icon: DollarSign, variant: 'indigo', subtitle: '+$5,820 this month' },
    { title: 'Active Subscribers', value: '1,842', trend: 8.1, icon: Users, variant: 'emerald', subtitle: '124 joined recently' },
    { title: 'Avg Revenue Per User', value: '$64.80', trend: 3.5, icon: TrendingUp, variant: 'blue', subtitle: 'Highest in Q3' },
    { title: 'Gross Churn Rate', value: '1.8%', trend: -0.4, icon: Activity, variant: 'rose', subtitle: 'Benchmark is 2.5%' },
  ];

  const currentChartData = revenueDataByRange[timeRange] || revenueDataByRange['30D'];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Overview Dashboard</h2>
          <p className="text-slate-500 text-sm mt-1">Here is the real-time health and performance of your SaaS business.</p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 self-start sm:self-auto">
          <div className="flex items-center gap-1.5 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-600 shadow-xs">
            <Calendar size={14} className="text-slate-400" />
            <span>Updated: Today, 9:00 PM</span>
          </div>

          <button className="flex items-center gap-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-sm transition-colors">
            <Download size={15} />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((item, index) => (
          <StatCard key={index} {...item} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Revenue & MRR Dynamics</h3>
              <p className="text-xs text-slate-500">Gross revenue vs monthly recurring commitments</p>
            </div>

            <div className="inline-flex p-1 bg-slate-100 rounded-xl self-start sm:self-auto">
              {['7D', '30D', '90D'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    timeRange === range
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          <div className="h-72 sm:h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={currentChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="mrrGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val / 1000}k`} />
                <Tooltip content={<CustomChartTooltip />} />
                <Area type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={2.5} fillOpacity={1} fill="url(#revenueGrad)" />
                <Area type="monotone" dataKey="mrr" stroke="#10b981" strokeWidth={2.5} fillOpacity={1} fill="url(#mrrGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-slate-100 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-indigo-600 inline-block" />
              <span className="text-slate-600 font-medium">Total Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              <span className="text-slate-600 font-medium">Net MRR</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Acquisition Channels</h3>
              <p className="text-xs text-slate-500">Traffic conversion breakdown</p>
            </div>
            <button className="text-slate-400 hover:text-slate-600">
              <MoreVertical size={18} />
            </button>
          </div>

          <div className="h-56 w-full relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={acquisitionChannels}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {acquisitionChannels.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-bold text-slate-900">100%</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Total Share</span>
            </div>
          </div>

          <div className="space-y-2.5 mt-auto pt-4 border-t border-slate-100">
            {acquisitionChannels.map((ch) => (
              <div key={ch.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: ch.color }} />
                  <span className="text-slate-600 font-medium">{ch.name}</span>
                </div>
                <span className="font-bold text-slate-900">{ch.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Recent Transactions</h3>
            <p className="text-xs text-slate-500">Latest incoming subscription events and billing updates</p>
          </div>
          <button className="text-indigo-600 hover:text-indigo-700 text-xs sm:text-sm font-semibold flex items-center gap-1 self-start sm:self-auto">
            <span>View All</span>
            <ArrowUpRight size={15} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/75 border-b border-slate-100 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                <th className="py-3 px-4 sm:px-6">Customer</th>
                <th className="py-3 px-4">Plan</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4 sm:px-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {recentTransactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center text-xs shrink-0">
                        {tx.customer.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{tx.customer}</p>
                        <p className="text-[11px] text-slate-400">{tx.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="font-medium text-slate-700">{tx.plan}</span>
                  </td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">{tx.amount}</td>
                  <td className="py-3.5 px-4 text-slate-500">{tx.date}</td>
                  <td className="py-3.5 px-4 sm:px-6">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                        tx.status === 'completed'
                          ? 'bg-emerald-50 text-emerald-700'
                          : tx.status === 'pending'
                          ? 'bg-amber-50 text-amber-700'
                          : 'bg-rose-50 text-rose-700'
                      }`}
                    >
                      {tx.status === 'completed' && <CheckCircle2 size={12} />}
                      {tx.status === 'pending' && <Clock size={12} />}
                      {tx.status === 'failed' && <AlertCircle size={12} />}
                      <span className="capitalize">{tx.status}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;