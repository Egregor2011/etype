import { getElements } from "./helpers";
import { elementDB } from "./etypeElements";
import setListener from "./setListener";

export default ({ target }) => {
  const elementName = elementDB.get(target);

  const attr = getElements(target.attributes).filter(({ name }) => {
    return name === `${elementName}`;
  });

  const uiElement = document.querySelector(
    "[etype-element=" + attr[0].value + "]"
  );

  setListener(elementName)({ uiElement, elementName });
};
