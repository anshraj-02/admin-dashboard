import { useNavigate } from 'react-router-dom';
import { Menu, Search, Bell, Sun, Moon, LogOut } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { notificationsData } from '../data/mockData';
import { setAuth } from '../context/AuthContext';

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const unread = notificationsData.filter((n) => !n.read).length;

  const handleLogout = () => {
    setAuth(false);
    navigate('/login');
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="topbar-icon-btn mobile-only" onClick={onMenuClick} aria-label="Open menu">
          <Menu size={20} />
        </button>
        <div className="topbar-search">
          <Search size={16} className="topbar-search-icon" />
          <input type="text" placeholder="Search…" />
        </div>
      </div>

      <div className="topbar-right">
        <button className="topbar-icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        <button className="topbar-icon-btn topbar-bell" onClick={() => navigate('/notifications')} aria-label="Notifications">
          <Bell size={18} />
          {unread > 0 && <span className="topbar-badge">{unread}</span>}
        </button>

        <div className="topbar-user">
          <div className="topbar-avatar">SC</div>
          <div className="topbar-user-info">
            <div className="topbar-user-name">Sarah Chen</div>
            <div className="topbar-user-role">Administrator</div>
          </div>
        </div>

        <button className="topbar-icon-btn" onClick={handleLogout} aria-label="Log out">
          <LogOut size={18} />
        </button>
      </div>
    </header>
  );
}
