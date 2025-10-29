import { Rocket, Users, Award, Shield, Globe, Layers } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Fast onboarding',
    desc: 'Start learning in minutes with simple sign-up and instant access to curated tracks.'
  },
  {
    icon: Users,
    title: 'Role-aware dashboards',
    desc: 'Students, faculty, and admins see the tools they need — nothing more.'
  },
  {
    icon: Layers,
    title: 'Structured content',
    desc: 'Courses, languages, tech stacks, and tools organized into clear playlists.'
  },
  {
    icon: Shield,
    title: 'Secure by default',
    desc: 'Modern auth, protected routes, and best practices baked in from the start.'
  },
  {
    icon: Globe,
    title: 'Learn anywhere',
    desc: 'Responsive design with dark mode so you can study on any device.'
  },
  {
    icon: Award,
    title: 'Assess & certify',
    desc: 'Practice exams and tracked results help you measure progress and earn badges.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Everything you need to level up</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">A focused toolset designed for momentum — not distraction.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-blue-800">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
              <a href="#home" className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-700">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
