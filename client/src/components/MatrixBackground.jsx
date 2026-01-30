import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const MatrixBackground = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let intervalId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight; 
    };
    
    const resizeToParent = () => {
        if (canvas.parentElement) {
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
        }
    }

    window.addEventListener('resize', resizeToParent);
    resizeToParent();

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = [];

    // Initialize drops
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const chars = "XYZ019208345{}<>//[]|;:!@#$%^&*()_+";

    const draw = () => {
      // In Light theme, we use a very transparent white fade to prevent muddiness
      // In Dark theme, we use the classic black fade
      if (theme === 'light') {
         ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'; 
      } else {
         ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      }
      
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        
        if (theme === 'light') {
             // Dark green/gray for light mode
             ctx.fillStyle = `rgba(16, 185, 129, ${Math.random()})`; 
        } else {
             // Bright green for dark mode
             ctx.fillStyle = `rgba(32, 194, 14, ${Math.random()})`;
        }
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    // Re-start interval on theme change to ensure instant color switch
    intervalId = setInterval(draw, 50);

    return () => {
        window.removeEventListener('resize', resizeToParent);
        clearInterval(intervalId);
    };
  }, [theme]); // Add theme as dependency

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: theme === 'light' ? 0.3 : 0.15 }} />;
};

export default MatrixBackground;
