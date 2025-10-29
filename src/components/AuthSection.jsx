import { useEffect, useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

function Input({ label, type = 'text', value, onChange, name, placeholder }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none ring-blue-500 focus:ring-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
      />
    </label>
  );
}

export default function AuthSection({ mode = 'login', onAuthSuccess, onNavigate }) {
  const [current, setCurrent] = useState(mode);

  useEffect(() => setCurrent(mode), [mode]);

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          {current === 'login' ? (
            <LoginForm onAuthSuccess={onAuthSuccess} />
          ) : (
            <RegisterForm onAuthSuccess={onAuthSuccess} />
          )}
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            {current === 'login' ? (
              <>Don't have an account?{' '}<button className="font-medium text-blue-600 hover:underline" onClick={() => { setCurrent('register'); onNavigate?.('register'); }}>Register</button></>
            ) : (
              <>Already have an account?{' '}<button className="font-medium text-blue-600 hover:underline" onClick={() => { setCurrent('login'); onNavigate?.('login'); }}>Login</button></>
            )}
          </p>
        </div>
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 text-blue-900 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-200">
          <h3 className="text-lg font-semibold">Role-based access</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
            <li>Student: register with your email and password.</li>
            <li>Faculty: login with faculty@elearning.com / faculty123</li>
            <li>Admin: login with admin@elearning.com / admin123</li>
          </ul>
          <p className="mt-4 text-sm opacity-80">After login, you'll be redirected to a role-aware dashboard with quick links to Courses, Programming, Tech Info, Tools and Exam.</p>
        </div>
      </div>
    </section>
  );
}

function LoginForm({ onAuthSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Login failed');
      onAuthSuccess?.(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl font-semibold">Login</h3>
      <Input label="Email" type="email" value={email} onChange={setEmail} placeholder="you@example.com" />
      <Input label="Password" type="password" value={password} onChange={setPassword} placeholder="••••••••" />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button disabled={loading} className="inline-flex h-11 items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60">
        {loading ? 'Logging in…' : 'Login'}
      </button>
    </form>
  );
}

function RegisterForm({ onAuthSuccess }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Registration failed');
      onAuthSuccess?.(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl font-semibold">Student Registration</h3>
      <Input label="Full name" value={name} onChange={setName} placeholder="Jane Doe" />
      <Input label="Email" type="email" value={email} onChange={setEmail} placeholder="you@example.com" />
      <Input label="Password" type="password" value={password} onChange={setPassword} placeholder="Create a password" />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button disabled={loading} className="inline-flex h-11 items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60">
        {loading ? 'Creating account…' : 'Create account'}
      </button>
    </form>
  );
}
