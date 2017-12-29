import methods from './methods';

export default elementName => {
  const method = methods[elementName];
  return data => method(data);
};
