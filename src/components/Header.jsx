import { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 text-sm font-medium">
      <li><a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">Features</a></li>
      <li><a href="#courses" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">Courses</a></li>
      <li><a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">Pricing</a></li>
      <li><a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">About</a></li>
    </ul>
  );

  return (
    <header className={`sticky top-0 z-40 transition-all ${scrolled ? 'backdrop-blur bg-white/80 dark:bg-gray-900/70 shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <Rocket className="h-6 w-6" />
            <span className="font-semibold">Flames eLearning</span>
          </a>

          <nav className="hidden md:block">
            <NavLinks />
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#login" className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600">Log in</a>
            <a href="#register" className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">Get started</a>
          </div>

          <button aria-label="Toggle menu" className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setOpen(v => !v)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-gray-900">
              <NavLinks />
              <div className="mt-4 flex flex-col gap-2">
                <a href="#login" className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600">Log in</a>
                <a href="#register" className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white text-center hover:bg-blue-700 transition-colors">Get started</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
