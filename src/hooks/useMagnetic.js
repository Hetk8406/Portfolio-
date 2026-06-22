import { useRef, useEffect } from 'react';

export const useMagnetic = (intensity = 0.25) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Calculate delta distance
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
      
      // Interpolate shift
      const moveX = deltaX * intensity;
      const moveY = deltaY * intensity;

      element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = 'translate3d(0, 0, 0)';
      element.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    };

    const handleMouseEnter = () => {
      element.style.transition = 'none';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [intensity]);

  return ref;
};
