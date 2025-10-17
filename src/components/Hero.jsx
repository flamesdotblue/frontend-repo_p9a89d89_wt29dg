import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/70" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 mb-6">
          <Sparkles className="h-3.5 w-3.5 text-fuchsia-500" />
          New: Add from Twitter, YouTube, and Google Docs
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Centralize your scattered content.
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
          Ping Me brings your links, ideas, and research from social, video, and docs into one place today.
          Coming soon: embeddings, AI search, and insights—all private and secure.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#add" className="px-5 py-3 rounded-xl bg-black text-white hover:bg-gray-900 transition-colors">Add your first link</a>
          <a href="#roadmap" className="px-5 py-3 rounded-xl border border-black/10 bg-white hover:bg-gray-50 transition-colors">See what's next</a>
        </div>
      </div>
    </section>
  );
}
