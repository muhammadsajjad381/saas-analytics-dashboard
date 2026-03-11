import React from 'react';
import { LayoutDashboard, BarChart3, Users, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { name: 'Overview', icon: LayoutDashboard, active: true },
    { name: 'Analytics', icon: BarChart3, active: false },
    { name: 'Customers', icon: Users, active: false },
    { name: 'Settings', icon: Settings, active: false },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-[#0f172a] border-r border-slate-800 flex flex-col">
      <div className="h-20 flex items-center px-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-500/20" />
          <span className="text-white font-bold text-xl tracking-tighter">NEXUS</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-6">
        {navItems.map((item) => (
          <button
            key={item.name}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              item.active 
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" 
                : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-100"
            }`}
          >
            <item.icon size={20} strokeWidth={item.active ? 2.5 : 2} />
            <span className="text-[15px] font-medium">{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 mt-auto border-t border-slate-800/50">
        <button className="flex items-center gap-3 w-full px-4 py-3 text-slate-400 hover:text-rose-400 transition-colors rounded-xl">
          <LogOut size={20} />
          <span className="text-sm font-bold uppercase tracking-wider">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;