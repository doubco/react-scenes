/*
globals
Symbol
*/

export const isString = i => {
  return typeof i === "string" || i instanceof String;
};

export const isObject = i => {
  if (i === null) {
    return false;
  }
  return typeof i === "function" || typeof i === "object";
};

export const isDate = value => {
  let getDay = Date.prototype.getDay;
  let tryDateObject = function tryDateGetDayCall(value) {
    try {
      getDay.call(value);
      return true;
    } catch (e) {
      return false;
    }
  };

  let toStr = Object.prototype.toString;
  let dateClass = "[object Date]";
  let hasToStringTag =
    typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";

  if (typeof value !== "object" || value === null) {
    return false;
  }
  return hasToStringTag
    ? tryDateObject(value)
    : toStr.call(value) === dateClass;
};

export const isFunction = i => {
  return i && {}.toString.call(i) === "[object Function]";
};

export const isArray = i => {
  return Array.isArray(i);
};

export const isFloat = n => {
  return Number(n) === n && n % 1 !== 0;
};

export const isInteger = n => {
  return Number(n) === n && n % 1 === 0;
};

export const isEmpty = value => {
  if (value === null) return true;
  if (value === undefined) return true;
  if (isObject(value) && !Object.keys(value).length) return true;
  if (!value.length) return true;
};

export const isRegExp = input => {
  return Object.prototype.toString.call(input) === "[object RegExp]";
};

export default {
  string: isString,
  object: isObject,
  fn: isFunction,
  array: isArray,
  float: isFloat,
  integer: isInteger,
  regexp: isRegExp
};
