
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('build-in-animate');
    } else {
      entry.target.classList.remove('build-in-animate');
    }
  })
}, { threshold: 0.5 });


const animateElement = document.querySelectorAll('.js-build-in-item');
animateElement.forEach((el) => observer.observe(el));