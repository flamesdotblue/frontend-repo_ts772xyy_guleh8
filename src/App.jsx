import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
      <Header />
      <main>
        <Hero />
        <Features />

        {/* Callout section */}
        <section id="cta" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600">
              <div className="p-8 sm:p-12 md:p-16 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Join thousands leveling up their skills</h3>
                  <p className="mt-2 text-blue-100">Create your free account and explore role-aware dashboards, curated content, and interactive exams.</p>
                </div>
                <div className="flex md:justify-end items-center gap-3">
                  <a href="#register" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50">Get started</a>
                  <a href="#login" className="inline-flex items-center justify-center rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800">I already have an account</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
