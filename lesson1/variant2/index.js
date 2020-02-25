function isObject (value) {
	return value && typeof value === 'object' && value.constructor === Object;
}

function asignChieldren (element, chieldren) {
	if (chieldren instanceof HTMLElement) {
		element.appendChild(chieldren)
	} else if (typeof chieldren === "string") {
		const textNode = document.createTextNode(chieldren);
		element.appendChild(textNode);
	}
}


function createElement(element, attrbutes, chieldren) {
	const newElement = document.createElement(element);

	if (chieldren && Array.isArray(chieldren)) {
		for (let i = 0; i < chieldren.length; i++) {
			asignChieldren(newElement, chieldren[i])
		}
	} else if (chieldren) {
		asignChieldren(newElement, chieldren)
	}

	if (isObject(attrbutes)) {
		for ( let [key, value] of Object.entries(attrbutes)) {
			newElement.setAttribute(key, value)
		}
	}

	return newElement;
}

function render(node, targetNode) {
	targetNode.appendChild(node);
}

const React = {
	createElement,
	render,
};

const app = React.createElement(
	'div',
	{ style: { 'background-color': 'red' } },
	[
		React.createElement('span', undefined, 'Hello world'),
		React.createElement('br'),
		'This is just a text node',
		React.createElement('div', { 'text-content': 'Text content' }),
	],
);

document.addEventListener("DOMContentLoaded", function(event) {
	React.render(app, document.getElementById('app'));
});