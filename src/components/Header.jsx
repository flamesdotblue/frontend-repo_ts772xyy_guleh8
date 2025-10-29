import { useState } from 'react';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <nav className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
      <a href="#policy" className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">Policy</a>
      <a href="#about" className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">About Us</a>
      <a href="#preview" className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">Preview</a>
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-gray-800 dark:bg-gray-900/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">e</div>
          <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">eLearning</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <NavLinks />
          <div className="ml-4 flex items-center gap-3">
            <a href="#login" className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-200 dark:hover:border-blue-500">
              <LogIn size={16} /> Login
            </a>
            <a href="#register" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">
              <UserPlus size={16} /> Register
            </a>
          </div>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden dark:text-gray-200 dark:hover:bg-gray-800"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-200 px-4 pb-4 md:hidden dark:border-gray-800">
          <div className="py-3">
            <NavLinks />
          </div>
          <div className="flex items-center gap-3">
            <a href="#login" className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-200 dark:hover:border-blue-500">
              <LogIn size={16} /> Login
            </a>
            <a href="#register" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">
              <UserPlus size={16} /> Register
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
