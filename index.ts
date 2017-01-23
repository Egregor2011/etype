
{
	let _getElements = (selector) => {
		return [].slice.call(selector);
	};
	let _elStorage: string[] = ['etype-hide', 'etype-show', 'etype-toggle', 'etype-section', 'etype-link', 'etype-cross'];
	let _letStorage = {};

	_elStorage.map((el) => {
		_letStorage[el] = _getElements(document.querySelectorAll(`[${el}]`));
	});

	Object.keys(_letStorage).map((key) => {
		if (key !== 'etype-section') {

			_letStorage[key].map((el) => {
				let _freeze = key;

				el.addEventListener('click', function (el) {

					let _attr = _getElements(el.target.attributes).filter((_ell) => {
						return _ell.name === '' + _freeze;
					});

					let _uiElement = document.querySelector('[etype-element=' + _attr[0].value + ']');

					switch (_freeze) {
						case 'etype-hide':
						case 'etype-show':

							_uiElement.style.display = _freeze === 'etype-hide' ? 'none' : 'block';
							break;

						case 'etype-link':

							let _thisSection = document.querySelector('[etype-section=' + _attr[0].value + ']');
							_letStorage['etype-section'].map((el) => {
								el.style.display = 'none';
							});
							_thisSection.style.display = 'block';

							break;
						case 'etype-toggle':

							_uiElement.style.display = _uiElement.style.display === 'none' ? 'block' : 'none';

							break;
						case 'etype-cross':
							_uiElement.click();
							break;
					}
				});
			});
		}

	});
};
