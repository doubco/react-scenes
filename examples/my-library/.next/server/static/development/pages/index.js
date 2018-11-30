module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../lib/index.js":
/*!************************************************************!*\
  !*** /Users/berkaey/Development/react-scenes/lib/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = __webpack_require__(/*! styled-components */ "styled-components");
var styled__default = _interopDefault(styled);
var styledReset = __webpack_require__(/*! styled-reset */ "styled-reset");
var React = __webpack_require__(/*! react */ "react");
var React__default = _interopDefault(React);
var Draggable = __webpack_require__(/*! react-draggable */ "react-draggable");
var Draggable__default = _interopDefault(Draggable);
var marked = _interopDefault(__webpack_require__(/*! marked */ "marked"));
var copy = _interopDefault(__webpack_require__(/*! clipboard-copy */ "clipboard-copy"));
var SyntaxHighlighter = __webpack_require__(/*! react-syntax-highlighter/prism-light */ "react-syntax-highlighter/prism-light");
var SyntaxHighlighter__default = _interopDefault(SyntaxHighlighter);
var jsx = _interopDefault(__webpack_require__(/*! react-syntax-highlighter/languages/prism/jsx */ "react-syntax-highlighter/languages/prism/jsx"));
var highlighterStyle = _interopDefault(__webpack_require__(/*! react-syntax-highlighter/styles/prism/coy */ "react-syntax-highlighter/styles/prism/coy"));
var json = _interopDefault(__webpack_require__(/*! react-syntax-highlighter/languages/prism/json */ "react-syntax-highlighter/languages/prism/json"));
var reactDom = __webpack_require__(/*! react-dom */ "react-dom");
var reactColor = __webpack_require__(/*! react-color */ "react-color");

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/*globals
localStorage
*/
var LocalStorage = {
  set: function set(key, value, options) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {}
  },
  get: function get(key, options) {
    try {
      return localStorage.getItem(key);
    } catch (e) {}

    return null;
  },
  remove: function remove(key, options) {
    try {
      localStorage.removeItem(key);
    } catch (e) {}

    return null;
  }
};
var defaultStore = "__store";
var Store = {
  get: function get(key, store) {
    var ls = LocalStorage.get(store || defaultStore);
    if (ls) return JSON.parse(ls)[key];
    return null;
  },
  set: function set(data, store) {
    var ls = LocalStorage.get(store || defaultStore);
    if (!ls) ls = "{}";
    ls = JSON.parse(ls);
    Object.keys(data).forEach(function (key) {
      var value = data[key];
      ls[key] = value;
    });
    LocalStorage.set(store || defaultStore, JSON.stringify(ls));
  },
  remove: function remove(key, store) {
    var ls = LocalStorage.get(store || defaultStore);
    if (!ls) ls = "{}";
    ls = JSON.parse(ls);
    delete ls[key];
    LocalStorage.set(store || defaultStore, JSON.stringify(ls));
  },
  clean: function clean(store) {
    LocalStorage.remove(store || defaultStore);
  }
};

var slugify = (function (text, delimiter, separators) {
  var _sanitizer;

  var i = separators && separators.length,
      slug = text,
      delimiter = delimiter || "-",
      regexEscape = new RegExp(/[[\/\\^$*+?.()|{}\]]/g),
      regexDelimiter = delimiter.replace(regexEscape, "\\$&"),
      prohibited = new RegExp("([^a-z0-9" + regexDelimiter + "])", "g"),
      consecutive = new RegExp("(" + regexDelimiter + "+)", "g"),
      trim = new RegExp("^" + regexDelimiter + "*(.*?)" + regexDelimiter + "*$"),
      sanitizer = (_sanitizer = {
    // common latin
    á: "a",
    à: "a",
    â: "a",
    ä: "a",
    ã: "a",
    æ: "ae",
    ç: "c",
    é: "e",
    è: "e",
    ê: "e",
    ë: "e",
    ẽ: "e",
    í: "i",
    ì: "i",
    î: "i",
    ï: "i",
    ĩ: "i",
    ó: "o",
    ò: "o",
    ô: "o",
    ö: "o",
    õ: "o",
    œ: "oe",
    ß: "ss",
    ú: "u",
    ù: "u",
    û: "u",
    ü: "u",
    ũ: "u",
    // other diacritics
    ă: "a",
    ắ: "a",
    ằ: "a",
    ẵ: "a",
    ẳ: "a",
    ấ: "a",
    ầ: "a",
    ẫ: "a",
    ẩ: "a",
    ǎ: "a",
    å: "a",
    ǻ: "a",
    ǟ: "a",
    ȧ: "a",
    ǡ: "a",
    ą: "a",
    ā: "a",
    ả: "a",
    ȁ: "a",
    ȃ: "a",
    ạ: "a",
    ặ: "a",
    ậ: "a",
    ḁ: "a",
    ⱥ: "a",
    ᶏ: "a",
    ɐ: "a",
    ɑ: "a",
    ḃ: "b",
    ḅ: "b",
    ḇ: "b",
    ƀ: "b",
    ɓ: "b",
    ƃ: "b",
    ᵬ: "b",
    ᶀ: "b",
    þ: "b",
    ć: "c",
    ĉ: "c",
    č: "c",
    ċ: "c",
    ḉ: "c",
    ȼ: "c",
    ƈ: "c",
    ɕ: "c",
    ď: "d",
    ḋ: "d",
    ḑ: "d",
    ḍ: "d",
    ḓ: "d",
    ḏ: "d",
    đ: "d",
    ɖ: "d",
    ɗ: "d",
    ƌ: "d",
    ᵭ: "d",
    ᶁ: "d",
    ᶑ: "d",
    ȡ: "d",
    "∂": "d",
    ĕ: "e",
    ế: "e",
    ề: "e",
    ễ: "e",
    ể: "e",
    ě: "e",
    ė: "e",
    ȩ: "e",
    ḝ: "e",
    ę: "e",
    ē: "e",
    ḗ: "e",
    ḕ: "e",
    ẻ: "e",
    ȅ: "e",
    ȇ: "e",
    ẹ: "e",
    ệ: "e",
    ḙ: "e",
    ḛ: "e",
    ɇ: "e",
    ᶒ: "e",
    ḟ: "f",
    ƒ: "f",
    ᵮ: "f",
    ᶂ: "f",
    ǵ: "g",
    ğ: "g",
    ĝ: "g",
    ǧ: "g",
    ġ: "g",
    ģ: "g",
    ḡ: "g",
    ǥ: "g",
    ɠ: "g",
    ᶃ: "g",
    ĥ: "h",
    ȟ: "h",
    ḧ: "h",
    ḣ: "h",
    ḩ: "h",
    ḥ: "h",
    ḫ: "h",
    ẖ: "h",
    ħ: "h",
    ⱨ: "h",
    ĭ: "i",
    ǐ: "i",
    ḯ: "i",
    į: "i",
    ī: "i",
    ỉ: "i",
    ȉ: "i",
    ȋ: "i",
    ị: "i",
    ḭ: "i",
    ɨ: "i",
    ᵻ: "i",
    ᶖ: "i",
    i: "i",
    ı: "i",
    ĵ: "j",
    ɉ: "j",
    ǰ: "j",
    ȷ: "j",
    ʝ: "j",
    ɟ: "j",
    ʄ: "j",
    ḱ: "k",
    ǩ: "k",
    ķ: "k",
    ḳ: "k",
    ḵ: "k",
    ƙ: "k",
    ⱪ: "k",
    ᶄ: "k",
    ĺ: "l",
    ľ: "l",
    ļ: "l",
    ḷ: "l",
    ḹ: "l",
    ḽ: "l",
    ḻ: "l",
    ł: "l",
    ŀ: "l",
    ƚ: "l",
    ⱡ: "l",
    ɫ: "l",
    ɬ: "l",
    ᶅ: "l",
    ɭ: "l",
    ȴ: "l",
    ḿ: "m",
    ṁ: "m",
    ṃ: "m",
    ᵯ: "m",
    ᶆ: "m",
    ɱ: "m",
    ń: "n",
    ǹ: "n",
    ň: "n",
    ñ: "n",
    ṅ: "n",
    ņ: "n",
    ṇ: "n",
    ṋ: "n",
    ṉ: "n",
    n̈: "n",
    ɲ: "n",
    ƞ: "n",
    ŋ: "n",
    ᵰ: "n",
    ᶇ: "n",
    ɳ: "n",
    ȵ: "n",
    ŏ: "o",
    ố: "o",
    ồ: "o",
    ỗ: "o",
    ổ: "o",
    ǒ: "o",
    ȫ: "o",
    ő: "o",
    ṍ: "o",
    ṏ: "o",
    ȭ: "o",
    ȯ: "o",
    "͘o͘": "o",
    ȱ: "o",
    ø: "o",
    ǿ: "o",
    ǫ: "o",
    ǭ: "o",
    ō: "o",
    ṓ: "o",
    ṑ: "o",
    ỏ: "o",
    ȍ: "o",
    ȏ: "o",
    ơ: "o",
    ớ: "o",
    ờ: "o",
    ỡ: "o",
    ở: "o",
    ợ: "o",
    ọ: "o",
    ộ: "o",
    ɵ: "o",
    ɔ: "o",
    ṕ: "p",
    ṗ: "p",
    ᵽ: "p",
    ƥ: "p",
    p̃: "p",
    ᵱ: "p",
    ᶈ: "p",
    ɋ: "q",
    ƣ: "q",
    ʠ: "q",
    ŕ: "r",
    ř: "r",
    ṙ: "r",
    ŗ: "r",
    ȑ: "r",
    ȓ: "r",
    ṛ: "r",
    ṝ: "r",
    ṟ: "r",
    ɍ: "r",
    ɽ: "r",
    ᵲ: "r",
    ᶉ: "r",
    ɼ: "r",
    ɾ: "r",
    ᵳ: "r",
    ś: "s",
    ṥ: "s",
    ŝ: "s",
    š: "s",
    ṧ: "s",
    ṡẛ: "s",
    ş: "s",
    ṣ: "s",
    ṩ: "s",
    ș: "s",
    s̩: "s",
    ᵴ: "s",
    ᶊ: "s",
    ʂ: "s",
    ȿ: "s",
    г: "s",
    ť: "t",
    ṫ: "t",
    ţ: "t",
    ṭ: "t",
    ț: "t",
    ṱ: "t",
    ṯ: "t",
    ŧ: "t",
    ⱦ: "t",
    ƭ: "t",
    ʈ: "t",
    "̈ẗ": "t",
    ᵵ: "t",
    ƫ: "t",
    ȶ: "t",
    ŭ: "u",
    ǔ: "u",
    ů: "u",
    ǘ: "u",
    ǜ: "u",
    ǚ: "u",
    ǖ: "u",
    ű: "u",
    ṹ: "u",
    ų: "u",
    ū: "u",
    ṻ: "u",
    ủ: "u",
    ȕ: "u",
    ȗ: "u",
    ư: "u",
    ứ: "u",
    ừ: "u",
    ữ: "u",
    ử: "u",
    ự: "u",
    ụ: "u",
    ṳ: "u",
    ṷ: "u",
    ṵ: "u",
    ʉ: "u",
    ᵾ: "u",
    ᶙ: "u",
    ṽ: "v",
    ṿ: "v",
    ʋ: "v",
    ᶌ: "v",
    ⱴ: "v",
    ẃ: "w",
    ẁ: "w",
    ŵ: "w",
    ẅ: "w",
    ẇ: "w",
    ẉ: "w",
    ẘ: "w",
    ẍ: "x",
    ẋ: "x",
    ᶍ: "x",
    ý: "y",
    ỳ: "y",
    ŷ: "y",
    ẙ: "y",
    ÿ: "y",
    ỹ: "y",
    ẏ: "y",
    ȳ: "y",
    ỷ: "y",
    ỵ: "y",
    ɏ: "y",
    ƴ: "y",
    ʏ: "y",
    ź: "z",
    ẑ: "z",
    ž: "z",
    ż: "z",
    ẓ: "z",
    ẕ: "z",
    ƶ: "z",
    ȥ: "z",
    ⱬ: "z",
    ᵶ: "z",
    ᶎ: "z",
    ʐ: "z",
    ʑ: "z",
    ɀ: "z",
    // greek
    α: "a",
    β: "b",
    γ: "g",
    ɣ: "g",
    δ: "d",
    ð: "d",
    ε: "e",
    ζ: "z",
    η: "i",
    θ: "th",
    ι: "i",
    κ: "k",
    λ: "l",
    μ: "m",
    µ: "m",
    ν: "n",
    ξ: "x",
    ο: "o",
    π: "p",
    ρ: "r",
    σ: "s",
    ς: "s",
    τ: "t",
    υ: "u",
    // official rule: if preceeded by 'α' OR 'ε' => 'v', by 'ο' => 'u', else => 'i'
    φ: "f",
    χ: "ch",
    ψ: "ps",
    ω: "o",
    // greek diacritics
    ᾳ: "a",
    ά: "a",
    ὰ: "a",
    ᾴ: "a",
    ᾲ: "a",
    ᾶ: "a",
    ᾷ: "a",
    ἀ: "a",
    ᾀ: "a",
    ἄ: "a",
    ᾄ: "a",
    ἂ: "a",
    ᾂ: "a",
    ἆ: "a",
    ᾆ: "a",
    ἁ: "a",
    ᾁ: "a",
    ἅ: "a",
    ᾅ: "a",
    ἃ: "a",
    ᾃ: "a",
    ἇ: "a",
    ᾇ: "a",
    ᾱ: "a",
    ᾰ: "a",
    έ: "e",
    ὲ: "e",
    ἐ: "e",
    ἔ: "e",
    ἒ: "e",
    ἑ: "e",
    ἕ: "e",
    ἓ: "e",
    ῃ: "i",
    ή: "i",
    ὴ: "i",
    ῄ: "i",
    ῂ: "i",
    ῆ: "i",
    ῇ: "i",
    ἠ: "i",
    ᾐ: "i",
    ἤ: "i",
    ᾔ: "i",
    ἢ: "i",
    ᾒ: "i",
    ἦ: "i",
    ᾖ: "i",
    ἡ: "i",
    ᾑ: "i",
    ἥ: "i",
    ᾕ: "i",
    ἣ: "i",
    ᾓ: "i",
    ἧ: "i",
    ᾗ: "i",
    ί: "i",
    ὶ: "i",
    ῖ: "i",
    ἰ: "i",
    ἴ: "i",
    ἲ: "i",
    ἶ: "i",
    ἱ: "i",
    ἵ: "i",
    ἳ: "i",
    ἷ: "i",
    ϊ: "i",
    ΐ: "i",
    ῒ: "i",
    ῗ: "i",
    ῑ: "i",
    ῐ: "i",
    ό: "o",
    ὸ: "o",
    ὀ: "o",
    ὄ: "o",
    ὂ: "o",
    ὁ: "o",
    ὅ: "o",
    ὃ: "o",
    ύ: "u",
    ὺ: "u",
    ῦ: "u",
    ὐ: "u",
    ὔ: "u",
    ὒ: "u",
    ὖ: "u",
    ὑ: "u",
    ὕ: "u",
    ὓ: "u",
    ὗ: "u",
    ϋ: "u",
    ΰ: "u",
    ῢ: "u",
    ῧ: "u",
    ῡ: "u",
    ῠ: "u",
    ῳ: "o",
    ώ: "o",
    ῴ: "o",
    ὼ: "o",
    ῲ: "o",
    ῶ: "o",
    ῷ: "o",
    ὠ: "o",
    ᾠ: "o",
    ὤ: "o",
    ᾤ: "o",
    ὢ: "o",
    ᾢ: "o",
    ὦ: "o",
    ᾦ: "o",
    ὡ: "o",
    ᾡ: "o",
    ὥ: "o",
    ᾥ: "o",
    ὣ: "o",
    ᾣ: "o",
    ὧ: "o",
    ᾧ: "o",
    ῤ: "r",
    ῥ: "r",
    // cyrillic (russian)
    а: "a",
    б: "b",
    в: "v"
  }, _defineProperty(_sanitizer, "\u0433", "g"), _defineProperty(_sanitizer, "\u0434", "d"), _defineProperty(_sanitizer, "\u0435", "e"), _defineProperty(_sanitizer, "\u0451", "e"), _defineProperty(_sanitizer, "\u0436", "zh"), _defineProperty(_sanitizer, "\u0437", "z"), _defineProperty(_sanitizer, "\u0438", "i"), _defineProperty(_sanitizer, "\u0439", "j"), _defineProperty(_sanitizer, "\u043A", "k"), _defineProperty(_sanitizer, "\u043B", "l"), _defineProperty(_sanitizer, "\u043C", "m"), _defineProperty(_sanitizer, "\u043D", "n"), _defineProperty(_sanitizer, "\u043E", "o"), _defineProperty(_sanitizer, "\u043F", "p"), _defineProperty(_sanitizer, "\u0440", "r"), _defineProperty(_sanitizer, "\u0441", "s"), _defineProperty(_sanitizer, "\u0442", "t"), _defineProperty(_sanitizer, "\u0443", "u"), _defineProperty(_sanitizer, "\u0444", "f"), _defineProperty(_sanitizer, "\u0445", "h"), _defineProperty(_sanitizer, "\u0446", "ts"), _defineProperty(_sanitizer, "\u0447", "ch"), _defineProperty(_sanitizer, "\u0448", "sh"), _defineProperty(_sanitizer, "\u0449", "sh"), _defineProperty(_sanitizer, "\u044A", ""), _defineProperty(_sanitizer, "\u044B", "i"), _defineProperty(_sanitizer, "\u044C", ""), _defineProperty(_sanitizer, "\u044D", "e"), _defineProperty(_sanitizer, "\u044E", "yu"), _defineProperty(_sanitizer, "\u044F", "ya"), _defineProperty(_sanitizer, "\u0456", "j"), _defineProperty(_sanitizer, "\u0473", "f"), _defineProperty(_sanitizer, "\u0463", "e"), _defineProperty(_sanitizer, "\u0475", "i"), _defineProperty(_sanitizer, "\u0455", "z"), _defineProperty(_sanitizer, "\u046F", "ks"), _defineProperty(_sanitizer, "\u0471", "ps"), _defineProperty(_sanitizer, "\u0461", "o"), _defineProperty(_sanitizer, "\u046B", "yu"), _defineProperty(_sanitizer, "\u0467", "ya"), _defineProperty(_sanitizer, "\u046D", "yu"), _defineProperty(_sanitizer, "\u0469", "ya"), _defineProperty(_sanitizer, "–", delimiter), _defineProperty(_sanitizer, "—", delimiter), _defineProperty(_sanitizer, "―", delimiter), _defineProperty(_sanitizer, "~", delimiter), _defineProperty(_sanitizer, "/", delimiter), _defineProperty(_sanitizer, "\\", delimiter), _defineProperty(_sanitizer, "|", delimiter), _defineProperty(_sanitizer, "+", delimiter), _defineProperty(_sanitizer, "‘", delimiter), _defineProperty(_sanitizer, "’", delimiter), _defineProperty(_sanitizer, "'", delimiter), _defineProperty(_sanitizer, " ", delimiter), _defineProperty(_sanitizer, "-", "-"), _defineProperty(_sanitizer, "_", "_"), _sanitizer); // add any user-defined separator elements

  if (separators) {
    for (i; i >= 0; --i) {
      sanitizer[separators[i]] = delimiter;
    }
  } // do all the replacements


  slug = slug.toLowerCase(); // if we don't do this, add the uppercase versions to the sanitizer plus inlcude A-Z in the prohibited filter

  slug = slug.replace(prohibited, function (match) {
    return sanitizer[match] || "";
  });
  slug = slug.replace(consecutive, delimiter);
  slug = slug.replace(trim, "$1");
  return slug;
});

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

function _taggedTemplateLiteralLoose$1(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

// @private
function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var positionMap = ['Top', 'Right', 'Bottom', 'Left'];

function generateProperty(property, position) {
  if (!property) return position.toLowerCase();
  var splitProperty = property.split('-');

  if (splitProperty.length > 1) {
    splitProperty.splice(1, 0, position);
    return splitProperty.reduce(function (acc, val) {
      return "" + acc + capitalizeString(val);
    });
  }

  var joinedProperty = property.replace(/([a-z])([A-Z])/g, "$1" + position + "$2");
  return property === joinedProperty ? "" + property + position : joinedProperty;
}

function generateStyles(property, valuesWithDefaults) {
  var styles = {};

  for (var i = 0; i < valuesWithDefaults.length; i += 1) {
    if (valuesWithDefaults[i] || valuesWithDefaults[i] === 0) {
      styles[generateProperty(property, positionMap[i])] = valuesWithDefaults[i];
    }
  }

  return styles;
}
/**
 * Enables shorthand for direction-based properties. It accepts a property (hyphenated or camelCased) and up to four values that map to top, right, bottom, and left, respectively. You can optionally pass an empty string to get only the directional values as properties. You can also optionally pass a null argument for a directional value to ignore it.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...directionalProperty('padding', '12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${directionalProperty('padding', '12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'paddingTop': '12px',
 *   'paddingRight': '24px',
 *   'paddingBottom': '36px',
 *   'paddingLeft': '48px'
 * }
 */


function directionalProperty(property) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  //  prettier-ignore
  var firstValue = values[0],
      _values$ = values[1],
      secondValue = _values$ === void 0 ? firstValue : _values$,
      _values$2 = values[2],
      thirdValue = _values$2 === void 0 ? firstValue : _values$2,
      _values$3 = values[3],
      fourthValue = _values$3 === void 0 ? secondValue : _values$3;
  var valuesWithDefaults = [firstValue, secondValue, thirdValue, fourthValue];
  return generateStyles(property, valuesWithDefaults);
}

function endsWith (string, suffix) {
  return string.substr(-suffix.length) === suffix;
}

/**
 * Returns a given CSS value minus its unit (or the original value if an invalid string is passed).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': stripUnit('100px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${stripUnit('100px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100
 * }
 */
function stripUnit(value) {
  var unitlessValue = parseFloat(value);
  if (isNaN(unitlessValue)) return value;
  return unitlessValue;
}

/**
 * Factory function that creates pixel-to-x converters
 * @private
 */

var pxtoFactory = function pxtoFactory(to) {
  return function (pxval, base) {
    if (base === void 0) {
      base = '16px';
    }

    var newPxval = pxval;
    var newBase = base;

    if (typeof pxval === 'string') {
      if (!endsWith(pxval, 'px')) {
        throw new Error("Expected a string ending in \"px\" or a number passed as the first argument to " + to + "(), got \"" + pxval + "\" instead.");
      }

      newPxval = stripUnit(pxval);
    }

    if (typeof base === 'string') {
      if (!endsWith(base, 'px')) {
        throw new Error("Expected a string ending in \"px\" or a number passed as the second argument to " + to + "(), got \"" + base + "\" instead.");
      }

      newBase = stripUnit(base);
    }

    if (typeof newPxval === 'string') {
      throw new Error("Passed invalid pixel value (\"" + pxval + "\") to " + to + "(), please pass a value like \"12px\" or 12.");
    }

    if (typeof newBase === 'string') {
      throw new Error("Passed invalid base value (\"" + base + "\") to " + to + "(), please pass a value like \"12px\" or 12.");
    }

    return "" + newPxval / newBase + to;
  };
};

/**
 * Convert pixel value to ems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
 * @function
 * @param {string|number} pxval
 * @param {string|number} [base='16px']
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': em('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${em('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1em'
 * }
 */

var em =
/*#__PURE__*/
pxtoFactory('em');

var cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
/**
 * Returns a given CSS value and its unit as elements of an array.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': getValueAndUnit('100px')[0]
 *   '--unit': getValueAndUnit('100px')[1]
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${getValueAndUnit('100px')[0]}
 *   --unit: ${getValueAndUnit('100px')[1]}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100
 *   '--unit': 'px'
 * }
 */

function getValueAndUnit(value) {
  if (typeof value !== 'string') return [value, ''];
  var matchedValue = value.match(cssRegex);
  if (matchedValue) return [parseFloat(value), matchedValue[2]];
  return [value, undefined];
}

var ratioNames = {
  minorSecond: 1.067,
  majorSecond: 1.125,
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 1.333,
  augFourth: 1.414,
  perfectFifth: 1.5,
  minorSixth: 1.6,
  goldenSection: 1.618,
  majorSixth: 1.667,
  minorSeventh: 1.778,
  majorSeventh: 1.875,
  octave: 2,
  majorTenth: 2.5,
  majorEleventh: 2.667,
  majorTwelfth: 3,
  doubleOctave: 4
};

function getRatio(ratioName) {
  return ratioNames[ratioName];
}
/**
 * Establish consistent measurements and spacial relationships throughout your projects by incrementing up or down a defined scale. We provide a list of commonly used scales as pre-defined variables.
 * @example
 * // Styles as object usage
 * const styles = {
 *    // Increment two steps up the default scale
 *   'fontSize': modularScale(2)
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *    // Increment two steps up the default scale
 *   fontSize: ${modularScale(2)}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'fontSize': '1.77689em'
 * }
 */


function modularScale(steps, base, ratio) {
  if (base === void 0) {
    base = '1em';
  }

  if (ratio === void 0) {
    ratio = 'perfectFourth';
  }

  if (typeof steps !== 'number') {
    throw new Error('Please provide a number of steps to the modularScale helper.');
  }

  if (typeof ratio === 'string' && !ratioNames[ratio]) {
    throw new Error('Please pass a number or one of the predefined scales to the modularScale helper as the ratio.');
  }

  var realBase = typeof base === 'string' ? stripUnit(base) : base;
  var realRatio = typeof ratio === 'string' ? getRatio(ratio) : ratio;

  if (typeof realBase === 'string') {
    throw new Error("Invalid value passed as base to modularScale, expected number or em string but got \"" + base + "\"");
  }

  return realBase * Math.pow(realRatio, steps) + "em";
}

/**
 * Convert pixel value to rems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
 * @function
 * @param {string|number} pxval
 * @param {string|number} [base='16px']
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': rem('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${rem('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1rem'
 * }
 */

var rem =
/*#__PURE__*/
pxtoFactory('rem');

/**
 * Returns a CSS calc formula for linear interpolation of a property between two values. Accepts optional minScreen (defaults to '320px') and maxScreen (defaults to '1200px').
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   fontSize: between('20px', '100px', '400px', '1000px'),
 *   fontSize: between('20px', '100px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   fontSize: ${fontSize: between('20px', '100px', '400px', '1000px')};
 *   fontSize: ${fontSize: between('20px', '100px')}
 * `
 *
 * // CSS as JS Output
 *
 * h1: {
 *   'fontSize': 'calc(-33.33333333333334px + 13.333333333333334vw)',
 *   'fontSize': 'calc(-9.090909090909093px + 9.090909090909092vw)'
 * }
 */

