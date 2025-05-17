import { useState, useEffect } from 'react';

interface ScrollStatus {
  scrolled: boolean;
  scrollY: number;
}

export const useScroll = (threshold = 50): ScrollStatus => {
  const [scrollStatus, setScrollStatus] = useState<ScrollStatus>({
    scrolled: false,
    scrollY: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolled = currentScrollY > threshold;
      
      setScrollStatus({
        scrolled,
        scrollY: currentScrollY,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Set initial scroll position
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return scrollStatus;
};