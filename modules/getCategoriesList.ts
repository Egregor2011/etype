import getCategories from "./getCategories";
import { keyStorage } from "./etypeElements";

export default (value, key) => {
  keyStorage.set("key", key);
  value.forEach(getCategories);
};