function between(fromSize, toSize, minScreen, maxScreen) {
  if (minScreen === void 0) {
    minScreen = '320px';
  }

  if (maxScreen === void 0) {
    maxScreen = '1200px';
  }

  var _getValueAndUnit = getValueAndUnit(fromSize),
      unitlessFromSize = _getValueAndUnit[0],
      fromSizeUnit = _getValueAndUnit[1];

  var _getValueAndUnit2 = getValueAndUnit(toSize),
      unitlessToSize = _getValueAndUnit2[0],
      toSizeUnit = _getValueAndUnit2[1];

  var _getValueAndUnit3 = getValueAndUnit(minScreen),
      unitlessMinScreen = _getValueAndUnit3[0],
      minScreenUnit = _getValueAndUnit3[1];

  var _getValueAndUnit4 = getValueAndUnit(maxScreen),
      unitlessMaxScreen = _getValueAndUnit4[0],
      maxScreenUnit = _getValueAndUnit4[1];

  if (typeof unitlessMinScreen !== 'number' || typeof unitlessMaxScreen !== 'number' || !minScreenUnit || !maxScreenUnit || minScreenUnit !== maxScreenUnit) {
    throw new Error('minScreen and maxScreen must be provided as stringified numbers with the same units.');
  }

  if (typeof unitlessFromSize !== 'number' || typeof unitlessToSize !== 'number' || !fromSizeUnit || !toSizeUnit || fromSizeUnit !== toSizeUnit) {
    throw new Error('fromSize and toSize must be provided as stringified numbers with the same units.');
  }

  var slope = (unitlessFromSize - unitlessToSize) / (unitlessMinScreen - unitlessMaxScreen);
  var base = unitlessToSize - slope * unitlessMaxScreen;
  return "calc(" + base.toFixed(2) + fromSizeUnit + " + " + (100 * slope).toFixed(2) + "vw)";
}

/**
 * CSS to contain a float (credit to CSSMojo).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...clearFix(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${clearFix()}
 * `
 *
 * // CSS as JS Output
 *
 * '&::after': {
 *   'clear': 'both',
 *   'content': '""',
 *   'display': 'table'
 * }
 */
function clearFix(parent) {
  var _ref;

  if (parent === void 0) {
    parent = '&';
  }

  var pseudoSelector = parent + "::after";
  return _ref = {}, _ref[pseudoSelector] = {
    clear: 'both',
    content: '""',
    display: 'table'
  }, _ref;
}

/**
 * CSS to fully cover an area. Can optionally be passed an offset to act as a "padding".
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...cover()
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${cover()}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   'position': 'absolute',
 *   'top': '0',
 *   'right: '0',
 *   'bottom': '0',
 *   'left: '0'
 * }
 */
function cover(offset) {
  if (offset === void 0) {
    offset = 0;
  }

  return {
    position: 'absolute',
    top: offset,
    right: offset,
    bottom: offset,
    left: offset
  };
}

/**
 * CSS to represent truncated text with an ellipsis.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...ellipsis('250px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${ellipsis('250px')}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   'display': 'inline-block',
 *   'maxWidth': '250px',
 *   'overflow': 'hidden',
 *   'textOverflow': 'ellipsis',
 *   'whiteSpace': 'nowrap',
 *   'wordWrap': 'normal'
 * }
 */
function ellipsis(width) {
  if (width === void 0) {
    width = '100%';
  }

  return {
    display: 'inline-block',
    maxWidth: width,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    wordWrap: 'normal'
  };
}

/**
 * Returns a set of media queries that resizes a property (or set of properties) between a provided fromSize and toSize. Accepts optional minScreen (defaults to '320px') and maxScreen (defaults to '1200px') to constrain the interpolation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...fluidRange(
 *    {
 *        prop: 'padding',
 *        fromSize: '20px',
 *        toSize: '100px',
 *      },
 *      '400px',
 *      '1000px',
 *    )
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${fluidRange(
 *      {
 *        prop: 'padding',
 *        fromSize: '20px',
 *        toSize: '100px',
 *      },
 *      '400px',
 *      '1000px',
 *    )}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   "@media (min-width: 1000px)": Object {
 *     "padding": "100px",
 *   },
 *   "@media (min-width: 400px)": Object {
 *     "padding": "calc(-33.33333333333334px + 13.333333333333334vw)",
 *   },
 *   "padding": "20px",
 * }
 */
function fluidRange(cssProp, minScreen, maxScreen) {
  if (minScreen === void 0) {
    minScreen = '320px';
  }

  if (maxScreen === void 0) {
    maxScreen = '1200px';
  }

  if (!Array.isArray(cssProp) && typeof cssProp !== 'object' || cssProp === null) {
    throw new Error('expects either an array of objects or a single object with the properties prop, fromSize, and toSize.');
  }

  if (Array.isArray(cssProp)) {
    var mediaQueries = {};
    var fallbacks = {};

    for (var _iterator = cssProp, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _extends2, _extends3;

      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var obj = _ref;

      if (!obj.prop || !obj.fromSize || !obj.toSize) {
        throw new Error('expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.');
      }

      fallbacks[obj.prop] = obj.fromSize;
      mediaQueries["@media (min-width: " + minScreen + ")"] = _extends({}, mediaQueries["@media (min-width: " + minScreen + ")"], (_extends2 = {}, _extends2[obj.prop] = between(obj.fromSize, obj.toSize, minScreen, maxScreen), _extends2));
      mediaQueries["@media (min-width: " + maxScreen + ")"] = _extends({}, mediaQueries["@media (min-width: " + maxScreen + ")"], (_extends3 = {}, _extends3[obj.prop] = obj.toSize, _extends3));
    }

    return _extends({}, fallbacks, mediaQueries);
  } else {
    var _ref2, _ref3, _ref4;

    if (!cssProp.prop || !cssProp.fromSize || !cssProp.toSize) {
      throw new Error('expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.');
    }

    return _ref4 = {}, _ref4[cssProp.prop] = cssProp.fromSize, _ref4["@media (min-width: " + minScreen + ")"] = (_ref2 = {}, _ref2[cssProp.prop] = between(cssProp.fromSize, cssProp.toSize, minScreen, maxScreen), _ref2), _ref4["@media (min-width: " + maxScreen + ")"] = (_ref3 = {}, _ref3[cssProp.prop] = cssProp.toSize, _ref3), _ref4;
  }
}

function generateFileReferences(fontFilePath, fileFormats) {
  var fileFontReferences = fileFormats.map(function (format) {
    return "url(\"" + fontFilePath + "." + format + "\")";
  });
  return fileFontReferences.join(', ');
}

function generateLocalReferences(localFonts) {
  var localFontReferences = localFonts.map(function (font) {
    return "local(\"" + font + "\")";
  });
  return localFontReferences.join(', ');
}

function generateSources(fontFilePath, localFonts, fileFormats) {
  var fontReferences = [];
  if (localFonts) fontReferences.push(generateLocalReferences(localFonts));

  if (fontFilePath) {
    fontReferences.push(generateFileReferences(fontFilePath, fileFormats));
  }

  return fontReferences.join(', ');
}
/**
 * CSS for a @font-face declaration.
 *
 * @example
 * // Styles as object basic usage
 * const styles = {
 *    ...fontFace({
 *      'fontFamily': 'Sans-Pro',
 *      'fontFilePath': 'path/to/file'
 *    })
 * }
 *
 * // styled-components basic usage
 * injectGlobal`${
 *   fontFace({
 *     'fontFamily': 'Sans-Pro',
 *     'fontFilePath': 'path/to/file'
 *   }
 * )}`
 *
 * // CSS as JS Output
 *
 * '@font-face': {
 *   'fontFamily': 'Sans-Pro',
 *   'src': 'url("path/to/file.eot"), url("path/to/file.woff2"), url("path/to/file.woff"), url("path/to/file.ttf"), url("path/to/file.svg")',
 * }
 */


function fontFace(_ref) {
  var fontFamily = _ref.fontFamily,
      fontFilePath = _ref.fontFilePath,
      fontStretch = _ref.fontStretch,
      fontStyle = _ref.fontStyle,
      fontVariant = _ref.fontVariant,
      fontWeight = _ref.fontWeight,
      _ref$fileFormats = _ref.fileFormats,
      fileFormats = _ref$fileFormats === void 0 ? ['eot', 'woff2', 'woff', 'ttf', 'svg'] : _ref$fileFormats,
      localFonts = _ref.localFonts,
      unicodeRange = _ref.unicodeRange,
      fontDisplay = _ref.fontDisplay,
      fontVariationSettings = _ref.fontVariationSettings,
      fontFeatureSettings = _ref.fontFeatureSettings;
  // Error Handling
  if (!fontFamily) throw new Error('fontFace expects a name of a font-family.');

  if (!fontFilePath && !localFonts) {
    throw new Error('fontFace expects either the path to the font file(s) or a name of a local copy.');
  }

  if (localFonts && !Array.isArray(localFonts)) {
    throw new Error('fontFace expects localFonts to be an array.');
  }

  if (!Array.isArray(fileFormats)) {
    throw new Error('fontFace expects fileFormats to be an array.');
  }

  var fontFaceDeclaration = {
    '@font-face': {
      fontFamily: fontFamily,
      src: generateSources(fontFilePath, localFonts, fileFormats),
      unicodeRange: unicodeRange,
      fontStretch: fontStretch,
      fontStyle: fontStyle,
      fontVariant: fontVariant,
      fontWeight: fontWeight,
      fontDisplay: fontDisplay,
      fontVariationSettings: fontVariationSettings,
      fontFeatureSettings: fontFeatureSettings
    } // Removes undefined fields for cleaner css object.

  };
  return JSON.parse(JSON.stringify(fontFaceDeclaration));
}

/**
 * CSS to hide text to show a background image in a SEO-friendly way.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'backgroundImage': 'url(logo.png)',
 *   ...hideText(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   backgroundImage: url(logo.png);
 *   ${hideText()};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'backgroundImage': 'url(logo.png)',
 *   'textIndent': '101%',
 *   'overflow': 'hidden',
 *   'whiteSpace': 'nowrap',
 * }
 */
function hideText() {
  return {
    textIndent: '101%',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  };
}

/**
 * CSS to hide content visually but remain accessible to screen readers.
 * from [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate/blob/9a176f57af1cfe8ec70300da4621fb9b07e5fa31/src/css/main.css#L121)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...hideVisually(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${hideVisually()};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'border': '0',
 *   'clip': 'rect(0 0 0 0)',
 *   'clipPath': 'inset(50%)',
 *   'height': '1px',
 *   'margin': '-1px',
 *   'overflow': 'hidden',
 *   'padding': '0',
 *   'position': 'absolute',
 *   'whiteSpace': 'nowrap',
 *   'width': '1px',
 * }
 */
function hideVisually() {
  return {
    border: '0',
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px'
  };
}

/**
 * Generates a media query to target HiDPI devices.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *  [hiDPI(1.5)]: {
 *    width: 200px;
 *  }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${hiDPI(1.5)} {
 *     width: 200px;
 *   }
 * `
 *
 * // CSS as JS Output
 *
 * '@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
 *  only screen and (min--moz-device-pixel-ratio: 1.5),
 *  only screen and (-o-min-device-pixel-ratio: 1.5/1),
 *  only screen and (min-resolution: 144dpi),
 *  only screen and (min-resolution: 1.5dppx)': {
 *   'width': '200px',
 * }
 */
function hiDPI(ratio) {
  if (ratio === void 0) {
    ratio = 1.3;
  }

  return "\n    @media only screen and (-webkit-min-device-pixel-ratio: " + ratio + "),\n    only screen and (min--moz-device-pixel-ratio: " + ratio + "),\n    only screen and (-o-min-device-pixel-ratio: " + ratio + "/1),\n    only screen and (min-resolution: " + Math.round(ratio * 96) + "dpi),\n    only screen and (min-resolution: " + ratio + "dppx)\n  ";
}

/**
 * CSS to normalize abnormalities across browsers (normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...normalize(),
 * }
 *
 * // styled-components usage
 * injectGlobal`${normalize()}`
 *
 * // CSS as JS Output
 *
 * html {
 *   lineHeight: 1.15,
 *   textSizeAdjust: 100%,
 * } ...
 */
function normalize() {
  var _ref;

  return [(_ref = {
    html: {
      lineHeight: '1.15',
      textSizeAdjust: '100%'
    },
    body: {
      margin: '0'
    },
    h1: {
      fontSize: '2em',
      margin: '0.67em 0'
    },
    hr: {
      boxSizing: 'content-box',
      height: '0',
      overflow: 'visible'
    },
    pre: {
      fontFamily: 'monospace, monospace',
      fontSize: '1em'
    },
    a: {
      'background-color': 'transparent'
    },
    'abbr[title]': {
      borderBottom: 'none',
      textDecoration: 'underline'
    }
  }, _ref["b,\n    strong"] = {
    fontWeight: 'bolder'
  }, _ref["code,\n    kbd,\n    samp"] = {
    fontFamily: 'monospace, monospace',
    fontSize: '1em'
  }, _ref.small = {
    fontSize: '80%'
  }, _ref["sub,\n    sup"] = {
    fontSize: '75%',
    lineHeight: '0',
    position: 'relative',
    verticalAlign: 'baseline'
  }, _ref.sub = {
    bottom: '-0.25em'
  }, _ref.sup = {
    top: '-0.5em'
  }, _ref.img = {
    borderStyle: 'none'
  }, _ref["button,\n    input,\n    optgroup,\n    select,\n    textarea"] = {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: '1.15',
    margin: '0'
  }, _ref["button,\n    input"] = {
    overflow: 'visible'
  }, _ref["button,\n    select"] = {
    textTransform: 'none'
  }, _ref["button,\n    html [type=\"button\"],\n    [type=\"reset\"],\n    [type=\"submit\"]"] = {
    WebkitAppearance: 'button'
  }, _ref["button::-moz-focus-inner,\n    [type=\"button\"]::-moz-focus-inner,\n    [type=\"reset\"]::-moz-focus-inner,\n    [type=\"submit\"]::-moz-focus-inner"] = {
    borderStyle: 'none',
    padding: '0'
  }, _ref["button:-moz-focusring,\n    [type=\"button\"]:-moz-focusring,\n    [type=\"reset\"]:-moz-focusring,\n    [type=\"submit\"]:-moz-focusring"] = {
    outline: '1px dotted ButtonText'
  }, _ref.fieldset = {
    padding: '0.35em 0.625em 0.75em'
  }, _ref.legend = {
    boxSizing: 'border-box',
    color: 'inherit',
    display: 'table',
    maxWidth: '100%',
    padding: '0',
    whiteSpace: 'normal'
  }, _ref.progress = {
    verticalAlign: 'baseline'
  }, _ref.textarea = {
    overflow: 'auto'
  }, _ref["[type=\"checkbox\"],\n    [type=\"radio\"]"] = {
    boxSizing: 'border-box',
    padding: '0'
  }, _ref["[type=\"number\"]::-webkit-inner-spin-button,\n    [type=\"number\"]::-webkit-outer-spin-button"] = {
    height: 'auto'
  }, _ref['[type="search"]'] = {
    WebkitAppearance: 'textfield',
    outlineOffset: '-2px'
  }, _ref['[type="search"]::-webkit-search-decoration'] = {
    WebkitAppearance: 'none'
  }, _ref['::-webkit-file-upload-button'] = {
    WebkitAppearance: 'button',
    font: 'inherit'
  }, _ref.details = {
    display: 'block'
  }, _ref.summary = {
    display: 'list-item'
  }, _ref.template = {
    display: 'none'
  }, _ref['[hidden]'] = {
    display: 'none'
  }, _ref), {
    'abbr[title]': {
      textDecoration: 'underline dotted'
    }
  }];
}

/**
 * CSS to style the placeholder pseudo-element.
 *
 * @deprecated - placeholder has been marked for deprecation in polished 2.0 and will be fully deprecated in 3.0. It is no longer needed and can safely be replaced with the non-prefixed placeholder pseudo-element.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...placeholder({'color': 'blue'})
 * }
 *
 * // styled-components usage
 * const div = styled.input`
 *    ${placeholder({'color': 'blue'})}
 * `
 *
 * // CSS as JS Output
 *
 * 'input': {
 *   '&:-moz-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&:-ms-input-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&::-moz-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&::-webkit-input-placeholder': {
 *     'color': 'blue',
 *   },
 * },
 */
function placeholder(styles, parent) {
  var _ref;

  if (parent === void 0) {
    parent = '&';
  }

  return _ref = {}, _ref[parent + "::-webkit-input-placeholder"] = _extends({}, styles), _ref[parent + ":-moz-placeholder"] = _extends({}, styles), _ref[parent + "::-moz-placeholder"] = _extends({}, styles), _ref[parent + ":-ms-input-placeholder"] = _extends({}, styles), _ref;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose$1(["radial-gradient(", "", "", "", ")"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function parseFallback(colorStops) {
  return colorStops[0].split(' ')[0];
}

function constructGradientValue(literals) {
  var template = '';

  for (var i = 0; i < literals.length; i += 1) {
    template += literals[i]; // Adds leading coma if properties preceed color-stops

    if (i === 3 && (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]) && ((arguments.length <= 1 ? undefined : arguments[1]) || (arguments.length <= 2 ? undefined : arguments[2]) || (arguments.length <= 3 ? undefined : arguments[3]))) {
      template = template.slice(0, -1);
      template += ", " + (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]); // No trailing space if color-stops is the only param provided
    } else if (i === 3 && (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]) && !(arguments.length <= 1 ? undefined : arguments[1]) && !(arguments.length <= 2 ? undefined : arguments[2]) && !(arguments.length <= 3 ? undefined : arguments[3])) {
      template += "" + (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]); // Only adds substitution if it is defined
    } else if (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]) {
      template += (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]) + " ";
    }
  }

  return template.trim();
}
/**
 * CSS for declaring a radial gradient, including a fallback background-color. The fallback is either the first color-stop or an explicitly passed fallback color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...radialGradient({
 *     colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
 *     extent: 'farthest-corner at 45px 45px',
 *     position: 'center',
 *     shape: 'ellipse',
 *   })
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${radialGradient({
 *     colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
 *     extent: 'farthest-corner at 45px 45px',
 *     position: 'center',
 *     shape: 'ellipse',
 *   })}
 *`
 *
 * // CSS as JS Output
 *
 * div: {
 *   'backgroundColor': '#00FFFF',
 *   'backgroundImage': 'radial-gradient(center ellipse farthest-corner at 45px 45px, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
 * }
 */


function radialGradient(_ref) {
  var colorStops = _ref.colorStops,
      extent = _ref.extent,
      fallback = _ref.fallback,
      position = _ref.position,
      shape = _ref.shape;

  if (!colorStops || colorStops.length < 2) {
    throw new Error('radialGradient requries at least 2 color-stops to properly render.');
  }

  return {
    backgroundColor: fallback || parseFallback(colorStops),
    backgroundImage: constructGradientValue(_templateObject(), position, shape, extent, colorStops.join(', '))
  };
}

/**
 * A helper to generate a retina background image and non-retina
 * background image. The retina background image will output to a HiDPI media query. The mixin uses
 * a _2x.png filename suffix by default.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *  ...retinaImage('my-img')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${retinaImage('my-img')}
 * `
 *
 * // CSS as JS Output
 * div {
 *   backgroundImage: 'url(my-img.png)',
 *   '@media only screen and (-webkit-min-device-pixel-ratio: 1.3),
 *    only screen and (min--moz-device-pixel-ratio: 1.3),
 *    only screen and (-o-min-device-pixel-ratio: 1.3/1),
 *    only screen and (min-resolution: 144dpi),
 *    only screen and (min-resolution: 1.5dppx)': {
 *     backgroundImage: 'url(my-img_2x.png)',
 *   }
 * }
 */
function retinaImage(filename, backgroundSize, extension, retinaFilename, retinaSuffix) {
  var _ref;

  if (extension === void 0) {
    extension = 'png';
  }

  if (retinaSuffix === void 0) {
    retinaSuffix = '_2x';
  }

  if (!filename) {
    throw new Error('Please supply a filename to retinaImage() as the first argument.');
  } // Replace the dot at the beginning of the passed extension if one exists


  var ext = extension.replace(/^\./, '');
  var rFilename = retinaFilename ? retinaFilename + "." + ext : "" + filename + retinaSuffix + "." + ext;
  return _ref = {
    backgroundImage: "url(" + filename + "." + ext + ")"
  }, _ref[hiDPI()] = _extends({
    backgroundImage: "url(" + rFilename + ")"
  }, backgroundSize ? {
    backgroundSize: backgroundSize
  } : {}), _ref;
}

/**
 * CSS to style the selection pseudo-element.
 *
 * @deprecated - selection has been marked for deprecation in polished 2.0 and will be fully deprecated in 3.0. It is no longer needed and can safely be replaced with the non-prefixed selection pseudo-element.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...selection({
 *     'backgroundColor': 'blue'
 *   }, 'section')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${selection({'backgroundColor': 'blue'}, 'section')}
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'section::-moz-selection': {
 *     'backgroundColor':'blue',
 *   },
 *   'section::selection': {
 *     'backgroundColor': 'blue',
 *   }
 * }
 */
function selection(styles, parent) {
  var _ref;

  if (parent === void 0) {
    parent = '';
  }

  return _ref = {}, _ref[parent + "::-moz-selection"] = _extends({}, styles), _ref[parent + "::selection"] = _extends({}, styles), _ref;
}

/* eslint-disable key-spacing */
var functionsMap = {
  easeInBack: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
  easeInCirc: 'cubic-bezier(0.600,  0.040, 0.980, 0.335)',
  easeInCubic: 'cubic-bezier(0.550,  0.055, 0.675, 0.190)',
  easeInExpo: 'cubic-bezier(0.950,  0.050, 0.795, 0.035)',
  easeInQuad: 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
  easeInQuart: 'cubic-bezier(0.895,  0.030, 0.685, 0.220)',
  easeInQuint: 'cubic-bezier(0.755,  0.050, 0.855, 0.060)',
  easeInSine: 'cubic-bezier(0.470,  0.000, 0.745, 0.715)',
  easeOutBack: 'cubic-bezier(0.175,  0.885, 0.320, 1.275)',
  easeOutCubic: 'cubic-bezier(0.215,  0.610, 0.355, 1.000)',
  easeOutCirc: 'cubic-bezier(0.075,  0.820, 0.165, 1.000)',
  easeOutExpo: 'cubic-bezier(0.190,  1.000, 0.220, 1.000)',
  easeOutQuad: 'cubic-bezier(0.250,  0.460, 0.450, 0.940)',
  easeOutQuart: 'cubic-bezier(0.165,  0.840, 0.440, 1.000)',
  easeOutQuint: 'cubic-bezier(0.230,  1.000, 0.320, 1.000)',
  easeOutSine: 'cubic-bezier(0.390,  0.575, 0.565, 1.000)',
  easeInOutBack: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
  easeInOutCirc: 'cubic-bezier(0.785,  0.135, 0.150, 0.860)',
  easeInOutCubic: 'cubic-bezier(0.645,  0.045, 0.355, 1.000)',
  easeInOutExpo: 'cubic-bezier(1.000,  0.000, 0.000, 1.000)',
  easeInOutQuad: 'cubic-bezier(0.455,  0.030, 0.515, 0.955)',
  easeInOutQuart: 'cubic-bezier(0.770,  0.000, 0.175, 1.000)',
  easeInOutQuint: 'cubic-bezier(0.860,  0.000, 0.070, 1.000)',
  easeInOutSine: 'cubic-bezier(0.445,  0.050, 0.550, 0.950)'
  /* eslint-enable key-spacing */

};

function getTimingFunction(functionName) {
  return functionsMap[functionName];
}
/**
 * String to represent common easing functions as demonstrated here: (github.com/jaukia/easie).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'transitionTimingFunction': timingFunctions('easeInQuad')
 * }
 *
 * // styled-components usage
 *  const div = styled.div`
 *   transitionTimingFunction: ${timingFunctions('easeInQuad')};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'transitionTimingFunction': 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
 * }
 */


function timingFunctions(timingFunction) {
  return getTimingFunction(timingFunction);
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderColor('red', 'green', 'blue', 'yellow')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderColor('red', 'green', 'blue', 'yellow')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopColor': 'red',
 *   'borderRightColor': 'green',
 *   'borderBottomColor': 'blue',
 *   'borderLeftColor': 'yellow'
 * }
 */
function borderColor() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['borderColor'].concat(values));
}

var getBorderWidth = function getBorderWidth(pointingDirection, height, width) {
  switch (pointingDirection) {
    case 'top':
      return "0 " + width[0] / 2 + width[1] + " " + height[0] + height[1] + " " + width[0] / 2 + width[1];

    case 'left':
      return "" + height[0] / 2 + height[1] + " " + width[0] + width[1] + " " + height[0] / 2 + height[1] + " 0";

    case 'bottom':
      return "" + height[0] + height[1] + " " + width[0] / 2 + width[1] + " 0 " + width[0] / 2 + width[1];

    case 'right':
      return "" + height[0] / 2 + height[1] + " 0 " + height[0] / 2 + height[1] + " " + width[0] + width[1];

    default:
      throw new Error("Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.");
  }
}; // needed for border-color


var reverseDirection = ['bottom', 'left', 'top', 'right'];
/**
 * CSS to represent triangle with any pointing direction with an optional background color. Accepts number or px values for height and width.
 *
 * @example
 * // Styles as object usage
 *
 * const styles = {
 *   ...triangle({ pointingDirection: 'right', width: '100px', height: '100px', foregroundColor: 'red' })
 * }
 *
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${triangle({ pointingDirection: 'right', width: '100px', height: '100px', foregroundColor: 'red' })}
 *
 *
 * // CSS as JS Output
 *
 * div: {
 *  'borderColor': 'transparent',
 *  'borderLeftColor': 'red !important',
 *  'borderStyle': 'solid',
 *  'borderWidth': '50px 0 50px 100px',
 *  'height': '0',
 *  'width': '0',
 * }
 */

function triangle(_ref) {
  var pointingDirection = _ref.pointingDirection,
      height = _ref.height,
      width = _ref.width,
      foregroundColor = _ref.foregroundColor,
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? 'transparent' : _ref$backgroundColor;
  var widthAndUnit = [parseFloat(width), String(width).replace(/\d+/g, '') || 'px'];
  var heightAndUnit = [parseFloat(height), String(height).replace(/\d+/g, '') || 'px'];

  if (isNaN(heightAndUnit[0]) || isNaN(widthAndUnit[0])) {
    throw new Error('Passed an invalid value to `height` or `width`. Please provide a pixel based unit');
  }

  var reverseDirectionIndex = reverseDirection.indexOf(pointingDirection);
  return _extends({
    width: '0',
    height: '0',
    borderWidth: getBorderWidth(pointingDirection, heightAndUnit, widthAndUnit),
    borderStyle: 'solid'
  }, borderColor.apply(void 0, Array.from({
    length: 4
  }).map(function (_, index) {
    return index === reverseDirectionIndex ? foregroundColor : backgroundColor;
  })));
}

