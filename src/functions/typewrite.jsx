import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, typingDelay = 100, deletingDelay = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(typingDelay);

  useEffect(() => {
    let timer = '';
    const handleTyping = () => {
      const currentText = isDeleting ? text[loopNum % text.length].substring(0, displayText.length - 1)
        : text[loopNum % text.length].substring(0, displayText.length + 1);
      setDisplayText(currentText);
      setTypingSpeed(isDeleting ? deletingDelay : typingDelay);

      if (!isDeleting && displayText === text[loopNum % text.length]) {
        timer = setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(prevLoopNum => prevLoopNum + 1);
        setTypingSpeed(500);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum]);

  return (
    <span className={`typewriter color-${loopNum % 3}`}>{displayText}</span>
  );
};

export default Typewriter;