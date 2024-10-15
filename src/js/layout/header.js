const hamburger = document.querySelector(".hamburger--spin");
const mobileNavs = document.querySelector(".header__mobile-nav");
const mobileCLose = document.querySelector(".header__btn-close");
// const mobileitem = document.querySelectorAll(".header__mobile-nav .nav__item");


hamburger.addEventListener("click", () => {
  // hamburger.classList.toggle("is-active");
  mobileNavs.classList.toggle("is-active");
  // overlay.classList.toggle("is-active");
});

mobileCLose.addEventListener("click", () => {
  // hamburger.classList.toggle("is-active");
  mobileNavs.classList.toggle("is-active");
});

// mobileitem.addEventListener("click", () => {
//   mobileitem.classList.toggle("is-active");
// });

// добавляет is-active  в мобильное меню при клике
const elsP = document.querySelectorAll('.header__mobile-nav .nav__item');

for (let i = 0, length = elsP.length; i < length; i++) {
  elsP[i].addEventListener("click", () => {
    if (document.querySelector('.header__mobile-nav .nav__item')) {
      // const element = document.querySelector('.accordion-container > .is-active');
      elsP[i].classList.toggle("is-active");
      // const parent = element.parentNode;
      // parent.classList.toggle("hidden-satin");
    }
    // else {
    //   const parentall = document.querySelector('.accordion-container');
    //   parentall.classList.toggle("hidden-satin");
    // };
  });
}


document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.catalog-menu');
  const items = document.querySelectorAll('.catalog-menu__item');

  for (const item of items) {
    item.addEventListener('mouseover', (event) => {
      const active = menu.querySelector('.active');
      if (active) active.classList.remove('active');
      item.classList.add('active');

      const ul = item.querySelector('.catalog-menu__nav');
      const itemsli = item.querySelectorAll('.catalog-menu__nav > li');
      for (const item of itemsli) {
        item.addEventListener('mouseover', (event) => {
          const active = ul.querySelector('.active');
          if (active) active.classList.remove('active');
          item.classList.add('active');
        });
      }
    });
  }
});