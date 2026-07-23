export const navItems = [
  { id: 'dashboard', label: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard' },
  { id: 'analytics', label: 'Analytics', path: '/analytics', icon: 'BarChart3' },
  { id: 'users', label: 'Users', path: '/users', icon: 'Users' },
  { id: 'notifications', label: 'Notifications', path: '/notifications', icon: 'Bell' },
  { id: 'settings', label: 'Settings', path: '/settings', icon: 'Settings' },
] as const;

export const kpiData = [
  { id: 'revenue', label: 'Total Revenue', value: '$284,540', change: 12.5, trend: 'up' as const, icon: 'DollarSign', color: 'primary' },
  { id: 'users', label: 'Active Users', value: '8,429', change: 8.2, trend: 'up' as const, icon: 'Users', color: 'success' },
  { id: 'orders', label: 'New Orders', value: '1,293', change: -3.1, trend: 'down' as const, icon: 'ShoppingCart', color: 'warning' },
  { id: 'conversion', label: 'Conversion Rate', value: '3.24%', change: 1.8, trend: 'up' as const, icon: 'TrendingUp', color: 'accent' },
];

export const revenueData = [
  { month: 'Jan', revenue: 18400, target: 16000 },
  { month: 'Feb', revenue: 22100, target: 18000 },
  { month: 'Mar', revenue: 19800, target: 20000 },
  { month: 'Apr', revenue: 24300, target: 21000 },
  { month: 'May', revenue: 28100, target: 23000 },
  { month: 'Jun', revenue: 26500, target: 25000 },
  { month: 'Jul', revenue: 31200, target: 27000 },
  { month: 'Aug', revenue: 34800, target: 29000 },
  { month: 'Sep', revenue: 32100, target: 31000 },
  { month: 'Oct', revenue: 38600, target: 33000 },
  { month: 'Nov', revenue: 41200, target: 36000 },
  { month: 'Dec', revenue: 45900, target: 40000 },
];

export const trafficData = [
  { name: 'Direct', value: 3840, color: '#3b82f6' },
  { name: 'Organic', value: 2910, color: '#22c55e' },
  { name: 'Referral', value: 1680, color: '#f59e0b' },
  { name: 'Social', value: 1290, color: '#a855f7' },
];

export const userActivityData = [
  { day: 'Mon', active: 420, new: 45 },
  { day: 'Tue', active: 380, new: 52 },
  { day: 'Wed', active: 510, new: 38 },
  { day: 'Thu', active: 470, new: 61 },
  { day: 'Fri', active: 620, new: 78 },
  { day: 'Sat', active: 380, new: 34 },
  { day: 'Sun', active: 290, new: 22 },
];

export const salesByCategoryData = [
  { category: 'Electronics', sales: 4200 },
  { category: 'Clothing', sales: 3100 },
  { category: 'Books', sales: 1800 },
  { category: 'Home', sales: 2600 },
  { category: 'Sports', sales: 1400 },
];

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer';
  status: 'Active' | 'Inactive' | 'Pending';
  lastActive: string;
  avatar: string;
}

export const usersData: User[] = [
  { id: 1, name: 'Sarah Chen', email: 'sarah.chen@example.com', role: 'Admin', status: 'Active', lastActive: '2 min ago', avatar: 'SC' },
  { id: 2, name: 'Marcus Johnson', email: 'marcus.j@example.com', role: 'Editor', status: 'Active', lastActive: '1 hour ago', avatar: 'MJ' },
  { id: 3, name: 'Elena Rodriguez', email: 'elena.r@example.com', role: 'Editor', status: 'Inactive', lastActive: '3 days ago', avatar: 'ER' },
  { id: 4, name: 'David Kim', email: 'david.kim@example.com', role: 'Viewer', status: 'Active', lastActive: '5 min ago', avatar: 'DK' },
  { id: 5, name: 'Priya Patel', email: 'priya.p@example.com', role: 'Admin', status: 'Active', lastActive: 'Just now', avatar: 'PP' },
  { id: 6, name: 'James Wilson', email: 'james.w@example.com', role: 'Viewer', status: 'Pending', lastActive: 'Never', avatar: 'JW' },
  { id: 7, name: 'Aisha Mohammed', email: 'aisha.m@example.com', role: 'Editor', status: 'Active', lastActive: '12 min ago', avatar: 'AM' },
  { id: 8, name: 'Tom Anderson', email: 'tom.a@example.com', role: 'Viewer', status: 'Inactive', lastActive: '2 weeks ago', avatar: 'TA' },
  { id: 9, name: 'Lisa Wang', email: 'lisa.w@example.com', role: 'Editor', status: 'Active', lastActive: '1 day ago', avatar: 'LW' },
  { id: 10, name: 'Carlos Gomez', email: 'carlos.g@example.com', role: 'Viewer', status: 'Pending', lastActive: 'Never', avatar: 'CG' },
  { id: 11, name: 'Nina Petrov', email: 'nina.p@example.com', role: 'Editor', status: 'Active', lastActive: '3 min ago', avatar: 'NP' },
  { id: 12, name: 'Oliver Smith', email: 'oliver.s@example.com', role: 'Admin', status: 'Active', lastActive: '8 min ago', avatar: 'OS' },
];

export interface NotificationItem {
  id: number;
  title: string;
  message: string;
  time: string;
  type: 'success' | 'warning' | 'error' | 'info';
  read: boolean;
}

export const notificationsData: NotificationItem[] = [
  { id: 1, title: 'New order received', message: 'Order #4821 for $1,240 was placed by a customer in Berlin.', time: '2 min ago', type: 'success', read: false },
  { id: 2, title: 'Server load high', message: 'CPU usage on server-03 exceeded 85% for 10 minutes.', time: '18 min ago', type: 'warning', read: false },
  { id: 3, title: 'Payment failed', message: 'Subscription renewal for Acme Corp failed: card declined.', time: '1 hour ago', type: 'error', read: false },
  { id: 4, title: 'New user registered', message: 'A new editor account was created and is pending approval.', time: '3 hours ago', type: 'info', read: true },
  { id: 5, title: 'Backup completed', message: 'Nightly database backup finished successfully (4.2 GB).', time: '6 hours ago', type: 'success', read: true },
  { id: 6, title: 'API rate limit', message: 'Third-party API is approaching its daily request limit.', time: '9 hours ago', type: 'warning', read: true },
  { id: 7, title: 'Report ready', message: 'Your monthly analytics report is available for download.', time: '1 day ago', type: 'info', read: true },
];

export const recentActivityData = [
  { id: 1, user: 'Sarah Chen', action: 'updated billing settings', time: '2 min ago', avatar: 'SC' },
  { id: 2, user: 'Marcus Johnson', action: 'published a new article', time: '24 min ago', avatar: 'MJ' },
  { id: 3, user: 'David Kim', action: 'exported the user list', time: '1 hour ago', avatar: 'DK' },
  { id: 4, user: 'Priya Patel', action: 'added a new team member', time: '2 hours ago', avatar: 'PP' },
  { id: 5, user: 'Aisha Mohammed', action: 'resolved 3 support tickets', time: '4 hours ago', avatar: 'AM' },
];
