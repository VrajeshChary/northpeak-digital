import React from 'react';
import { Badge } from './Badge';
import './SectionHeading.css';

export interface SectionHeadingProps {
  badgeText?: string;
  badgeVariant?: 'cyan' | 'violet' | 'emerald' | 'amber' | 'glass';
  title: string;
  titleGradientText?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeText,
  badgeVariant = 'cyan',
  title,
  titleGradientText,
  description,
  align = 'center',
  className = '',
}) => {
  return (
    <div className={`section-heading align-${align} ${className}`}>
      {badgeText && (
        <Badge variant={badgeVariant} pulse className="section-badge">
          {badgeText}
        </Badge>
      )}
      <h2 className="section-title">
        {title}{' '}
        {titleGradientText && (
          <span className="gradient-accent-text">{titleGradientText}</span>
        )}
      </h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
};
