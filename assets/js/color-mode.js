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

// function setColorMode(mode); is defined in 'color-mode.preload.js'

colorModeButton.addEventListener('click', function () {
	currentColorMode = localStorage.getItem('loudItColorMode');
	if (currentColorMode === 'light') {
		setColorMode('dark');
	} else {
		setColorMode('light');
	}
});
