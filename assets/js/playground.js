import LoudIt from '../library/module/loud-it.module.js';

const dingButton = document.querySelector('aside button');
const playgroundCode = document.getElementById('jsPlayground');

function hanldeRowExpansion() {
	const rows = document.querySelectorAll('tbody tr');
	rows.forEach((row) => {
		row.addEventListener('focus', () => {
			row.querySelectorAll('p').forEach((p) => {
				p.style.height = p.scrollHeight + 'px';
			});
		});
		row.addEventListener('blur', () => {
			row.querySelectorAll('p').forEach((p) => {
				p.style.height = '0px';
			});
		});
	});
}

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
		background: 'error',
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

hanldeRowExpansion();
playgroundCode.addEventListener('keydown', formatEditor);
dingButton.addEventListener('mousedown', evaluateScript);
dingButton.addEventListener('mouseup', removeErrorHandler);
