import React, { useEffect } from 'react';

// There is only one class that triggers the animation 
// ==== .build-in-animate ====
// This class is added to the element that you want to animate
// There are two types of triggers
// ==== .js-build-in-trigger ==== 
// ==== .js-build-in-item ==== This are individual elements that are animated

const IntersectionObserverComponent = ({ children }) => {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('build-in-animate');
        } else {
          entry.target.classList.remove('build-in-animate');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.5 });

    const animateElements = document.querySelectorAll('.js-build-in-item');
    animateElements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []); // Empty dependency array to ensure useEffect runs only once when the component mounts

  return <div>{children}</div>;
};

export default IntersectionObserverComponent;
