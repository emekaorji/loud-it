function loudItOnLoad() {
	LoudIt('HI!', {
		duration: 3000,
		backgroundColor: '#44B',
		opacity: 0.8,
	});
	LoudIt(
		'<h4>Loud-it! is another amazing notification handler</h4><p>Hope you enjoy it!</p>',
		{
			duration: 5000,
			delay: 2900,
			backgroundColor: '#44B',
			opacity: 0.8,
			fontWeight: 300,
		}
	);
}

// Change Grepper button image if Grepper extension is installed
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

loudItOnLoad();
hanldeRowExpansion();
