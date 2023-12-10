import React, { useEffect, useRef } from 'react';

const IntersectionObserverComponent = ({ children }) => {
  const triggerObserverRef = useRef(null);

  useEffect(() => {
    // Callback function for the Intersection Observer
    const triggerObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const triggerElement = entry.target.closest('.js-build-in-trigger');

        if (entry.isIntersecting) {
          // If the trigger element is in the viewport, add animation class
          if (triggerElement) {
            triggerElement.classList.add('build-in-animate');
            const itemsInTrigger = triggerElement.querySelectorAll('.js-build-in-item');
            itemsInTrigger.forEach((item) => item.classList.add('build-in-animate'));
          }
        } else if (entry.boundingClientRect.top > 0) {
          // If the trigger element is scrolled above the viewport, remove animation class
          if (triggerElement) {
            triggerElement.classList.remove('build-in-animate');
            const itemsInTrigger = triggerElement.querySelectorAll('.js-build-in-item');
            itemsInTrigger.forEach((item) => item.classList.remove('build-in-animate'));
          }
        }
      });
    };

    // Create the Intersection Observer for the trigger element
    triggerObserverRef.current = new IntersectionObserver(triggerObserverCallback, { threshold: 0.5 });

    // Find all elements with the class 'js-build-in-item'
    const animateElements = document.querySelectorAll('.js-build-in-item');

    // Observe each 'js-build-in-item' element using the triggerObserver
    animateElements.forEach((el) => triggerObserverRef.current.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      animateElements.forEach((el) => triggerObserverRef.current.unobserve(el));
    };
  }, []); // Empty dependency array to ensure useEffect runs only once when the component mounts

  return <div>{children}</div>;
};

export default IntersectionObserverComponent;
