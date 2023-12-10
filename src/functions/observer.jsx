import React, { useEffect, useRef } from 'react';

const IntersectionObserverComponent = ({ children }) => {
  useEffect(() => {
    // Find all elements with the class 'js-build-in-trigger'
    const triggerElements = document.querySelectorAll('.js-build-in-trigger');

    // Loop through each trigger element and create a separate Intersection Observer for each
    triggerElements.forEach((triggerElement) => {
      const triggerObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // If the trigger element is at least half in the viewport, add animation class
              triggerElement.classList.add('build-in-animate');
              const itemsInTrigger = triggerElement.querySelectorAll('.js-build-in-item');
              itemsInTrigger.forEach((item) => item.classList.add('build-in-animate'));
            } else if (entry.boundingClientRect.top > window.innerHeight && entry.isIntersecting === false) {
              // If the trigger element is scrolled above the viewport, remove animation class
              triggerElement.classList.remove('build-in-animate');
              const itemsInTrigger = triggerElement.querySelectorAll('.js-build-in-item');
              itemsInTrigger.forEach((item) => item.classList.remove('build-in-animate'));
            }
          });
        },
        
      );

      // Find all elements with the class 'js-build-in-item' inside the current trigger element
      const animateElements = triggerElement.querySelectorAll('.js-build-in-item');

      // Observe each 'js-build-in-item' element using the triggerObserver
      animateElements.forEach((el) => triggerObserver.observe(el));

      // Clean up the observer when the trigger element is removed from the DOM
      return () => {
        animateElements.forEach((el) => triggerObserver.unobserve(el));
        triggerObserver.disconnect();
      };
    });
  }, []); // Empty dependency array to ensure useEffect runs only once when the component mounts

  return <div>{children}</div>;
};

export default IntersectionObserverComponent;
