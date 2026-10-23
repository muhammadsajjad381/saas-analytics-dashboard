import React from 'react';
import { Shield, CreditCard, Save } from 'lucide-react';

const Settings = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 max-w-5xl mx-auto">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Organization Settings</h2>
        <p className="text-slate-500 text-sm mt-1">Configure company credentials, team permissions, and billing alerts.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs divide-y divide-slate-100">
        <div className="p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
              <Shield size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Workspace Profile</h3>
              <p className="text-xs text-slate-500">Public information regarding your SaaS instance</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Workspace Name</label>
              <input
                type="text"
                defaultValue="Nexus Analytics Production"
                className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Primary Contact Email</label>
              <input
                type="email"
                defaultValue="muhammadsajjad1328@gmail.com"
                className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
              <CreditCard size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Billing & Invoices</h3>
              <p className="text-xs text-slate-500">Active payment methods and auto-renewal terms</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200/60 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-7 bg-slate-900 text-white rounded font-mono text-[11px] flex items-center justify-center font-bold">
                VISA
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">Visa ending in •••• 4242</p>
                <p className="text-[11px] text-slate-400">Expires 08/2028 — Default payment</p>
              </div>
            </div>
            <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 self-start sm:self-auto">
              Update Card
            </button>
          </div>
        </div>

        <div className="p-5 sm:p-6 flex justify-end">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-sm transition-colors">
            <Save size={16} />
            <span>Save Preferences</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
