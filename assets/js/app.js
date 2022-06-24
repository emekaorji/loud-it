import Loudit from './loud-it.js';

const scrollButton = document.getElementById('scrollToPlayground');
const playground = document.querySelector('aside');
const dingButton = document.querySelector('aside button');

scrollButton.addEventListener('click', () => playground.scrollIntoView());
dingButton.addEventListener('click', () =>
	Loudit('Squicky Bitbum', { backgroundColor: '#44b' })
);
