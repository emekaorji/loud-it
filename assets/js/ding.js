window.Ding = function Ding(
	message,
	{
		element = 'body',
		duration = 3000,
		speed = 500,
		mouseEffects = false,

		backgroundColor = '#003663',
		opacity = 0.5,
		color = '#ffffff',
		fontSize = 'min(1.5em, 6vw)',
		fontWeight = 700,
		top = '11vh',
		left = 'auto',
		right = '1em',
		borderRadius = '0.7em',
		zIndex = 999999999999,
	} = {}
) {
	const alertMessage = document.createElement('div');

	alertMessage.classList.add('alert__message');
	alertMessage.setAttribute('aria-hidden', 'true');
	alertMessage.innerHTML = message;
	alertMessage.style.width = 'min(500px, 80vw)';
	alertMessage.style.backgroundColor =
		backgroundColor === 'success'
			? '#0d8a0d'
			: backgroundColor === 'error'
			? '#fb1717'
			: backgroundColor === 'warning'
			? '#bebe19'
			: backgroundColor === 'info'
			? '#003663'
			: backgroundColor;
	alertMessage.style.opacity = opacity;
	alertMessage.style.color = color;
	alertMessage.style.fontSize = fontSize;
	alertMessage.style.fontWeight = fontWeight;
	alertMessage.style.position = element === 'body' ? 'fixed' : 'absolute';
	alertMessage.style.top = `-${top}`;
	alertMessage.style.left = left;
	alertMessage.style.right = right;
	alertMessage.style.padding = '1em';
	alertMessage.style.borderRadius = borderRadius;
	alertMessage.style.transition = `all ${speed}ms cubic-bezier(0,1,.39,1.33)`;
	alertMessage.style.zIndex = zIndex;
	alertMessage.style.userSelect = !mouseEffects && 'none';
	alertMessage.style.pointerEvents = !mouseEffects && 'none';

	const container = document.querySelector(element);
	const previousPositionValue = container.style.getPropertyValue('position');
	container.style.position = 'relative';
	container.prepend(alertMessage);

	setTimeout(() => {
		alertMessage.style.top = top;
	}, 10);

	setTimeout(() => {
		alertMessage.style.top = `-${top}`;
		alertMessage.style.opacity = 0;
		setTimeout(() => {
			alertMessage.parentNode.removeChild(alertMessage);
			previousPositionValue
				? container.style.setProperty('position', previousPositionValue)
				: container.style.removeProperty('position');
		}, 500);
	}, duration + 10);
};

export default Ding;