/**
 * Provides an easy way to change the `wordWrap` property.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...wordWrap('break-word')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${wordWrap('break-word')}
 * `
 *
 * // CSS as JS Output
 *
 * const styles = {
 *   overflowWrap: 'break-word',
 *   wordWrap: 'break-word',
 *   wordBreak: 'break-all',
 * }
 */
function wordWrap(wrap) {
  if (wrap === void 0) {
    wrap = 'break-word';
  }

  var wordBreak = wrap === 'break-word' ? 'break-all' : wrap;
  return {
    overflowWrap: wrap,
    wordWrap: wrap,
    wordBreak: wordBreak
  };
}

function colorToInt(color) {
  return Math.round(color * 255);
}

function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}

function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }

  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness);
  } // formular from https://en.wikipedia.org/wiki/HSL_and_HSV


  var huePrime = hue % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}

var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
  /**
   * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
   * @private
   */

};

function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}

var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/;
var hslaRegex = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;
/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = parseToRgb('rgb(255, 0, 0)');
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
 */

function parseToRgb(color) {
  if (typeof color !== 'string') {
    throw new Error('Passed an incorrect argument to a color function, please pass a string representation of a color.');
  }

  var normalizedColor = nameToHex(color);

  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }

  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha: alpha
    };
  }

  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }

  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));

    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }

  var rgbMatched = rgbRegex.exec(normalizedColor);

  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }

  var rgbaMatched = rgbaRegex.exec(normalizedColor);

  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4])
    };
  }

  var hslMatched = hslRegex.exec(normalizedColor);

  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);

    if (!hslRgbMatched) {
      throw new Error("Couldn't generate valid rgb string from " + normalizedColor + ", it returned " + rgbColorString + ".");
    }

    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }

  var hslaMatched = hslaRegex.exec(normalizedColor);

  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);

    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;

    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;

    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";

    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);

    if (!_hslRgbMatched) {
      throw new Error("Couldn't generate valid rgb string from " + normalizedColor + ", it returned " + _rgbColorString + ".");
    }

    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4])
    };
  }

  throw new Error("Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.");
}

function rgbToHsl(color) {
  // make sure rgb are contained in a set of [0, 255]
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;

  if (max === min) {
    // achromatic
    if (color.alpha !== undefined) {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness,
        alpha: color.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness
      };
    }
  }

  var hue;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;

    case green:
      hue = (blue - red) / delta + 2;
      break;

    default:
      // blue case
      hue = (red - green) / delta + 4;
      break;
  }

  hue *= 60;

  if (color.alpha !== undefined) {
    return {
      hue: hue,
      saturation: saturation,
      lightness: lightness,
      alpha: color.alpha
    };
  }

  return {
    hue: hue,
    saturation: saturation,
    lightness: lightness
  };
}

/**
 * Returns an HslColor or HslaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a HslColor or HslaColor object back to a string.
 *
 * @example
 * // Assigns `{ hue: 0, saturation: 1, lightness: 0.5 }` to color1
 * const color1 = parseToHsl('rgb(255, 0, 0)');
 * // Assigns `{ hue: 128, saturation: 1, lightness: 0.5, alpha: 0.75 }` to color2
 * const color2 = parseToHsl('hsla(128, 100%, 50%, 0.75)');
 */
function parseToHsl(color) {
  // Note: At a later stage we can optimize this function as right now a hsl
  // color would be parsed converted to rgb values and converted back to hsl.
  return rgbToHsl(parseToRgb(color));
}

/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */
var reduceHexValue = function reduceHexValue(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }

  return value;
};

function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}

function convertToHex(red, green, blue) {
  return reduceHexValue("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}

function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsl(359, 0.75, 0.4),
 *   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsl(359, 0.75, 0.4)};
 *   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#b3191c";
 *   background: "#b3191c";
 * }
 */
function hsl(value, saturation, lightness) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number') {
    return hslToHex(value, saturation, lightness);
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined) {
    return hslToHex(value.hue, value.saturation, value.lightness);
  }

  throw new Error('Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).');
}

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsla(359, 0.75, 0.4, 0.7),
 *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
 *   background: hsla(359, 0.75, 0.4, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsla(359, 0.75, 0.4, 0.7)};
 *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
 *   background: ${hsla(359, 0.75, 0.4, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(179,25,28,0.7)";
 *   background: "rgba(179,25,28,0.7)";
 *   background: "#b3191c";
 * }
 */
function hsla(value, saturation, lightness, alpha) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number' && typeof alpha === 'number') {
    return alpha >= 1 ? hslToHex(value, saturation, lightness) : "rgba(" + hslToRgb(value, saturation, lightness) + "," + alpha + ")";
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined && alpha === undefined) {
    return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : "rgba(" + hslToRgb(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
  }

  throw new Error('Passed invalid arguments to hsla, please pass multiple numbers e.g. hsl(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).');
}

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */
function rgb(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return reduceHexValue("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }

  throw new Error('Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).');
}

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === 'number' && typeof secondValue === 'number' && typeof thirdValue === 'number' && typeof fourthValue === 'number') {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === 'object' && secondValue === undefined && thirdValue === undefined && fourthValue === undefined) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }

  throw new Error('Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).');
}

var isRgb = function isRgb(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isRgba = function isRgba(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && typeof color.alpha === 'number';
};

var isHsl = function isHsl(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isHsla = function isHsla(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && typeof color.alpha === 'number';
};

var errMsg = 'Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.';
/**
 * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString({ red: 255, green: 205, blue: 100 }),
 *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */

function toColorString(color) {
  if (typeof color !== 'object') throw new Error(errMsg);
  if (isRgba(color)) return rgba(color);
  if (isRgb(color)) return rgb(color);
  if (isHsla(color)) return hsla(color);
  if (isHsl(color)) return hsl(color);
  throw new Error(errMsg);
}

// Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-redeclare
function curried(f, length, acc) {
  return function fn() {
    // eslint-disable-next-line prefer-rest-params
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
  };
} // eslint-disable-next-line no-redeclare


function curry(f) {
  // eslint-disable-line no-redeclare
  return curried(f, f.length, []);
}

/**
 * Changes the hue of the color. Hue is a number between 0 to 360. The first
 * argument for adjustHue is the amount of degrees the color is rotated along
 * the color wheel.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: adjustHue(180, '#448'),
 *   background: adjustHue('180', 'rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${adjustHue(180, '#448')};
 *   background: ${adjustHue('180', 'rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#888844";
 *   background: "rgba(136,136,68,0.7)";
 * }
 */

function adjustHue(degree, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    hue: (hslColor.hue + parseFloat(degree)) % 360
  }));
}

var curriedAdjustHue =
/*#__PURE__*/
curry(adjustHue);

/**
 * Returns the complement of the provided color. This is identical to adjustHue(180, <color>).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: complement('#448'),
 *   background: complement('rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${complement('#448')};
 *   background: ${complement('rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#884";
 *   background: "rgba(153,153,153,0.7)";
 * }
 */

function complement(color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    hue: (hslColor.hue + 180) % 360
  }));
}

function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}

/**
 * Returns a string value for the darkened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: darken(0.2, '#FFCD64'),
 *   background: darken('0.2', 'rgba(255,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${darken(0.2, '#FFCD64')};
 *   background: ${darken('0.2', 'rgba(255,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffbd31";
 *   background: "rgba(255,189,49,0.7)";
 * }
 */

function darken(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
  }));
}

var curriedDarken =
/*#__PURE__*/
curry(darken);

/**
 * Decreases the intensity of a color. Its range is between 0 to 1. The first
 * argument of the desaturate function is the amount by how much the color
 * intensity should be decreased.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: desaturate(0.2, '#CCCD64'),
 *   background: desaturate('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${desaturate(0.2, '#CCCD64')};
 *   background: ${desaturate('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#b8b979";
 *   background: "rgba(184,185,121,0.7)";
 * }
 */

function desaturate(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation - parseFloat(amount))
  }));
}

var curriedDesaturate =
/*#__PURE__*/
curry(desaturate);

/**
 * Returns a number (float) representing the luminance of a color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff',
 *   background: getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
 *                             'rgba(58, 133, 255, 1)' :
 *                             'rgba(255, 57, 149, 1)',
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff'};
 *   background: ${getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
 *                             'rgba(58, 133, 255, 1)' :
 *                             'rgba(255, 57, 149, 1)'};
 *
 * // CSS in JS Output
 *
 * div {
 *   background: "#CCCD64";
 *   background: "rgba(58, 133, 255, 1)";
 * }
 */

function getLuminance(color) {
  var rgbColor = parseToRgb(color);

  var _Object$keys$map = Object.keys(rgbColor).map(function (key) {
    var channel = rgbColor[key] / 255;
    return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
  }),
      r = _Object$keys$map[0],
      g = _Object$keys$map[1],
      b = _Object$keys$map[2];

  return parseFloat((0.2126 * r + 0.7152 * g + 0.0722 * b).toFixed(3));
}

/**
 * Converts the color to a grayscale, by reducing its saturation to 0.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: grayscale('#CCCD64'),
 *   background: grayscale('rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${grayscale('#CCCD64')};
 *   background: ${grayscale('rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#999";
 *   background: "rgba(153,153,153,0.7)";
 * }
 */

function grayscale(color) {
  return toColorString(_extends({}, parseToHsl(color), {
    saturation: 0
  }));
}

/**
 * Inverts the red, green and blue values of a color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: invert('#CCCD64'),
 *   background: invert('rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${invert('#CCCD64')};
 *   background: ${invert('rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#33329b";
 *   background: "rgba(154,155,50,0.7)";
 * }
 */

function invert(color) {
  // parse color string to rgb
  var value = parseToRgb(color);
  return toColorString(_extends({}, value, {
    red: 255 - value.red,
    green: 255 - value.green,
    blue: 255 - value.blue
  }));
}

/**
 * Returns a string value for the lightened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: lighten(0.2, '#CCCD64'),
 *   background: lighten('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${lighten(0.2, '#FFCD64')};
 *   background: ${lighten('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e5e6b1";
 *   background: "rgba(229,230,177,0.7)";
 * }
 */

function lighten(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
}

var curriedLighten =
/*#__PURE__*/
curry(lighten);

/**
 * Mixes the two provided colors together by calculating the average of each of the RGB components weighted to the first color by the provided weight.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: mix(0.5, '#f00', '#00f')
 *   background: mix(0.25, '#f00', '#00f')
 *   background: mix('0.5', 'rgba(255, 0, 0, 0.5)', '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${mix(0.5, '#f00', '#00f')};
 *   background: ${mix(0.25, '#f00', '#00f')};
 *   background: ${mix('0.5', 'rgba(255, 0, 0, 0.5)', '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#7f007f";
 *   background: "#3f00bf";
 *   background: "rgba(63, 0, 191, 0.75)";
 * }
 */

function mix(weight, color, otherColor) {
  var parsedColor1 = parseToRgb(color);

  var color1 = _extends({}, parsedColor1, {
    alpha: typeof parsedColor1.alpha === 'number' ? parsedColor1.alpha : 1
  });

  var parsedColor2 = parseToRgb(otherColor);

  var color2 = _extends({}, parsedColor2, {
    alpha: typeof parsedColor2.alpha === 'number' ? parsedColor2.alpha : 1 // The formular is copied from the original Sass implementation:
    // http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method

  });

  var alphaDelta = color1.alpha - color2.alpha;
  var x = parseFloat(weight) * 2 - 1;
  var y = x * alphaDelta === -1 ? x : x + alphaDelta;
  var z = 1 + x * alphaDelta;
  var weight1 = (y / z + 1) / 2.0;
  var weight2 = 1 - weight1;
  var mixedColor = {
    red: Math.floor(color1.red * weight1 + color2.red * weight2),
    green: Math.floor(color1.green * weight1 + color2.green * weight2),
    blue: Math.floor(color1.blue * weight1 + color2.blue * weight2),
    alpha: color1.alpha + (color2.alpha - color1.alpha) * (parseFloat(weight) / 1.0)
  };
  return rgba(mixedColor);
}

var curriedMix =
/*#__PURE__*/
curry(mix);

/**
 * Increases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: opacify(0.1, 'rgba(255, 255, 255, 0.9)');
 *   background: opacify(0.2, 'hsla(0, 0%, 100%, 0.5)'),
 *   background: opacify('0.5', 'rgba(255, 0, 0, 0.2)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${opacify(0.1, 'rgba(255, 255, 255, 0.9)')};
 *   background: ${opacify(0.2, 'hsla(0, 0%, 100%, 0.5)')},
 *   background: ${opacify('0.5', 'rgba(255, 0, 0, 0.2)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#fff";
 *   background: "rgba(255,255,255,0.7)";
 *   background: "rgba(255,0,0,0.7)";
 * }
 */

function opacify(amount, color) {
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = _extends({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100)
  });

  return rgba(colorWithAlpha);
}

var curriedOpacify =
/*#__PURE__*/
curry(opacify);

/**
 * Returns black or white for best contrast depending on the luminosity of the given color.
 * Follows W3C specs for readability at https://www.w3.org/TR/WCAG20-TECHS/G18.html
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   color: readableColor('#000'),
 *   color: readableColor('papayawhip'),
 *   color: readableColor('rgb(255,0,0)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   color: ${readableColor('#000')};
 *   color: ${readableColor('papayawhip')};
 *   color: ${readableColor('rgb(255,0,0)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   color: "#fff";
 *   color: "#fff";
 *   color: "#000";
 * }
 */

function readableColor(color) {
  return getLuminance(color) > 0.179 ? '#000' : '#fff';
}

var curriedReadableColor =
/*#__PURE__*/
curry(readableColor);

/**
 * Increases the intensity of a color. Its range is between 0 to 1. The first
 * argument of the saturate function is the amount by how much the color
 * intensity should be increased.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: saturate(0.2, '#CCCD64'),
 *   background: saturate('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${saturate(0.2, '#FFCD64')};
 *   background: ${saturate('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e0e250";
 *   background: "rgba(224,226,80,0.7)";
 * }
 */

function saturate(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation + parseFloat(amount))
  }));
}

var curriedSaturate =
/*#__PURE__*/
curry(saturate);

/**
 * Sets the hue of a color to the provided value. The hue range can be
 * from 0 and 359.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setHue(42, '#CCCD64'),
 *   background: setHue('244', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setHue(42, '#CCCD64')};
 *   background: ${setHue('244', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#cdae64";
 *   background: "rgba(107,100,205,0.7)";
 * }
 */

function setHue(hue, color) {
  return toColorString(_extends({}, parseToHsl(color), {
    hue: parseFloat(hue)
  }));
}

var curriedSetHue =
/*#__PURE__*/
curry(setHue);

/**
 * Sets the lightness of a color to the provided value. The lightness range can be
 * from 0 and 1.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setLightness(0.2, '#CCCD64'),
 *   background: setLightness('0.75', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setLightness(0.2, '#CCCD64')};
 *   background: ${setLightness('0.75', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#4d4d19";
 *   background: "rgba(223,224,159,0.7)";
 * }
 */

function setLightness(lightness, color) {
  return toColorString(_extends({}, parseToHsl(color), {
    lightness: parseFloat(lightness)
  }));
}

var curriedSetLightness =
/*#__PURE__*/
curry(setLightness);

/**
 * Sets the saturation of a color to the provided value. The lightness range can be
 * from 0 and 1.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setSaturation(0.2, '#CCCD64'),
 *   background: setSaturation('0.75', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setSaturation(0.2, '#CCCD64')};
 *   background: ${setSaturation('0.75', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#adad84";
 *   background: "rgba(228,229,76,0.7)";
 * }
 */

function setSaturation(saturation, color) {
  return toColorString(_extends({}, parseToHsl(color), {
    saturation: parseFloat(saturation)
  }));
}

var curriedSetSaturation =
/*#__PURE__*/
curry(setSaturation);

/**
 * Shades a color by mixing it with black. `shade` can produce
 * hue shifts, where as `darken` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: shade(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${shade(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#00003f";
 * }
 */

function shade(percentage, color) {
  return curriedMix(parseFloat(percentage), 'rgb(0, 0, 0)', color);
}

var curriedShade =
/*#__PURE__*/
curry(shade);

/**
 * Tints a color by mixing it with white. `tint` can produce
 * hue shifts, where as `lighten` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: tint(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${tint(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#bfbfff";
 * }
 */

function tint(percentage, color) {
  return curriedMix(parseFloat(percentage), 'rgb(255, 255, 255)', color);
}

var curriedTint =
/*#__PURE__*/
curry(tint);

/**
 * Decreases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: transparentize(0.1, '#fff');
 *   background: transparentize(0.2, 'hsl(0, 0%, 100%)'),
 *   background: transparentize('0.5', 'rgba(255, 0, 0, 0.8)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${transparentize(0.1, '#fff')};
 *   background: ${transparentize(0.2, 'hsl(0, 0%, 100%)')},
 *   background: ${transparentize('0.5', 'rgba(255, 0, 0, 0.8)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,255,255,0.9)";
 *   background: "rgba(255,255,255,0.8)";
 *   background: "rgba(255,0,0,0.3)";
 * }
 */

function transparentize(amount, color) {
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = _extends({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 - parseFloat(amount) * 100) / 100)
  });

  return rgba(colorWithAlpha);
}

var curriedTransparentize =
/*#__PURE__*/
curry(transparentize);

/**
 * Shorthand for easily setting the animation property. Allows either multiple arrays with animations
 * or a single animation spread over the arguments.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'animation': 'rotate 1s ease-in-out, colorchange 2s'
 * }
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...animation('rotate', '1s', 'ease-in-out')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${animation('rotate', '1s', 'ease-in-out')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'animation': 'rotate 1s ease-in-out'
 * }
 */
function animation() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  // Allow single or multiple animations passed
  var multiMode = Array.isArray(args[0]);

  if (!multiMode && args.length > 8) {
    throw new Error('The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation');
  }

  var code = args.map(function (arg) {
    if (multiMode && !Array.isArray(arg) || !multiMode && Array.isArray(arg)) {
      throw new Error("To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')");
    }

    if (Array.isArray(arg) && arg.length > 8) {
      throw new Error('The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation');
    }

    return Array.isArray(arg) ? arg.join(' ') : arg;
  }).join(', ');
  return {
    animation: code
  };
}

/**
 * Shorthand that accepts any number of backgroundImage values as parameters for creating a single background statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'backgroundImage': 'url("/image/background.jpg"), linear-gradient(red, green)'
 * }
 */
function backgroundImages() {
  for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  return {
    backgroundImage: properties.join(', ')
  };
}

/**
 * Shorthand that accepts any number of background values as parameters for creating a single background statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...backgrounds('url("/image/background.jpg")', 'linear-gradient(red, green)', 'center no-repeat')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${backgrounds('url("/image/background.jpg")', 'linear-gradient(red, green)', 'center no-repeat')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'background': 'url("/image/background.jpg"), linear-gradient(red, green), center no-repeat'
 * }
 */
function backgrounds() {
  for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  return {
    background: properties.join(', ')
  };
}

var sideMap = ['top', 'right', 'bottom', 'left'];
/**
 * Shorthand for the border property that splits out individual properties for use with tools like Fela and Styletron. A side keyword can optionally be passed to target only one side's border properties.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...border('1px', 'solid', 'red')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${border('1px', 'solid', 'red')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderColor': 'red',
 *   'borderStyle': 'solid',
 *   'borderWidth': `1px`,
 * }
 *
 * // Styles as object usage
 * const styles = {
 *   ...border('top', '1px', 'solid', 'red')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${border('top', '1px', 'solid', 'red')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopColor': 'red',
 *   'borderTopStyle': 'solid',
 *   'borderTopWidth': `1px`,
 * }
 */

function border(sideKeyword) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  if (typeof sideKeyword === 'string' && sideMap.indexOf(sideKeyword) >= 0) {
    var _ref;

    return _ref = {}, _ref["border" + capitalizeString(sideKeyword) + "Width"] = values[0], _ref["border" + capitalizeString(sideKeyword) + "Style"] = values[1], _ref["border" + capitalizeString(sideKeyword) + "Color"] = values[2], _ref;
  } else {
    values.unshift(sideKeyword);
    return {
      borderWidth: values[0],
      borderStyle: values[1],
      borderColor: values[2]
    };
  }
}

/**
 * Shorthand that accepts a value for side and a value for radius and applies the radius value to both corners of the side.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderRadius('top', '5px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderRadius('top', '5px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopRightRadius': '5px',
 *   'borderTopLeftRadius': '5px',
 * }
 */
function borderRadius(side, radius) {
  var uppercaseSide = capitalizeString(side);

  if (!radius && radius !== 0) {
    throw new Error('borderRadius expects a radius value as a string or number as the second argument.');
  }

  if (uppercaseSide === 'Top' || uppercaseSide === 'Bottom') {
    var _ref;

    return _ref = {}, _ref["border" + uppercaseSide + "RightRadius"] = radius, _ref["border" + uppercaseSide + "LeftRadius"] = radius, _ref;
  }

  if (uppercaseSide === 'Left' || uppercaseSide === 'Right') {
    var _ref2;

    return _ref2 = {}, _ref2["borderTop" + uppercaseSide + "Radius"] = radius, _ref2["borderBottom" + uppercaseSide + "Radius"] = radius, _ref2;
  }

  throw new Error('borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.');
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderStyle('solid', 'dashed', 'dotted', 'double')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderStyle('solid', 'dashed', 'dotted', 'double')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopStyle': 'solid',
 *   'borderRightStyle': 'dashed',
 *   'borderBottomStyle': 'dotted',
 *   'borderLeftStyle': 'double'
 * }
 */
function borderStyle() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['borderStyle'].concat(values));
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderWidth('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderWidth('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopWidth': '12px',
 *   'borderRightWidth': '24px',
 *   'borderBottomWidth': '36px',
 *   'borderLeftWidth': '48px'
 * }
 */
function borderWidth() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['borderWidth'].concat(values));
}

function generateSelectors(template, state) {
  var stateSuffix = state ? ":" + state : '';
  return template(stateSuffix);
}
/**
 * Function helper that adds an array of states to a template of selectors. Used in textInputs and buttons.
 * @private
 */


function statefulSelectors(states, template, stateMap) {
  if (!template) throw new Error('You must provide a template to this method.');
  if (states.length === 0) return generateSelectors(template, null);
  var selectors = [];

  for (var i = 0; i < states.length; i += 1) {
    if (stateMap && stateMap.indexOf(states[i]) < 0) {
      throw new Error('You passed an unsupported selector state to this method.');
    }

    selectors.push(generateSelectors(template, states[i]));
  }

  selectors = selectors.join(',');
  return selectors;
}

var stateMap = [undefined, null, 'active', 'focus', 'hover'];

function template(state) {
  return "button" + state + ",\n  input[type=\"button\"]" + state + ",\n  input[type=\"reset\"]" + state + ",\n  input[type=\"submit\"]" + state;
}
/**
 * Populates selectors that target all buttons. You can pass optional states to append to the selectors.
 * @example
 * // Styles as object usage
 * const styles = {
 *   [buttons('active')]: {
 *     'border': 'none'
 *   }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   > ${buttons('active')} {
 *     border: none;
 *   }
 * `
 *
 * // CSS in JS Output
 *
 *  'button:active,
 *  'input[type="button"]:active,
 *  'input[type=\"reset\"]:active,
 *  'input[type=\"submit\"]:active: {
 *   'border': 'none'
 * }
 */


function buttons() {
  for (var _len = arguments.length, states = new Array(_len), _key = 0; _key < _len; _key++) {
    states[_key] = arguments[_key];
  }

  return statefulSelectors(states, template, stateMap);
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...margin('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${margin('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'marginTop': '12px',
 *   'marginRight': '24px',
 *   'marginBottom': '36px',
 *   'marginLeft': '48px'
 * }
 */
function margin() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['margin'].concat(values));
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...padding('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${padding('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'paddingTop': '12px',
 *   'paddingRight': '24px',
 *   'paddingBottom': '36px',
 *   'paddingLeft': '48px'
 * }
 */
function padding() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['padding'].concat(values));
}

var positionMap$1 = ['absolute', 'fixed', 'relative', 'static', 'sticky'];
/**
 * Shorthand accepts up to five values, including null to skip a value, and maps them to their respective directions. The first value can optionally be a position keyword.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...position('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${position('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'top': '12px',
 *   'right': '24px',
 *   'bottom': '36px',
 *   'left': '48px'
 * }
 *
 * // Styles as object usage
 * const styles = {
 *   ...position('absolute', '12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${position('absolute', '12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'position': 'absolute',
 *   'top': '12px',
 *   'right': '24px',
 *   'bottom': '36px',
 *   'left': '48px'
 * }
 */

function position(positionKeyword) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  if (positionMap$1.indexOf(positionKeyword) >= 0) {
    return _extends({
      position: positionKeyword
    }, directionalProperty.apply(void 0, [''].concat(values)));
  } else {
    var firstValue = positionKeyword; // in this case position is actually the first value

    return directionalProperty.apply(void 0, ['', firstValue].concat(values));
  }
}

/**
 * Shorthand to set the height and width properties in a single statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...size('300px', '250px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${size('300px', '250px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'height': '300px',
 *   'width': '250px',
 * }
 */
function size(height, width) {
  if (width === void 0) {
    width = height;
  }

  return {
    height: height,
    width: width
  };
}

var stateMap$1 = [undefined, null, 'active', 'focus', 'hover'];

function template$1(state) {
  return "input[type=\"color\"]" + state + ",\n    input[type=\"date\"]" + state + ",\n    input[type=\"datetime\"]" + state + ",\n    input[type=\"datetime-local\"]" + state + ",\n    input[type=\"email\"]" + state + ",\n    input[type=\"month\"]" + state + ",\n    input[type=\"number\"]" + state + ",\n    input[type=\"password\"]" + state + ",\n    input[type=\"search\"]" + state + ",\n    input[type=\"tel\"]" + state + ",\n    input[type=\"text\"]" + state + ",\n    input[type=\"time\"]" + state + ",\n    input[type=\"url\"]" + state + ",\n    input[type=\"week\"]" + state + ",\n    input:not([type])" + state + ",\n    textarea" + state;
}
/**
 * Populates selectors that target all text inputs. You can pass optional states to append to the selectors.
 * @example
 * // Styles as object usage
 * const styles = {
 *   [textInputs('active')]: {
 *     'border': 'none'
 *   }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   > ${textInputs('active')} {
 *     border: none;
 *   }
 * `
 *
 * // CSS in JS Output
 *
 *  'input[type="color"]:active,
 *  input[type="date"]:active,
 *  input[type="datetime"]:active,
 *  input[type="datetime-local"]:active,
 *  input[type="email"]:active,
 *  input[type="month"]:active,
 *  input[type="number"]:active,
 *  input[type="password"]:active,
 *  input[type="search"]:active,
 *  input[type="tel"]:active,
 *  input[type="text"]:active,
 *  input[type="time"]:active,
 *  input[type="url"]:active,
 *  input[type="week"]:active,
 *  input:not([type]):active,
 *  textarea:active': {
 *   'border': 'none'
 * }
 */


