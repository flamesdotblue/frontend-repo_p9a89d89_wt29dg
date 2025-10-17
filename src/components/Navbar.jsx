import { Rocket, Home, Search, Settings } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-sm">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold text-lg tracking-tight">Ping Me</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#home" className="flex items-center gap-1 hover:text-gray-900 transition-colors"><Home className="h-4 w-4" /> Home</a>
            <a href="#add" className="flex items-center gap-1 hover:text-gray-900 transition-colors"><Settings className="h-4 w-4" /> Add</a>
            <a href="#search" className="flex items-center gap-1 hover:text-gray-900 transition-colors"><Search className="h-4 w-4" /> Search</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-lg border border-black/10 hover:border-black/20 text-sm">Log in</button>
            <button className="px-3 py-1.5 rounded-lg bg-black text-white hover:bg-gray-900 text-sm">Sign up</button>
          </div>
        </div>
      </div>
    </header>
  );
}
