import { questionCards } from './assets/javaScript/card.js';
import { navButton } from './assets/javaScript/navButton.js';

const navButtons = document.querySelector('nav').querySelectorAll('button');
navButtons.forEach(navButton);

const cards = document.querySelectorAll('.card');
cards.forEach(questionCards);
