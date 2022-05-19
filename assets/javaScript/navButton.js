import { questions } from './questionService.js';
import { createCard } from './card.js';

export function navButton(btn) {
  btn.addEventListener('click', () => {
    document.querySelector('.page__visible').classList.remove('page__visible');
    document.querySelector('.nav__active').classList.remove('nav__active');

    switch (btn.getAttribute('data-nav-element')) {
      case 'home':
        refreshCards();
        setActivePage(
          document.querySelector('[data-page-name="home"]'),
          document.querySelector('.link-home'),
          'Quiz App'
        );
        break;
      case 'bookmark':
        refreshCards();
        setActivePage(
          document.querySelector('[data-page-name="bookmarks"]'),
          document.querySelector('.link-bookmarks'),
          'Bookmarks'
        );
        break;
      case 'create':
        setActivePage(
          document.querySelector('[data-page-name="create"]'),
          document.querySelector('.link-create'),
          'Create'
        );
        break;
      case 'profile':
        setActivePage(
          document.querySelector('[data-page-name="profile"]'),
          document.querySelector('.link-profile'),
          'Profile'
        );
        break;
    }
  });
}

function setActivePage(page, navSvg, title) {
  page.classList.add('page__visible');
  navSvg.classList.add('nav__active');
  document.querySelector('h1').innerHTML = title;
}

export function refreshCards() {
  const markedQuestionCardHolder = document.querySelector(
    '#markedQuestionCardHolder'
  );
  markedQuestionCardHolder.innerHTML = '';
  const questionCardHolder = document.querySelector('#questionCardHolder');
  questionCardHolder.innerHTML = '';

  questions.forEach((question, index) => {
    const card = createCard(question, index);
    questionCardHolder.append(card);
    if (question.isMarked) {
      const card = createCard(question, index);
      markedQuestionCardHolder.append(card);
    }
  });
}
