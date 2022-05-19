import { questions } from './questionService.js';
import { refreshCards } from './navButton.js';

function bookmarkToggle(bookmark, index) {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('marked');
    questions[index]['isMarked'] = bookmark.classList.contains('marked');
    if (!questions[index]['isMarked']) {
      refreshCards();
    }
  });
}

export { bookmarkToggle };
