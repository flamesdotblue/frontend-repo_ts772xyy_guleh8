import { BookOpen, Code, Wrench, Info, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: 'Courses',
    desc: 'Structured learning paths with videos, PDFs, and quizzes.',
    icon: BookOpen,
    href: '#courses',
  },
  {
    title: 'Programming Languages',
    desc: 'Hands-on lessons for Python, C, C++, and JavaScript.',
    icon: Code,
    href: '#languages',
  },
  {
    title: 'Tech Information',
    desc: 'Bite-sized explainers like How the Internet Works.',
    icon: Info,
    href: '#tech',
  },
  {
    title: 'Tools',
    desc: 'Deep dives into Git, GitHub, AI tools, and more.',
    icon: Wrench,
    href: '#tools',
  },
  {
    title: 'Exam',
    desc: 'Attempt practice tests and track progress over time.',
    icon: ShieldCheck,
    href: '#exam',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Everything you need to learn</h2>
        <p className="mt-3 text-base text-gray-600 sm:text-lg dark:text-gray-300">
          Explore curated content across topics with a consistent blue, white, and gray aesthetic.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, desc, icon: Icon, href }) => (
          <a
            key={title}
            href={href}
            className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10 text-blue-700 group-hover:bg-blue-600/20 dark:text-blue-300">
              <Icon />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{desc}</p>
            <span className="mt-4 inline-block text-sm font-medium text-blue-700 group-hover:underline dark:text-blue-300">Explore →</span>
          </a>
        ))}
      </div>
    </section>
  );
}
