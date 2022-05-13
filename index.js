import { questionCards } from './assets/javaScript/card.js';
import { page } from './assets/javaScript/page.js';

const pages = document.querySelectorAll('[data-name="pages"]');
pages.forEach(page);

const cards = document.querySelectorAll('.card');
cards.forEach(questionCards);
