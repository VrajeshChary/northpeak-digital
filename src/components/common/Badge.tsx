import React from 'react';
import './Badge.css';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'violet' | 'emerald' | 'amber' | 'glass';
  icon?: React.ReactNode;
  className?: string;
  pulse?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  icon,
  className = '',
  pulse = false,
}) => {
  return (
    <span className={`badge badge-${variant} ${pulse ? 'badge-pulse' : ''} ${className}`}>
      {pulse && <span className="pulse-dot" aria-hidden="true" />}
      {icon && <span className="badge-icon">{icon}</span>}
      <span className="badge-text">{children}</span>
    </span>
  );
};
