import setListeners from "./setListeners";
import { keyStorage, elementDB } from "./etypeElements";

export default el => {
  const key = keyStorage.get("key");
  elementDB.set(el, key);
  el.addEventListener("click", setListeners);
};
