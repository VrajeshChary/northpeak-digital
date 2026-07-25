import React from 'react';
import './Card.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  interactive?: boolean;
  glowOnHover?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  interactive = false,
  glowOnHover = true,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`card ${interactive ? 'card-interactive' : ''} ${glowOnHover ? 'card-glow' : ''} ${className}`}
      {...props}
    >
      <div className="card-content">{children}</div>
    </div>
  );
};
