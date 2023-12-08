import React, { useEffect, useRef } from 'react';

// There is only one class that triggers the animation 
// ==== .build-in-animate ====
// This class is added to the element that you want to animate
// There are two types of triggers
// ==== .js-build-in-trigger ==== 
// ==== .js-build-in-item ==== This are individual elements that are animated

function Oberve() {

  useEffect(() => {
    const targetTrigger = document.querySelectorAll('.js-build-in-item');

    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
    });

    targetSections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    // ...
  );
}

export default Oberve;