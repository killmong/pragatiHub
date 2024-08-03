'use client'
import React, { useState, useEffect } from 'react';

type TypingAnimationProps = {
  text: string;
  className?: string;
  speed?: number;
};

const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, className, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentText = '';
    let index = 0;

    const interval = setInterval(() => {
      currentText += text[index];
      setDisplayedText(currentText);
      index++;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className={className}>{displayedText}</span>;
};

export default TypingAnimation;
