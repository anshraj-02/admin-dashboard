import { type ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AUTH_KEY = 'admin-dashboard-auth';

export function setAuth(value: boolean) {
  localStorage.setItem(AUTH_KEY, String(value));
}

export function isAuthenticated(): boolean {
  return localStorage.getItem(AUTH_KEY) === 'true';
}

export function RequireAuth({ children }: { children: ReactNode }) {
  const location = useLocation();
  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <>{children}</>;
}
