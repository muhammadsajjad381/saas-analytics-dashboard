import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      <main className="flex-1 ml-64 min-h-screen">
        <Dashboard />
      </main>
    </div>
  );
}
export default App;