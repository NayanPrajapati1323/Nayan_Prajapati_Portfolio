import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
            setIsHovering(true);
        } else {
            setIsHovering(false);
        }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <style>{`
        body { cursor: none; }
        a, button { cursor: none; }
      `}</style>
      
      {/* Main Dot */}
      <motion.div
        style={{
          translateX: cursorX,
          translateY: cursorY,
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 9999,
          pointerEvents: 'none',
        }}
      >
        <div 
            style={{
                width: '8px',
                height: '8px',
                backgroundColor: 'var(--accent-primary)',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
            }}
        />
      </motion.div>

      {/* Trailing Ring */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 9998,
          pointerEvents: 'none',
        }}
      >
        <motion.div
            animate={{
                scale: isHovering ? 2.5 : 1,
                opacity: isHovering ? 0.5 : 1,
                backgroundColor: isHovering ? 'var(--accent-primary)' : 'transparent',
            }}
            style={{
                width: '32px',
                height: '32px',
                border: '2px solid var(--accent-primary)',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                transition: 'all 0.2s ease-out'
            }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
