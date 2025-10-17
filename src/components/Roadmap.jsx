import { Shield, Brain, Search, Sparkles } from 'lucide-react';

export default function Roadmap() {
  const items = [
    {
      icon: Brain,
      title: 'Embeddings-powered organization',
      desc: 'We’ll index your content with vector embeddings so related items cluster together and are easy to rediscover.',
    },
    {
      icon: Search,
      title: 'Semantic search',
      desc: 'Ask natural-language questions and instantly surface the most relevant links, highlights, and documents.',
    },
    {
      icon: Sparkles,
      title: 'AI insights',
      desc: 'Summaries, takeaways, and action items generated securely from the content you’ve saved.',
    },
    {
      icon: Shield,
      title: 'Private by default',
      desc: 'Authentication, granular permissions, and on-device encryption options to keep your data safe.',
    },
  ];

  return (
    <section id="roadmap" className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">What’s coming next</h2>
          <p className="mt-2 text-gray-600">Ping Me will evolve into a personal knowledge base with powerful search and AI assistance.</p>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/10 bg-white p-6 hover:shadow-sm transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
                <Icon className="h-5 w-5 text-gray-700" />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
