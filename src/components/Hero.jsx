import Spline from '@splinetool/react-spline';
import { Rocket, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="preview" className="relative isolate">
      <div className="relative h-[560px] w-full">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white dark:from-gray-950/70 dark:via-gray-950/40 dark:to-gray-950" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
            <Rocket size={14} /> Learn faster with an interactive platform
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Modern e‑Learning for Videos, Notes and Quizzes
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 md:text-lg dark:text-gray-300">
            Explore courses, master programming languages, and test your knowledge with smart exams. Clean design, smooth performance, and fully responsive.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#register" className="inline-flex h-11 items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950">
              Get Started Free
            </a>
            <a href="#features" className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-6 text-sm font-semibold text-gray-800 transition hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200">
              <PlayCircle size={18} /> See Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
