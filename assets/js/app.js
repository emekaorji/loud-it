// import LoudIt from './loud-it.js';
// import LoudIt from 'https://cdn.jsdelivr.net/gh/EmekaOrji/loud-it@master/assets/js/loud-it.min.js';

const scrollButton = document.getElementById('scrollToPlayground');
const playground = document.querySelector('aside');
const dingButton = document.querySelector('aside button');

scrollButton.addEventListener('click', () => playground.scrollIntoView());
dingButton.addEventListener('click', () =>
	LoudIt('Squicky Bitbum', { backgroundColor: '#44b' })
);

setTimeout(() => {
	addStyle(`
	  pre div.open_grepper_editor {
	    background-image: url(./assets/icons/grepper.jpg) !important;
      border-bottom-left-radius: .4em !important;
	  }
	`);
}, 500);

function addStyle(styleString) {
	const style = document.createElement('style');
	style.textContent = styleString;
	document.head.append(style);
}
