var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function() {
  if (menu.style.display == 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
});