import { type LucideIcon, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import {
  DollarSign, Users, ShoppingCart, TrendingUp,
} from 'lucide-react';
import { kpiData } from '../data/mockData';

const iconMap: Record<string, LucideIcon> = {
  DollarSign,
  Users,
  ShoppingCart,
  TrendingUp,
};

const colorClass: Record<string, string> = {
  primary: 'kpi-icon-primary',
  success: 'kpi-icon-success',
  warning: 'kpi-icon-warning',
  accent: 'kpi-icon-accent',
};

export default function KpiCard({ kpi }: { kpi: typeof kpiData[number] }) {
  const Icon = iconMap[kpi.icon];
  const isUp = kpi.trend === 'up';

  return (
    <div className="card kpi-card">
      <div className="kpi-top">
        <div className={`kpi-icon ${colorClass[kpi.color]}`}>
          <Icon size={20} />
        </div>
        <div className={`kpi-change ${isUp ? 'up' : 'down'}`}>
          {isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {kpi.change}%
        </div>
      </div>
      <div className="kpi-value">{kpi.value}</div>
      <div className="kpi-label">{kpi.label}</div>
    </div>
  );
}
