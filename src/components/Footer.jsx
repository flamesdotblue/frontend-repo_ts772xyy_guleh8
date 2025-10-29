export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-300">
          <p>© {new Date().getFullYear()} Flames eLearning. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-blue-600">Privacy</a>
            <a href="#terms" className="hover:text-blue-600">Terms</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
