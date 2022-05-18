import { navButton, refreshCards } from './assets/javaScript/navButton.js';
import { addEventListenerToTextField } from './assets/javaScript/create.js';
import { getQuestions } from './assets/javaScript/questionService.js';

await getQuestions();

refreshCards();

/************************************************************/
const navButtons = document.querySelector('nav').querySelectorAll('button');
navButtons.forEach(navButton);

const createQuestionField = document.querySelector('#question-input');
const createQuestionLength = document.querySelector('[name="questionLength"]');
const createAnswerField = document.querySelector('#answer-input');
const createAnswerLength = document.querySelector('[name="answerLength"]');
addEventListenerToTextField(createQuestionField, createQuestionLength);
addEventListenerToTextField(createAnswerField, createAnswerLength);
