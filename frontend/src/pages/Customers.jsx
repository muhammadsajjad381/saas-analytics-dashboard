import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  UserPlus,
  MoreVertical,
  Mail,
  CheckCircle,
  Clock,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Download,
} from 'lucide-react';

const initialCustomers = [
  {
    id: 'CUST-001',
    name: 'Sophia Montgomery',
    email: 'sophia.m@veritas.ai',
    company: 'Veritas AI',
    plan: 'Enterprise',
    status: 'active',
    mrr: '$2,400',
    spent: '$28,800',
    joined: 'Jan 12, 2025',
    avatarBg: 'bg-indigo-600',
  },
  {
    id: 'CUST-002',
    name: 'Liam Vance',
    email: 'liam@vancetech.io',
    company: 'Vance Tech',
    plan: 'Pro',
    status: 'active',
    mrr: '$149',
    spent: '$1,788',
    joined: 'Feb 03, 2025',
    avatarBg: 'bg-emerald-600',
  },
  {
    id: 'CUST-003',
    name: 'Amina Al-Mansoor',
    email: 'amina@nexusdubai.ae',
    company: 'Nexus MENA',
    plan: 'Enterprise',
    status: 'active',
    mrr: '$3,200',
    spent: '$38,400',
    joined: 'Dec 18, 2024',
    avatarBg: 'bg-violet-600',
  },
  {
    id: 'CUST-004',
    name: 'Tariq Mehmood',
    email: 'tariq@lahoresoft.pk',
    company: 'Lahore Software Labs',
    plan: 'Pro',
    status: 'trialing',
    mrr: '$0',
    spent: '$0',
    joined: '2 days ago',
    avatarBg: 'bg-amber-600',
  },
  {
    id: 'CUST-005',
    name: 'Emma Watson',
    email: 'emma@creativestack.uk',
    company: 'Creative Stack',
    plan: 'Starter',
    status: 'active',
    mrr: '$49',
    spent: '$588',
    joined: 'Mar 15, 2025',
    avatarBg: 'bg-rose-600',
  },
  {
    id: 'CUST-006',
    name: 'Julian Brand',
    email: 'julian@berlindevs.de',
    company: 'Berlin Cloud Services',
    plan: 'Pro',
    status: 'past_due',
    mrr: '$149',
    spent: '$894',
    joined: 'Apr 02, 2025',
    avatarBg: 'bg-blue-600',
  },
  {
    id: 'CUST-007',
    name: 'Chloe Tremblay',
    email: 'chloe@montrealdata.ca',
    company: 'Montreal Analytics',
    plan: 'Starter',
    status: 'active',
    mrr: '$49',
    spent: '$294',
    joined: 'May 20, 2025',
    avatarBg: 'bg-teal-600',
  },
  {
    id: 'CUST-008',
    name: 'Kenji Sato',
    email: 'kenji@tokyosystems.jp',
    company: 'Tokyo Systems KK',
    plan: 'Enterprise',
    status: 'active',
    mrr: '$2,800',
    spent: '$16,800',
    joined: 'Jun 11, 2025',
    avatarBg: 'bg-cyan-600',
  },
];

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCustomers = useMemo(() => {
    return initialCustomers.filter((customer) => {
      const matchesSearch =
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.company.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesPlan =
        selectedPlan === 'all' || customer.plan.toLowerCase() === selectedPlan.toLowerCase();

      const matchesStatus =
        selectedStatus === 'all' || customer.status.toLowerCase() === selectedStatus.toLowerCase();

      return matchesSearch && matchesPlan && matchesStatus;
    });
  }, [searchTerm, selectedPlan, selectedStatus]);

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Customer Directory</h2>
          <p className="text-slate-500 text-sm mt-1">Manage subscriptions, track lifetime value, and handle billing status.</p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 self-start sm:self-auto">
          <button className="flex items-center gap-1.5 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 shadow-xs hover:bg-slate-50 transition-colors">
            <Download size={15} />
            <span className="hidden sm:inline">Export CSV</span>
          </button>
          <button className="flex items-center gap-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-sm transition-colors">
            <UserPlus size={15} />
            <span>Add Customer</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs">
          <p className="text-xs text-slate-500 font-medium">Total Accounts</p>
          <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">2,842</h4>
          <span className="text-[11px] text-emerald-600 font-semibold">+18 this week</span>
        </div>
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs">
          <p className="text-xs text-slate-500 font-medium">Active Subscriptions</p>
          <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">2,150</h4>
          <span className="text-[11px] text-indigo-600 font-semibold">94.8% healthy</span>
        </div>
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs">
          <p className="text-xs text-slate-500 font-medium">Trial Users</p>
          <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">128</h4>
          <span className="text-[11px] text-amber-600 font-semibold">Expiring soon: 14</span>
        </div>
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs">
          <p className="text-xs text-slate-500 font-medium">Past Due Invoices</p>
          <h4 className="text-xl sm:text-2xl font-bold text-rose-600 mt-1">12</h4>
          <span className="text-[11px] text-rose-600 font-semibold">Action required</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, email, or company..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Filter size={14} />
              <span className="font-medium">Filter:</span>
            </div>

            <select
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
              className="text-xs font-medium bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            >
              <option value="all">All Plans</option>
              <option value="starter">Starter</option>
              <option value="pro">Pro</option>
              <option value="enterprise">Enterprise</option>
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="text-xs font-medium bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="trialing">Trialing</option>
              <option value="past_due">Past Due</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/75 border-b border-slate-100 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                <th className="py-3 px-4 sm:px-6">Customer & Company</th>
                <th className="py-3 px-4">Plan</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">MRR</th>
                <th className="py-3 px-4">Lifetime Spent</th>
                <th className="py-3 px-4">Joined</th>
                <th className="py-3 px-4 sm:px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {filteredCustomers.length === 0 ? (
                <tr>
                  <td colSpan="7" className="py-12 text-center text-slate-400">
                    No customers match your search criteria.
                  </td>
                </tr>
              ) : (
                filteredCustomers.map((cust) => (
                  <tr key={cust.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-full ${cust.avatarBg} text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-xs`}
                        >
                          {cust.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{cust.name}</p>
                          <p className="text-[11px] text-slate-400">{cust.company}</p>
                        </div>
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold ${
                          cust.plan === 'Enterprise'
                            ? 'bg-violet-50 text-violet-700 border border-violet-200'
                            : cust.plan === 'Pro'
                            ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {cust.plan}
                      </span>
                    </td>

                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                          cust.status === 'active'
                            ? 'bg-emerald-50 text-emerald-700'
                            : cust.status === 'trialing'
                            ? 'bg-amber-50 text-amber-700'
                            : 'bg-rose-50 text-rose-700'
                        }`}
                      >
                        {cust.status === 'active' && <CheckCircle size={12} />}
                        {cust.status === 'trialing' && <Clock size={12} />}
                        {cust.status === 'past_due' && <AlertTriangle size={12} />}
                        <span className="capitalize">{cust.status.replace('_', ' ')}</span>
                      </span>
                    </td>

                    <td className="py-3.5 px-4 font-bold text-slate-900">{cust.mrr}</td>

                    <td className="py-3.5 px-4 font-medium text-slate-600">{cust.spent}</td>

                    <td className="py-3.5 px-4 text-slate-500 text-xs">{cust.joined}</td>

                    <td className="py-3.5 px-4 sm:px-6 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          title="Contact"
                          className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-colors"
                        >
                          <Mail size={16} />
                        </button>
                        <button
                          title="Options"
                          className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                        >
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="p-4 sm:px-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
          <span>
            Showing <strong className="text-slate-700">{filteredCustomers.length}</strong> of{' '}
            <strong className="text-slate-700">{initialCustomers.length}</strong> customers
          </span>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="px-3 py-1 bg-indigo-50 text-indigo-700 font-semibold rounded-lg">
              {currentPage}
            </span>
            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={true}
              className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
