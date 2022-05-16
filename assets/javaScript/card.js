import { bookmarkToggle } from './bookmark.js';
import { buttonShowText } from './cardButton.js';

export function questionCards(card) {
  const bookmark = card.querySelector('.bookmark');
  bookmarkToggle(bookmark);

  const button = card.querySelector('.button');
  buttonShowText(card, button);
}

export function createCard(question) {
  const card = document.createElement('section');
  card.className = 'card';

  const bookmark = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  );
  bookmark.classList.add('bookmark');
  if (question.isMarked) {
    bookmark.classList.add('marked');
  }
  bookmark.setAttribute('viewBox', '0 0 24 24');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  bookmark.appendChild(path);
  card.appendChild(bookmark);

  const cardTitle = document.createElement('h2');
  cardTitle.innerHTML = 'Question';
  card.appendChild(cardTitle);

  const cardQuestion = document.createElement('p');
  cardQuestion.innerText = question.question;
  card.appendChild(cardQuestion);

  const buttonHolder = document.createElement('div');
  buttonHolder.className = 'flex-row justify-content-center';
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'button';
  button.innerText = 'Show Answer';
  buttonHolder.appendChild(button);
  card.appendChild(buttonHolder);

  const cardAnswer = document.createElement('p');
  cardAnswer.className = 'answer __hidden';
  cardAnswer.innerText = question.answer;
  card.appendChild(cardAnswer);

  const tagHolder = document.createElement('div');
  tagHolder.className = 'flex-row column-gap-0_8';
  question.tags.forEach(tag => {
    const tagButton = document.createElement('button');
    tagButton.type = 'button';
    tagButton.className = 'tag';
    tagButton.innerText = tag;
    tagHolder.appendChild(tagButton);
  });
  card.appendChild(tagHolder);

  return card;
}