function textInputs() {
  for (var _len = arguments.length, states = new Array(_len), _key = 0; _key < _len; _key++) {
    states[_key] = arguments[_key];
  }

  return statefulSelectors(states, template$1, stateMap$1);
}

/**
 * Accepts any number of transition values as parameters for creating a single transition statement. You may also pass an array of properties as the first parameter that you would like to apply the same tranisition values to (second parameter).
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s'),
 *   ...transitions(['color', 'background-color'], '2.0s ease-in 2s')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s')};
 *   ${transitions(['color', 'background-color'], '2.0s ease-in 2s'),};
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'transition': 'opacity 1.0s ease-in 0s, width 2.0s ease-in 2s'
 *   'transition': 'color 2.0s ease-in 2s, background-color 2.0s ease-in 2s',
 * }
 */
function transitions() {
  for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  if (Array.isArray(properties[0]) && properties.length === 2) {
    var value = properties[1];

    if (typeof value !== 'string') {
      throw new Error('Property must be a string value.');
    }

    var transitionsString = properties[0].map(function (property) {
      return property + " " + value;
    }).join(', ');
    return {
      transition: transitionsString
    };
  } else {
    return {
      transition: properties.join(', ')
    };
  }
}

var polished = /*#__PURE__*/Object.freeze({
  adjustHue: curriedAdjustHue,
  animation: animation,
  backgroundImages: backgroundImages,
  backgrounds: backgrounds,
  between: between,
  border: border,
  borderColor: borderColor,
  borderRadius: borderRadius,
  borderStyle: borderStyle,
  borderWidth: borderWidth,
  buttons: buttons,
  clearFix: clearFix,
  complement: complement,
  cover: cover,
  darken: curriedDarken,
  desaturate: curriedDesaturate,
  directionalProperty: directionalProperty,
  ellipsis: ellipsis,
  em: em,
  fluidRange: fluidRange,
  fontFace: fontFace,
  getLuminance: getLuminance,
  getValueAndUnit: getValueAndUnit,
  grayscale: grayscale,
  invert: invert,
  hideText: hideText,
  hideVisually: hideVisually,
  hiDPI: hiDPI,
  hsl: hsl,
  hsla: hsla,
  lighten: curriedLighten,
  margin: margin,
  mix: curriedMix,
  modularScale: modularScale,
  normalize: normalize,
  opacify: curriedOpacify,
  padding: padding,
  parseToHsl: parseToHsl,
  parseToRgb: parseToRgb,
  placeholder: placeholder,
  position: position,
  radialGradient: radialGradient,
  readableColor: curriedReadableColor,
  rem: rem,
  retinaImage: retinaImage,
  rgb: rgb,
  rgba: rgba,
  saturate: curriedSaturate,
  selection: selection,
  setHue: curriedSetHue,
  setLightness: curriedSetLightness,
  setSaturation: curriedSetSaturation,
  shade: curriedShade,
  size: size,
  stripUnit: stripUnit,
  textInputs: textInputs,
  timingFunctions: timingFunctions,
  tint: curriedTint,
  toColorString: toColorString,
  transitions: transitions,
  transparentize: curriedTransparentize,
  triangle: triangle,
  wordWrap: wordWrap
});

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty$1(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _nonIterableRest$1();
}

function _toConsumableArray$1(arr) {
  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _nonIterableSpread$1();
}

function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray$1(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit$1(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _typeof$1(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof$1 = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$1(obj);
}

/*
globals
Symbol
*/
var isString = function isString(i) {
  return typeof i === "string" || i instanceof String;
};
var isObject = function isObject(i) {
  if (i === null) {
    return false;
  }

  return typeof i === "function" || _typeof$1(i) === "object";
};
var isFunction = function isFunction(i) {
  return i && {}.toString.call(i) === "[object Function]";
};
var isArray = function isArray(i) {
  return Array.isArray(i);
};
var isColor = function isColor(input) {
  var re = /#(?:[a-f\d]{3}){1,2}\b|rgb\((?:(?:\s*0*(?:25[0-5]|2[0-4]\d|1?\d?\d)\s*,){2}\s*0*(?:25[0-5]|2[0-4]\d|1?\d?\d)|\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%(?:\s*,\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%){2})\s*\)|hsl\(\s*0*(?:360|3[0-5]\d|[12]?\d?\d)\s*(?:,\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%\s*){2}\)|(?:rgba\((?:(?:\s*0*(?:25[0-5]|2[0-4]\d|1?\d?\d)\s*,){3}|(?:\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%\s*,){3})|hsla\(\s*0*(?:360|3[0-5]\d|[12]?\d?\d)\s*(?:,\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%\s*){2},)\s*0*(?:1|0(?:\.\d+)?)\s*\)/;
  return re.test(input);
};

/*
  REF HELPER
  ref({a:{b:1}},"a.b") >> returns 1
*/

var ref = (function (obj, str) {
  if (isString(str) && isObject(obj)) {
    str = str.split(".");

    for (var i = 0; i < str.length; i++) {
      obj = obj[str[i]] || {
        empty: true
      };
    }

    if (obj && obj.empty) return null;
    return obj;
  }

  return null;
});

var StyledLib =
/*#__PURE__*/
function () {
  function StyledLib(_ref) {
    var _this = this;

    var _ref$theme = _ref.theme,
        theme = _ref$theme === void 0 ? {} : _ref$theme,
        _ref$options = _ref.options,
        options = _ref$options === void 0 ? {} : _ref$options,
        _ref$mixins = _ref.mixins,
        mixins = _ref$mixins === void 0 ? {} : _ref$mixins,
        _ref$debug = _ref.debug,
        debug = _ref$debug === void 0 ? false : _ref$debug;

    _classCallCheck$1(this, StyledLib);

    this.colorAPIsWithValue = ["setHue", "setLightness", "setSaturation", "adjustHue", "darken", "lighten", "opacify", "transparentize", "tint", "shade", "desaturate", "saturate"];
    this.colorAPIs = ["complement", "getLuminance", "grayscale", "invert"];
    this.theme = theme;
    this.options = {
      // typography options
      TYPOGRAPHY: _objectSpread$1({
        themeKey: "font"
      }, options.TYPOGRAPHY),
      // variant/color options
      VARIANT: _objectSpread$1({
        key: "variant",
        themeKey: "colors",
        default: "primary",
        options: ["light", "lighter", "dark", "darker", "contrast"],
        asProp: true,
        optionsAsProp: true,
        contrastKey: "contrast",
        mainKey: "main"
      }, options.VARIANT),
      // depth options
      DEPTH: _objectSpread$1({
        key: "depth",
        themeKey: "depth",
        default: "base",
        asProp: true,
        options: ["base", "flat", "raised", "overlay", "superior", "declaration"]
      }, options.DEPTH),
      // size options
      SIZE: _objectSpread$1({
        key: "size",
        asProp: true,
        options: ["micro", "small", "normal", "medium", "large", "huge", "extreme"],
        default: "normal"
      }, options.SIZE),
      // unit options
      UNIT: _objectSpread$1({
        default: "px"
      }, options.UNIT),
      // prop options
      UIPROPS: _toConsumableArray$1(options.UIPROPS),
      // OPERATORS
      OPERATORS: _objectSpread$1({
        scale: " as ",
        unit: "|",
        size: ":",
        nin: " nin ",
        in: " in ",
        ne: " != ",
        eq: " == ",
        gt: " > ",
        gte: " >= ",
        lt: " < ",
        lte: " <= "
      }, options.OPERATORS)
    }; //
    // this.typography = this.typography.bind(this);
    // this.gutter = this.gutter.bind(this);
    // this.wrapper = this.wrapper.bind(this);

    this.uiProps = this.uiProps.bind(this);
    this.sizer = this.sizer.bind(this);
    this.get = this.get.bind(this);
    this.prop = this.prop.bind(this);
    this.unit = this.unit.bind(this);
    this.size = this.size.bind(this);
    this.scale = this.scale.bind(this);
    this.match = this.match.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.cond = this.cond.bind(this);

    if (debug) {
      // eslint-disable-next-line
      console.log("RESERVED KEYS FOR UI ELEMENETS", Object.keys(this.uiProps({})));
    }

    this.mixins = {};
    Object.keys(mixins).forEach(function (m) {
      if (isFunction(mixins[m])) {
        _this.mixins[m] = mixins[m](_this);
      } else {
        _this.mixins[m] = mixins[m];
      }
    });
  }
  /*
    EXPOSE HELPERS
  */


  _createClass$1(StyledLib, [{
    key: "sizer",

    /*
      SIZER
      {sizer("large",2) >> "extreme"}
    */
    value: function sizer(size$$1, change) {
      var SIZE = this.options.SIZE;
      var idx = SIZE.options.indexOf(size$$1);

      if (idx > -1) {
        if (change > 0) {
          return idx + change >= SIZE.options.length ? SIZE.options[SIZE.options.length - 1] : SIZE.options[idx + change];
        } else {
          return idx - change < 0 ? SIZE.options[0] : SIZE.options[idx - change];
        }
      }

      return size$$1;
    }
    /*
      UI PROPS GENERATOR
      {...uiProps(this.props)}
    */

  }, {
    key: "uiProps",
    value: function uiProps(props) {
      var otherKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var ui = {};
      var _this$options = this.options,
          UIPROPS = _this$options.UIPROPS,
          VARIANT = _this$options.VARIANT,
          DEPTH = _this$options.DEPTH,
          SIZE = _this$options.SIZE;

      var keys = _toConsumableArray$1(UIPROPS).concat([VARIANT.key, SIZE.key, DEPTH.key], _toConsumableArray$1(otherKeys), ["gutter"]);

      if (VARIANT.asProp) {
        keys = _toConsumableArray$1(keys).concat(_toConsumableArray$1(Object.keys(this.theme[VARIANT.themeKey])));
      }

      if (VARIANT.optionsAsProp) {
        keys = _toConsumableArray$1(keys).concat(_toConsumableArray$1(VARIANT.options));
      }

      if (SIZE.asProp) {
        keys = _toConsumableArray$1(keys).concat(_toConsumableArray$1(SIZE.options));
      }

      if (DEPTH.asProp) {
        keys = _toConsumableArray$1(keys).concat(_toConsumableArray$1(DEPTH.options));
      }

      keys.forEach(function (key) {
        ui[key] = props[key];
      });
      return ui;
    }
    /*
      GET HELPER
      ${get`spacing.normal`}
    */

  }, {
    key: "get",
    value: function get(v, v2) {
      var variable = v;
      if (isArray(variable)) variable = variable[0];
      var variable2 = v2;
      if (isArray(variable2)) variable2 = variable2[0];
      return function (p) {
        if (variable2) {
          if (isFunction(variable2)) {
            return ref(ref(p.theme, variable), variable2(p));
          } else {
            return ref(ref(p.theme, variable), variable2);
          }
        } else {
          return ref(p.theme, variable);
        }
      };
    }
    /*
      UNIT HELPER
      ${unit(fn,"px")}
    */

  }, {
    key: "unit",
    value: function unit(fn, _unit) {
      var UNIT = this.options.UNIT;
      return function (p) {
        return "".concat(fn(p)).concat(_unit || UNIT.default);
      };
    }
    /*
      PROP HELPER
      ${prop(`overflow`)}
    */

  }, {
    key: "prop",
    value: function prop(k) {
      var key = k;
      if (isArray(k)) key = k[0];
      return function (p) {
        return ref(p, key);
      };
    }
    /*
      VARIANT
      ${variant.main} >> active variant
      ${variant.get("primary","light")}
      ${variant.get`primary.light`}
      ${variant.opacify(0.1)} >> active variant
      ${variant.opacify(0.1, "positive")}
    */

  }, {
    key: "size",

    /*
      SIZE
      ${size`font.default.height`} >> active size
      ${size`font.default:line.height`} >> active size
    */
    value: function size$$1(key) {
      var _this2 = this;

      var _this$options2 = this.options,
          OPERATORS = _this$options2.OPERATORS,
          SIZE = _this$options2.SIZE;
      var k = key;
      if (isArray(k)) k = k[0];
      return function (p) {
        var x = k.split(".");
        var y = k.split(OPERATORS.size);
        var size$$1 = p.size || SIZE.default; // allow sizes as props on component

        if (SIZE.asProp) {
          SIZE.options.forEach(function (v) {
            if (p[v]) size$$1 = v;
          });
        }

        var str;

        if (y.length == 1) {
          if (x.length > 1) {
            var end = x[x.length - 1];
            var start = x.join(".").replace(".".concat(end), "");
            str = "".concat(start, ".").concat(size$$1, ".").concat(end);
          } else {
            str = "".concat(k, ".").concat(size$$1);
          }
        } else {
          str = "".concat(y[0], ".").concat(size$$1, ".").concat(y[1]);
        }

        var unit = "";

        _this2.unitOptions.forEach(function (i) {
          if (str.indexOf(i) > -1) unit = i.replace("|", "");
          str = str.replace(i, "");
        });

        return "".concat(ref(p.theme, str)).concat(unit);
      };
    }
    /*
      SCALE
      ${scale`padding as spacing`} >> active size
    */

  }, {
    key: "scale",
    value: function scale(key) {
      var _this3 = this;

      var _this$options3 = this.options,
          OPERATORS = _this$options3.OPERATORS,
          SIZE = _this$options3.SIZE;
      var k = key;
      if (isArray(k)) k = k[0];
      return function (p) {
        var x = k.split(OPERATORS.scale);
        var size$$1 = p[x[0]] || SIZE.default;
        var str = "".concat(x[1], ".").concat(size$$1);
        var unit = "";

        _this3.unitOptions.forEach(function (i) {
          if (str.indexOf(i) > -1) unit = i.replace("|", "");
          str = str.replace(i, "");
        });

        return "".concat(ref(p.theme, str)).concat(unit);
      };
    }
    /*
      IS HELPER
      ${is.eq("size","normal")}
    */

  }, {
    key: "match",

    /*
      MATCH HELPER FOR OR, AND & COND OPERATOR
    */
    value: function match(c) {
      var _this4 = this;

      var OPERATORS = this.options.OPERATORS;
      var cond = c;
      if (isArray(cond)) cond = c[0];
      return function (p) {
        var matched; // run function if value is function

        if (isFunction(cond)) matched = cond(p); // check with is.set if value is string

        if (isString(cond)) {
          if (cond.includes(OPERATORS.nin)) {
            var _cond$split = cond.split(OPERATORS.nin),
                _cond$split2 = _slicedToArray$1(_cond$split, 2),
                k = _cond$split2[0],
                v = _cond$split2[1];

            matched = _this4.is.nin(k, v)(p);
          } else if (cond.includes(OPERATORS.in)) {
            var _cond$split3 = cond.split(OPERATORS.in),
                _cond$split4 = _slicedToArray$1(_cond$split3, 2),
                _k = _cond$split4[0],
                _v = _cond$split4[1];

            matched = _this4.is.in(_k, _v)(p);
          } else if (cond.includes(OPERATORS.ne)) {
            var _cond$split5 = cond.split(OPERATORS.ne),
                _cond$split6 = _slicedToArray$1(_cond$split5, 2),
                _k2 = _cond$split6[0],
                _v2 = _cond$split6[1];

            matched = _this4.is.ne(_k2, _v2)(p);
          } else if (cond.includes(OPERATORS.eq)) {
            var _cond$split7 = cond.split(OPERATORS.eq),
                _cond$split8 = _slicedToArray$1(_cond$split7, 2),
                _k3 = _cond$split8[0],
                _v3 = _cond$split8[1];

            matched = _this4.is.eq(_k3, _v3)(p);
          } else if (cond.includes(OPERATORS.gt)) {
            var _cond$split9 = cond.split(OPERATORS.gt),
                _cond$split10 = _slicedToArray$1(_cond$split9, 2),
                _k4 = _cond$split10[0],
                _v4 = _cond$split10[1];

            matched = _this4.is.gt(_k4, _v4)(p);
          } else if (cond.includes(OPERATORS.gte)) {
            var _cond$split11 = cond.split(OPERATORS.gte),
                _cond$split12 = _slicedToArray$1(_cond$split11, 2),
                _k5 = _cond$split12[0],
                _v5 = _cond$split12[1];

            matched = _this4.is.gte(_k5, _v5)(p);
          } else if (cond.includes(OPERATORS.lt)) {
            var _cond$split13 = cond.split(OPERATORS.lt),
                _cond$split14 = _slicedToArray$1(_cond$split13, 2),
                _k6 = _cond$split14[0],
                _v6 = _cond$split14[1];

            matched = _this4.is.lt(_k6, _v6)(p);
          } else if (cond.includes(OPERATORS.lte)) {
            var _cond$split15 = cond.split(OPERATORS.lte),
                _cond$split16 = _slicedToArray$1(_cond$split15, 2),
                _k7 = _cond$split16[0],
                _v7 = _cond$split16[1];

            matched = _this4.is.lte(_k7, _v7)(p);
          } else if (cond.substr(0, 2) == "!!") {
            var _k8 = cond.replace("!!", "");

            matched = _this4.is.eq(_k8, false)(p);
          } else if (cond.substr(0, 1) == "!") {
            var _k9 = cond.replace("!", "");

            matched = _this4.is.nset(_k9)(p);
          } else {
            matched = _this4.is.set(cond)(p);
          }
        }

        return matched;
      };
    }
    /*
      OR HELPER
      ${or(is.eq("size","normal"),is.set("ghost"))}
    */

  }, {
    key: "or",
    value: function or() {
      var _this5 = this;

      for (var _len = arguments.length, conds = new Array(_len), _key = 0; _key < _len; _key++) {
        conds[_key] = arguments[_key];
      }

      return function (p) {
        var passed = false;

        if (conds && conds.length) {
          conds.forEach(function (cond) {
            var matched = _this5.match(cond)(p);

            if (matched) {
              passed = true;
            }
          });
        }

        return passed;
      };
    }
    /*
      AND HELPER
      ${or(is.eq("size","normal"),is.set("ghost"))}
    */

  }, {
    key: "and",
    value: function and() {
      var _this6 = this;

      for (var _len2 = arguments.length, conds = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        conds[_key2] = arguments[_key2];
      }

      return function (p) {
        var passed = true;

        if (conds && conds.length) {
          conds.forEach(function (cond) {
            var matched = _this6.match(cond)(p);

            if (!matched) {
              passed = false;
            }
          });
        }

        return passed;
      };
    }
    /*
      CONDTION HELPER
      ${cond({if:(p)=>{},then:(p)=>{},else:(p)=>{}})}
    */

  }, {
    key: "cond",
    value: function cond(c) {
      var _this7 = this;

      return function (p) {
        var matched = _this7.match(c.if)(p);

        if (matched) {
          if (c.then) {
            if (isFunction(c.then)) {
              return c.then(p);
            } else {
              return c.then;
            }
          }
        } else {
          if (c.else) {
            if (isFunction(c.else)) {
              return c.else(p);
            } else {
              return c.else;
            }
          }
        }
      };
    }
  }, {
    key: "helpers",
    get: function get() {
      return _objectSpread$1({}, this.mixins, {
        // theme
        theme: this.theme,
        // css helpers
        // typography: this.typography,
        // gutter: this.gutter,
        // wrapper: this.wrapper,
        // component helpers
        uiProps: this.uiProps,
        sizer: this.sizer,
        // getters
        get: this.get,
        prop: this.prop,
        // theming helpers
        variant: this.variant,
        depth: this.depth,
        size: this.size,
        scale: this.scale,
        unit: this.unit,
        // condition helpers
        match: this.match,
        is: this.is,
        or: this.or,
        and: this.and,
        cond: this.cond
      });
    }
    /*
      UNIT OPTIONS
    */

  }, {
    key: "unitOptions",
    get: function get() {
      var OPERATORS = this.options.OPERATORS;
      return ["".concat(OPERATORS.unit, "%"), "".concat(OPERATORS.unit, "cm"), "".concat(OPERATORS.unit, "em"), "".concat(OPERATORS.unit, "ex"), "".concat(OPERATORS.unit, "in"), "".concat(OPERATORS.unit, "mm"), "".concat(OPERATORS.unit, "pc"), "".concat(OPERATORS.unit, "pt"), "".concat(OPERATORS.unit, "px")];
    }
  }, {
    key: "variant",
    get: function get() {
      var VARIANT = this.options.VARIANT;
      var methods = {
        // generic color getter
        get: function get(x, key, force) {
          var variant = x;
          if (isArray(x)) variant = x[0];
          return function (p) {
            var schema = p.theme[VARIANT.themeKey];
            var activeVariant = VARIANT.default; // allow variant depths as props on component

            if (!force && VARIANT.optionsAsProp && key != VARIANT.contrastKey) {
              VARIANT.options.forEach(function (k) {
                if (p[k]) key = k;
              });
            } // allow variants as props on component


            if (VARIANT.asProp) {
              Object.keys(schema).forEach(function (v) {
                if (p[v]) {
                  activeVariant = v;
                }
              });
            } // direct usage


            var x = (variant || "").split(".");

            if (x.length > 1) {
              return ref(schema, variant);
            }

            if (variant && schema[variant]) {
              // variant with key
              activeVariant = variant;
            } else if (p[VARIANT.key] && schema[p[VARIANT.key]]) {
              // variant from theme and component with key
              activeVariant = p[VARIANT.key];
            }

            return ref(schema[activeVariant], key);
          };
        }
      }; // variant main helper

      methods[VARIANT.mainKey] = function (p) {
        return methods.get(null, VARIANT.mainKey)(p);
      }; // variant depth helpers


      VARIANT.options.forEach(function (k) {
        methods[k] = function (p) {
          return methods.get(null, k)(p);
        };
      }); // allow polished methods on selected variants

      this.colorAPIsWithValue.forEach(function (func) {
        methods[func] = function (value, variant, key) {
          return function (p) {
            return polished[func](value, methods.get(variant, key)(p));
          };
        };
      });
      this.colorAPIs.forEach(function (func) {
        methods[func] = function (variant, key) {
          return function (p) {
            return polished[func](methods.get(variant, key)(p));
          };
        };
      });
      return methods;
    }
    /*
      DEPTH
      ${depth.main} >> active depth
      ${depth.get("base")} >> depth getter
      ${depth.base} >> depth direct helper
    */

  }, {
    key: "depth",
    get: function get() {
      var DEPTH = this.options.DEPTH;
      var d = {
        get: function get(key) {
          return function (p) {
            var options = p.theme[DEPTH.themeKey];

            if (!key) {
              DEPTH.options.forEach(function (k) {
                if (p[k]) key = k;
              });
              if (p[DEPTH.key]) key = p[DEPTH.key];
            }

            if (!key) {
              key = DEPTH.default;
            }

            return ref(options, key);
          };
        }
      }; // depth main helper

      d.active = function (p) {
        return d.get()(p);
      }; // depth helpers


      DEPTH.options.forEach(function (k) {
        d[k] = function (p) {
          return d.get(k)(p);
        };
      });
      return d;
    }
  }, {
    key: "is",
    get: function get() {
      return {
        nset: function nset(k) {
          return function (p) {
            return !ref(p, k);
          };
        },
        set: function set(k) {
          return function (p) {
            return ref(p, k);
          };
        },
        in: function _in(k, v) {
          return function (p) {
            return p[k] && p[k].length && p[k].includes(v);
          };
        },
        nin: function nin(k, v) {
          return function (p) {
            return !p[k] || p[k] && p[k].length && !p[k].includes(v);
          };
        },
        eq: function eq(k, v) {
          return function (p) {
            return p[k] == v;
          };
        },
        ne: function ne(k, v) {
          return function (p) {
            return p[k] != v;
          };
        },
        lt: function lt(k, v) {
          return function (p) {
            return p[k] < v;
          };
        },
        lte: function lte(k, v) {
          return function (p) {
            return p[k] <= v;
          };
        },
        gt: function gt(k, v) {
          return function (p) {
            return p[k] > v;
          };
        },
        gte: function gte(k, v) {
          return function (p) {
            return p[k] >= v;
          };
        },
        color: function color(k) {
          return function (p) {
            return isColor(p[k]);
          };
        }
      };
    }
  }]);

  return StyledLib;
}();

var userSelect = (function () {
  return function () {
    var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "none";
    return "\n      -webkit-touch-callout: ".concat(val, ";\n        -webkit-user-select: ").concat(val, ";\n         -khtml-user-select: ").concat(val, ";\n           -moz-user-select: ").concat(val, ";\n            -ms-user-select: ").concat(val, ";\n                user-select: ").concat(val, ";\n    ");
  };
});



var allMixins = /*#__PURE__*/Object.freeze({
  userSelect: userSelect
});

var vars = {
  colors: {
    white: {
      lighter: "#ffffff",
      light: "#f9f9f9",
      main: "#f3f3f3",
      dark: "#eeeeee",
      darker: "#eaeaea",
      contrast: "#222"
    },
    black: {
      lighter: "#000",
      light: "#111",
      main: "#222",
      dark: "#333",
      darker: "#444",
      contrast: "#f3f3f3"
    }
  },
  bg: {
    dark: 'url("data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20200%20200%22%3E%3Cg%3E%3Cpath%20fill=%22#777%22%20d=%22M0%200h100v100H0zm100%20100h100v100H100z%22/%3E%3Cpath%20fill=%22#555%22%20d=%22M100%200h100v100H100zM0%20100h100v100H0z%22/%3E%3C/g%3E%3C/svg%3E")',
    light: 'url("data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20200%20200%22%3E%3Cg%3E%3Cpath%20fill=%22#eee%22%20d=%22M0%200h100v100H0zm100%20100h100v100H100z%22/%3E%3Cpath%20fill=%22#fff%22%20d=%22M100%200h100v100H100zM0%20100h100v100H0z%22/%3E%3C/g%3E%3C/svg%3E")',
    black: "#000"
  },
  panel: {
    normal: {
      height: 320,
      radius: 8,
      width: 256,
      margin: 8,
      shadow: "0px 10px 10px rgba(0, 0, 0, 0.1)",
      minimize: {
        size: 8,
        padding: 4,
        radius: 2
      }
    }
  },
  item: {
    normal: {
      height: 44,
      padding: 8,
      title: {
        size: 12
      }
    }
  },
  button: {
    normal: {
      margin: 6,
      padding: 8,
      height: 32,
      icon: {
        size: 16
      }
    }
  },
  input: {
    normal: {
      padding: 8,
      margin: 8,
      height: 44,
      radius: 2,
      handle: 16,
      title: {
        size: 10,
        height: 10
      },
      value: {
        size: 12,
        height: 16
      }
    }
  },
  docs: {
    radius: {
      small: 2
    },
    padding: 8,
    spacing: {
      normal: 8,
      small: 4
    },
    body: {
      family: "",
      color: "#000",
      weight: 600,
      size: 12,
      height: 24
    },
    h1: {
      size: 32,
      height: 48,
      weight: 600
    },
    h2: {
      size: 28,
      height: 36,
      weight: 600
    },
    h3: {
      size: 24,
      height: 32,
      weight: 600
    },
    h4: {
      size: 20,
      height: 28,
      weight: 600
    },
    h5: {
      size: 16,
      height: 24,
      weight: 600
    },
    h6: {
      size: 14,
      height: 24,
      weight: 600
    },
    code: {
      background: "rgba(0,0,0,0.05)",
      color: "#000",
      family: "monospace",
      weight: 400,
      size: 12,
      height: 16
    },
    link: {
      normal: {
        color: "#3A88FD"
      },
      hover: {
        color: "#2873E2"
      }
    }
  }
};

var Lib = new StyledLib({
  theme: vars,
  options: {
    UIPROPS: ["color", "passive"],
    VARIANT: {
      default: "white"
    }
  },
  mixins: allMixins
});
var theme = Lib.theme;
var UI = _objectSpread({
  Instance: Lib,
  theme: Lib.theme
}, Lib.helpers);

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n\n  ", ";\n\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n\n  *:focus {\n    outline: none;\n  }\n\n  html {\n    box-sizing: border-box;\n    margin: 0;\n  }\n\n  body {\n\n    margin: 0;\n  }\n\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var DocumentStyle = styled.createGlobalStyle(_templateObject$1(), styledReset.reset);

function _typeof$2(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$2 = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof$2 = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$2(obj);
}

/*
globals
Symbol
*/
var isString$1 = function isString(i) {
  return typeof i === "string" || i instanceof String;
};
var isObject$1 = function isObject(i) {
  if (i === null) {
    return false;
  }

  return typeof i === "function" || _typeof$2(i) === "object";
};
var isDate = function isDate(value) {
  var getDay = Date.prototype.getDay;

  var tryDateObject = function tryDateGetDayCall(value) {
    try {
      getDay.call(value);
      return true;
    } catch (e) {
      return false;
    }
  };

  var toStr = Object.prototype.toString;
  var dateClass = "[object Date]";
  var hasToStringTag = typeof Symbol === "function" && _typeof$2(Symbol.toStringTag) === "symbol";

  if (_typeof$2(value) !== "object" || value === null) {
    return false;
  }

  return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};
var isFunction$1 = function isFunction(i) {
  return i && {}.toString.call(i) === "[object Function]";
};
var isArray$1 = function isArray(i) {
  return Array.isArray(i);
};
var isFloat = function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
};
var isInteger = function isInteger(n) {
  return Number(n) === n && n % 1 === 0;
};
var isNumber = function isNumber(n) {
  return isFloat(n) || isInteger(n);
};
var isEmpty = function isEmpty(value) {
  if (value === null) return true;
  if (value === undefined) return true;
  if (isObject$1(value) && !Object.keys(value).length) return true;
  if (!value.length) return true;
};
var isRegExp = function isRegExp(input) {
  return Object.prototype.toString.call(input) === "[object RegExp]";
};
var isBoolean = function isBoolean(input) {
  return input === true || input === false;
};
var isISO8601 = function isISO8601(input) {
  var re = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$/;
  return re.test(input);
};
var isColor$1 = function isColor(input) {
  var re = /#(?:[a-f\d]{3}){1,2}\b|rgb\((?:(?:\s*0*(?:25[0-5]|2[0-4]\d|1?\d?\d)\s*,){2}\s*0*(?:25[0-5]|2[0-4]\d|1?\d?\d)|\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%(?:\s*,\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%){2})\s*\)|hsl\(\s*0*(?:360|3[0-5]\d|[12]?\d?\d)\s*(?:,\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%\s*){2}\)|(?:rgba\((?:(?:\s*0*(?:25[0-5]|2[0-4]\d|1?\d?\d)\s*,){3}|(?:\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%\s*,){3})|hsla\(\s*0*(?:360|3[0-5]\d|[12]?\d?\d)\s*(?:,\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%\s*){2},)\s*0*(?:1|0(?:\.\d+)?)\s*\)/;
  return re.test(input);
};
var index = {
  string: isString$1,
  object: isObject$1,
  date: isDate,
  fn: isFunction$1,
  array: isArray$1,
  float: isFloat,
  integer: isInteger,
  number: isNumber,
  regexp: isRegExp,
  boolean: isBoolean,
  empty: isEmpty,
  ISO8601: isISO8601,
  color: isColor$1
};

var MAX_DEPTH = 20;

function handlePrimitive(x) {
  var t = _typeof(x);

  if (x === null || x === undefined || t === "number" || t === "boolean" || index.regexp(x)) {
    return String(x);
  }

  return null;
}

function handleFunction(x) {
  if (typeof x === "function") {
    return String(x).replace(/{[\s\S]*}/, "=> { return }").replace(/.*\(/, "(");
  }

  return null;
}

function handleString(x) {
  if (typeof x === "string") {
    return "\"".concat(x, "\"");
  }

  return null;
}

function handleDate(x) {
  if (x instanceof Date) {
    return "Date('".concat(x.toISOString(), "')");
  }

  return null;
}

function handleArray(x, next, seen) {
  if (Array.isArray(x)) {
    if (x.length === 0) {
      return "[]";
    }

    seen.push(x);
    var result = "[".concat(x.map(next).join(", "), "]");
    seen.pop();
    return result;
  }

  return null;
}

function wrapJsxProp(x) {
  return x[0] === '"' ? x : "{".concat(x, "}");
}

function wrapJsxChildren(x) {
  if (x[0] === "<") {
    return x;
  }

  if (x[0] === '"') {
    return x.slice(1, x.length - 1);
  }

  return "{".concat(x, "}");
}

function handleJsx(x, next, seen, indent) {
  if (React__default.isValidElement(x)) {
    var lastIndent = indent === "" ? "" : indent.replace(/\s\s$/, "");
    var name = typeof x.type === "string" ? x.type : x.type.displayName || x.type.name || "Unknown";
    var defaultProps = x.type && typeof x.type.getDefaultProps === "function" ? x.type.getDefaultProps() : {};
    var keys = Object.keys(x.props).filter(function (key) {
      return defaultProps[key] !== x.props[key];
    });
    var props = "";
    var children = null;

    if (keys.length > 0) {
      seen.push(x);

      var _keys = keys.filter(function (key) {
        return key !== "children";
      });

      if (_keys.length > 0) {
        var joint = indent === "" ? " " : indent;
        props = _keys.map(function (key) {
          var val = x.props[key];
          return val === true ? key : "".concat(key, "=").concat(wrapJsxProp(next(val)));
        });
        props = "".concat(joint).concat(props.join(joint)).concat(lastIndent);
      }

      if (keys.indexOf("children") !== -1) {
        if (Array.isArray(x.props.children)) {
          children = x.props.children.map(function (c) {
            return wrapJsxChildren(next(c));
          }).join("".concat(indent));
        } else {
          children = wrapJsxChildren(next(x.props.children));
        }
      }

      seen.pop();
    }

    var ending = children === null ? "/>" : ">".concat(indent).concat(children).concat(lastIndent, "</").concat(name, ">");
    return "<".concat(name).concat(props).concat(ending);
  }

  return null;
}

function handleObject(x, next, seen, indent) {
  if (index.object(x)) {
    var keys = Object.keys(x);

    if (keys.length === 0) {
      return "{}";
    }

    seen.push(x);
    var joint = indent === "" ? ", " : ",".concat(indent);
    var lastIndent = indent === "" ? "" : indent.replace(/\s\s$/, "");
    var body = keys.map(function (key) {
      return "".concat(key, ": ").concat(next(x[key]));
    }).join(joint);
    var result = "{".concat(indent).concat(body).concat(lastIndent, "}");
    seen.pop();
    return result;
  }

  return null;
}

function handleUnknown() {
  return "__UnknownType";
}

var handlers = [handlePrimitive, handleFunction, handleString, handleDate, handleArray, handleJsx, handleObject, handleUnknown];
function stringify(_x, opts) {
  var seen = [];

  function s(x) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$indent = _ref.indent,
        indent = _ref$indent === void 0 ? "\n  " : _ref$indent,
        _ref$depthLim = _ref.depthLim,
        depthLim = _ref$depthLim === void 0 ? 0 : _ref$depthLim,
        _ref$depth = _ref.depth,
        depth = _ref$depth === void 0 ? 0 : _ref$depth;

    if (depth > MAX_DEPTH) {
      return "__DepthLimit";
    }

    if (seen.indexOf(x) !== -1) {
      return "__Circular";
    }

    var i = 0;
    var result;

    var next = function next(__x) {
      return s(__x, {
        indent: indent + "  ",
        depthLim: depthLim - 1,
        depth: depth + 1
      });
    };

    do {
      result = handlers[i](x, next, seen, depthLim > 0 ? indent : "");
      i++;
    } while (result === null);

    return result;
  }

  return s(_x, opts);
}

var TargetComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(TargetComponent, _Component);

  function TargetComponent(props) {
    var _this;

    _classCallCheck(this, TargetComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TargetComponent).call(this, props));
    _this.state = {
      states: {}
    };
    _this.setTargetState = _this.setTargetState.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(TargetComponent, [{
    key: "setTargetState",
    value: function setTargetState(ns) {
      this.setState({
        states: _objectSpread({}, this.state.states, ns)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var state = this.state.states;

      if (this.isStateless) {
        return this.target({
          props: this.targetProps,
          setState: this.setTargetState,
          pushEvent: this.pushEvent,
          state: state
        });
      } else {
        var Target = this.target;
        return React__default.createElement(Target, this.targetProps);
      }
    }
  }, {
    key: "isStateless",
    get: function get$$1() {
      return !(this.target && this.target.prototype && this.target.prototype.render);
    }
  }]);

  return TargetComponent;
}(React.Component);

var Synchronizer = (function (target, _ref) {
  var setViewportState = _ref.setViewportState,
      getViewportState = _ref.getViewportState,
      targetProps = _ref.targetProps,
      pushEvent = _ref.pushEvent;
  return (
    /*#__PURE__*/
    function (_TargetComponent) {
      _inherits(Synchronizer, _TargetComponent);

      function Synchronizer(props) {
        var _this2;

        _classCallCheck(this, Synchronizer);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Synchronizer).call(this, props));
        _this2.target = target;
        _this2.targetProps = targetProps;
        _this2.pushEvent = pushEvent;
        _this2.state = _objectSpread({}, _this2.state, getViewportState());
        return _this2;
      }

      _createClass(Synchronizer, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          if (this.componentWillReceiveProps) {
            this.componentWillReceiveProps(targetProps, this.state);
          }

          if (_get(_getPrototypeOf(Synchronizer.prototype), "componentDidMount", this)) {
            _get(_getPrototypeOf(Synchronizer.prototype), "componentDidMount", this).call(this);
          }
        }
      }, {
        key: "componentWillUpdate",
        value: function componentWillUpdate(nextProps, nextState) {
          if (_get(_getPrototypeOf(Synchronizer.prototype), "componentWillUpdate", this)) {
            _get(_getPrototypeOf(Synchronizer.prototype), "componentWillUpdate", this).call(this, nextProps, nextState);
          }

          setViewportState(nextState);
        }
      }]);

      return Synchronizer;
    }(TargetComponent)
  );
});

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: auto;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  margin: auto;\n  border: ", "\n    dashed ", ";\n  width: ", ";\n  height: ", ";\n  display: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  margin: auto;\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var cond = UI.cond,
    is = UI.is,
    or = UI.or,
    get = UI.get,
    variant = UI.variant;
