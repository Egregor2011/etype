import { getElements } from './helpers';
import { elementDB } from './etypeElements';
import setListener from './setListener';

export default el => {
  const elementName = elementDB.get(el.target);

  const attr = getElements(el.target.attributes).filter(attribute => {
    return attribute.name === `${elementName}`;
  });

  const uiElement = document.querySelector('[etype-element=' + attr[0].value + ']');

  setListener(elementName)({ uiElement, elementName });
};
