function setColorMode(mode) {
	localStorage.setItem('loudItColorMode', mode);
	document.querySelector('html').className = '';
	document.querySelector('html').classList.add(`${mode}-mode`);
}

currentColorMode = localStorage.getItem('loudItColorMode');
if (currentColorMode === null) {
	setColorMode('light');
} else {
	setColorMode(currentColorMode);
}
