import { useState, useMemo } from 'react';
import { Search, Plus, Pencil, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import Card from '../components/Card';
import { usersData, type User } from '../data/mockData';

const statusBadgeClass: Record<User['status'], string> = {
  Active: 'badge-active',
  Inactive: 'badge-inactive',
  Pending: 'badge-pending',
};

const roleBadgeClass: Record<User['role'], string> = {
  Admin: 'badge-admin',
  Editor: 'badge-editor',
  Viewer: 'badge-viewer',
};

const PAGE_SIZE = 8;

export default function UsersPage() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<'All' | User['status']>('All');

  const filtered = useMemo(() => {
    return usersData.filter((u) => {
      const matchesSearch =
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === 'All' || u.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const currentData = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Users</h1>
        <p className="page-subtitle">Manage team members and their permissions.</p>
      </div>

      <Card noPadding>
        <div className="table-toolbar">
          <div className="table-search">
            <Search size={16} color="var(--text-muted)" />
            <input
              type="text"
              placeholder="Search users…"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            />
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <select
              className="form-input"
              style={{ width: 'auto', padding: '8px 12px' }}
              value={statusFilter}
              onChange={(e) => { setStatusFilter(e.target.value as 'All' | User['status']); setPage(1); }}
            >
              <option value="All">All statuses</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
            </select>
            <button className="btn btn-primary">
              <Plus size={16} /> Add User
            </button>
          </div>
        </div>

        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Status</th>
                <th>Last Active</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="table-user-cell">
                      <div className="table-avatar">{user.avatar}</div>
                      <div>
                        <div className="table-user-name">{user.name}</div>
                        <div className="table-user-email">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td><span className={`badge ${roleBadgeClass[user.role]}`}>{user.role}</span></td>
                  <td>
                    <span className={`badge ${statusBadgeClass[user.status]}`}>
                      <span className="badge-dot" />
                      {user.status}
                    </span>
                  </td>
                  <td style={{ color: 'var(--text-muted)' }}>{user.lastActive}</td>
                  <td style={{ textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: 4, justifyContent: 'flex-end' }}>
                      <button className="topbar-icon-btn" style={{ width: 32, height: 32 }} aria-label="Edit user">
                        <Pencil size={14} />
                      </button>
                      <button className="topbar-icon-btn" style={{ width: 32, height: 32, color: 'var(--error-500)' }} aria-label="Delete user">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {currentData.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="table-pagination">
          <span>
            Showing {currentData.length > 0 ? (page - 1) * PAGE_SIZE + 1 : 0}–{(page - 1) * PAGE_SIZE + currentData.length} of {filtered.length}
          </span>
          <div className="pagination-btns">
            <button
              className="pagination-btn"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              aria-label="Previous page"
            >
              <ChevronLeft size={16} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                className={`pagination-btn ${p === page ? 'active' : ''}`}
                onClick={() => setPage(p)}
              >
                {p}
              </button>
            ))}
            <button
              className="pagination-btn"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages || totalPages === 0}
              aria-label="Next page"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
