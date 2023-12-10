import React, { useEffect, useRef } from 'react';



const IntersectionObserverComponent = ({ children }) => {
  const observerRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        // Check if the bottom of the element is above the viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('build-in-animate');
        } else if (entry.boundingClientRect.top > 0) {
          entry.target.classList.remove('build-in-animate');
        }
      });
    };

    // That should threshold the js-build-in-trigger element
    observerRef.current = new IntersectionObserver(observerCallback, { threshold: 0.5 });

    const animateElements = document.querySelectorAll('.js-build-in-item');
    animateElements.forEach((el) => observerRef.current.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      animateElements.forEach((el) => observerRef.current.unobserve(el));
    };
  }, []); // Empty dependency array to ensure useEffect runs only once when the component mounts

  return <div>{children}</div>;
};

export default IntersectionObserverComponent;