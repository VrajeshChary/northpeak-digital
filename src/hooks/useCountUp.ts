import { useState, useEffect } from 'react';

export const useCountUp = (end: number, duration: number = 2000, startOnTrigger: boolean = true) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startOnTrigger) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easeOutQuad * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, startOnTrigger]);

  return count;
};
