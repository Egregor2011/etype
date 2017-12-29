export const getElements = selector => Array.prototype.slice.call(selector);
export const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
