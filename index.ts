{
  let _getElements = selector => {
    return [...selector];
  };
  let elStorage: string[] = [
    'hide',
    'show',
    'toggle',
    'section',
    'link',
    'cross',
    'anchor',
  ];
  let letStorage = elStorage.map(el => {
    return {
      ['etype-' + el]: _getElements(document.querySelectorAll(`[etype-${el}]`)),
    };
  });

  const getListeners = el => {
    let _attr = _getElements(el.target.attributes).filter(_ell => {
      return _ell.name === '' + this._freeze;
    });

    let _uiElement = document.querySelector(
      '[etype-element=' + _attr[0].value + ']',
    );

    switch (this._freeze) {
      case 'etype-hide':
      case 'etype-show':
        _uiElement.style.display =
          this._freeze === 'etype-hide' ? 'none' : 'block';
        break;

      case 'etype-link':
        let _thisSection = document.querySelector(
          '[etype-section=' + _attr[0].value + ']',
        );
        letStorage['etype-section'].map(el => {
          el.style.display = 'none';
        });
        _thisSection.style.display = 'block';

        break;
      case 'etype-toggle':
        _uiElement.style.display =
          _uiElement.style.display === 'none' ? 'block' : 'none';

        break;
      case 'etype-cross':
        _uiElement.click();
        break;

      case 'etype-anchor':
        const windowView = document.body.scrollTop;
        const elementPosition = _uiElement.offsetTop;
        const timeOut = 10;
        let step = 0;
        const mainTime = 400;
        const distance = elementPosition - windowView;
        const stepPerMoment = Math.round(distance / (mainTime / timeOut));

        const anchorAnimation = () => {
          window.scrollTo(0, step);
          step = step + stepPerMoment;

          return step < elementPosition
            ? setTimeout(anchorAnimation, timeOut)
            : window.scrollTo(0, elementPosition);
        };

        anchorAnimation();

        break;
    }
  };

  const getCategories = el => {
    let _freeze = this.key;
    return el.addEventListener('click', getListeners, {_freeze});
  };

  const getCategoryList = key =>
    key !== 'etype-section' && letStorage[key].map(getCategories, {key});

  const main = () => Object.keys(letStorage).forEach(getCategoryList);

  main();
}
