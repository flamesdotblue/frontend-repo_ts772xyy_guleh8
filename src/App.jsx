import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';
import AuthSection from './components/AuthSection.jsx';
import Dashboard from './components/Dashboard.jsx';

export default function App() {
  const [route, setRoute] = useState('home');
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('el_user');
    return raw ? JSON.parse(raw) : null;
  });

  useEffect(() => {
    function syncRoute() {
      const hash = window.location.hash.replace('#', '');
      if (['login', 'register'].includes(hash)) setRoute(hash);
      else setRoute('home');
    }
    syncRoute();
    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  function handleAuthSuccess(profile) {
    setUser(profile);
    localStorage.setItem('el_user', JSON.stringify(profile));
    window.location.hash = '';
  }

  function handleLogout() {
    setUser(null);
    localStorage.removeItem('el_user');
  }

  const showDashboard = !!user;

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-white">
      <Header />
      <main>
        {showDashboard ? (
          <Dashboard user={user} onLogout={handleLogout} />
        ) : route === 'login' ? (
          <AuthSection mode="login" onAuthSuccess={handleAuthSuccess} onNavigate={(m) => (window.location.hash = `#${m}`)} />
        ) : route === 'register' ? (
          <AuthSection mode="register" onAuthSuccess={handleAuthSuccess} onNavigate={(m) => (window.location.hash = `#${m}`)} />
        ) : (
          <>
            <Hero />
            <Features />
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
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
