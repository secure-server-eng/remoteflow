// JavaScript to handle splash screen
const form = document.getElementById('contactForm');
const splash = document.getElementById('splashMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent default form submission
  splash.classList.add('show'); // show splash

  setTimeout(() => {
    splash.classList.remove('show'); // hide after 3 seconds
    form.reset(); // optional: reset form fields
  }, 3000);
});
