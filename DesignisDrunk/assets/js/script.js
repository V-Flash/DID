

//Theme Change

const themes = ['default-theme', 'dark-theme', 'blue-theme'];
const themeButton = document.getElementById('theme-btn');
const body = document.querySelector('body');
let currentThemeIndex = localStorage.getItem('currentThemeIndex') || 0;

body.classList.add(themes[currentThemeIndex]);

themeButton.addEventListener('click', function() {
  body.classList.remove(themes[currentThemeIndex]);
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  localStorage.setItem('currentThemeIndex', currentThemeIndex);
  body.classList.add(themes[currentThemeIndex]);
});
