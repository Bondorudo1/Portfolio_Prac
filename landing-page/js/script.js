document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const createAnimation = () => {
    let distance = -window.innerHeight; // Default distance

    if (window.matchMedia("(max-width: 768px)").matches) {
      distance = -window.innerHeight * 0.29; // Shorter distance for smaller screens
    }
    if (window.matchMedia("(min-width: 768px)").matches) {
      distance = -window.innerHeight * 0.2; // Shorter distance for smaller screens
    }
    gsap.to(".crystal", {
      y: distance,
      ease: "none",
      scrollTrigger: {
        trigger: ".section-headline",
        start: "top bottom",
        end: "bottom+=300 top",
        scrub: true,
      },
    });
  };

  createAnimation();

  window.addEventListener("resize", () => {
    ScrollTrigger.refresh(); // Refresh ScrollTrigger
    createAnimation(); // Recreate animation with updated values
  });
});


  const menuIcon = document.getElementById('menuIcon');    // or use querySelector('.menu_icon')
  const navbarContainer = document.getElementById('navbarContainer');
  const navLinks = document.querySelectorAll('.navbar-container a'); // Select all links inside the navbar

menuIcon.addEventListener('click', () => {
  if (window.innerWidth <= 768) { // Only toggle if screen is 768px or smaller
    navbarContainer.classList.toggle('open');
  }
});


