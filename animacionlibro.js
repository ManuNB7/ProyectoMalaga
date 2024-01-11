
document.addEventListener('DOMContentLoaded', function() {
  let lastScrollPosition = 0;
  const header = document.querySelector('.header');

  window.addEventListener('scroll', function() {
    lastScrollPosition = window.scrollY;

      if (100 < lastScrollPosition) {
          
          header.classList.add('hide');
      } else {
          
          header.classList.remove('hide');
      }

      lastScrollPosition = 100;
      document.querySelector(".header").onmouseover = function() {
        document.querySelector(".header").style.top = "0";
        header.classList.remove('hide');
        header.classList.add('reveal');
      }
  });
});


