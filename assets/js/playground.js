// import LoudIt from './loud-it.js'; OR
// import LoudIt from './loud-it.min.js'; OR
// import LoudIt from 'https://cdn.jsdelivr.net/gh/EmekaOrji/loud-it@master/assets/js/loud-it.js'; OR
// import LoudIt from 'https://cdn.jsdelivr.net/gh/EmekaOrji/loud-it@master/assets/js/loud-it.min.js';

const scrollButton = document.getElementById('scrollToPlayground');
const playground = document.querySelector('aside');
const dingButton = document.querySelector('aside button');
const playgroundCode = document.getElementById('jsPlayground');

function formatEditor(event) {
	if (event.key === 'Enter') {
		event.preventDefault();
		const element = document.activeElement;
		const [start, end] = [element.selectionStart, element.selectionEnd];
		element.setRangeText('\n  ', start, end, 'end');
	} else if (event.ctrlKey && event.key === 's') {
		event.preventDefault();
		evaluateScript();
	}
}

function handleErrors(event) {
	LoudIt(`${event.message} on line ${event.lineno}:${event.colno}`, {
		backgroundColor: 'error',
		duration: 5000,
	});
}

function evaluateScript() {
	window.addEventListener('error', handleErrors);
	eval(playgroundCode.value);
}

function removeErrorHandler() {
	window.removeEventListener('error', handleErrors);
}

scrollButton.addEventListener('click', () => playground.scrollIntoView());
playgroundCode.addEventListener('keydown', formatEditor);
dingButton.addEventListener('mousedown', evaluateScript);
dingButton.addEventListener('mouseup', removeErrorHandler);
