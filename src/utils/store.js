/*globals
localStorage
*/

export const LocalStorage = {
  set: function(key, value, options) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {}
  },
  get: function(key, options) {
    try {
      return localStorage.getItem(key);
    } catch (e) {}

    return null;
  },
  remove: function(key, options) {
    try {
      localStorage.removeItem(key);
    } catch (e) {}

    return null;
  }
};

const defaultStore = "__store";

export const Store = {
  get: (key, store) => {
    let ls = LocalStorage.get(store || defaultStore);

    if (ls) return JSON.parse(ls)[key];
    return null;
  },
  set: (data, store) => {
    let ls = LocalStorage.get(store || defaultStore);
    if (!ls) ls = "{}";

    ls = JSON.parse(ls);
    Object.keys(data).forEach(key => {
      const value = data[key];
      ls[key] = value;
    });
    LocalStorage.set(store || defaultStore, JSON.stringify(ls));
  },
  remove: (key, store) => {
    let ls = LocalStorage.get(store || defaultStore);
    if (!ls) ls = "{}";

    ls = JSON.parse(ls);

    delete ls[key];

    LocalStorage.set(store || defaultStore, JSON.stringify(ls));
  },
  clean: store => {
    LocalStorage.remove(store || defaultStore);
  }
};

export default { Store, LocalStorage };
