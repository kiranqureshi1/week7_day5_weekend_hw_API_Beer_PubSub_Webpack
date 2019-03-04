/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Beer = __webpack_require__(/*! ./models/beer.js */ \"./src/models/beer.js\");\nconst BeerListView = __webpack_require__(/*! ./views/beer_list_view.js */ \"./src/views/beer_list_view.js\");\nconst SelectView = __webpack_require__(/*! ./views/select_view.js */ \"./src/views/select_view.js\");\nconst SingleBeerView = __webpack_require__(/*! ./views/single_bear_view.js */ \"./src/views/single_bear_view.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () =>{\n  console.log(\"javaScript loaded\");\n\n  const infodiv = document.querySelector('#detail');\n  const beerListView = new BeerListView(infodiv);\n  // console.log(beerListView);\n  beerListView.bindEvents();\n\n\n  // const infodivB = document.querySelector('#singdetail');\n  // const singleBeerView = new SingleBeerView(beer.data, infodivB);\n  // // console.log(singleBeerView);\n  // singleBeerView.bindEvents();\n\n\n\n  const infodivA = document.querySelector('#dropdown');\n  const selectView = new SelectView(infodivA);\n  // console.log(selectView);\n  selectView.bindEvents();\n\n\n  const beer = new Beer();\n  beer.getData();\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request_helpers.js":
/*!****************************************!*\
  !*** ./src/helpers/request_helpers.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function (url) {\n  this.url = url\n}\n\nRequestHelper.prototype.get = function () {\n  console.log(\"request helper running\");\n\n  return fetch(this.url)\n    .then(response => response.json());\n};\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./src/helpers/request_helpers.js?");

/***/ }),

/***/ "./src/models/beer.js":
/*!****************************!*\
  !*** ./src/models/beer.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const RequestHelper = __webpack_require__(/*! ../helpers/request_helpers.js */ \"./src/helpers/request_helpers.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\n\n\nconst Beer = function(data) {\n  this.data = data;\n};\n\nBeer.prototype.getData = function () {\n  const requestHelper = new RequestHelper('https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6');\n  requestHelper.get().then((data) => {\n    this.data = data;\n    console.log(this.data);\n    PubSub.publish(\"beer list data is ready\", this.data);\n  });\n\n  PubSub.subscribe('SelectView:change', (event) => {\n      const selectedIndex = event.detail;\n      console.log(selectedIndex);\n      this.publishbeerData(selectedIndex);\n    });\n};\n\n\n\nBeer.prototype.publishbeerData = function(beerIndex){\n  const selectedBeer = this.data[beerIndex];\n  PubSub.publish('Selected Beer data ready', selectedBeer);\n};\n\n\n//   PubSub.subscribe('SelectView:change', (event) => {\n//     const selectedIndex = event.detail;\n//     this.publishbeerData(selectedIndex);\n//   });\n// };\n//\n// Beer.prototype.publishbeerData = function(beerIndex){\n//   const selectedbeer = this.data[beerIndex];\n//   PubSub.publish('Selected Beer data ready', selectedBeer);\n// };\n\nmodule.exports = Beer;\n\n\n//# sourceURL=webpack:///./src/models/beer.js?");

/***/ }),

/***/ "./src/views/beer_list_view.js":
/*!*************************************!*\
  !*** ./src/views/beer_list_view.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst BeerWrapperView = __webpack_require__(/*! ./beer_wrapper_view.js */ \"./src/views/beer_wrapper_view.js\");\n\n\n\n\nconst BeerListView = function(container) {\n  this.container = container;\n};\n\nBeerListView.prototype.bindEvents = function () {\n  PubSub.subscribe(\"beer list data is ready\", (event) => {\n    this.beers = event.detail;\n    this.display();\n  });\n\n  PubSub.subscribe('Selected Beer data ready', (event) => {\n    const singleBeerInfo = event.detail;\n    console.log(singleBeerInfo);\n    this.displaySingleBeer(singleBeerInfo);\n  });\n};\n\n\nBeerListView.prototype.display = function () {\n  this.beers.forEach((beer) => {\n    const beerWrapperView = new BeerWrapperView(this.container, beer);\n    beerWrapperView.render();\n  });\n};\n\nBeerListView.prototype.displaySingleBeer = function(beer){\n  const infoHeading = document.createElement('h1');\n  infoHeading.textContent = `${beer.name}`;\n  const infoLiA = document.createElement('li');\n  infoLiA.textContent = `${beer.description}`;\n  const infoLiB = document.createElement('li');\n  infoLiB.textContent = `${beer.first_brewed}`;\n  const infoLiC = document.createElement('li');\n  infoLiC.textContent = `${beer.tagline}`;\n  const infoLiD = document.createElement(\"img\");\n  infoLiD.classList.add('image-size');\n  infoLiD.src = `${beer.image_url}`;\n  this.container.innerHTML = '';\n  this.container.appendChild(infoHeading);\n  this.container.appendChild(infoLiA);\n  this.container.appendChild(infoLiB);\n  this.container.appendChild(infoLiB);\n  this.container.appendChild(infoLiB);\n};\n\nmodule.exports = BeerListView;\n\n\n//# sourceURL=webpack:///./src/views/beer_list_view.js?");

