import { useState, useEffect, useRef } from 'react';

export default function AnimatedCounter({ target, duration = 1200, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const currentRef = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    // Remove any letters or symbols except digits and dot to get raw number
    const targetStr = target.toString();
    const hasDecimal = targetStr.includes('.');
    const decimalPlaces = hasDecimal ? targetStr.split('.')[1].length : 0;
    const cleanedStr = targetStr.replace(/[^0-9.]/g, '');
    const targetNum = parseFloat(cleanedStr);
    
    if (isNaN(targetNum)) {
      setCount(target);
      return;
    }

    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing: easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const currentVal = ease * targetNum;
      
      setCount(currentVal.toFixed(decimalPlaces));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, target, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
