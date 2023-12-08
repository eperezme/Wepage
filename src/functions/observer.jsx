import React, { useEffect, useRef } from 'react';

// There is only one class that triggers the animation 
// ==== .build-in-animate ====
// This class is added to the element that you want to animate
// There are two types of triggers
// ==== .js-build-in-trigger ==== 
// ==== .js-build-in-item ==== This are individual elements that are animated




function ObserveComponent() {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add your "in viewport" code here
          console.log('Element is in the viewport!');
        } else {
          // Add your "out of viewport" code here
          console.log('Element is out of the viewport!');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup function to unobserve the element when the component unmounts
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount and unmount

  return <div ref={ref}>Hello, world!</div>;
}

export default ObserveComponent;