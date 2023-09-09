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

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _IceCube__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IceCube */ \"./src/IceCube.js\");\n\n\n\n//----------Initialization--------------\nconst scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();\nconst camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(\n  75,\n  window.innerWidth / window.innerHeight,\n  0.1,\n  1000\n);\ncamera.translateZ(7);\ncamera.translateY(5);\ncamera.translateX(-5);\ncamera.rotateX(-Math.PI / 6);\ncamera.rotateY(-Math.PI / 5);\ncamera.rotateZ(-Math.PI / 12);\n// camera.applyQuaternion(\n//   new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0)\n// );\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer();\nrenderer.setSize(window.innerWidth, window.innerHeight);\ndocument.body.appendChild(renderer.domElement);\n//----------------------------------------\n\n//---------------Helpers------------------\nconst axesHelper = new three__WEBPACK_IMPORTED_MODULE_1__.AxesHelper(50);\nscene.add(axesHelper);\nconst gridHelper = new three__WEBPACK_IMPORTED_MODULE_1__.GridHelper(50, 50);\nscene.add(gridHelper);\n//-------------------------------\n\n//---------------3D Objects---------------\nconst plane = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(\n  new three__WEBPACK_IMPORTED_MODULE_1__.PlaneGeometry(50, 50),\n  new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: 0xffff55, side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide })\n);\nplane.rotateX(Math.PI / 2);\nscene.add(plane);\n\nconst iceCube = new _IceCube__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([2, 2, 2], new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 2, 0));\nscene.add(iceCube.getCube());\n//----------------------------------------\n\nfunction animate() {\n  requestAnimationFrame(animate);\n  renderer.render(scene, camera);\n}\nanimate();\n\n\n//# sourceURL=webpack://ice-cubes/./src/App.js?");

/***/ }),

/***/ "./src/IceCube.js":
/*!************************!*\
  !*** ./src/IceCube.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IceCube)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nclass IceCube {\n  constructor(size, position) {\n    this.size = size;\n    this.position = position;\n    this.iceCube = this.createObject(size, position);\n  }\n\n  createObject(size, position) {\n    const loader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\n    const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({ color: 0x00ff00 });\n    loader.load(\n      \"textures/ice_texture.jpg\",\n      function (texture) {\n        material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({ map: texture });\n      },\n      undefined,\n      function (err) {\n        console.log(\"Failed loading texture: \", \"ice_texture.jpg\");\n      }\n    );\n    const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(size[0], size[1], size[2]);\n    const cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);\n    cube.position.set(position);\n    return cube;\n  }\n\n  getCube() {\n    return this.iceCube;\n  }\n}\n\n\n//# sourceURL=webpack://ice-cubes/./src/IceCube.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/App.js");
/******/ 	
/******/ })()
;