/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHomePage\": () => (/* binding */ createHomePage)\n/* harmony export */ });\nfunction createHomePage(parent) {\n  // Create elements\n  const restaurantTitle = document.createElement(\"h1\");\n  const card = document.createElement(\"div\");\n  const cardTitle = document.createElement(\"h2\");\n  const line = document.createElement(\"hr\");\n  const cardText = document.createElement(\"p\");\n  const span = document.createElement(\"span\");\n  const orderBtn = document.createElement(\"button\");\n  const contactBtn = document.createElement(\"button\");\n\n  // Set element classes\n  restaurantTitle.classList.add(\"title\");\n  card.classList.add(\"card\");\n  cardTitle.classList.add(\"card-title\");\n  cardText.classList.add(\"card-text\");\n  span.classList.add(\"button-section\");\n\n  // Set text content\n  restaurantTitle.textContent = \"Restaurant Title\";\n  cardTitle.textContent = \"The best diner in all of New Jersey\";\n  cardText.textContent =\n    \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc sed. Suspendisse interdum consectetur libero id. Tellus in metus vulputate eu scelerisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna nunc id cursus metus aliquam eleifend mi in. Eu lobortis elementum nibh tellus. Eu feugiat pretium nibh ipsum consequat nisl. Purus in mollis nunc sed id semper. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Tempus quam pellentesque nec nam. Interdum velit laoreet id donec ultrices. Amet porttitor eget dolor morbi non arcu risus quis. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Molestie nunc non blandit massa. Diam ut venenatis tellus in metus vulputate eu. Luctus accumsan tortor posuere ac ut consequat semper. Mattis enim ut tellus elementum sagittis. Morbi tristique senectus et netus et malesuada. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.\";\n  orderBtn.textContent = \"Order Now\";\n  contactBtn.textContent = \"Contact Us\";\n\n  // Add children to parents\n  span.appendChild(orderBtn);\n  span.appendChild(contactBtn);\n\n  card.appendChild(cardTitle);\n  card.appendChild(line);\n  card.appendChild(cardText);\n\n  parent.appendChild(restaurantTitle);\n  parent.appendChild(card);\n  parent.appendChild(span);\n}\n\n\n//# sourceURL=webpack://restaurant-page-top/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n\n\n\nconst content = document.querySelector(\"#content\");\n\n(0,_tabs__WEBPACK_IMPORTED_MODULE_0__.createTabMenu)(content);\n(0,_homePage__WEBPACK_IMPORTED_MODULE_1__.createHomePage)(content);\n\n\n//# sourceURL=webpack://restaurant-page-top/./src/index.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu)\n/* harmony export */ });\n/* harmony import */ var _menuItems_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItems.json */ \"./src/menuItems.json\");\nfunction createMenuItem(item, parent) {\n  console.log(item.toString());\n\n  const menuItem = document.createElement(\"div\");\n  const thumbnail = document.createElement(\"img\");\n  const itemTextContainer = document.createElement(\"div\");\n  const itemTitle = document.createElement(\"h4\");\n  const priceSpan = document.createElement(\"span\");\n  const itemDescription = document.createElement(\"p\");\n\n  menuItem.classList.add(\"menu-item\");\n  itemTextContainer.classList.add(\"item-text-container\");\n  itemTitle.classList.add(\"item-title\");\n  priceSpan.classList.add(\"price\");\n\n  thumbnail.src = item.image;\n  itemTitle.textContent = item.name;\n  priceSpan.textContent = item.price;\n  itemDescription.textContent = item.description;\n\n  menuItem.appendChild(thumbnail);\n  menuItem.appendChild(itemTextContainer);\n  itemTextContainer.appendChild(itemTitle);\n  itemTextContainer.appendChild(itemDescription);\n  itemTitle.appendChild(priceSpan);\n\n  parent.appendChild(menuItem);\n}\n\n\n\nfunction createMenu(parent) {\n  const menuTitle = document.createElement(\"h2\");\n  const menuItemContainer = document.createElement(\"div\");\n\n  menuTitle.textContent = \"Menu\";\n\n  menuItemContainer.classList.add(\"menu-items-container\");\n\n  for (const item in _menuItems_json__WEBPACK_IMPORTED_MODULE_0__) {\n    createMenuItem(_menuItems_json__WEBPACK_IMPORTED_MODULE_0__[item], menuItemContainer);\n  }\n\n  parent.appendChild(menuTitle);\n  parent.appendChild(menuItemContainer);\n}\n\n\n//# sourceURL=webpack://restaurant-page-top/./src/menuPage.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTabMenu\": () => (/* binding */ createTabMenu)\n/* harmony export */ });\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n\n\n\nconst content = document.querySelector(\"#content\");\n\nfunction homeTabClick() {\n  clearAllChildren();\n  createTabMenu(content);\n  (0,_homePage__WEBPACK_IMPORTED_MODULE_0__.createHomePage)(content);\n  console.log(\"Created home page\");\n}\n\nfunction menuTabClick() {\n  clearAllChildren();\n  createTabMenu(content);\n  (0,_menuPage__WEBPACK_IMPORTED_MODULE_1__.createMenu)(content);\n  console.log(\"Created MENU page\");\n}\n\nfunction infoTabClick() {\n  clearAllChildren();\n  createTabMenu(content);\n}\n\nfunction clearAllChildren() {\n  while (content.firstChild) {\n    content.removeChild(content.firstChild);\n  }\n}\n\nfunction createTabMenu(parent) {\n  const container = document.createElement(\"div\");\n  const homeBtn = document.createElement(\"button\");\n  const menuBtn = document.createElement(\"button\");\n  const infoBtn = document.createElement(\"button\");\n\n  container.id = \"tabs-container\";\n\n  homeBtn.textContent = \"Home\";\n  menuBtn.textContent = \"Menu\";\n  infoBtn.textContent = \"Info\";\n\n  homeBtn.addEventListener(\"click\", homeTabClick);\n  menuBtn.addEventListener(\"click\", menuTabClick);\n  infoBtn.addEventListener(\"click\", infoTabClick);\n\n  container.appendChild(homeBtn);\n  container.appendChild(menuBtn);\n  container.appendChild(infoBtn);\n\n  parent.appendChild(container);\n}\n\n\n//# sourceURL=webpack://restaurant-page-top/./src/tabs.js?");

/***/ }),

/***/ "./src/menuItems.json":
/*!****************************!*\
  !*** ./src/menuItems.json ***!
  \****************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"0\":{\"name\":\"Cheese Burger\",\"description\":\"Made with 100% locally sourced ground beef. Comes with sauted onions, fresh cut pickles, and american cheese.\",\"price\":\"$6.50\",\"image\":\"cheeseburger.png\"},\"1\":{\"name\":\"Cesar Salad\",\"description\":\"Tasty salad with many healthy veggies.\",\"price\":\"$4.50\",\"image\":\"cesar.png\"},\"2\":{\"name\":\"Poutine\",\"description\":\"Crispy fries with fresh cheese curds from Quebec, and freshly made gravy.\",\"price\":\"$7\",\"image\":\"poutine.png\"},\"3\":{\"name\":\"Spaghetti\",\"description\":\"Fresh hand made pasta, served with our world famous boulengese recipe.\",\"price\":\"$12\",\"image\":\"spaghetti.png\"},\"4\":{\"name\":\"BBQ Ribs\",\"description\":\"Full stack of ribs, slathered in BBQ sauce and meat that slides off the bone.\",\"price\":\"$16\",\"image\":\"ribs.png\"}}');\n\n//# sourceURL=webpack://restaurant-page-top/./src/menuItems.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;