import { bookmarkToggle } from './bookmark.js';
import { buttonShowText } from './cardButton.js';

function questionCards(card) {
  const bookmark = card.querySelector('.bookmark');
  bookmarkToggle(bookmark);

  const button = card.querySelector('.button');
  buttonShowText(card, button);
}

export { questionCards };
