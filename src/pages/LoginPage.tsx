import { useState, type FormEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { setAuth } from '../context/AuthContext';

export default function LoginPage() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('admin@adminhub.com');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/dashboard';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (email && password) {
        setAuth(true);
        navigate(from, { replace: true });
      } else {
        setError('Please enter both email and password.');
      }
      setLoading(false);
    }, 600);
  };

  return (
    <div className="login-page">
      <button className="topbar-icon-btn login-theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
      </button>

      <div className="login-card">
        <div className="login-logo">A</div>
        <h1 className="login-title">Welcome back</h1>
        <p className="login-subtitle">Sign in to your AdminHub account</p>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label className="checkbox-label">
              <input type="checkbox" defaultChecked /> Remember me
            </label>
            <a href="#" style={{ color: 'var(--primary-600)', fontWeight: 600 }}>Forgot password?</a>
          </div>
          <button className="login-btn" type="submit" disabled={loading}>
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <p className="login-footer">
          Don't have an account? <a href="#">Sign up</a>
        </p>
        <p style={{ textAlign: 'center', marginTop: 12, fontSize: 12, color: 'var(--text-muted)' }}>
          Demo: any email + password works
        </p>
      </div>
    </div>
  );
}
