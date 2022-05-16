import { questionCards } from './assets/javaScript/card.js';
import { navButton } from './assets/javaScript/navButton.js';
import { addEventListenerToTextField } from './assets/javaScript/create.js';

const navButtons = document.querySelector('nav').querySelectorAll('button');
navButtons.forEach(navButton);

const cards = document.querySelectorAll('.card');
cards.forEach(questionCards);

const createQuestionField = document.querySelector('#question-input');
const createQuestionLength = document.querySelector('[name="questionLength"]');
const createAnswerField = document.querySelector('#answer-input');
const createAnswerLength = document.querySelector('[name="answerLength"]');
addEventListenerToTextField(createQuestionField, createQuestionLength);
addEventListenerToTextField(createAnswerField, createAnswerLength);
