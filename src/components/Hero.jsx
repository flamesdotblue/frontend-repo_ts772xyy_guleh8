import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[78vh] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        {/* 3D scene */}
        <Spline
          scene="https://prod.spline.design/1V7a1H1d9r4zHQqv/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient and dots overlay to improve contrast; ensure it doesn't block scene interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white dark:from-gray-900/70 dark:via-gray-900/60 dark:to-gray-900" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-blue-800">
            <Shield className="h-3.5 w-3.5" />
            Role‑based e‑Learning Platform
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Learn faster with a beautiful, modern platform
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Courses, language tracks, tech stacks, tools, and exams — personalized for students, faculty, and admins.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#register" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-blue-700 transition-colors">
              Get started free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-md bg-white dark:bg-gray-800 px-5 py-3 text-gray-900 dark:text-gray-100 font-medium ring-1 ring-gray-200 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
              <BookOpen className="h-4 w-4" />
              Explore features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
