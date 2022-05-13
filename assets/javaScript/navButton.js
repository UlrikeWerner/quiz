function navButton(btn) {
  btn.addEventListener('click', () => {
    const pages = document.querySelectorAll("[data-name='pages']");
    const navSvgs = document.querySelector('nav').querySelectorAll('svg');

    pages.forEach(page => {
      page.className = '__hidden';
    });
    navSvgs.forEach(svg => {
      svg.classList.remove('__active');
    });

    switch (btn.getAttribute('data-nav-element')) {
      case 'home':
        pages[0].classList.add('__visible');
        navSvgs[0].classList.add('__active');
        document.querySelector('h1').innerHTML = 'Quiz App';
        break;
      case 'bookmark':
        pages[1].classList.add('__visible');
        navSvgs[1].classList.add('__active');
        document.querySelector('h1').innerHTML = 'Bookmarks';
        break;
      case 'create':
        pages[2].classList.add('__visible');
        navSvgs[2].classList.add('__active');
        document.querySelector('h1').innerHTML = 'Create';
        break;
      case 'profile':
        pages[3].classList.add('__visible');
        navSvgs[3].classList.add('__active');
        document.querySelector('h1').innerHTML = 'Profile';
        break;
    }
  });
}

export { navButton };
