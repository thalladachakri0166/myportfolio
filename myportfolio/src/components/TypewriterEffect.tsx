import React, { useState, useEffect, useCallback } from 'react';

interface TypewriterEffectProps {
  text: string;
  delay?: number;
  onComplete?: () => void;
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  delay = 150,
  onComplete
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true);

  const typeNextCharacter = useCallback(() => {
    if (!isDeleting && currentIndex < text.length) {
      setDisplayText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, isDeleting, text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(typeNextCharacter, delay);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, delay, text, typeNextCharacter, onComplete]);

  // Cursor blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span className="inline-flex">
      <span className="font-mono">{displayText}</span>
      <span 
        className={`ml-1 w-[2px] h-[1em] inline-block bg-current transition-opacity duration-100 ${
          isBlinking ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </span>
  );
};