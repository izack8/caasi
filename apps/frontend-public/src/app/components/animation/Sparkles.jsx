import { useEffect, useState } from 'react';

function SparkleText({ children, className = "" }) {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSparkle = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
      };
      
      setSparkles(prev => [...prev, newSparkle]);
      
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
      }, 1500);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      {sparkles.map(sparkle => (
        <span
          key={sparkle.id}
          className="absolute text-yellow-300 animate-ping pointer-events-none"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            fontSize: '20px',
          }}
        >
          ✨
        </span>
      ))}
    </span>
  );
}

export default SparkleText;