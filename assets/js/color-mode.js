var isScrolling;
const colorModeButton = document.getElementById('colorModeButton');

colorModeButton.addEventListener('focus', function () {
	colorModeButton.style.transition = 'all 300ms ease';
	colorModeButton.style.opacity = 1;
});
colorModeButton.addEventListener('blur', function () {
	colorModeButton.style.transition = 'all 2s ease, outline 500ms ease';
	colorModeButton.style.opacity = 0.1;
});
colorModeButton.addEventListener('mouseover', function () {
	colorModeButton.style.transition = 'all 300ms ease';
	colorModeButton.style.opacity = 1;
});
colorModeButton.addEventListener('mouseout', function () {
	colorModeButton.style.transition = 'all 2s ease, outline 500ms ease';
	if (document.activeElement !== colorModeButton) {
		colorModeButton.style.opacity = 0.1;
	}
});

window.addEventListener(
	'scroll',
	function () {
		clearTimeout(isScrolling);
		colorModeButton.style.transition = 'all 500ms ease';
		colorModeButton.style.opacity = 0.8;

		isScrolling = setTimeout(function () {
			colorModeButton.style.transition = 'all 2s ease, outline 500ms ease';
			colorModeButton.style.opacity = 0.1;
		}, 1000);
	},
	false
);

function setColorMode(mode) {
	localStorage.setItem('loudItColorMode', mode);
	document.body.className = '';
	document.body.classList.add(`${mode}-mode`);
}

currentColorMode = localStorage.getItem('loudItColorMode');
if (currentColorMode === null) {
	setColorMode('light');
} else {
	setColorMode(currentColorMode);
}

colorModeButton.addEventListener('click', function () {
	currentColorMode = localStorage.getItem('loudItColorMode');
	if (currentColorMode === 'light') {
		setColorMode('dark');
	} else {
		setColorMode('light');
	}
});
