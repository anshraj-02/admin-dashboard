import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, BarChart3, Users, Bell, Settings,
  type LucideIcon,
} from 'lucide-react';
import { navItems } from '../data/mockData';

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  BarChart3,
  Users,
  Bell,
  Settings,
};

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {open && <div className="sidebar-overlay" onClick={onClose} />}

      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-brand">
          <div className="sidebar-logo">A</div>
          <span className="sidebar-brand-text">AdminHub</span>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-help">
            <div className="sidebar-help-icon">?</div>
            <div>
              <div className="sidebar-help-title">Need help?</div>
              <div className="sidebar-help-sub">Check our docs</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
