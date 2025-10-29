import { useEffect, useMemo, useState } from 'react';
import { Home, BookOpen, Code, Info, Wrench, ShieldCheck, LogOut, User } from 'lucide-react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Dashboard({ user, onLogout }) {
  const [section, setSection] = useState('home');

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
          <User size={18} /> {user.name} · <span className="capitalize">{user.role}</span>
          <button onClick={onLogout} className="ml-3 inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-1.5 hover:border-blue-500 hover:text-blue-600 dark:border-gray-700"> <LogOut size={16}/> Logout</button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-[240px_1fr]">
        <aside className="h-full rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <NavItem icon={Home} label="Home" active={section==='home'} onClick={() => setSection('home')} />
          <div className="mt-4 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">Learn</div>
          <NavItem icon={BookOpen} label="Courses" active={section==='courses'} onClick={() => setSection('courses')} />
          <NavItem icon={Code} label="Programming" active={section==='languages'} onClick={() => setSection('languages')} />
          <NavItem icon={Info} label="Tech Info" active={section==='tech'} onClick={() => setSection('tech')} />
          <NavItem icon={Wrench} label="Tools" active={section==='tools'} onClick={() => setSection('tools')} />
          <div className="mt-4 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">Assess</div>
          <NavItem icon={ShieldCheck} label="Exam" active={section==='exam'} onClick={() => setSection('exam')} />
        </aside>

        <section className="min-h-[360px] rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          {section === 'home' && <DashboardHome />}
          {section === 'courses' && <CoursesList />}
          {section === 'languages' && <Placeholder title="Programming Languages" />}
          {section === 'tech' && <Placeholder title="Tech Information" />}
          {section === 'tools' && <Placeholder title="Tools" />}
          {section === 'exam' && <Placeholder title="Exam" description="Select a subject to attempt mock tests and track your results." />}
        </section>
      </div>
    </div>
  );
}

function NavItem({ icon: Icon, label, active, onClick }) {
  return (
    <button onClick={onClick} className={`mt-2 flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm ${active ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
      <Icon size={18} /> {label}
    </button>
  );
}

function DashboardHome() {
  const cards = [
    { title: 'Courses', icon: BookOpen, href: '#', color: 'bg-blue-600/10 text-blue-700 dark:text-blue-300' },
    { title: 'Programming Languages', icon: Code, href: '#', color: 'bg-indigo-600/10 text-indigo-700 dark:text-indigo-300' },
    { title: 'Tech Information', icon: Info, href: '#', color: 'bg-cyan-600/10 text-cyan-700 dark:text-cyan-300' },
    { title: 'Tools', icon: Wrench, href: '#', color: 'bg-emerald-600/10 text-emerald-700 dark:text-emerald-300' },
    { title: 'Exam', icon: ShieldCheck, href: '#', color: 'bg-rose-600/10 text-rose-700 dark:text-rose-300' },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold">Quick Links</h3>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ title, icon: Icon, color }) => (
          <div key={title} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className={`flex h-10 w-10 items-center justify-center rounded-md ${color}`}>
              <Icon size={18} />
            </div>
            <div className="mt-2 text-base font-medium">{title}</div>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Click from the sidebar to explore {title.toLowerCase()}.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CoursesList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const res = await fetch(`${API_BASE}/courses`);
        const data = await res.json();
        if (mounted) setItems(data.items || []);
      } catch (e) {
        // noop
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => (mounted = false);
  }, []);

  if (loading) return <div className="text-sm text-gray-600 dark:text-gray-300">Loading courses…</div>;

  return (
    <div>
      <h3 className="text-lg font-semibold">Courses</h3>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c) => (
          <div key={c.id || c.title} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="text-sm text-blue-600">{c.category}</div>
            <div className="mt-1 text-base font-medium">{c.title}</div>
            {c.level && <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">Level: {c.level}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

function Placeholder({ title, description = 'Coming soon with playlists, video players, PDFs, quizzes and more.' }) {
  return (
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}
