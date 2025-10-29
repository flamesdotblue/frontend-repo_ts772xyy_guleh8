export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} eLearning. All rights reserved.</p>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <a href="#policy" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">Policy</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">About Us</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
