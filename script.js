document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  const h1 = document.querySelector('h1');

  darkModeToggle.addEventListener('change', function() {
      if (darkModeToggle.checked) {
          body.classList.add('dark-mode');
          h1.style.color = '#fff';
      } else {
          body.classList.remove('dark-mode');
          h1.style.color = '#333';
      }
  });
});
