import { questionCards } from './assets/javaScript/card.js';
import { navButton } from './assets/javaScript/navButton.js';

const nav = document.querySelector('nav');
const navButtons = nav.querySelectorAll('button');
navButtons.forEach(navButton);

const cards = document.querySelectorAll('.card');
cards.forEach(questionCards);
