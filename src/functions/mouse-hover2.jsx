import { useEffect } from 'react';

const MouseTracker = () => {
  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);

    console.log({x, y});
  };

  useEffect(() => {
    const cards = document.querySelectorAll('[data-target="card-skew.bounding"]');
    cards.forEach(card => {
      card.addEventListener('mousemove', handleOnMouseMove);
    });

    // Clean up function
    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleOnMouseMove);
      });
    };
  }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount

  return null;
};

export default MouseTracker;