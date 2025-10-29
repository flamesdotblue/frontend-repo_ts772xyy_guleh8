import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-white">
      <Header />
      <main>
        <Hero />
        <Features />

        {/* Simple content anchors for Policy and About sections */}
        <section id="policy" className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-2xl font-semibold">Policy</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Your data is protected and handled responsibly. By using this platform, you agree to our terms, rules, and privacy policy.
          </p>
        </section>

        <section id="about" className="mx-auto max-w-4xl px-4 pb-16">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            We are on a mission to make quality education accessible to everyone through engaging videos, helpful notes, and interactive quizzes.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
