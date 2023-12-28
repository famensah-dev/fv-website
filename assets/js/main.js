document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function () {
      if (window.scrollY > navbar.offsetHeight) {
        navbar.style.background = '#333'; // Set your desired color on scroll
      } else {
        navbar.style.background = 'rgba(0, 0, 0, 0)';
      }
    });
  });