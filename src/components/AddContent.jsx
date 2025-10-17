import { useMemo, useState } from 'react';
import { Link as LinkIcon, Video, FileText, Globe, Plus, Trash2, Search } from 'lucide-react';

const SOURCE_OPTIONS = [
  { key: 'twitter', label: 'Twitter/X', icon: Globe, placeholder: 'Paste a tweet or profile URL' },
  { key: 'youtube', label: 'YouTube', icon: Video, placeholder: 'Paste a YouTube video or channel URL' },
  { key: 'gdocs', label: 'Google Docs', icon: FileText, placeholder: 'Paste a Google Doc URL' },
];

export default function AddContent() {
  const [active, setActive] = useState('twitter');
  const [url, setUrl] = useState('');
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');

  const activeSource = useMemo(() => {
    return SOURCE_OPTIONS.find((s) => s.key === active) || SOURCE_OPTIONS[0];
  }, [active]);

  function handleAdd(e) {
    e.preventDefault();
    if (!url.trim()) return;

    const title = deriveTitleFromUrl(url);
    const newItem = {
      id: crypto.randomUUID(),
      source: active,
      url,
      title,
      addedAt: new Date().toISOString(),
    };
    setItems((prev) => [newItem, ...prev]);
    setUrl('');
  }

  function handleRemove(id) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (i) => i.title.toLowerCase().includes(q) || i.url.toLowerCase().includes(q) || i.source.toLowerCase().includes(q)
    );
  }, [items, query]);

  return (
    <section id="add" className="relative py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Add content from anywhere</h2>
            <p className="mt-2 text-gray-600">Bring links from social, video, or docs. We’ll keep them organized for quick search later.</p>

            <div className="mt-6 flex rounded-xl border border-black/10 bg-white p-1 w-full overflow-hidden">
              {SOURCE_OPTIONS.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm transition-colors ${active === key ? 'bg-black text-white' : 'hover:bg-gray-50'}`}
                >
                  {label}
                </button>
              ))}
            </div>

            <form onSubmit={handleAdd} className="mt-6 space-y-3">
              <label className="block text-sm font-medium text-gray-700">{activeSource.label} URL</label>
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <input
                    type="url"
                    required
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder={activeSource.placeholder}
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 pl-9 outline-none focus:ring-2 focus:ring-black/10"
                  />
                  <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-black text-white hover:bg-gray-900">
                  <Plus className="h-4 w-4" /> Add
                </button>
              </div>
              <p className="text-xs text-gray-500">In a full version, we’ll fetch metadata and content. For now, your links are stored locally.</p>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div id="search" className="flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search your saved items"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 pl-9 outline-none focus:ring-2 focus:ring-black/10"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.length === 0 ? (
                <EmptyState />
              ) : (
                filtered.map((item) => (
                  <ItemCard key={item.id} item={item} onRemove={() => handleRemove(item.id)} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ItemCard({ item, onRemove }) {
  const Icon = sourceToIcon(item.source);
  const date = new Date(item.addedAt).toLocaleString();

  return (
    <div className="group rounded-2xl border border-black/10 bg-white p-4 hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gray-100 flex items-center justify-center">
            <Icon className="h-5 w-5 text-gray-700" />
          </div>
          <div className="min-w-0">
            <div className="font-medium truncate" title={item.title}>{item.title}</div>
            <a href={item.url} target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline truncate inline-block max-w-full" title={item.url}>
              {item.url}
            </a>
            <div className="text-xs text-gray-500 mt-1">Added {date}</div>
          </div>
        </div>
        <button onClick={onRemove} className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-gray-100">
          <Trash2 className="h-4 w-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="col-span-full rounded-2xl border border-dashed border-black/10 p-10 text-center">
      <div className="mx-auto h-12 w-12 rounded-xl bg-gray-100 flex items-center justify-center">
        <Globe className="h-6 w-6 text-gray-600" />
      </div>
      <h3 className="mt-4 font-semibold">No items yet</h3>
      <p className="mt-1 text-sm text-gray-600">Add a link from Twitter/X, YouTube, or Google Docs to get started.</p>
    </div>
  );
}

function sourceToIcon(source) {
  switch (source) {
    case 'youtube':
      return Video;
    case 'gdocs':
      return FileText;
    default:
      return Globe;
  }
}

function deriveTitleFromUrl(u) {
  try {
    const { hostname, pathname } = new URL(u);
    const path = pathname.replaceAll('/', ' ').trim();
    const nice = (hostname.replace('www.', '') + ' ' + path).trim();
    return nice || u;
  } catch {
    return u;
  }
}
