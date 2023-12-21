import { createItemCards } from "./cards.js";
import { addToLocalStorage } from './localStorage.js';
import { menu } from "./menu.js";
import { searchForCategoryInMenu } from "./search.js";
import { infoText } from "./text.js";

const starters = document.getElementById('starters');
const bbqs = document.getElementById('bbqs');
const drinks = document.getElementById('drinks');
const categories = document.getElementById('categories');
const confirm = document.getElementById('confirmOrder');
const heading = document.querySelector('.content__heading');
const text = document.querySelector('.content__text');
const search = document.querySelector('.search-container');
const itemWrapper = document.getElementById('item-wrapper');
const modal = document.querySelector('[data-modal]');
const toMenuBtn = document.getElementById('to-menu-btn');
const openModalBtn = document.querySelector('[data-open-modal]');
const addToCartBtn = document.createElement('button');

const handleCategoryClick = (cat) => {
	createItemCards(searchForCategoryInMenu(cat, menu));
};

export const setUpCategoriesButtons = () => {
	starters.addEventListener('click', () => handleCategoryClick('starters'));

	bbqs.addEventListener('click', () => handleCategoryClick('bbqs'));

	drinks.addEventListener('click', () => handleCategoryClick('drinks'));
};

export const setUpAddToCartButton = (item) => {
	addToCartBtn.className = 'item-container__btn';
	addToCartBtn.innerText = 'Add To Cart';

	addToCartBtn.addEventListener('click', () => {
		addToLocalStorage(item);
	});

	return addToCartBtn;
};

export const setUpConfirmOrderButton = () => {
	confirm.addEventListener('click', () => {
		heading.innerText = 'Tack för din beställning!';
		text.innerText = infoText;

		toMenuBtn.classList.remove('hidden');
		categories.classList.add('hidden');
		openModalBtn.classList.add('hidden');
		search.classList.add('hidden');
		heading.classList.remove('hidden');
		text.classList.remove('hidden');
		itemWrapper.classList.add('hidden');

		modal.close();
	});
};

export const setUpToMenuButton = () => {
	toMenuBtn.addEventListener('click', () => {
		toMenuBtn.classList.add('hidden');
		categories.classList.remove('hidden');
		openModalBtn.classList.remove('hidden');
		search.classList.remove('hidden');
		heading.classList.add('hidden');
		text.classList.add('hidden');
		itemWrapper.classList.remove('hidden');

		createItemCards(menu);
	});
};
