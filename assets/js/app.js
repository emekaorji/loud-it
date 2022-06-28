function loudItOnLoad() {
	LoudIt(
		'<h4>Loud-it! is another amazing notification handler</h4><p>Hope you enjoy it!</p>',
		{
			duration: 4000,
			delay: 1000,
			background: '#44B',
			opacity: 0.8,
			fontWeight: 300,
		}
	);
}

// Change Grepper button image if Grepper extension is installed - love the light-colored better
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

const playground = document.querySelector('aside');
const scrollButton = document.getElementById('scrollToPlayground');
scrollButton.addEventListener('click', () => playground.scrollIntoView());

loudItOnLoad();
