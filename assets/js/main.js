AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// // Listen for a submit
// document.querySelector(".contact-form").addEventListener("submit", submitForm);


const educationSection = document.querySelector('.education-section');
const experienceSection = document.querySelector('.experience-section');
const toggleButtons = document.querySelectorAll('.toggle-btn');
        
// Set default to Experience
educationSection.style.display = 'none';
experienceSection.style.display = 'block';
        
toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
  if (button.getAttribute('data-toggle') === 'education') {
    educationSection.style.display = 'block';
    experienceSection.style.display = 'none';
  } else {
    educationSection.style.display = 'none';
    experienceSection.style.display = 'block';
  }

  toggleButtons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const viewAllButton = document.getElementById("viewAllButton");
  const popup = document.getElementById("popup");
  const closeButton = document.getElementById("closeButton");

  viewAllButton.addEventListener("click", function () {
      popup.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
      popup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
     if (event.target === popup) {
         popup.style.display = "none";
      }
  });
});