/***/ }),

/***/ "./src/views/beer_wrapper_view.js":
/*!****************************************!*\
  !*** ./src/views/beer_wrapper_view.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const BeerWrapperView = function(beerContainer, beer) {\n  this.beerContainer = beerContainer;\n  this.beer = beer;\n};\n\nBeerWrapperView.prototype.render = function () {\n  const infoHeading = document.createElement(\"h2\");\n  infoHeading.textContent = `${this.beer.name}`;\n  this.beerContainer.appendChild(infoHeading);\n\n  const infoLiA = document.createElement(\"li\");\n  infoLiA.textContent = `${this.beer.description}`;\n  this.beerContainer.appendChild(infoLiA);\n\n  const infoLiB = document.createElement(\"li\");\n  infoLiB.textContent = `${this.beer.first_brewed}`;\n  this.beerContainer.appendChild(infoLiB);\n\n  const infoLiC = document.createElement(\"li\");\n  infoLiC.textContent = `${this.beer.tagline}`;\n  this.beerContainer.appendChild(infoLiC);\n\n  const infoLiD = document.createElement(\"img\");\n  infoLiD.classList.add('image-size');\n  infoLiD.src = `${this.beer.image_url}`;\n  this.beerContainer.appendChild(infoLiD);\n};\n\nmodule.exports = BeerWrapperView;\n\n\n//# sourceURL=webpack:///./src/views/beer_wrapper_view.js?");

/***/ }),

/***/ "./src/views/select_view.js":
/*!**********************************!*\
  !*** ./src/views/select_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst SelectView = function(element){\n  this.element = element;\n};\n\nSelectView.prototype.bindEvents = function () {\n  PubSub.subscribe(\"beer list data is ready\"  , (event) =>{\n    const allBeerData = event.detail;\n    // console.log(allBeerData);\n    // console.log('data received');\n    this.populate(allBeerData);\n    // console.log(this.populate);\n  });\n\n  this.element.addEventListener('change', (evt) => {\n    const selectedIndex = evt.target.value;\n    console.log(selectedIndex);\n    // console.log('one thing');\n    PubSub.publish('SelectView:change', selectedIndex);\n  });\n\n};\n\n\nSelectView.prototype.populate = function(beersData){\n  beersData.forEach((beer, index) => {\n    const option = document.createElement('option');\n    option.textContent = beer.name;\n    option.value = index;\n    this.element.appendChild(option);\n  });\n};\n\n\n\n\nmodule.exports = SelectView;\n\n\n//# sourceURL=webpack:///./src/views/select_view.js?");

/***/ }),

/***/ "./src/views/single_bear_view.js":
/*!***************************************!*\
  !*** ./src/views/single_bear_view.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\n\n\n// const SingleBeerView = function(element){\n//   this.data = data\n//   this.element = element;\n// };\n//\n// SingleBeerView.prototype.bindEvents = function(){\n// PubSub.subscribe('SelectView:change', (event) => {\n//     const selectedIndex = event.detail;\n//     console.log(selectedIndex);\n//     this.publishbeerData(selectedIndex);\n//   });\n// };\n//\n//\n//\n//\n// SingleBeerView.prototype.publishbeerData = function(beerIndex){\n//   const selectedbeer = data[beerIndex];\n//   PubSub.publish('Selected Beer data ready', selectedBeer);\n// };\n//\n// module.exports = SingleBeerView\n\n\n//# sourceURL=webpack:///./src/views/single_bear_view.js?");

/***/ })

/******/ });