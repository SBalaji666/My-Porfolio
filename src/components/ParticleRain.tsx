import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
}

export const ParticleRain: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = [
      'rgba(59, 130, 246, 0.6)',   // Blue
      'rgba(139, 92, 246, 0.6)',   // Purple
      'rgba(236, 72, 153, 0.6)',   // Pink
      'rgba(34, 197, 94, 0.6)',    // Green
      'rgba(251, 191, 36, 0.6)',   // Yellow
      'rgba(6, 182, 212, 0.6)',    // Cyan
    ];

    const createParticle = (id: number): Particle => ({
      id,
      x: Math.random() * window.innerWidth,
      y: -10,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 3 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    });

    // Initialize particles
    const initialParticles = Array.from({ length: 50 }, (_, i) => ({
      ...createParticle(i),
      y: Math.random() * window.innerHeight,
    }));
    setParticles(initialParticles);

    let animationId: number;
    let particleId = 50;

    const animate = () => {
      setParticles(prevParticles => {
        const updatedParticles = prevParticles
          .map(particle => ({
            ...particle,
            y: particle.y + particle.speed,
          }))
          .filter(particle => particle.y < window.innerHeight + 10);

        // Add new particles
        while (updatedParticles.length < 50 && Math.random() < 0.3) {
          updatedParticles.push(createParticle(particleId++));
        }

        return updatedParticles;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: Math.min(particle.x, window.innerWidth),
      })));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-pulse"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
        />
      ))}
    </div>
  );
};