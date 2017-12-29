const hideShow = data =>
  (data.uiElement.style.display = data.elementName === 'etype-hide' ? 'none' : 'block');

const anchor = data => {
  const windowView = document.body.scrollTop;
  const elementPosition = data.uiElement.offsetTop;
  const timeOut = 10;
  let step = 10;

  const anchorAnimation = () => {
    window.scrollTo(0, step);
    step = step++ ;

    return step < elementPosition
      ? setTimeout(anchorAnimation, timeOut)
      : window.scrollTo(0, elementPosition);
  };

  return anchorAnimation();
};

const cross = data => data.uiElement.click();

const toggle = data =>
  (data.uiElement.style.display = data.uiElement.style.display === 'none' ? 'block' : 'none');

const link = data => {
  //const thisSection = document.querySelector('[etype-section=' + attr[0].value + ']');
  //etypeElements['etype-section'].map(el => {
  //  el.style.display = 'none';
  //});
  //thisSection.style.display = 'block';
};

export default {
  'etype-hide': hideShow,
  'etype-show': hideShow,
  'etype-anchor': anchor,
  'etype-cross': cross,
  'etype-toggle': toggle,
};
