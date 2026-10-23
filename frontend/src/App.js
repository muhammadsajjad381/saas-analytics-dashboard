import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Customers from './pages/Customers';
import Settings from './pages/Settings';

function App() {
  const [currentTab, setCurrentTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const pagesInfo = {
    overview: {
      title: 'Overview',
      subtitle: 'Real-time performance indicators and revenue metrics',
    },
    analytics: {
      title: 'Analytics & Trends',
      subtitle: 'Cohort behavior, retention dynamics, and ARR projections',
    },
    customers: {
      title: 'Customers',
      subtitle: 'Subscriber directory, MRR contribution, and billing health',
    },
    settings: {
      title: 'Settings',
      subtitle: 'Workspace preferences, security credentials, and organization profile',
    },
  };

  const renderCurrentPage = () => {
    switch (currentTab) {
      case 'overview':
        return <Dashboard />;
      case 'analytics':
        return <Analytics />;
      case 'customers':
        return <Customers />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex text-slate-800 antialiased selection:bg-indigo-500 selection:text-white">
      <Sidebar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 lg:pl-64 flex flex-col min-h-screen w-full min-w-0 transition-all duration-300">
        <Navbar
          onOpenSidebar={() => setIsSidebarOpen(true)}
          pageTitle={pagesInfo[currentTab]?.title || 'Dashboard'}
          subtitle={pagesInfo[currentTab]?.subtitle}
        />

        <main className="flex-1 pb-12">
          {renderCurrentPage()}
        </main>
      </div>
    </div>
  );
}

export default App;