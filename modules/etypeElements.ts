import { getElements, capitalize } from './helpers';

const methodList = ['hide', 'show', 'toggle', 'section', 'link', 'cross', 'anchor'];

export const etypeElements = new Map();

export const keyStorage = new Map();

export const elementDB = new Map();

methodList.map(el => {
  const elements = getElements(document.querySelectorAll(`[etype-${el}]`));
  return elements.length && etypeElements.set(`etype-${el}`, elements);
});
