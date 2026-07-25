import React, { useEffect, useState } from 'react';
import './ScrollProgress.css';

export const ScrollProgress: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      if (documentHeight - windowHeight > 0) {
        const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
        setScrollPercentage(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="scroll-progress-bar"
      style={{ width: `${scrollPercentage}%` }}
      role="progressbar"
      aria-valuenow={Math.round(scrollPercentage)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  );
};
