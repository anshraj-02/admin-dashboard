import { useState } from 'react';
import { CheckCircle2, AlertTriangle, XCircle, Info, Check } from 'lucide-react';
import Card from '../components/Card';
import { notificationsData, type NotificationItem } from '../data/mockData';

const iconMap = {
  success: CheckCircle2,
  warning: AlertTriangle,
  error: XCircle,
  info: Info,
};

export default function NotificationsPage() {
  const [items, setItems] = useState<NotificationItem[]>(notificationsData);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const visible = filter === 'all' ? items : items.filter((n) => !n.read);
  const unreadCount = items.filter((n) => !n.read).length;

  const markAllRead = () => {
    setItems((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const markRead = (id: number) => {
    setItems((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Notifications</h1>
        <p className="page-subtitle">
          {unreadCount > 0 ? `You have ${unreadCount} unread notifications.` : 'You are all caught up.'}
        </p>
      </div>

      <Card noPadding>
        <div className="table-toolbar">
          <div style={{ display: 'flex', gap: 4 }}>
            <button
              className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={`btn ${filter === 'unread' ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => setFilter('unread')}
            >
              Unread {unreadCount > 0 && `(${unreadCount})`}
            </button>
          </div>
          {unreadCount > 0 && (
            <button className="btn btn-ghost" onClick={markAllRead}>
              <Check size={16} /> Mark all read
            </button>
          )}
        </div>

        <div className="notif-list">
          {visible.length === 0 && (
            <div style={{ textAlign: 'center', padding: '48px', color: 'var(--text-muted)' }}>
              No notifications to show.
            </div>
          )}
          {visible.map((n) => {
            const Icon = iconMap[n.type];
            return (
              <div
                key={n.id}
                className={`notif-item ${!n.read ? 'unread' : ''}`}
                onClick={() => !n.read && markRead(n.id)}
              >
                <div className={`notif-icon notif-icon-${n.type}`}>
                  <Icon size={18} />
                </div>
                <div className="notif-body">
                  <div className="notif-title">{n.title}</div>
                  <div className="notif-message">{n.message}</div>
                  <div className="notif-time">{n.time}</div>
                </div>
                {!n.read && <div className="notif-unread-dot" />}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
