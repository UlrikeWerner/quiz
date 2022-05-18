import { questions } from './questionService.js';

function bookmarkToggle(bookmark, index) {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('marked');
    questions[index]['isMarked'] = bookmark.classList.contains('marked');
  });
}

export { bookmarkToggle };
