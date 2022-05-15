import { questionCards } from './assets/javaScript/card.js';
import { navButton } from './assets/javaScript/navButton.js';
import { addQuestionEventListener } from './assets/javaScript/create.js';

const navButtons = document.querySelector('nav').querySelectorAll('button');
navButtons.forEach(navButton);

const cards = document.querySelectorAll('.card');
cards.forEach(questionCards);

const createQuestionField = document.querySelector('#question-input');
const createQuestionLength = document.querySelector('.question-length');
addQuestionEventListener(createQuestionField, createQuestionLength);
