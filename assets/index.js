


//FAQ
const animatedItems = document.querySelectorAll('.animate-fadeIn, .animate-slideUp');

  const observerOptions = { threshold: 0.2 };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.transition = 'all 0.8s ease-out';
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedItems.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    observer.observe(el);
  });
