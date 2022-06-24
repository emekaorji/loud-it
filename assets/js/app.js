// import Ding from './ding.js';

const scrollButton = document.getElementById('scrollToPlayground');
const playground = document.querySelector('aside');
const dingButton = document.querySelector('aside button');

scrollButton.addEventListener('click', () => playground.scrollIntoView());
dingButton.addEventListener('click', () =>
	Ding('Squicky Bitbum', { backgroundColor: '#44b' })
);
