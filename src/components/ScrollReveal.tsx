import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in ms (e.g. 50, 100, 150)
  direction?: 'up' | 'none';
  threshold?: number;
}

export const Reveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If reduced motion is requested, reveal immediately
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const el = elementRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold]);

  const style: React.CSSProperties = {
    transitionDuration: '550ms',
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    transitionDelay: `${delay}ms`
  };

  const transformClass = direction === 'up' 
    ? (isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0')
    : (isVisible ? 'opacity-100' : 'opacity-0');

  return (
    <div
      ref={elementRef}
      style={style}
      className={`transition-[transform,opacity] will-change-[transform,opacity] ${transformClass} ${className}`}
    >
      {children}
    </div>
  );
};
