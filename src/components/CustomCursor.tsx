import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', updatePosition);
    
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
      <div
        className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${position.x - 2}px, ${position.y - 2}px)`,
        }}
      />
    </>
  );
};