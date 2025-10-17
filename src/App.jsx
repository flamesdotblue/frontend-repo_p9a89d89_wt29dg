import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AddContent from './components/AddContent';
import Roadmap from './components/Roadmap';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AddContent />
        <Roadmap />
      </main>
      <footer className="border-t border-black/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Ping Me</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-gray-900">Home</a>
            <a href="#add" className="hover:text-gray-900">Add</a>
            <a href="#roadmap" className="hover:text-gray-900">Roadmap</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
