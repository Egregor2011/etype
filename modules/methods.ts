const hideShow = ({ uiElement, elementName }) =>
  (uiElement.style.display = elementName === "etype-hide" ? "none" : "block");

const anchor = ({ uiElement }) => {
  const windowView = document.body.scrollTop;
  const { offsetTop } = uiElement;
  const timeOut = 10;
  let step = 10;

  const anchorAnimation = () => {
    window.scrollTo(0, step);
    step = step++;

    return step < offsetTop
      ? setTimeout(anchorAnimation, timeOut)
      : window.scrollTo(0, offsetTop);
  };

  return anchorAnimation();
};

const cross = ({ uiElement }) => uiElement.click();

const toggle = ({ uiElement }) =>
  (uiElement.style.display =
    uiElement.style.display === "none" ? "block" : "none");

// TODO:
// const link = data => {
//const thisSection = document.querySelector('[etype-section=' + attr[0].value + ']');
//etypeElements['etype-section'].map(el => {
//  el.style.display = 'none';
//});
//thisSection.style.display = 'block';
// };

export default {
  "etype-hide": hideShow,
  "etype-show": hideShow,
  "etype-anchor": anchor,
  "etype-cross": cross,
  "etype-toggle": toggle
};
