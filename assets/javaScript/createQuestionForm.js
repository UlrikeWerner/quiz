import { addQuestion } from './questionService.js';
import { createCard } from './card.js';

const form = document.querySelector('form');
const cardHolder = document.querySelector('#createdQuestionCardHolder');

form.addEventListener('submit', event => {
  event.preventDefault();

  const questionElement = form.elements.question;
  const answerElement = form.elements.answer;
  const difficultyElement = form.elements.difficulty;
  const tagsElement = form.elements.tags;

  const newCard = {
    isMarked: false,
    question: questionElement.value,
    answer: answerElement.value,
    difficulty: difficultyElement.value,
    tags: tagsElement.value
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length),
  };
  addQuestion(newCard);

  cardHolder.innerHTML = '';
  cardHolder.append(createCard(newCard));

  form.reset();
  questionElement.focus();
});
