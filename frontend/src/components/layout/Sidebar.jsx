import React from 'react';
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  LogOut,
  X,
  CreditCard,
  Zap,
} from 'lucide-react';

const Sidebar = ({ currentTab, onSelectTab, isOpen, onClose }) => {
  const navItems = [
    { id: 'overview', name: 'Overview', icon: LayoutDashboard },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'customers', name: 'Customers', icon: Users },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-40 lg:hidden transition-opacity"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-slate-900 border-r border-slate-800 flex flex-col z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-white font-bold text-lg tracking-tight block">NEXUS</span>
              <span className="text-xs text-slate-400 font-medium -mt-1 block">SaaS Analytics</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 lg:hidden transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-4 pt-6 pb-2">
          <p className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Main Menu</p>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const active = currentTab === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectTab(item.id);
                    onClose();
                  }}
                  className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    active
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon size={19} className={active ? 'text-white' : 'text-slate-400'} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="px-4 py-4 mt-auto space-y-4">
          <div className="p-3.5 rounded-2xl bg-slate-800/50 border border-slate-700/60">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                <CreditCard size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-200">Pro Plan</p>
                <p className="text-[11px] text-slate-400">18 days left</p>
              </div>
            </div>
            <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
              <div className="bg-indigo-500 h-full rounded-full w-3/4" />
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-sm text-indigo-700 border border-indigo-200">
                MS
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-slate-200">M. Sajjad</p>
                <p className="text-[11px] text-slate-400 truncate max-w-[110px]">Founder & CEO</p>
              </div>
            </div>
            <button
              title="Logout"
              className="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
            >
              <LogOut size={17} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;