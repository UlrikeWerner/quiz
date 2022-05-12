const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const bookmark = card.querySelector('.bookmark');
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('marked');
  });

  const button = card.querySelector('.button');
  const answer = card.querySelector('.answer');
  button.addEventListener('click', () => {
    answer.classList.toggle('__hidden');
    if (button.textContent === 'Show Answer') {
      button.textContent = 'Hide Answer';
    } else {
      button.textContent = 'Show Answer';
    }
  });
});
