function isObject (value) {
	return value && typeof value === 'object' && value.constructor === Object;
}

function prepareChldren(chieldren) {
	if(typeof chieldren === 'string') {
		return chieldren
	} else if (Array.isArray(chieldren)) {
		return chieldren.join('')
	}

	return ''
}

function procesStyles (stylesObject) {
	const stylesKeysObject = Object.keys(stylesObject);
	let stylesAttrbute = ' style="';
	for (let i = 0; i < stylesKeysObject.length; i++ ) {
		const stylesKey = stylesKeysObject[i];
		const stylesValue = stylesObject[stylesKey];
		stylesAttrbute = stylesAttrbute + stylesKey + ': ' + stylesValue +  '; ';
	};
	stylesAttrbute = stylesAttrbute + '"'
	return stylesAttrbute;
}

function prepareAttributes(attrbutes) {
	let result = ''
	if (isObject(attrbutes)) {
		const keys =  Object.keys(attrbutes);
		for (let i = 0; i < keys.length; i++ ) {
			const objectKey = keys[i];
			const objectValue = attrbutes[objectKey];
			if(objectKey === 'style' && isObject(objectValue) ) {

				result = result + procesStyles(objectValue);
			} else {
				result = result + ' ' + objectKey + '="' + objectValue + '"'
			}
		}
	}
	return result
}



function createElement(element, attrbutes, chieldren) {
	const elementAttrbutes = prepareAttributes(attrbutes);
	const elementChieldren = prepareChldren(chieldren);

	return '<' + element + ' ' + elementAttrbutes + '>' + elementChieldren + '</' + element + '>'
}


function render(htmlText, node) {
	node.innerHTML = htmlText
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
		React.createElement('div', { textContent: 'Text content' }),
	],
);

document.addEventListener("DOMContentLoaded", function(event) {
	React.render(app, document.getElementById('app'));
});
