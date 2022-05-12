function buttonShowText(card, button) {
  button.addEventListener('click', () => {
    const answer = card.querySelector('.answer');
    answer.classList.toggle('__hidden');
    toggleText(button);
  });
}

function toggleText(button) {
  if (button.textContent === 'Show Answer') {
    button.textContent = 'Hide Answer';
  } else {
    button.textContent = 'Show Answer';
  }
}

export { buttonShowText };
