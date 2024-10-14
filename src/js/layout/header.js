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