var ViewportContainer = styled__default.div(_templateObject$2());
var ViewportWrapper = styled__default.div.attrs(function (p) {
  return {
    style: {
      width: p.w,
      minHeight: p.h
    }
  };
})(_templateObject2(), cond({
  if: or(is.ne("w", "100vw"), is.ne("h", "100vh")),
  then: "1px",
  else: "0px"
}), variant.main, cond({
  if: "w",
  then: null,
  else: "100vw"
}), cond({
  if: "h",
  then: null,
  else: "100vh"
}), cond({
  if: "centered",
  then: "flex",
  else: null
}));
var TargetWrapper = styled__default.div(_templateObject3());

var Viewport =
/*#__PURE__*/
function (_Component) {
  _inherits(Viewport, _Component);

  function Viewport(props) {
    var _this;

    _classCallCheck(this, Viewport);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Viewport).call(this, props));
    _this.state = {
      targetState: {}
    };
    return _this;
  }

  _createClass(Viewport, [{
    key: "setViewportState",
    value: function setViewportState(targetState, callback) {
      this.setState({
        targetState: targetState
      }, callback);
    }
  }, {
    key: "pushEvent",
    value: function pushEvent(key, args) {
      var _this$props = this.props,
          get = _this$props.get,
          set = _this$props.set,
          scene = _this$props.scene;

      function simpleKeys(original) {
        return Object.keys(original).reduce(function (obj, key) {
          obj[key] = _typeof(original[key]) === "object" ? "{ ... }" : original[key];
          return obj;
        }, {});
      }

      var event = {
        key: key,
        args: JSON.stringify(args.length == 1 ? simpleKeys(args[0]) : _objectSpread({}, args.map(function (arg) {
          return simpleKeys(arg);
        })), null, 2),
        date: stringify(new Date())
      };
      var oldEvents = (get("events") || {})[scene._id] || [];
      set("events", _defineProperty({}, scene._id, _toConsumableArray(oldEvents).concat([event])), true, false);
    }
  }, {
    key: "render",
    value: function render() {
      var scene = this.props.scene;
      var Target = this.target;
      return React__default.createElement(ViewportContainer, null, React__default.createElement(ViewportWrapper, _extends({}, this.size, {
        centered: scene.options && scene.options.centered
      }), React__default.createElement(TargetWrapper, null, React__default.createElement(Target, null))));
    }
  }, {
    key: "initialProps",
    get: function get() {
      var _this2 = this;

      var _this$props2 = this.props,
          scene = _this$props2.scene,
          set = _this$props2.set,
          get = _this$props2.get;
      var _scene$controllers = scene.controllers,
          controllers = _scene$controllers === void 0 ? [] : _scene$controllers,
          _scene$events = scene.events,
          events = _scene$events === void 0 ? [] : _scene$events;

      var initialValues = _objectSpread({}, scene.props);

      if (controllers.length) {
        controllers.forEach(function (_ref) {
          var controller = _ref.controller,
              key = _ref.key;

          if (initialValues[key] == undefined) {
            initialValues[key] = controller.process(controller.initialValue);
          }
        });
      }

      events.forEach(function (key) {
        initialValues[key] = function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this2.pushEvent(key, args.concat());
        };
      });
      return initialValues;
    }
  }, {
    key: "target",
    get: function get() {
      var _this3 = this;

      var _this$props3 = this.props,
          scene = _this$props3.scene,
          set = _this$props3.set,
          get = _this$props3.get;
      return Synchronizer(scene.target, {
        setViewportState: function setViewportState() {
          return _this3.setViewportState.apply(_this3, arguments);
        },
        getViewportState: function getViewportState() {
          return _this3.state.targetState;
        },
        targetProps: this.initialProps,
        pushEvent: function pushEvent(key) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          _this3.pushEvent(key, args);
        }
      });
    }
  }, {
    key: "size",
    get: function get() {
      var _this$props4 = this.props,
          config = _this$props4.config,
          devices = _this$props4.devices;
      var size = {};
      var key = config.viewport.key;

      if (key == "custom") {
        size = {
          w: "".concat(config.viewport.width, "vw"),
          h: "".concat(config.viewport.height, "vh")
        };
      } else {
        var device = devices.find(function (d) {
          return d.key == key;
        });

        if (device) {
          size = {
            w: device.width,
            h: device.height
          };
        }
      }

      return size;
    }
  }]);

  return Viewport;
}(React.Component);

