import React, { useEffect } from 'react';

const BuildInAnimation = () => {
  const r = "build-in-animate";
  const n = "build-in-reduced";
  const o = 30;
  const a = 0;
  const l = 0;

  useEffect(() => {
    const handleIntersection = (entries) => {
      for (let entry of entries) {
        if (entry.target.classList.toggle(r, entry.isIntersecting)) {
          if (entry.target.classList.contains("js-build-in-trigger")) {
            for (let item of entry.target.querySelectorAll(".js-build-in-item")) {
              item.classList.toggle(r, entry.isIntersecting);
            }
          }
        }
      }
    };

    const intersectionObserver = new IntersectionObserver(handleIntersection, {
      rootMargin: `-${a}% 0% -${o}% 0%`,
      threshold: l
    });

    document.querySelectorAll(".js-build-in-trigger[data-build-in-stagger], .js-build-in-group[data-build-in-stagger]").forEach((trigger) => {
      const stagger = parseInt(trigger.getAttribute("data-build-in-stagger"));
      const items = trigger.querySelectorAll(".js-build-in-item");
      items.forEach((item, index) => {
        item.style.transitionDelay = `${index * stagger}ms`;
      });
    });

    document.querySelectorAll(".js-build-in-trigger, .js-build-in-item").forEach((element) => {
      intersectionObserver.observe(element);
    });

    return () => {
      intersectionObserver.disconnect();
    };
  }, [a, o, l, r]);

  const isReducedMotion = (element) => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const buildNonDecorative = element.getAttribute("data-build-non-decorative") || "false";
    return prefersReducedMotion.matches && buildNonDecorative === "false";
  };

  const addClasses = (element) => {
    element.classList.add(n);
    element.classList.add(r);
    const items = element.querySelectorAll(".js-build-in-item, .js-type-in-item");
    items.forEach((item) => {
      item.classList.add(n);
      item.classList.add(r);
    });
  };

  return null; // or return any JSX if needed
};

export default BuildInAnimation;
