/**
 * Animation utilities for applying animations when elements come into view
 */

// Function to initialize intersection observer for staggered animations
export function initStaggeredAnimation() {
  if (typeof window !== 'undefined') {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add class after a staggered delay based on index
          setTimeout(() => {
            entry.target.classList.add('in-view');
          }, index * 100); // 100ms delay per item
          
          // Unobserve after animation is added
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Observe all elements with the stagger-item class
    const elements = document.querySelectorAll('.stagger-item');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }
  
  return () => {};
}

// Function to initialize intersection observer for any animation class
export function initScrollAnimation(animationClass: string, selector: string) {
  if (typeof window !== 'undefined') {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Observe all elements with the provided selector
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }
  
  return () => {};
} 