function _templateObject39() {
  var data = _taggedTemplateLiteral(["panel:minimize.radius|px"]);

  _templateObject39 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38() {
  var data = _taggedTemplateLiteral(["panel:minimize.padding|px"]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = _taggedTemplateLiteral(["panel:minimize.size|px"]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = _taggedTemplateLiteral(["panel:minimize.size|px"]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  font-size: ", ";\n  line-height: ", ";\n  padding: ", ";\n  border-radius: ", ";\n  background: ", ";\n  text-transform: uppercase;\n"]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteral(["panel.width|px"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: -16px;\n  left: 0;\n  cursor: ns-resize;\n  width: ", ";\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  &:hover {\n    ", " {\n      opacity: 1;\n    }\n  }\n"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n  width: 64px;\n  height: 2px;\n  border-radius: 2px;\n  background: ", ";\n  opacity: 0.4;\n  transition: 0.2s;\n"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["item:title.size|px"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["item.padding|px"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["item.height|px"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  justify-content: space-between;\n  height: ", ";\n  padding: ", ";\n  border-bottom: 1px solid ", ";\n  background: ", ";\n  color: ", ";\n  position: sticky;\n  position: -webkit-sticky;\n  position: -moz-sticky;\n  position: -ms-sticky;\n  position: -o-sticky;\n  top: 0px;\n  font-size: ", ";\n  font-weight: 600;\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["panel.radius|px"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["panel.radius|px"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["item.height|px"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  z-index: 1;\n  flex-grow: 0;\n  flex-shrink: 0;\n  width: 100%;\n  height: ", ";\n  background: ", ";\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["button:icon.size|px"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["button.height|px"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["button.margin|px"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["button.height|px"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["button.height|px"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  position: relative;\n  z-index: 1;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  min-width: ", ";\n  height: ", ";\n  margin: ", ";\n  border-radius: ", ";\n  font-size: ", ";\n  background-color: ", ";\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["item.height|px"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  z-index: 1;\n  flex-grow: 0;\n  flex-shrink: 0;\n  width: 100%;\n  height: ", ";\n  background: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["panel.radius|px"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["panel.radius|px"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["item.padding|px"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["item.height|px"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  z-index: 1;\n  flex-grow: 0;\n  flex-shrink: 0;\n  width: 100%;\n  height: ", ";\n  padding: ", ";\n  background: ", ";\n  border-top-left-radius: ", ";\n  border-top-right-radius: ", ";\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: move;\n  font-weight: 600;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["panel.shadow"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["panel.radius|px"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["panel.margin|px"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["panel.height|px"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["item.height|px"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      ", " !important;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["panel.margin|px"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["panel.width|px"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  z-index: 99999;\n  width: ", ";\n  max-height: calc(100vh - ", " * 2);\n  height: ", ";\n  overflow: ", ";\n  margin: ", ";\n  display: flex;\n  flex-direction: column;\n  background: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n    \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\",\n    \"Helvetica Neue\", sans-serif;\n\n  font-weight: 400;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var cond$1 = UI.cond,
    is$1 = UI.is,
    get$1 = UI.get,
    variant$1 = UI.variant,
    size$1 = UI.size,
    userSelect$1 = UI.userSelect;
var PanelWrapper = styled__default.div(_templateObject$3(), size$1(_templateObject2$1()), size$1(_templateObject3$1()), cond$1({
  if: "minimized",
  then: styled.css(_templateObject4(), size$1(_templateObject5())),
  else: size$1(_templateObject6())
}), cond$1({
  if: "minimized",
  then: "hidden"
}), size$1(_templateObject7()), variant$1.lighter, size$1(_templateObject8()), size$1(_templateObject9()));
var Header = styled__default.div(_templateObject10(), size$1(_templateObject11()), size$1(_templateObject12()), variant$1.light, size$1(_templateObject13()), size$1(_templateObject14()));
var TopBar = styled__default.div(_templateObject15(), size$1(_templateObject16()), variant$1.main);
var Button = styled__default.div(_templateObject17(), userSelect$1(), size$1(_templateObject18()), size$1(_templateObject19()), size$1(_templateObject20()), size$1(_templateObject21()), size$1(_templateObject22()), cond$1({
  if: "active",
  then: variant$1.lighter
}));
var BottomBar = styled__default.div(_templateObject23(), size$1(_templateObject24()), variant$1.main, size$1(_templateObject25()), size$1(_templateObject26()));
var PanelTitle = styled__default.div(_templateObject27(), size$1(_templateObject28()), size$1(_templateObject29()), variant$1.transparentize(0.9, null, "contrast"), variant$1.lighter, cond$1({
  if: "collapsed",
  then: variant$1.transparentize(0.4, null, "contrast"),
  else: variant$1.contrast
}), size$1(_templateObject30()));
var Panels = styled__default.div(_templateObject31());
var ResizeHandleLine = styled__default.div(_templateObject32(), variant$1.contrast);
var ResizeHandle = styled__default.div(_templateObject33(), size$1(_templateObject34()), ResizeHandleLine);
var Minimize = styled__default.div(_templateObject35(), size$1(_templateObject36()), size$1(_templateObject37()), size$1(_templateObject38()), size$1(_templateObject39()), variant$1.transparentize(0.9, null, "contrast"));

/* globals
window
*/

var Panel =
/*#__PURE__*/
function (_Component) {
  _inherits(Panel, _Component);

  function Panel(props) {
    var _this;

    _classCallCheck(this, Panel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Panel).call(this, props));
    var config = _this.props.config;
    _this.state = {
      ready: false
    };
    _this.onResize = _this.onResize.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Panel, [{
    key: "onResize",
    value: function onResize() {
      var _this$props = this.props,
          set = _this$props.set,
          _this$props$config = _this$props.config,
          config = _this$props$config === void 0 ? {} : _this$props$config;
      var position = config.position;
      var panel = this.size;
      if (!position) position = this.defaultPosition;
      var w = {
        width: window.innerWidth,
        height: window.innerHeight
      };
      var xr = position.x + panel.width;
      var yt = position.y + panel.height;
      var snapx = w.width <= xr + 16 || w.width < position.x + panel.width;
      var snapy = w.height <= yt + 16 || w.height < position.y + panel.height;

      var newPosition = _objectSpread({}, position);

      if (snapx) {
        newPosition = _objectSpread({}, newPosition, {
          x: w.width - panel.width
        });
      }

      if (snapy) {
        newPosition = _objectSpread({}, newPosition, {
          y: w.height > panel.height ? w.height - panel.height : 0
        });
      }

      var newHeight = w.height - position.y - theme.panel.normal.margin * 2;

      if (newHeight < theme.panel.normal.height) {
        newHeight = theme.panel.normal.height;
      }

      if ((config.height || theme.panel.normal.height) > newHeight) {
        this.onPanelResize({
          height: newHeight,
          save: true
        });
      }

      set("config", {
        position: newPosition
      }); // console.log(w, position);
    }
  }, {
    key: "onPanelResize",
    value: function onPanelResize(_ref) {
      var height = _ref.height,
          save = _ref.save;
      var _this$props2 = this.props,
          set = _this$props2.set,
          _this$props2$config = _this$props2.config,
          config = _this$props2$config === void 0 ? {} : _this$props2$config;
      var position = config.position;
      var panel = this.size;
      if (!position) position = this.defaultPosition;
      var w = {
        width: window.innerWidth,
        height: window.innerHeight
      };
      var newHeight = height;

      if (newHeight <= theme.panel.normal.height) {
        newHeight = theme.panel.normal.height;
      }

      if (newHeight > w.height - position.y - theme.panel.normal.margin * 2) {
        newHeight = w.height - position.y - theme.panel.normal.margin * 2;
      }

      if (save) {
        set("config", {
          height: newHeight
        });
      }

      this.panel.style.height = "".concat(newHeight, "px");
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("resize", this.onResize);
      this.onResize();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.onResize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          _this$props3$config = _this$props3.config,
          config = _this$props3$config === void 0 ? {} : _this$props3$config,
          scene = _this$props3.scene,
          set = _this$props3.set,
          get = _this$props3.get,
          ready = _this$props3.ready,
          title = _this$props3.title,
          panels = _this$props3.panels;
      var active = get("active");

      var _get$$1 = get("config"),
          _get$minimized = _get$$1.minimized,
          minimized = _get$minimized === void 0 ? false : _get$minimized;

      return React__default.createElement(Draggable__default, {
        position: config.position || this.defaultPosition,
        bounds: "parent",
        handle: ".react-draggable-handle",
        onStop: function onStop(e, data) {
          set("config", {
            position: {
              x: data.x,
              y: data.y
            }
          });
        }
      }, React__default.createElement(PanelWrapper, _extends({
        style: {
          height: config.height || theme.panel.normal.height
        },
        ref: function ref(i) {
          return _this2.panel = i;
        },
        minimized: minimized
      }, this.ui), React__default.createElement(Header, _extends({}, this.ui, {
        className: "react-draggable-handle"
      }), title, React__default.createElement(Minimize, _extends({}, this.ui, {
        onClick: function onClick() {
          set("config", {
            minimized: !minimized
          }); // eslint-disable-next-line

          setTimeout(function () {
            _this2.onResize();
          }, 100);
        }
      }), minimized ? "Expand" : "Minimize")), React__default.createElement(TopBar, this.ui, React__default.createElement("div", null), panels.map(function (panel, idx) {
        return React__default.createElement(Button, _extends({
          title: panel.title || panel._id,
          key: panel._id || idx
        }, _this2.ui, {
          active: panel.active ? panel.active(_this2.props) : null,
          onClick: function onClick() {
            if (panel.onClick) panel.onClick(_this2.props);
            set("active", {
              panel: panel._id
            });
          }
        }), isString$1(panel.icon) ? panel.icon : panel.icon(_this2.props));
      }), React__default.createElement("div", null)), React__default.createElement(Panels, _extends({
        id: "panel-container"
      }, this.ui), active.panel != "scenes" && React__default.createElement(PanelTitle, _extends({}, this.ui, {
        onClick: function onClick() {
          set("active", {
            panel: "scenes"
          });
        }
      }), scene.title.split(">").length > 1 ? React__default.createElement(React.Fragment, null, React__default.createElement("div", null, scene.title.split(">")[1]), React__default.createElement("div", null, scene.title.split(">")[0])) : scene.title), this.activePanel), this.actionPanels, this.actions ? React__default.createElement(BottomBar, this.ui, React__default.createElement("div", null), this.actions, React__default.createElement("div", null)) : null, React__default.createElement(Draggable.DraggableCore, {
        axis: "y",
        handle: ".react-resizable-handle",
        onDrag: function onDrag(e, data) {
          var newHeight = parseInt(_this2.panel.style.height) + data.deltaY;

          _this2.onPanelResize({
            height: newHeight
          });
        },
        onStop: function onStop(e, data) {
          _this2.onPanelResize({
            height: parseInt(_this2.panel.style.height),
            save: true
          });
        }
      }, React__default.createElement(ResizeHandle, _extends({}, this.ui, {
        className: "react-resizable-handle"
      }), React__default.createElement(ResizeHandleLine, this.ui)))));
    }
  }, {
    key: "defaultPosition",
    get: function get() {
      var w = {
        width: window.innerWidth,
        height: window.innerHeight
      };
      var panel = this.size;
      var position = {
        x: w.width - panel.width,
        y: w.height > panel.height ? w.height - panel.height : 0
      };
      return position;
    }
  }, {
    key: "size",
    get: function get() {
      return {
        width: theme.panel.normal.width + theme.panel.normal.margin * 2,
        height: theme.panel.normal.height + theme.panel.normal.margin * 2
      };
    }
  }, {
    key: "activePanel",
    get: function get() {
      var _this$props4 = this.props,
          _this$props4$panels = _this$props4.panels,
          panels = _this$props4$panels === void 0 ? [] : _this$props4$panels,
          get = _this$props4.get;
      var panelId = get("active").panel;
      var panel = panels.find(function (p) {
        return p._id == panelId;
      });

      if (panel) {
        var _Component2 = panel.component;

        if (_Component2) {
          return React__default.createElement(_Component2, this.props);
        }
      }

      return null;
    }
  }, {
    key: "actionPanels",
    get: function get() {
      var _this3 = this;

      var actions;
      var _this$props5 = this.props,
          _this$props5$panels = _this$props5.panels,
          panels = _this$props5$panels === void 0 ? [] : _this$props5$panels,
          get = _this$props5.get,
          set = _this$props5.set,
          config = _this$props5.config;
      var panelId = get("active").panel;
      var panel = panels.find(function (p) {
        return p._id == panelId;
      });

      if (panel) {
        if (panel.actions && panel.actions.length) {
          actions = panel.actions.map(function (action, idx) {
            var Component = action.component;

            if (Component) {
              return React__default.createElement(Component, _extends({
                key: idx
              }, _this3.props, {
                ui: _this3.ui
              }));
            }

            return null;
          });
        }
      }

      return actions;
    }
  }, {
    key: "actions",
    get: function get() {
      var _this4 = this;

      var actions;
      var _this$props6 = this.props,
          _this$props6$panels = _this$props6.panels,
          panels = _this$props6$panels === void 0 ? [] : _this$props6$panels,
          get = _this$props6.get,
          set = _this$props6.set,
          config = _this$props6.config;
      var panelId = get("active").panel;
      var panel = panels.find(function (p) {
        return p._id == panelId;
      });

      if (panel) {
        if (panel.actions && panel.actions.length) {
          actions = panel.actions.map(function (action, idx) {
            return React__default.createElement(Button, _extends({
              title: action.title || action._id,
              key: action._id || idx
            }, _this4.ui, {
              active: action.active ? action.active(_this4.props) : null,
              onClick: function onClick() {
                if (action.onClick) action.onClick(_objectSpread({}, _this4.props));
              }
            }), isString$1(action.icon) ? action.icon : action.icon(_this4.props));
          });
        }
      }

      return actions;
    }
  }]);

  return Panel;
}(React.Component);

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  overflow: auto;\n  display: flex;\n  flex-wrap: wrap;\n  background: ", ";\n  background-size: 24px;\n  background-position: center;\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var cond$2 = UI.cond,
    is$2 = UI.is,
    get$2 = UI.get;
var ScenesWrapper = styled__default.div(_templateObject$4(), cond$2({
  if: is$2.eq("bg", "dark"),
  then: theme.bg.dark,
  else: cond$2({
    if: is$2.eq("bg", "light"),
    then: theme.bg.light,
    else: cond$2({
      if: is$2.eq("bg", "black"),
      then: theme.bg.black,
      else: null
    })
  })
}));

function _templateObject12$1() {
  var data = _taggedTemplateLiteral(["item:title.size|px"]);

  _templateObject12$1 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11$1() {
  var data = _taggedTemplateLiteral(["item.padding|px"]);

  _templateObject11$1 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10$1() {
  var data = _taggedTemplateLiteral(["item.height|px"]);

  _templateObject10$1 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9$1() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", ";\n  padding: ", ";\n  border-bottom: 1px solid ", ";\n  background: ", ";\n  color: ", ";\n  position: sticky;\n  position: -webkit-sticky;\n  position: -moz-sticky;\n  position: -ms-sticky;\n  position: -o-sticky;\n  top: 0px;\n  font-size: ", ";\n  font-weight: 600;\n  cursor: pointer;\n"]);

  _templateObject9$1 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8$1() {
  var data = _taggedTemplateLiteral(["\n  float: right;\n"]);

  _templateObject8$1 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$1() {
  var data = _taggedTemplateLiteral(["item:title.size|px"]);

  _templateObject7$1 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$1() {
  var data = _taggedTemplateLiteral(["item.padding|px"]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["item.padding|px"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["item.height|px"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  height: ", ";\n  padding: ", ";\n  background: ", ";\n  color: ", ";\n  padding-left calc(", " * 2);\n  cursor: pointer\n  font-size: ", ";\n  font-weight: 600;\n  cursor: pointer;\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["item:title.size|px"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  font-size: ", ";\n  font-weight: 600;\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var cond$3 = UI.cond,
    is$3 = UI.is,
    get$3 = UI.get,
    variant$2 = UI.variant,
    size$2 = UI.size;
var Parent = styled__default.div(_templateObject$5(), size$2(_templateObject2$2()));
var Node = styled__default.div(_templateObject3$2(), size$2(_templateObject4$1()), size$2(_templateObject5$1()), cond$3({
  if: "active",
  then: variant$2.contrast,
  else: variant$2.light
}), cond$3({
  if: "active",
  then: variant$2.main,
  else: variant$2.contrast
}), size$2(_templateObject6$1()), size$2(_templateObject7$1()));
var Badge = styled__default.div(_templateObject8$1());
var Title = styled__default.div(_templateObject9$1(), size$2(_templateObject10$1()), size$2(_templateObject11$1()), variant$2.transparentize(0.9, null, "contrast"), variant$2.lighter, cond$3({
  if: "collapsed",
  then: variant$2.transparentize(0.4, null, "contrast"),
  else: variant$2.contrast
}), size$2(_templateObject12$1()));

var ListPanel =
/*#__PURE__*/
function (_Component) {
  _inherits(ListPanel, _Component);

  function ListPanel(props) {
    var _this;

    _classCallCheck(this, ListPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ListPanel).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(ListPanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.collapseInit();
      this.scrollToActive();
    }
  }, {
    key: "scrollToActive",
    value: function scrollToActive() {
      // eslint-disable-next-line
      var el = document.querySelector("#active-parent"); // eslint-disable-next-line

      var parent = document.querySelector("#panel-container");

      if (el && parent) {
        parent.scrollTop = el.offsetTop;
      }
    }
  }, {
    key: "collapseInit",
    value: function collapseInit() {
      var _this$props = this.props,
          scene = _this$props.scene,
          set = _this$props.set,
          get = _this$props.get,
          _this$props$config = _this$props.config,
          config = _this$props$config === void 0 ? {} : _this$props$config;

      if (scene) {
        if (config.collapsed) {
          var collapsed = this.collapsed;
          set("config", {
            collapsed: collapsed
          });
        } else {
          var keys = [];

          var collectKeys = function collectKeys(tree) {
            Object.keys(tree).map(function (key, idx) {
              if (!tree[key].data) {
                keys.push(key);
                collectKeys(tree[key]);
              }
            });
          };

          collectKeys(this.tree());
          var titleTree = scene.title.split(">");
          titleTree.pop();
          titleTree.forEach(function (key) {
            keys.splice(keys.indexOf(key), 1);
          });
          this.collapseAll(keys);
        }
      }
    }
  }, {
    key: "isCollapsed",
    value: function isCollapsed(key) {
      var config = this.props.config;
      return this.collapsed.indexOf(key) > -1;
    }
  }, {
    key: "collapseAll",
    value: function collapseAll(keys) {
      var config = this.props.config;
      var collapsed = this.collapsed.slice();
      collapsed = this.collapsed.concat(keys);
      this.updateCollapsed(collapsed);
    }
  }, {
    key: "collapse",
    value: function collapse(key) {
      var config = this.props.config;
      var collapsed = this.collapsed.slice();
      collapsed.push(key);
      this.updateCollapsed(collapsed);
    }
  }, {
    key: "uncollapse",
    value: function uncollapse(key) {
      var config = this.props.config;
      var collapsed = this.collapsed.slice();
      var idx = collapsed.indexOf(key);

      if (idx > -1) {
        collapsed.splice(idx, 1);
        this.updateCollapsed(collapsed);
      }
    }
  }, {
    key: "updateCollapsed",
    value: function updateCollapsed(collapsed) {
      var set = this.props.set;
      set("config", {
        collapsed: collapsed
      });
    }
  }, {
    key: "tree",
    value: function tree() {
      var scenes = this.props.scenes;
      var tree = scenes.map(function (_ref) {
        var title = _ref.title;
        return title;
      }).reduce(function (hier, title) {
        var x = hier;
        title.split(">").forEach(function (item) {
          if (!x[item]) {
            x[item] = {};
          }

          x = x[item];
        });
        x.data = scenes[scenes.map(function (_ref2) {
          var title = _ref2.title;
          return title;
        }).indexOf(title)];
        return hier;
      }, {});
      return tree;
    }
  }, {
    key: "render",
    value: function render() {
      return React__default.createElement("div", null, this.scenes);
    }
  }, {
    key: "collapsed",
    get: function get() {
      var _this$props$config2 = this.props.config,
          config = _this$props$config2 === void 0 ? {} : _this$props$config2;
      return config.collapsed || [];
    }
  }, {
    key: "scenes",
    get: function get() {
      var _this2 = this;

      var collapsed = this.state.collapsed;
      var _this$props2 = this.props,
          set = _this$props2.set,
          scene = _this$props2.scene;

      var treeDOM = function treeDOM(tree) {
        return Object.keys(tree).map(function (key, idx) {
          if (tree[key].data) {
            var active = scene._id == tree[key].data._id;
            return React__default.createElement("div", {
              key: key || idx,
              onClick: function onClick() {
                set("active", {
                  scene: tree[key].data._id
                });
              }
            }, React__default.createElement(Node, {
              className: active ? "active-node" : null,
              active: active
            }, key));
          } else {
            var _active = Object.keys(tree[key]).map(function (k) {
              return tree[key][k].data._id == scene._id;
            }).find(function (x) {
              return x == true;
            });

            return React__default.createElement(Parent, {
              key: key || idx
            }, React__default.createElement(Title, {
              onClick: function onClick() {
                if (_this2.isCollapsed(key)) {
                  _this2.uncollapse(key);
                } else {
                  _this2.collapse(key);
                }
              },
              active: _active,
              id: _active ? "active-parent" : null,
              collapsed: _this2.isCollapsed(key)
            }, key, React__default.createElement(Badge, null, Object.keys(tree[key]).length)), !_this2.isCollapsed(key) && treeDOM(tree[key]));
          }
        });
      };

      if (scene) {
        return treeDOM(this.tree());
      }

      return null;
    }
  }]);

  return ListPanel;
}(React.Component);

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var cond$4 = UI.cond,
    is$4 = UI.is,
    get$4 = UI.get,
    variant$3 = UI.variant,
    size$3 = UI.size;
var Wrapper = styled__default.div(_templateObject$6());

var ControllersPanel =
/*#__PURE__*/
function (_Component) {
  _inherits(ControllersPanel, _Component);

  function ControllersPanel(props) {
    var _this;

    _classCallCheck(this, ControllersPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ControllersPanel).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(ControllersPanel, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$scene = _this$props.scene,
          scene = _this$props$scene === void 0 ? {} : _this$props$scene,
          _set$$1 = _this$props.set,
          get = _this$props.get,
          config = _this$props.config;
      var _scene$controllers = scene.controllers,
          controllers = _scene$controllers === void 0 ? [] : _scene$controllers,
          _scene$props = scene.props,
          props = _scene$props === void 0 ? {} : _scene$props;
      var sceneData = get("scenesData")[scene._id] || {};
      return React__default.createElement(Wrapper, null, controllers.map(function (_ref, idx) {
        var controller = _ref.controller,
            key = _ref.key,
            title = _ref.title;
        return controller.input ? React__default.createElement("div", {
          key: key || idx
        }, controller.input({
          state: _this2.state,
          setState: function setState() {
            _this2.setState.apply(_this2, arguments);
          },
          value: props[key] == undefined ? controller.initialValue : props[key],
          set: function set(value) {
            var newProps = _objectSpread({}, sceneData.props);

            newProps[key] = value;

            _set$$1("scenesData", _defineProperty({}, scene._id, _objectSpread({}, sceneData, {
              props: newProps
            })), null, config.caching);
          },
          title: title
        })) : null;
      }));
    }
  }]);

  return ControllersPanel;
}(React.Component);

function markdown (md) {
  // set markdown renderer
  var renderer = new marked.Renderer();

  renderer.link = function (href, title, text) {
    return "<a target=\"_blank\" href=\"".concat(href, "\" title=\"").concat(title, "\">").concat(text, "</a>");
  };

  marked.setOptions({
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: true,
    sanitize: true,
    smartLists: true,
    smartypants: true,
    linksInNewTab: true
  });
  return marked(md || "", {
    renderer: renderer
  });
}

function _templateObject39$1() {
  var data = _taggedTemplateLiteral(["docs.link.hover.color"]);

  _templateObject39$1 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38$1() {
  var data = _taggedTemplateLiteral(["docs.link.normal.color"]);

  _templateObject38$1 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37$1() {
  var data = _taggedTemplateLiteral(["docs.spacing.small"]);

  _templateObject37$1 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36$1() {
  var data = _taggedTemplateLiteral(["docs.spacing.small"]);

  _templateObject36$1 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35$1() {
  var data = _taggedTemplateLiteral(["docs.spacing.small"]);

  _templateObject35$1 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34$1() {
  var data = _taggedTemplateLiteral(["docs.spacing.small"]);

  _templateObject34$1 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33$1() {
  var data = _taggedTemplateLiteral(["docs.code.color"]);

  _templateObject33$1 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32$1() {
  var data = _taggedTemplateLiteral(["docs.code.background"]);

  _templateObject32$1 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31$1() {
  var data = _taggedTemplateLiteral(["docs.radius.small"]);

  _templateObject31$1 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30$1() {
  var data = _taggedTemplateLiteral(["docs.code.size"]);

  _templateObject30$1 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29$1() {
  var data = _taggedTemplateLiteral(["docs.code.weight"]);

  _templateObject29$1 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28$1() {
  var data = _taggedTemplateLiteral(["docs.code.family"]);

  _templateObject28$1 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27$1() {
  var data = _taggedTemplateLiteral(["docs.spacing.normal"]);

  _templateObject27$1 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26$1() {
  var data = _taggedTemplateLiteral(["docs.spacing.normal"]);

  _templateObject26$1 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25$1() {
  var data = _taggedTemplateLiteral(["docs.spacing.normal"]);

  _templateObject25$1 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24$1() {
  var data = _taggedTemplateLiteral(["docs.body.height"]);

  _templateObject24$1 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23$1() {
  var data = _taggedTemplateLiteral(["docs.body.height"]);

  _templateObject23$1 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22$1() {
  var data = _taggedTemplateLiteral(["docs.body.height"]);

  _templateObject22$1 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21$1() {
  var data = _taggedTemplateLiteral(["docs.h6.weight"]);

  _templateObject21$1 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20$1() {
  var data = _taggedTemplateLiteral(["docs.h6.size"]);

  _templateObject20$1 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19$1() {
  var data = _taggedTemplateLiteral(["docs.h5.weight"]);

  _templateObject19$1 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18$1() {
  var data = _taggedTemplateLiteral(["docs.h5.size"]);

  _templateObject18$1 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17$1() {
  var data = _taggedTemplateLiteral(["docs.h4.weight"]);

  _templateObject17$1 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16$1() {
  var data = _taggedTemplateLiteral(["docs.h4.size"]);

  _templateObject16$1 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15$1() {
  var data = _taggedTemplateLiteral(["docs.h3.height"]);

  _templateObject15$1 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14$1() {
  var data = _taggedTemplateLiteral(["docs.h3.size"]);

  _templateObject14$1 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13$1() {
  var data = _taggedTemplateLiteral(["docs.h2.height"]);

  _templateObject13$1 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12$2() {
  var data = _taggedTemplateLiteral(["docs.h2.size"]);

  _templateObject12$2 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11$2() {
  var data = _taggedTemplateLiteral(["docs.h1.height"]);

  _templateObject11$2 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10$2() {
  var data = _taggedTemplateLiteral(["docs.h1.size"]);

  _templateObject10$2 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9$2() {
  var data = _taggedTemplateLiteral(["docs.body.height"]);

  _templateObject9$2 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8$2() {
  var data = _taggedTemplateLiteral(["docs.body.size"]);

  _templateObject8$2 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$2() {
  var data = _taggedTemplateLiteral(["docs.body.family"]);

  _templateObject7$2 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$2() {
  var data = _taggedTemplateLiteral(["docs.body.weight"]);

  _templateObject6$2 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$2() {
  var data = _taggedTemplateLiteral(["docs.body.family"]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["docs.padding"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["docs.body.height"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["docs.body.size"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", "px;\n  line-height: ", "px;\n  padding: ", "px;\n  font-family: ", ";\n\n  strong,\n  b {\n    font-weight: ", ";\n  }\n\n  p {\n    font-family: ", ";\n    font-size: ", "px;\n    line-height: ", "px;\n  }\n\n  h1 {\n    font-size: ", "px;\n    line-height: ", "px;\n  }\n  h2 {\n    font-size: ", "px;\n    line-height: ", "px;\n  }\n  h3 {\n    font-size: ", "px;\n    line-height: ", "px;\n  }\n  h4 {\n    font-size: ", "px;\n    font-weight: ", ";\n  }\n  h5 {\n    font-size: ", "px;\n    font-weight: ", ";\n  }\n  h6 {\n    font-size: ", "px;\n    font-weight: ", ";\n  }\n\n  ul {\n    list-style-type: none;\n    list-style-position: inside;\n    margin: 0;\n    padding: 0;\n  }\n\n  ul > li:before {\n    content: \"\xB7\";\n    width: 18px;\n    height: ", "px;\n    font-size: ", "px;\n    line-height: ", "px;\n    display: flex;\n    float: left;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n  }\n\n  ol {\n    list-style-type: decimal;\n    list-style-position: inside;\n    margin: 0;\n    padding: 0;\n  }\n\n  hr {\n    margin: 0 auto;\n    margin-top: ", "px;\n    margin-bottom: ", "px;\n    border: none;\n    width: 25%;\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n  }\n\n  pre {\n    max-width: 100%;\n  }\n\n  pre {\n    code {\n      padding: ", "px;\n      max-width: 100%;\n      overflow: auto;\n      display: block;\n    }\n  }\n\n  code {\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", "px;\n    padding: 1px;\n    position: relative;\n    border-radius: ", "px;\n    background: ", ";\n    color: ", ";\n  }\n\n  blockquote {\n    padding: ", "px;\n    margin: ", "px;\n    border-left: 1px solid rgba(0, 0, 0, 0.1);\n  }\n\n  & > h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: ", "px;\n    margin-bottom: ", "px;\n  }\n\n  em,\n  i {\n    font-style: italic;\n  }\n\n  a {\n    color: ", ";\n  }\n\n  a:hover {\n    color: ", ";\n  }\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var get$5 = UI.get;
var Docs = styled__default.div(_templateObject$7(), get$5(_templateObject2$3()), get$5(_templateObject3$3()), get$5(_templateObject4$2()), get$5(_templateObject5$2()), get$5(_templateObject6$2()), get$5(_templateObject7$2()), get$5(_templateObject8$2()), get$5(_templateObject9$2()), get$5(_templateObject10$2()), get$5(_templateObject11$2()), get$5(_templateObject12$2()), get$5(_templateObject13$1()), get$5(_templateObject14$1()), get$5(_templateObject15$1()), get$5(_templateObject16$1()), get$5(_templateObject17$1()), get$5(_templateObject18$1()), get$5(_templateObject19$1()), get$5(_templateObject20$1()), get$5(_templateObject21$1()), get$5(_templateObject22$1()), get$5(_templateObject23$1()), get$5(_templateObject24$1()), get$5(_templateObject25$1()), get$5(_templateObject26$1()), get$5(_templateObject27$1()), get$5(_templateObject28$1()), get$5(_templateObject29$1()), get$5(_templateObject30$1()), get$5(_templateObject31$1()), get$5(_templateObject32$1()), get$5(_templateObject33$1()), get$5(_templateObject34$1()), get$5(_templateObject35$1()), get$5(_templateObject36$1()), get$5(_templateObject37$1()), get$5(_templateObject38$1()), get$5(_templateObject39$1()));

var DocsPanel =
/*#__PURE__*/
function (_Component) {
  _inherits(DocsPanel, _Component);

  function DocsPanel() {
    _classCallCheck(this, DocsPanel);

    return _possibleConstructorReturn(this, _getPrototypeOf(DocsPanel).apply(this, arguments));
  }

  _createClass(DocsPanel, [{
    key: "render",
    value: function render() {
      var scene = this.props.scene;
      var docs = scene.docs;
      return React__default.createElement(Docs, null, docs && React__default.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: markdown(docs)
        }
      }));
    }
  }]);

  return DocsPanel;
}(React.Component);

function _templateObject6$3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  line-height: 14px;\n  font-size: 13px;\n  padding: 8px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: 0.5s;\n\n  &:active {\n    background: rgba(0, 0, 0, 0.05);\n  }\n\n  ", ";\n\n  ", ";\n"]);

  _templateObject6$3 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$3() {
  var data = _taggedTemplateLiteral(["item:title.size|px"]);

  _templateObject5$3 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$3() {
  var data = _taggedTemplateLiteral(["item:title.size|px"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$4() {
  var data = _taggedTemplateLiteral(["item:padding|px"]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["item:height|px"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: calc(100% - ", ");\n  overflow: auto;\n  position: relative;\n  padding: ", ";\n  line-height: ", ";\n\n  & > pre {\n    height: 100%;\n    margin: 0 !important;\n    background: none !important;\n    * {\n      background: none !important;\n    }\n    & > code {\n      font-size: ", ";\n    }\n  }\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var cond$5 = UI.cond,
    is$5 = UI.is,
    get$6 = UI.get,
    variant$4 = UI.variant,
    size$4 = UI.size;
var CodeContainer = styled__default.div(_templateObject$8(), size$4(_templateObject2$4()), size$4(_templateObject3$4()), size$4(_templateObject4$3()), size$4(_templateObject5$3()));
var CopyButton = styled__default.div(_templateObject6$3(), function (p) {
  return p.copied ? "background: black" : "background: rgba(0, 0, 0, 0.02)";
}, function (p) {
  return p.copied ? "color: white" : "color: rgba(0, 0, 0, 0.2)";
});

/*globals
setTimeout
*/

SyntaxHighlighter.registerLanguage("jsx", jsx);

var Code =
/*#__PURE__*/
function (_Component) {
  _inherits(Code, _Component);

  function Code(props) {
    var _this;

    _classCallCheck(this, Code);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Code).call(this, props));
    _this.state = {
      copied: false
    };
    return _this;
  }

  _createClass(Code, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var copied = this.state.copied;
      var scene = this.props.scene;
      var Tag = scene.displayName || scene.target.name;
      var code = "";

      try {
        code = stringify(scene.target({
          props: this.initialProps
        }), {
          depthLim: 20
        });
      } catch (e) {// console.log("Code stringify error: ", e);
      }

      if (code == "__UnknownType" || code == "") {
        code = stringify(React__default.createElement(Tag, this.initialProps), {
          depthLim: 20
        });
      }

      return React__default.createElement(CodeContainer, null, React__default.createElement(SyntaxHighlighter__default, {
        wrapLines: true,
        showLineNumbers: false,
        language: "jsx",
        style: highlighterStyle
      }, code), React__default.createElement(CopyButton, {
        copied: copied,
        onClick: function onClick() {
          _this2.setState({
            copied: true
          }, function () {
            setTimeout(function () {
              _this2.setState({
                copied: false
              });
            }, 1000);
          });

          copy(code);
        }
      }, copied ? "Copied" : "Copy"));
    }
  }, {
    key: "initialProps",
    get: function get() {
      var scene = this.props.scene;
      var controllers = scene.controllers;

      var initialValues = _objectSpread({}, scene.props);

      if (controllers && controllers.length) {
        controllers.forEach(function (_ref) {
          var controller = _ref.controller,
              key = _ref.key;

          if (initialValues[key] == undefined) {
            initialValues[key] = controller.process(controller.initialValue);
          }
        });
      }

      return initialValues;
    }
  }]);

  return Code;
}(React.Component);

function _templateObject8$3() {
  var data = _taggedTemplateLiteral(["item:title.padding|px"]);

  _templateObject8$3 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$3() {
  var data = _taggedTemplateLiteral(["\n  padding: ", ";\n  width: 100%;\n  border-radius: 2px;\n  cursor: pointer;\n  text-align: center;\n"]);

  _templateObject7$3 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$4() {
  var data = _taggedTemplateLiteral(["item:title.size|px"]);

  _templateObject6$4 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$4() {
  var data = _taggedTemplateLiteral(["item:title.padding|px"]);

  _templateObject5$4 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$4() {
  var data = _taggedTemplateLiteral(["\n  padding: 8px;\n  width: 100%;\n  border-radius: 2px;\n  background: rgba(0, 0, 0, 0.02);\n  margin-bottom: ", ";\n\n  & > pre {\n    padding: 4px !important;\n    margin: 0 !important;\n    height: 128px !important;\n    width: 100% !important;\n    overflow: auto !important;\n    background: none !important;\n    * {\n      background: none !important;\n    }\n    & > code {\n      overflow: auto;\n      width: 100% !important;\n      font-size: ", ";\n    }\n  }\n"]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$5() {
  var data = _taggedTemplateLiteral(["item:title.size|px"]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = _taggedTemplateLiteral(["item:title.padding|px"]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  padding: ", ";\n  overflow: auto;\n  flex-shirnk: 1;\n  font-size: ", ";\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var cond$6 = UI.cond,
    is$6 = UI.is,
    get$7 = UI.get,
    variant$5 = UI.variant,
    size$5 = UI.size;
var EventsContainer = styled__default.div(_templateObject$9(), size$5(_templateObject2$5()), size$5(_templateObject3$5()));
var EventItem = styled__default.div(_templateObject4$4(), size$5(_templateObject5$4()), size$5(_templateObject6$4()));
var EventItemKey = styled__default.div(_templateObject7$3(), size$5(_templateObject8$3()));

SyntaxHighlighter.registerLanguage("json", json);

var Events =
/*#__PURE__*/
function (_Component) {
  _inherits(Events, _Component);

  function Events(props) {
    var _this;

    _classCallCheck(this, Events);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Events).call(this, props));
    _this.state = {
      active: null
    };
    return _this;
  }

  _createClass(Events, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var active = this.state.active;
      var _this$props = this.props,
          scene = _this$props.scene,
          get = _this$props.get;
      var events = (get("events") || {})[scene._id] || [];
      return React__default.createElement(EventsContainer, null, events.map(function (e, idx) {
        return React__default.createElement(EventItem, {
          key: idx,
          onClick: function onClick() {
            return _this2.setState({
              active: active == idx ? null : idx
            });
          }
        }, React__default.createElement(EventItemKey, null, e.key), active == idx && React__default.createElement(SyntaxHighlighter__default, {
          language: "json",
          style: highlighterStyle
        }, e.args));
      }), !events.length && React__default.createElement(EventItem, null, React__default.createElement(EventItemKey, null, "No event has been triggered.")));
    }
  }]);

  return Events;
}(React.Component);

function _templateObject16$2() {
  var data = _taggedTemplateLiteral(["input:title.size|px"]);

  _templateObject16$2 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15$2() {
  var data = _taggedTemplateLiteral(["item.padding|px"]);

  _templateObject15$2 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14$2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: ", ";\n  font-size: ", ";\n  min-width: 48px;\n"]);

  _templateObject14$2 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13$2() {
  var data = _taggedTemplateLiteral(["input.height|px"]);

  _templateObject13$2 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12$3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", ";\n  width: 100%;\n"]);

  _templateObject12$3 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11$3() {
  var data = _taggedTemplateLiteral(["input:value.size|px"]);

  _templateObject11$3 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10$3() {
  var data = _taggedTemplateLiteral(["input.margin|px"]);

  _templateObject10$3 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9$3() {
  var data = _taggedTemplateLiteral(["input.radius|px"]);

  _templateObject9$3 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8$4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  border-radius: ", ";\n  margin: ", ";\n  background: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: ", ";\n  select {\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n"]);

  _templateObject8$4 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$4() {
  var data = _taggedTemplateLiteral(["input.height|px"]);

  _templateObject7$4 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$5() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: ", ";\n"]);

  _templateObject6$5 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  flex-grow: 1;\n  flex-shrink: 0;\n  flex-direction: column;\n  border-top: 1px solid ", ";\n"]);

  _templateObject5$5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$5() {
  var data = _taggedTemplateLiteral(["input.margin|px"]);

  _templateObject4$5 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$6() {
  var data = _taggedTemplateLiteral(["input.margin|px"]);

  _templateObject3$6 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$6() {
  var data = _taggedTemplateLiteral(["input.margin|px"]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n  border: 0;\n  margin-left: ", ";\n  margin-right: ", ";\n  width: calc(100% - ", " * 2);\n  border-bottom: 1px solid;\n  height: 100%;\n  -webkit-appearance: none;\n  vertical-align: middle;\n  outline: none;\n  border: none;\n  padding: 0;\n  background: none;\n\n  &::-webkit-slider-runnable-track {\n    background-color: ", ";\n    height: 4px;\n    border-radius: 2px;\n    border: 1px solid transparent;\n  }\n\n  &[disabled]::-webkit-slider-runnable-track {\n    border: 1px solid ", ";\n    background-color: transparent;\n    opacity: 0.4;\n  }\n\n  &::-moz-range-track {\n    background-color: ", ";\n    height: 4px;\n    border-radius: 2px;\n    border: none;\n  }\n\n  &::-ms-track {\n    color: transparent;\n    border: none;\n    background: none;\n    height: 4px;\n  }\n\n  &::-ms-fill-lower {\n    background-color: ", ";\n    border-radius: 2px;\n  }\n\n  &::-ms-fill-upper {\n    background-color: ", ";\n    border-radius: 2px;\n  }\n\n  &::-ms-tooltip {\n    display: none;\n  }\n\n  &::-moz-range-thumb {\n    border-radius: 20px;\n    height: 16px;\n    width: 16px;\n    border: none;\n    background: none;\n    background-color: ", ";\n  }\n\n  &:active::-moz-range-thumb {\n    outline: none;\n  }\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none !important;\n    border-radius: 100%;\n    background-color: ", ";\n    height: 16px;\n    width: 16px;\n    margin-top: -7px;\n  }\n\n  &[disabled]::-webkit-slider-thumb {\n    background-color: transparent;\n    border: 1px solid ", ";\n  }\n\n  &:active::-webkit-slider-thumb {\n    outline: none;\n  }\n\n  &::-ms-thumb {\n    border-radius: 100%;\n    background-color: ", ";\n    height: 16px;\n    width: 16px;\n    border: none;\n  }\n\n  &:active::-ms-thumb {\n    border: none;\n  }\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var cond$7 = UI.cond,
    is$7 = UI.is,
    get$8 = UI.get,
    variant$6 = UI.variant,
    size$6 = UI.size,
    userSelect$2 = UI.userSelect;
var ResizerRange = styled__default.input.attrs(function (p) {
  return {
    type: "range"
  };
})(_templateObject$a(), size$6(_templateObject2$6()), size$6(_templateObject3$6()), size$6(_templateObject4$5()), variant$6.transparentize(0.9, null, "contrast"), variant$6.transparentize(0.9, null, "contrast"), variant$6.transparentize(0.9, null, "contrast"), variant$6.transparentize(0.9, null, "contrast"), variant$6.transparentize(0.9, null, "contrast"), variant$6.contrast, variant$6.contrast, variant$6.transparentize(0.9, null, "contrast"), variant$6.contrast);
var Resizer = styled__default.div(_templateObject5$5(), variant$6.transparentize(0.9, "black.main"));
var ResizerDevicePicker = styled__default.div(_templateObject6$5(), size$6(_templateObject7$4()));
var ResizerDevicePickerInput = styled__default.div(_templateObject8$4(), size$6(_templateObject9$3()), size$6(_templateObject10$3()), variant$6.dark, size$6(_templateObject11$3()));
var ResizerInput = styled__default.div(_templateObject12$3(), size$6(_templateObject13$2()));
var ResizerTitle = styled__default.div(_templateObject14$2(), size$6(_templateObject15$2()), size$6(_templateObject16$2()));

var ViewportSizer =
/*#__PURE__*/
function (_Component) {
  _inherits(ViewportSizer, _Component);

  function ViewportSizer() {
    _classCallCheck(this, ViewportSizer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ViewportSizer).apply(this, arguments));
  }

  _createClass(ViewportSizer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$config = _this$props.config,
          config = _this$props$config === void 0 ? {} : _this$props$config,
          set = _this$props.set,
          get = _this$props.get,
          devices = _this$props.devices,
          ui = _this$props.ui;
      var active = get("active");
      var device = config.viewport && devices.find(function (d) {
        return d.key == config.viewport.key;
      });
      return React__default.createElement(React.Fragment, null, config.resizer && ["controllers", "scenes"].includes(active.panel) ? React__default.createElement(Resizer, ui, React__default.createElement(ResizerDevicePicker, ui, React__default.createElement(ResizerTitle, ui, "View"), React__default.createElement(ResizerDevicePickerInput, ui, device ? device.title : "Custom", React__default.createElement("select", {
        value: device ? device.key : "custom",
        onChange: function onChange(e) {
          var value = e.target.value;

          if (value == "custom") {
            set("config", {
              viewport: {
                key: value,
                width: 100,
                height: 100
              }
            });
          } else {
            set("config", {
              viewport: {
                key: value
              }
            });
          }
        }
      }, React__default.createElement("option", {
        value: "custom"
      }, "Custom"), devices.map(function (d) {
        return React__default.createElement("option", {
          key: d.key,
          value: d.key
        }, d.title);
      })))), config.viewport && config.viewport.key == "custom" && React__default.createElement(React.Fragment, null, React__default.createElement(ResizerInput, ui, React__default.createElement(ResizerTitle, ui, "Width"), React__default.createElement(ResizerRange, _extends({}, ui, {
        max: 100,
        min: 0,
        step: 1,
        value: config.viewport.width,
        onChange: function onChange(e) {
          set("config", {
            viewport: _objectSpread({}, config.viewport, {
              width: e.target.value
            })
          });
        }
      })), React__default.createElement(ResizerTitle, ui, config.viewport.width, "%")), React__default.createElement(ResizerInput, null, React__default.createElement(ResizerTitle, ui, "Height"), React__default.createElement(ResizerRange, _extends({}, ui, {
        max: 100,
        min: 0,
        step: 1,
        value: config.viewport.height,
        onChange: function onChange(e) {
          set("config", {
            viewport: _objectSpread({}, config.viewport, {
              height: e.target.value
            })
          });
        }
      })), React__default.createElement(ResizerTitle, ui, config.viewport.height, "%")))) : null);
    }
  }]);

  return ViewportSizer;
}(React.Component);

var toggleCentered = {
  title: "Toggle Center",
  _id: "toggle-centered",
  icon: "📍",
  active: function active(_ref) {
    var get = _ref.get;
    var active = get("active");
    var scenes = get("scenesData");
    var scene = scenes[active.scene];
    var options = scene ? scene.options || {} : {};
    return options.centered;
  },
  onClick: function onClick(_ref2) {
    var set = _ref2.set,
        get = _ref2.get;
    var config = get("config");
    var active = get("active");
    var scenes = get("scenesData");
    var scene = scenes[active.scene];
    var options = scene ? scene.options || {} : {};
    set("scenesData", _defineProperty({}, active.scene, _objectSpread({}, scene, {
      options: _objectSpread({}, options, {
        centered: !options.centered
      })
    })), null, config.caching);
  }
};
var toggleBackground = {
  title: "Toggle Background",
  _id: "toggle-bg",
  icon: function icon(_ref3) {
    var set = _ref3.set,
        get = _ref3.get;
    var active = get("active");
    var scenes = get("scenesData");
    var scene = scenes[active.scene];

    var _ref4 = scene ? scene.options || {} : {},
        bg = _ref4.bg;

    var directions = ["light", "dark", "black", "none"];
    var icons = ["⚪️", "⚫️", "⬛️", "⬜️"];
    var current = directions.indexOf(bg);
    return icons[current];
  },
  onClick: function onClick(_ref5) {
    var set = _ref5.set,
        get = _ref5.get;
    var config = get("config");
    var active = get("active");
    var scenes = get("scenesData");
    var scene = scenes[active.scene];
    var options = scene ? scene.options || {} : {};
    var directions = ["light", "dark", "black", "none"];
    var current = directions.indexOf(options.bg);
    var isLast = current == directions.length - 1;
    set("scenesData", _defineProperty({}, active.scene, _objectSpread({}, scene, {
      options: _objectSpread({}, options, {
        bg: isLast ? directions[0] : directions[current + 1]
      })
    })), null, config.caching);
  }
};
var resetCache = {
  title: "Reset Cache",
  _id: "reset",
  icon: "↩️",
  onClick: function onClick(_ref6) {
    var set = _ref6.set,
        get = _ref6.get,
        scenes = _ref6.scenes;
    var config = get("config");
    var active = get("active");
    var scene = scenes.find(function (s) {
      return s._id == active.scene;
    });
    set("scenesData", _defineProperty({}, active.scene, {
      options: scene.options,
      props: {}
    }), null, config.caching);
  }
};
var toggleCaching = {
  title: "Toggle Caching",
  _id: "caching",
  icon: function icon(_ref7) {
    var get = _ref7.get;
    return get("config").caching ? "⏸" : "⏺";
  },
  onClick: function onClick(_ref8) {
    var set = _ref8.set,
        get = _ref8.get;
    var config = get("config");
    set("config", {
      caching: !config.caching
    });

    if (config.caching) {
      set("scenesData", {}, true, true, false);
    }
  }
};
var resizer = {
  title: "Viewport Resizer",
  _id: "resizer",
  icon: "📏",
  active: function active(_ref9) {
    var get = _ref9.get;
    return get("config").resizer;
  },
  onClick: function onClick(_ref10) {
    var set = _ref10.set,
        get = _ref10.get;
    set("config", {
      resizer: !get("config").resizer
    });
  },
  component: ViewportSizer
};
var reset = {
  title: "Reset All",
  _id: "reset",
  icon: "↩️",
  onClick: function onClick(_ref11) {
    var set = _ref11.set,
        get = _ref11.get,
        scenes = _ref11.scenes;
    var inital = get("initial", true);
    set("config", inital.config, true, true);
    set("active", inital.active, true, true);
  }
};
var defaultPanels = [{
  title: "Scenes",
  _id: "scenes",
  component: ListPanel,
  active: function active(_ref12) {
    var get = _ref12.get;
    return get("active").panel == "scenes";
  },
  icon: "🗂",
  actions: [reset, resizer, toggleCaching]
}, {
  title: "Controllers",
  _id: "controllers",
  component: ControllersPanel,
  active: function active(_ref13) {
    var get = _ref13.get;
    return get("active").panel == "controllers";
  },
  icon: "🎚",
  actions: [toggleCentered, toggleBackground, resetCache]
}, {
  title: "Events",
  _id: "events",
  component: Events,
  active: function active(_ref14) {
    var get = _ref14.get;
    return get("active").panel == "events";
  },
  icon: "🚀"
}, {
  title: "Code",
  _id: "code",
  component: Code,
  active: function active(_ref15) {
    var get = _ref15.get;
    return get("active").panel == "code";
  },
  icon: "📤"
}, {
  title: "Docs",
  _id: "docs",
  component: DocsPanel,
  active: function active(_ref16) {
    var get = _ref16.get;
    return get("active").panel == "docs";
  },
  icon: "📓"
}];

var defaultDevices = [{
  key: "iphonexsmax",
  title: "iPhone XS Max",
  width: 414,
  height: 869
}, {
  key: "iphonexs",
  title: "iPhone XS",
  width: 375,
  height: 812
}, {
  key: "iphone8p",
  title: "iPhone 8 Plus",
  width: 414,
  height: 736
}, {
  key: "iphone8",
  title: "iPhone 8",
  width: 375,
  height: 667
}, {
  key: "iphonese",
  title: "iPhone SE",
  width: 320,
  height: 568
}, {
  key: "ipadpro",
  title: "iPad Pro",
  width: 1024,
  height: 1366
}, {
  key: "ipadprol",
  title: "iPad Pro Landscape",
  width: 1366,
  height: 1024
}, {
  key: "ipad",
  title: "iPad",
  width: 768,
  height: 1024
}, {
  key: "ipadl",
  title: "iPad Landscape",
  width: 1024,
  height: 768
}, {
  key: "pixel3",
  title: "Google Pixel 3",
  width: 411,
  height: 731
}];

var Scenes =
/*#__PURE__*/
function (_Component) {
  _inherits(Scenes, _Component);

  function Scenes(props) {
    var _this;

    _classCallCheck(this, Scenes);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Scenes).call(this, props));
    var storeKey = _this.props.storeKey;
    _this.storeKey = storeKey ? storeKey : "__scenesv2";
    var saved = {
      active: Store.get("active", _this.storeKey),
      config: Store.get("config", _this.storeKey)
    };
    _this.state = {
      ready: false,
      scenesData: _this.scenesData,
      config: saved.config || _this.initial.config,
      active: saved.active || _this.initial.active
    };
    _this.set = _this.set.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.get = _this.get.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    Store.set({
      initial: _this.initial
    });
    return _this;
  }

  _createClass(Scenes, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //eslint-disable-next-line
      this.setState({
        ready: true
      });
    }
  }, {
    key: "set",
    value: function set(key, value, direct) {
      var caching = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var state = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      var newValue = direct ? value : _objectSpread({}, this.state[key], value);

      if (state) {
        this.setState(_defineProperty({}, key, newValue));
      }

      if (caching) {
        Store.set(_defineProperty({}, key, newValue), this.storeKey);
      }
    }
  }, {
    key: "get",
    value: function get(key, fromStore) {
      if (fromStore) {
        return Store.get(key);
      }

      return this.state[key] || {};
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$title = _this$props.title,
          title = _this$props$title === void 0 ? "React Scenes" : _this$props$title,
          standalone = _this$props.standalone;
      var ready = this.state.ready;
      if (!ready) return null;
      return React__default.createElement(React.Fragment, null, standalone && React__default.createElement(DocumentStyle, null), React__default.createElement(styled.ThemeProvider, {
        theme: theme
      }, React__default.createElement(ScenesWrapper, this.ui, React__default.createElement(Viewport, _extends({}, this.ui, {
        devices: this.devices,
        panels: this.panels,
        scenes: this.scenes,
        scene: this.scene,
        config: this.config,
        set: this.set,
        get: this.get
      })), React__default.createElement(Panel, _extends({}, this.ui, {
        title: title,
        devices: this.devices,
        panels: this.panels,
        scenes: this.scenes,
        scene: this.scene,
        config: this.config,
        set: this.set,
        get: this.get
      })))));
    }
  }, {
    key: "scenesData",
    get: function get() {
      var scenesData = {};
      var cachedScenesData = Store.get("scenesData", this.storeKey);
      this.scenes.forEach(function (s) {
        var cached = cachedScenesData && cachedScenesData[s._id] ? cachedScenesData[s._id] : {};
        scenesData[s._id] = {
          options: _objectSpread({}, s.options, cached.options),
          props: _objectSpread({}, cached.props)
        };
      });
      return scenesData;
    }
  }, {
    key: "ui",
    get: function get() {
      return _objectSpread({}, this.config, this.scene.options);
    }
  }, {
    key: "initial",
    get: function get() {
      var _this$props$config = this.props.config,
          config = _this$props$config === void 0 ? {} : _this$props$config;

      var initialConfig = _objectSpread({
        caching: false,
        viewport: {
          key: "custom",
          width: 100,
          height: 100
        }
      }, config);

      var panel = this.panels[0] ? this.panels[0]._id : null;
      var scene = this.scenes[0] ? this.scenes[0]._id : null;
      var initialActive = {
        scene: scene,
        panel: panel
      };
      return {
        config: initialConfig,
        active: initialActive
      };
    }
  }, {
    key: "config",
    get: function get() {
      return this.state.config;
    }
  }, {
    key: "panels",
    get: function get() {
      var _this$props$panels = this.props.panels,
          panels = _this$props$panels === void 0 ? [] : _this$props$panels;
      return _toConsumableArray(defaultPanels).concat(_toConsumableArray(panels));
    }
  }, {
    key: "devices",
    get: function get() {
      var _this$props$devices = this.props.devices,
          devices = _this$props$devices === void 0 ? [] : _this$props$devices;
      return _toConsumableArray(defaultDevices).concat(_toConsumableArray(devices));
    }
  }, {
    key: "scenes",
    get: function get() {
      var _this$props$scenes = this.props.scenes,
          scenes = _this$props$scenes === void 0 ? [] : _this$props$scenes;
      return scenes.map(function (scene, idx) {
        if (!scene._id) {
          scene._id = scene.title ? slugify(scene.title) : idx;
        }

        return scene;
      });
    }
  }, {
    key: "scene",
    get: function get() {
      var _this$state = this.state,
          active = _this$state.active,
          _this$state$scenesDat = _this$state.scenesData,
          scenesData = _this$state$scenesDat === void 0 ? {} : _this$state$scenesDat;
      var scene = this.scenes.find(function (s) {
        return s._id == active.scene;
      }) || {};
      var cached = scenesData[active.scene];

      if (scene._id) {
        return _objectSpread({}, scene, cached);
      } else {
        return this.scenes[0] || {};
      }
    }
  }]);

  return Scenes;
}(React.Component);

function _templateObject41() {
  var data = _taggedTemplateLiteral(["input:value.height|px"]);

  _templateObject41 = function _templateObject41() {
    return data;
  };

  return data;
}

function _templateObject40() {
  var data = _taggedTemplateLiteral(["\n  border: 0;\n  width: 100%;\n  margin: 0;\n  display: block;\n  border-bottom: 1px solid;\n  height: ", ";\n  -webkit-appearance: none;\n  vertical-align: middle;\n  outline: none;\n  border: none;\n  padding: 0;\n  background: none;\n\n  &::-webkit-slider-runnable-track {\n    background-color: ", ";\n    height: 4px;\n    border-radius: 2px;\n    border: 1px solid transparent;\n  }\n\n  &[disabled]::-webkit-slider-runnable-track {\n    border: 1px solid ", ";\n    background-color: transparent;\n    opacity: 0.4;\n  }\n\n  &::-moz-range-track {\n    background-color: ", ";\n    height: 4px;\n    border-radius: 2px;\n    border: none;\n  }\n\n  &::-ms-track {\n    color: transparent;\n    border: none;\n    background: none;\n    height: 4px;\n  }\n\n  &::-ms-fill-lower {\n    background-color: ", ";\n    border-radius: 2px;\n  }\n\n  &::-ms-fill-upper {\n    background-color: ", ";\n    border-radius: 2px;\n  }\n\n  &::-ms-tooltip {\n    display: none;\n  }\n\n  &::-moz-range-thumb {\n    border-radius: 20px;\n    height: 16px;\n    width: 16px;\n    border: none;\n    background: none;\n    background-color: ", ";\n  }\n\n  &:active::-moz-range-thumb {\n    outline: none;\n  }\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none !important;\n    border-radius: 100%;\n    background-color: ", ";\n    height: 16px;\n    width: 16px;\n    margin-top: -7px;\n  }\n\n  &[disabled]::-webkit-slider-thumb {\n    background-color: transparent;\n    border: 1px solid ", ";\n  }\n\n  &:active::-webkit-slider-thumb {\n    outline: none;\n  }\n\n  &::-ms-thumb {\n    border-radius: 100%;\n    background-color: ", ";\n    height: 16px;\n    width: 16px;\n    border: none;\n  }\n\n  &:active::-ms-thumb {\n    border: none;\n  }\n"]);

  _templateObject40 = function _templateObject40() {
    return data;
  };

  return data;
}

function _templateObject39$2() {
  var data = _taggedTemplateLiteral(["input:value.size|px"]);

  _templateObject39$2 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38$2() {
  var data = _taggedTemplateLiteral(["input:value.height|px"]);

  _templateObject38$2 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37$2() {
  var data = _taggedTemplateLiteral(["input:value.height|px"]);

  _templateObject37$2 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36$2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  border: 0;\n  font-weight: 600;\n  width: 100%;\n  background: none;\n  padding: 0;\n  margin: 0;\n  height: ", ";\n  line-height: ", ";\n  font-size: ", ";\n"]);

  _templateObject36$2 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35$2() {
  var data = _taggedTemplateLiteral(["input:padding|px"]);

  _templateObject35$2 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34$2() {
  var data = _taggedTemplateLiteral(["input:padding|px"]);

  _templateObject34$2 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33$2() {
  var data = _taggedTemplateLiteral(["input:value.height|px"]);

  _templateObject33$2 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32$2() {
  var data = _taggedTemplateLiteral(["input:value.height|px"]);

  _templateObject32$2 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31$2() {
  var data = _taggedTemplateLiteral(["input:value.height|px"]);

  _templateObject31$2 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30$2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: ", ";\n  height: ", ";\n  border-radius: ", ";\n  background: ", ";\n  bottom: ", ";\n  right: ", ";\n\n  cursor: pointer;\n  border: 1px solid rgba(0, 0, 0, 0.01);\n"]);

  _templateObject30$2 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29$2() {
  var data = _taggedTemplateLiteral(["input:padding|px"]);

  _templateObject29$2 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28$2() {
  var data = _taggedTemplateLiteral(["input:padding|px"]);

  _templateObject28$2 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27$2() {
  var data = _taggedTemplateLiteral(["input:value.height|px"]);

  _templateObject27$2 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26$2() {
  var data = _taggedTemplateLiteral(["input:padding|px"]);

  _templateObject26$2 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25$2() {
  var data = _taggedTemplateLiteral(["input:title.height|px"]);

  _templateObject25$2 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24$2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: calc(\n    ", " + ", " * 2 +\n      ", "\n  );\n  width: 100%;\n  left: 0;\n  z-index: 99;\n  ", ";\n  .chrome-picker {\n    margin-left: ", ";\n    width: calc(100% - ", "*2) !important;\n  }\n"]);

  _templateObject24$2 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23$2() {
  var data = _taggedTemplateLiteral(["input:title.size|px"]);

  _templateObject23$2 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22$2() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  text-transform: uppercase;\n  opacity: 0.6;\n"]);

  _templateObject22$2 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21$2() {
  var data = _taggedTemplateLiteral(["\n  border: 0;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  opacity: 0;\n  position: absolute;\n  cursor: pointer;\n  background: none;\n"]);

  _templateObject21$2 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20$2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject20$2 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19$2() {
  var data = _taggedTemplateLiteral(["input:value.size|px"]);

  _templateObject19$2 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18$2() {
  var data = _taggedTemplateLiteral(["input:value.height|px"]);

  _templateObject18$2 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17$2() {
  var data = _taggedTemplateLiteral(["input:value.height|px"]);

  _templateObject17$2 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16$3() {
  var data = _taggedTemplateLiteral(["\n  border: 0;\n  width: 100%;\n  height: ", ";\n  line-height: ", ";\n  font-size: ", ";\n  font-weight: 600;\n  position: relative;\n"]);

  _templateObject16$3 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15$3() {
  var data = _taggedTemplateLiteral(["input:value.size|px"]);

  _templateObject15$3 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14$3() {
  var data = _taggedTemplateLiteral(["input:value.height|px"]);

  _templateObject14$3 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13$3() {
  var data = _taggedTemplateLiteral(["input:value.height|px"]);

  _templateObject13$3 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12$4() {
  var data = _taggedTemplateLiteral(["\n  border: 0;\n  font-weight: 600;\n  width: 100%;\n  height: ", ";\n  line-height: ", ";\n  font-size: ", ";\n\n  cursor: pointer;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n"]);

  _templateObject12$4 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11$4() {
  var data = _taggedTemplateLiteral(["input:value.height|px"]);

  _templateObject11$4 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10$4() {
  var data = _taggedTemplateLiteral(["input:value.size|px"]);

  _templateObject10$4 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9$4() {
  var data = _taggedTemplateLiteral(["\n  border: 0;\n  width: 100%;\n  font-size: ", ";\n  font-weight: 600;\n  height: calc(", " * 4);\n  background: none;\n  resize: vertical;\n"]);

  _templateObject9$4 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8$5() {
  var data = _taggedTemplateLiteral(["\n  width: 50%;\n"]);

  _templateObject8$5 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$5() {
  var data = _taggedTemplateLiteral(["input:padding|px"]);

  _templateObject7$5 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$6() {
  var data = _taggedTemplateLiteral(["input:title.height|px"]);

  _templateObject6$6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$6() {
  var data = _taggedTemplateLiteral(["input:title.height|px"]);

  _templateObject5$6 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$6() {
  var data = _taggedTemplateLiteral(["input:title.size|px"]);

  _templateObject4$6 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$7() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  line-height: ", ";\n  height: ", ";\n  margin-bottom: calc(", " / 2);\n  opacity: 0.6;\n"]);

  _templateObject3$7 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$7() {
  var data = _taggedTemplateLiteral(["input:padding|px"]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  background: ", ";\n  padding: ", ";\n  border-bottom: 1px solid ", ";\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var cond$8 = UI.cond,
    get$9 = UI.get,
    size$7 = UI.size,
    variant$7 = UI.variant;
var InputWrapper = styled__default.div(_templateObject$b(), variant$7.light, size$7(_templateObject2$7()), variant$7.transparentize(0.9, null, "contrast"));
var InputTitle = styled__default.div(_templateObject3$7(), size$7(_templateObject4$6()), size$7(_templateObject5$6()), size$7(_templateObject6$6()), size$7(_templateObject7$5()));
var SmallInputWrapper = styled__default(InputWrapper)(_templateObject8$5());
var Textarea = styled__default.textarea.attrs(function (p) {
  return {
    placeholder: "Type something."
  };
})(_templateObject9$4(), size$7(_templateObject10$4()), size$7(_templateObject11$4()));
var Input = styled__default.div(_templateObject12$4(), size$7(_templateObject13$3()), size$7(_templateObject14$3()), size$7(_templateObject15$3()));
var SelectWrapper = styled__default.div(_templateObject16$3(), size$7(_templateObject17$2()), size$7(_templateObject18$2()), size$7(_templateObject19$2()));
var Selected = styled__default.div(_templateObject20$2());
var Select = styled__default.select(_templateObject21$2());
var SelectedTitle = styled__default.div(_templateObject22$2(), size$7(_templateObject23$2()));
var ColorInput = styled__default.div(_templateObject24$2(), size$7(_templateObject25$2()), size$7(_templateObject26$2()), size$7(_templateObject27$2()), function (p) {
  return !p.visible && "display: none";
}, size$7(_templateObject28$2()), size$7(_templateObject29$2()));
var ColorPickerButton = styled__default.div(_templateObject30$2(), size$7(_templateObject31$2()), size$7(_templateObject32$2()), size$7(_templateObject33$2()), function (p) {
  return p.color;
}, size$7(_templateObject34$2()), size$7(_templateObject35$2()));
var TextInput = styled__default.input.attrs(function (p) {
  return {
    type: p.type || "text",
    placeholder: "Type something."
  };
})(_templateObject36$2(), size$7(_templateObject37$2()), size$7(_templateObject38$2()), size$7(_templateObject39$2()));
var Range = styled__default.input.attrs(function (p) {
  return {
    type: "range"
  };
})(_templateObject40(), size$7(_templateObject41()), variant$7.transparentize(0.9, null, "contrast"), variant$7.transparentize(0.9, null, "contrast"), variant$7.transparentize(0.9, null, "contrast"), variant$7.transparentize(0.9, null, "contrast"), variant$7.transparentize(0.9, null, "contrast"), variant$7.contrast, variant$7.contrast, variant$7.transparentize(0.9, null, "contrast"), variant$7.contrast);

var text = (function (initialValue) {
  return {
    type: "text",
    initialValue: initialValue,
    process: function process(val) {
      return val;
    },
    input: function input(_ref) {
      var value = _ref.value,
          set = _ref.set,
          title = _ref.title,
          ui = _ref.ui;
      return React__default.createElement(InputWrapper, ui, React__default.createElement(InputTitle, ui, title), React__default.createElement(TextInput, _extends({}, ui, {
        type: "text",
        value: value,
        onChange: function onChange(e) {
          return set(e.target.value);
        }
      })));
    }
  };
});

var textarea = (function (initialValue) {
  return {
    type: "textarea",
    initialValue: initialValue,
    process: function process(val) {
      return val;
    },
    input: function input(_ref) {
      var value = _ref.value,
          set = _ref.set,
          title = _ref.title,
          ui = _ref.ui;
      return React__default.createElement(InputWrapper, ui, React__default.createElement(InputTitle, ui, title), React__default.createElement(Textarea, _extends({}, ui, {
        value: value,
        onChange: function onChange(e) {
          return set(e.target.value);
        }
      })));
    }
  };
});

var object = (function (initialValue) {
  return {
    type: "object",
    initialValue: initialValue,
    process: function process(val) {
      var json$$1 = val;

      try {
        json$$1 = JSON.parse(val);
      } catch (e) {
        json$$1 = val;
      }

      json$$1 = JSON.parse(JSON.stringify(json$$1));
      return json$$1;
    },
    input: function input(_ref) {
      var value = _ref.value,
          set = _ref.set,
          title = _ref.title,
          ui = _ref.ui;
      var array = value;
      var isObject;

      if (index.object(value)) {
        isObject = true;
      } else {
        try {
          array = JSON.parse(value);
        } catch (e) {
          array = value;
        }

        try {
          isObject = JSON.parse(value);
        } catch (e) {
          isObject = false;
        }
      }

      var pretty = isObject ? JSON.stringify(array, undefined, 1) : value;
      return React__default.createElement(InputWrapper, ui, React__default.createElement(InputTitle, ui, title, "(", isObject ? "valid" : "invalid", ")"), React__default.createElement(Textarea, _extends({}, ui, {
        value: pretty,
        onChange: function onChange(e) {
          return set(e.target.value);
        }
      })));
    }
  };
});

var select = (function (initialValue, options) {
  return {
    type: "select",
    initialValue: initialValue,
    process: function process(val) {
      return val;
    },
    input: function input(_ref) {
      var value = _ref.value,
          set = _ref.set,
          title = _ref.title,
          ui = _ref.ui;
      var v = options.find(function (option) {
        return option.value == value;
      });
      return React__default.createElement(InputWrapper, ui, React__default.createElement(InputTitle, ui, title), React__default.createElement(SelectWrapper, ui, React__default.createElement(SelectedTitle, ui, "Select"), React__default.createElement(Selected, ui, v ? v.key : value), React__default.createElement(Select, _extends({}, ui, {
        value: value,
        options: options,
        onChange: function onChange(e) {
          return set(e.target.value);
        }
      }), options.map(function (option, idx) {
        return React__default.createElement("option", {
          key: idx,
          value: index.object(option) ? option.value : option
        }, index.object(option) ? option.key : option);
      }))));
    }
  };
});

var boolean = (function (initialValue, cycleNull) {
  return {
    type: "boolean",
    initialValue: initialValue,
    process: function process(val) {
      return val;
    },
    input: function input(_ref) {
      var value = _ref.value,
          set = _ref.set,
          title = _ref.title,
          ui = _ref.ui;
      return React__default.createElement(InputWrapper, ui, React__default.createElement(InputTitle, ui, title), React__default.createElement(Input, _extends({}, ui, {
        onClick: function onClick(e) {
          if (cycleNull) {
            set(value == true ? false : value == false ? null : true);
          } else {
            set(!value);
          }
        }
      }), value == true ? "true" : value == false ? "false" : "null"));
    }
  };
});

var integer = (function (initialValue) {
  return {
    type: "integer",
    initialValue: initialValue,
    process: function process(val) {
      return parseInt(String("0" + val).replace(/[^0-9.]/g, ""));
    },
    input: function input(_ref) {
      var value = _ref.value,
          set = _ref.set,
          title = _ref.title,
          ui = _ref.ui;
      return React__default.createElement(InputWrapper, ui, React__default.createElement(InputTitle, ui, title), React__default.createElement(TextInput, _extends({}, ui, {
        type: "number",
        value: value,
        onChange: function onChange(e) {
          return set(e.target.value);
        }
      })));
    }
  };
});

var float = (function (initialValue) {
  return {
    type: "float",
    initialValue: initialValue,
    process: function process(val) {
      return parseFloat(String("0" + val).replace(/[^0-9.]/g, ""));
    },
    input: function input(_ref) {
      var value = _ref.value,
          set = _ref.set,
          title = _ref.title,
          ui = _ref.ui;
      return React__default.createElement(InputWrapper, ui, React__default.createElement(InputTitle, ui, title), React__default.createElement(TextInput, _extends({}, ui, {
        type: "number",
        value: value,
        onChange: function onChange(e) {
          return set(e.target.value);
        }
      })));
    }
  };
});

var array = (function (initialValue) {
  return {
    type: "array",
    initialValue: initialValue,
    process: function process(val) {
      var json$$1 = val;

      try {
        json$$1 = JSON.parse(val);
      } catch (e) {
        json$$1 = val;
      }

      json$$1 = JSON.parse(JSON.stringify(json$$1));
      return json$$1;
    },
    input: function input(_ref) {
      var value = _ref.value,
          set = _ref.set,
          title = _ref.title,
          ui = _ref.ui;
      var array = value;
      var isArray;

      if (index.array(value)) {
        isArray = true;
      } else {
        try {
          array = JSON.parse(value);
        } catch (e) {
          array = value;
        }

        try {
          isArray = JSON.parse(value);
        } catch (e) {
          isArray = false;
        }
      }

      var pretty = isArray ? JSON.stringify(array, undefined, 1) : value;
      return React__default.createElement(InputWrapper, ui, React__default.createElement(InputTitle, ui, title, "(", isArray ? "valid" : "invalid", ")"), React__default.createElement(Textarea, _extends({
        value: pretty,
        onChange: function onChange(e) {
          return set(e.target.value);
        }
      }, ui)));
    }
  };
});

var range = (function (initialValue, min, max, step) {
  return {
    type: "integer",
    initialValue: initialValue,
    process: function process(val) {
      return parseInt(String("0" + val).replace(/[^0-9.]/g, ""));
    },
    input: function input(_ref) {
      var value = _ref.value,
          set = _ref.set,
          title = _ref.title,
          ui = _ref.ui;
      return React__default.createElement(InputWrapper, null, React__default.createElement(InputTitle, null, title, " (", value, ")"), React__default.createElement(Range, {
        max: max,
        min: min,
        step: step,
        value: value,
        onChange: function onChange(e) {
          return set(e.target.value);
        }
      }));
    }
  };
});

function _inheritsLoose$1(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/**
 * Check whether some DOM node is our Component's node.
 */
function isNodeFound(current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  } // SVG <use/> elements do not technically reside in the rendered DOM, so
  // they do not have classList directly, but they offer a link to their
  // corresponding element, which can have classList. This extra check is for
  // that case.
  // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement
  // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17


  if (current.correspondingElement) {
    return current.correspondingElement.classList.contains(ignoreClass);
  }

  return current.classList.contains(ignoreClass);
}
/**
 * Try to find our node in a hierarchy of nodes, returning the document
 * node as highest node if our node is not found in the path up.
 */

function findHighest(current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  } // If source=local then this event came from 'somewhere'
  // inside and should be ignored. We could handle this with
  // a layered approach, too, but that requires going back to
  // thinking in terms of Dom node nesting, running counter
  // to React's 'you shouldn't care about the DOM' philosophy.


  while (current.parentNode) {
    if (isNodeFound(current, componentNode, ignoreClass)) {
      return true;
    }

    current = current.parentNode;
  }

  return current;
}
/**
 * Check if the browser scrollbar was clicked
 */

function clickedScrollbar(evt) {
  return document.documentElement.clientWidth <= evt.clientX || document.documentElement.clientHeight <= evt.clientY;
}

// ideally will get replaced with external dep
// when rafrex/detect-passive-events#4 and rafrex/detect-passive-events#5 get merged in
var testPassiveEventSupport = function testPassiveEventSupport() {
  if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') {
    return;
  }

  var passive = false;
  var options = Object.defineProperty({}, 'passive', {
    get: function get() {
      passive = true;
    }
  });

  var noop = function noop() {};

  window.addEventListener('testPassiveEventSupport', noop, options);
  window.removeEventListener('testPassiveEventSupport', noop, options);
  return passive;
};

function autoInc(seed) {
  if (seed === void 0) {
    seed = 0;
  }

  return function () {
    return ++seed;
  };
}

var uid = autoInc();

var passiveEventSupport;
var handlersMap = {};
var enabledInstances = {};
var touchEvents = ['touchstart', 'touchmove'];
var IGNORE_CLASS_NAME = 'ignore-react-onclickoutside';
/**
 * Options for addEventHandler and removeEventHandler
 */

function getEventHandlerOptions(instance, eventName) {
  var handlerOptions = null;
  var isTouchEvent = touchEvents.indexOf(eventName) !== -1;

  if (isTouchEvent && passiveEventSupport) {
    handlerOptions = {
      passive: !instance.props.preventDefault
    };
  }

  return handlerOptions;
}
/**
 * This function generates the HOC function that you'll use
 * in order to impart onOutsideClick listening to an
 * arbitrary component. It gets called at the end of the
 * bootstrapping code to yield an instance of the
 * onClickOutsideHOC function defined inside setupHOC().
 */


function onClickOutsideHOC(WrappedComponent, config) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose$1(onClickOutside, _Component);

    function onClickOutside(props) {
      var _this;

      _this = _Component.call(this, props) || this;

      _this.__outsideClickHandler = function (event) {
        if (typeof _this.__clickOutsideHandlerProp === 'function') {
          _this.__clickOutsideHandlerProp(event);

          return;
        }

        var instance = _this.getInstance();

        if (typeof instance.props.handleClickOutside === 'function') {
          instance.props.handleClickOutside(event);
          return;
        }

        if (typeof instance.handleClickOutside === 'function') {
          instance.handleClickOutside(event);
          return;
        }

        throw new Error('WrappedComponent lacks a handleClickOutside(event) function for processing outside click events.');
      };

      _this.enableOnClickOutside = function () {
        if (typeof document === 'undefined' || enabledInstances[_this._uid]) {
          return;
        }

        if (typeof passiveEventSupport === 'undefined') {
          passiveEventSupport = testPassiveEventSupport();
        }

        enabledInstances[_this._uid] = true;
        var events = _this.props.eventTypes;

        if (!events.forEach) {
          events = [events];
        }

        handlersMap[_this._uid] = function (event) {
          if (_this.props.disableOnClickOutside) return;
          if (_this.componentNode === null) return;

          if (_this.props.preventDefault) {
            event.preventDefault();
          }

          if (_this.props.stopPropagation) {
            event.stopPropagation();
          }

          if (_this.props.excludeScrollbar && clickedScrollbar(event)) return;
          var current = event.target;

          if (findHighest(current, _this.componentNode, _this.props.outsideClickIgnoreClass) !== document) {
            return;
          }

          _this.__outsideClickHandler(event);
        };

        events.forEach(function (eventName) {
          document.addEventListener(eventName, handlersMap[_this._uid], getEventHandlerOptions(_this, eventName));
        });
      };

      _this.disableOnClickOutside = function () {
        delete enabledInstances[_this._uid];
        var fn = handlersMap[_this._uid];

        if (fn && typeof document !== 'undefined') {
          var events = _this.props.eventTypes;

          if (!events.forEach) {
            events = [events];
          }

          events.forEach(function (eventName) {
            return document.removeEventListener(eventName, fn, getEventHandlerOptions(_this, eventName));
          });
          delete handlersMap[_this._uid];
        }
      };

      _this.getRef = function (ref) {
        return _this.instanceRef = ref;
      };

      _this._uid = uid();
      return _this;
    }
    /**
     * Access the WrappedComponent's instance.
     */


    var _proto = onClickOutside.prototype;

    _proto.getInstance = function getInstance() {
      if (!WrappedComponent.prototype.isReactComponent) {
        return this;
      }

      var ref = this.instanceRef;
      return ref.getInstance ? ref.getInstance() : ref;
    };

    /**
     * Add click listeners to the current document,
     * linked to this component's state.
     */
    _proto.componentDidMount = function componentDidMount() {
      // If we are in an environment without a DOM such
      // as shallow rendering or snapshots then we exit
      // early to prevent any unhandled errors being thrown.
      if (typeof document === 'undefined' || !document.createElement) {
        return;
      }

      var instance = this.getInstance();

      if (config && typeof config.handleClickOutside === 'function') {
        this.__clickOutsideHandlerProp = config.handleClickOutside(instance);

        if (typeof this.__clickOutsideHandlerProp !== 'function') {
          throw new Error('WrappedComponent lacks a function for processing outside click events specified by the handleClickOutside config option.');
        }
      }

      this.componentNode = reactDom.findDOMNode(this.getInstance());
      this.enableOnClickOutside();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      this.componentNode = reactDom.findDOMNode(this.getInstance());
    };
    /**
     * Remove all document's event listeners for this component
     */


    _proto.componentWillUnmount = function componentWillUnmount() {
      this.disableOnClickOutside();
    };
    /**
     * Can be called to explicitly enable event listening
     * for clicks and touches outside of this element.
     */


    /**
     * Pass-through render
     */
    _proto.render = function render() {
      // eslint-disable-next-line no-unused-vars
      var _props = this.props,
          excludeScrollbar = _props.excludeScrollbar,
          props = _objectWithoutProperties$1(_props, ["excludeScrollbar"]);

      if (WrappedComponent.prototype.isReactComponent) {
        props.ref = this.getRef;
      } else {
        props.wrappedRef = this.getRef;
      }

      props.disableOnClickOutside = this.disableOnClickOutside;
      props.enableOnClickOutside = this.enableOnClickOutside;
      return React.createElement(WrappedComponent, props);
    };

    return onClickOutside;
  }(React.Component), _class.displayName = "OnClickOutside(" + (WrappedComponent.displayName || WrappedComponent.name || 'Component') + ")", _class.defaultProps = {
    eventTypes: ['mousedown', 'touchstart'],
    excludeScrollbar: config && config.excludeScrollbar || false,
    outsideClickIgnoreClass: IGNORE_CLASS_NAME,
    preventDefault: false,
    stopPropagation: false
  }, _class.getClass = function () {
    return WrappedComponent.getClass ? WrappedComponent.getClass() : WrappedComponent;
  }, _temp;
}

var ColorPicker =
/*#__PURE__*/
function (_Component) {
  _inherits(ColorPicker, _Component);

  function ColorPicker() {
    _classCallCheck(this, ColorPicker);

    return _possibleConstructorReturn(this, _getPrototypeOf(ColorPicker).apply(this, arguments));
  }

  _createClass(ColorPicker, [{
    key: "handleClickOutside",
    value: function handleClickOutside() {
      this.props.setState({
        visible: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React__default.createElement(ColorInput, {
        visible: this.props.state.visible
      }, React__default.createElement(reactColor.ChromePicker, this.props));
    }
  }]);

  return ColorPicker;
}(React.Component);

var ColorPickerComponent = onClickOutsideHOC(ColorPicker);
var color = (function (initialValue) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "rgba";
  return {
    type: "color",
    initialValue: initialValue,
    process: function process(val) {
      return val;
    },
    input: function input(_ref) {
      var value = _ref.value,
          set = _ref.set,
          title = _ref.title,
          state = _ref.state,
          setState = _ref.setState,
          ui = _ref.ui;
      return React__default.createElement(InputWrapper, ui, React__default.createElement(InputTitle, ui, title), React__default.createElement(TextInput, _extends({}, ui, {
        value: value,
        onChange: function onChange(e) {
          return set(e.target.value);
        },
        onFocus: function onFocus() {
          setState({
            visible: !state.visible
          });
        }
      })), React__default.createElement(ColorPickerButton, _extends({}, ui, {
        color: value,
        onClick: function onClick() {
          setState({
            visible: !state.visible
          });
        }
      })), React__default.createElement(ColorPickerComponent, {
        ui: ui,
        state: state,
        setState: setState,
        color: value,
        onChange: function onChange(_ref2) {
          var hex = _ref2.hex,
              rgb = _ref2.rgb;
          var string = "";

          if (type == "rgba") {
            string = "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")");
          }

          if (type == "rgb") {
            string = "rgb(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ")");
          }

          if (type == "hex") {
            string = hex;
          }

          set(string);
        }
      }));
    }
  };
});



var controllers = /*#__PURE__*/Object.freeze({
  text: text,
  textarea: textarea,
  object: object,
  select: select,
  boolean: boolean,
  integer: integer,
  float: float,
  array: array,
  range: range,
  color: color
});

/*globals
module
require
*/
var src = {
  Scenes: Scenes,
  controllers: controllers
};
var src_1 = src.Scenes;
var src_2 = src.controllers;

exports.default = src;
exports.Scenes = src_1;
exports.controllers = src_2;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./components/Button/index.js":
/*!************************************!*\
  !*** ./components/Button/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/berkaey/Development/react-scenes/examples/my-library/components/Button/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: sans-serif;\n  cursor: ", ";\n  min-width: 128px;\n  padding: 8px;\n  height: ", "px;\n  border-radius: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  color: #fff;\n  transition: 0.2s;\n  &:hover {\n    box-shadow: ", ";\n  }\n  &:active {\n    box-shadow: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.attrs(function (p) {
  return {
    style: {
      backgroundColor: p.disabled ? "#ccc" : p.color
    }
  };
})(_templateObject(), function (p) {
  return p.disabled ? "default" : "pointer";
}, function (p) {
  return p.size == "big" ? 48 : 32;
}, function (p) {
  return !p.disabled && "0px 8px 8px rgba(0, 0, 0, 0.1)";
}, function (p) {
  return !p.disabled && "0px 2px 2px rgba(0, 0, 0, 0.1)";
});

var Button = function Button(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? "Button" : _ref$title,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "#5DAEF2" : _ref$color,
      rest = _objectWithoutProperties(_ref, ["title", "color"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonWrapper, _extends({
    color: color
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), title);
};

Button.displayName = "Button";
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Button/scene.js":
/*!************************************!*\
  !*** ./components/Button/scene.js ***!
  \************************************/
/*! exports provided: ButtonScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonScene", function() { return ButtonScene; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib */ "../../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./components/Button/index.js");
var _jsxFileName = "/Users/berkaey/Development/react-scenes/examples/my-library/components/Button/scene.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var ButtonScene = {
  title: "Buttons>Default",
  target: function target(_ref) {
    var props = _ref.props,
        state = _ref.state,
        setState = _ref.setState,
        pushEvent = _ref.pushEvent;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
      onMouseLeave: function onMouseLeave() {
        pushEvent("customEvent", {
          hello: "world"
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), props.title);
  },
  options: {
    bg: "light",
    centered: true
  },
  events: ["onClick"],
  controllers: [{
    key: "title",
    title: "title",
    controller: _lib__WEBPACK_IMPORTED_MODULE_1__["controllers"].text("Button")
  }, {
    key: "color",
    title: "color",
    controller: _lib__WEBPACK_IMPORTED_MODULE_1__["controllers"].color()
  }, {
    key: "size",
    title: "select",
    controller: _lib__WEBPACK_IMPORTED_MODULE_1__["controllers"].select("big", ["", "big", "small"])
  }, {
    key: "disabled",
    title: "disabled",
    controller: _lib__WEBPACK_IMPORTED_MODULE_1__["controllers"].boolean()
  }],
  docs: "#### Button\n\n`title` _string_\nEnter button title here.\n\n`color` _string_\nsupported formats: RGB, RGBA, HSL, HSLA, HEX\n\n`size` _string_\n\noptions: big and small\n\n`disabled` _boolean_\n"
};

/***/ }),

/***/ "./components/Library/index.js":
/*!*************************************!*\
  !*** ./components/Library/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib */ "../../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/scene */ "./components/Button/scene.js");
/* harmony import */ var _Welcome_scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Welcome/scene */ "./components/Welcome/scene.js");
var _jsxFileName = "/Users/berkaey/Development/react-scenes/examples/my-library/components/Library/index.js";




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["Scenes"], {
    title: "My Scenes",
    standalone: true,
    scenes: [_Welcome_scene__WEBPACK_IMPORTED_MODULE_3__["WelcomeScene"], _Button_scene__WEBPACK_IMPORTED_MODULE_2__["ButtonScene"]],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  });
});

/***/ }),

/***/ "./components/Welcome/index.js":
/*!*************************************!*\
  !*** ./components/Welcome/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/berkaey/Development/react-scenes/examples/my-library/components/Welcome/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: sans-serif;\n  cursor: ", ";\n  min-width: 128px;\n  padding: 8px;\n  height: ", "px;\n  border-radius: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  color: #fff;\n  transition: 0.2s;\n  &:hover {\n    box-shadow: ", ";\n  }\n  &:active {\n    box-shadow: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.attrs(function (p) {
  return {
    style: {
      backgroundColor: p.disabled ? "#ccc" : p.color
    }
  };
})(_templateObject(), function (p) {
  return p.disabled ? "default" : "pointer";
}, function (p) {
  return p.size == "big" ? 48 : 32;
}, function (p) {
  return !p.disabled && " 0px 8px 8px rgba(0, 0, 0, 0.1)";
}, function (p) {
  return !p.disabled && " 0px 2px 2px rgba(0, 0, 0, 0.1)";
});

var Button = function Button(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? "Button" : _ref$title,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "#5DAEF2" : _ref$color,
      rest = _objectWithoutProperties(_ref, ["title", "color"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonWrapper, _extends({
    color: color
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), title);
};

Button.displayName = "Button";
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Welcome/scene.js":
/*!*************************************!*\
  !*** ./components/Welcome/scene.js ***!
  \*************************************/
/*! exports provided: WelcomeScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeScene", function() { return WelcomeScene; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib */ "../../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ "./components/Welcome/index.js");



var WelcomeScene = {
  title: "Welcome>Default",
  target: ___WEBPACK_IMPORTED_MODULE_2__["default"],
  options: {
    bg: "light",
    centered: true
  },
  events: ["onClick"],
  controllers: [{
    key: "theme",
    title: "select",
    controller: _lib__WEBPACK_IMPORTED_MODULE_1__["controllers"].select("dark", ["", "dark", "light"])
  }],
  docs: "This could be our little documentation for this components. *Markdown* **supported**."
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Library */ "./components/Library/index.js");
var _jsxFileName = "/Users/berkaey/Development/react-scenes/examples/my-library/pages/index.js";
 // import dynamic from "next/dynamic";
// const Library = dynamic(() => import("../components/Library"), {
//   ssr: true
// });


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Library__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  });
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "clipboard-copy":
/*!*********************************!*\
  !*** external "clipboard-copy" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clipboard-copy");

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-color":
/*!******************************!*\
  !*** external "react-color" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-color");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-draggable":
/*!**********************************!*\
  !*** external "react-draggable" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-draggable");

/***/ }),

/***/ "react-syntax-highlighter/languages/prism/json":
/*!****************************************************************!*\
  !*** external "react-syntax-highlighter/languages/prism/json" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/languages/prism/json");

/***/ }),

/***/ "react-syntax-highlighter/languages/prism/jsx":
/*!***************************************************************!*\
  !*** external "react-syntax-highlighter/languages/prism/jsx" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/languages/prism/jsx");

/***/ }),

/***/ "react-syntax-highlighter/prism-light":
/*!*******************************************************!*\
  !*** external "react-syntax-highlighter/prism-light" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/prism-light");

/***/ }),

/***/ "react-syntax-highlighter/styles/prism/coy":
/*!************************************************************!*\
  !*** external "react-syntax-highlighter/styles/prism/coy" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/styles/prism/coy");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-reset":
/*!*******************************!*\
  !*** external "styled-reset" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-reset");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map