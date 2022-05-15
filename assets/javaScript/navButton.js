export function navButton(btn) {
  btn.addEventListener('click', () => {
    const pages = document.querySelectorAll("[data-name='pages']");
    const navSvgs = document.querySelector('nav').querySelectorAll('svg');

    pages.forEach(page => {
      page.classList.remove('__visible');
    });
    navSvgs.forEach(svg => {
      svg.classList.remove('__active');
    });

    switch (btn.getAttribute('data-nav-element')) {
      case 'home':
        setActivePage(pages[0], navSvgs[0], 'Quiz App');
        break;
      case 'bookmark':
        setActivePage(pages[1], navSvgs[1], 'Bookmarks');
        break;
      case 'create':
        setActivePage(pages[2], navSvgs[2], 'Create');
        break;
      case 'profile':
        setActivePage(pages[3], navSvgs[3], 'Profile');
        break;
    }
  });
}

function setActivePage(page, navSvg, title) {
  page.classList.add('__visible');
  navSvg.classList.add('__active');
  document.querySelector('h1').innerHTML = title;
}
