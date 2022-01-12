"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/createIndex";
exports.ids = ["pages/api/createIndex"];
exports.modules = {

/***/ "redis-om":
/*!***************************!*\
  !*** external "redis-om" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("redis-om");

/***/ }),

/***/ "./lib/redis.js":
/*!**********************!*\
  !*** ./lib/redis.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCar\": () => (/* binding */ createCar),\n/* harmony export */   \"createIndex\": () => (/* binding */ createIndex)\n/* harmony export */ });\n/* harmony import */ var redis_om__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redis-om */ \"redis-om\");\n/* harmony import */ var redis_om__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redis_om__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Client();\nasync function connect() {\n    if (!client.isOpen()) {\n        await client.open(process.env.REDIS_URL);\n    }\n}\nclass Car extends redis_om__WEBPACK_IMPORTED_MODULE_0__.Entity {\n}\nlet schema = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Schema(Car, {\n    make: {\n        type: 'string'\n    },\n    model: {\n        type: 'string'\n    },\n    image: {\n        type: 'string'\n    },\n    description: {\n        type: 'string',\n        textSearch: true\n    }\n}, {\n    dataStructure: 'JSON'\n});\nasync function createCar(data) {\n    await connect();\n    const repository = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Repository(schema, client);\n    const car = repository.createEntity(data);\n    const id = await repository.save(car);\n    return id;\n}\nasync function createIndex() {\n    await connect();\n    const repository = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Repository(schema, client);\n    await repository.createIndex();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcmVkaXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2RDtBQUU3RCxLQUFLLENBQUNJLE1BQU0sR0FBRyxHQUFHLENBQUNKLDRDQUFNO2VBRVZLLE9BQU8sR0FBRyxDQUFDO0lBQ3RCLEVBQUUsR0FBR0QsTUFBTSxDQUFDRSxNQUFNLElBQUksQ0FBQztRQUNuQixLQUFLLENBQUNGLE1BQU0sQ0FBQ0csSUFBSSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBUztJQUMzQyxDQUFDO0FBQ0wsQ0FBQztNQUVLQyxHQUFHLFNBQVNWLDRDQUFNOztBQUN4QixHQUFHLENBQUNXLE1BQU0sR0FBRyxHQUFHLENBQUNWLDRDQUFNLENBQ25CUyxHQUFHLEVBQ0gsQ0FBQztJQUNHRSxJQUFJLEVBQUUsQ0FBQztRQUFDQyxJQUFJLEVBQUUsQ0FBUTtJQUFBLENBQUM7SUFDdkJDLEtBQUssRUFBRSxDQUFDO1FBQUNELElBQUksRUFBRSxDQUFRO0lBQUEsQ0FBQztJQUN4QkUsS0FBSyxFQUFFLENBQUM7UUFBQ0YsSUFBSSxFQUFFLENBQVE7SUFBQSxDQUFDO0lBQ3hCRyxXQUFXLEVBQUUsQ0FBQztRQUFDSCxJQUFJLEVBQUUsQ0FBUTtRQUFFSSxVQUFVLEVBQUUsSUFBSTtJQUFBLENBQUM7QUFDcEQsQ0FBQyxFQUNELENBQUM7SUFDR0MsYUFBYSxFQUFFLENBQU07QUFDekIsQ0FBQztBQUdFLGVBQWVDLFNBQVMsQ0FBQ0MsSUFBSSxFQUFFLENBQUM7SUFDbkMsS0FBSyxDQUFDaEIsT0FBTztJQUViLEtBQUssQ0FBQ2lCLFVBQVUsR0FBRyxHQUFHLENBQUNuQixnREFBVSxDQUFDUyxNQUFNLEVBQUVSLE1BQU07SUFFaEQsS0FBSyxDQUFDbUIsR0FBRyxHQUFHRCxVQUFVLENBQUNFLFlBQVksQ0FBQ0gsSUFBSTtJQUV4QyxLQUFLLENBQUNJLEVBQUUsR0FBRyxLQUFLLENBQUNILFVBQVUsQ0FBQ0ksSUFBSSxDQUFDSCxHQUFHO0lBRXBDLE1BQU0sQ0FBQ0UsRUFBRTtBQUNiLENBQUM7QUFFTSxlQUFlRSxXQUFXLEdBQUcsQ0FBQztJQUNqQyxLQUFLLENBQUN0QixPQUFPO0lBRWIsS0FBSyxDQUFDaUIsVUFBVSxHQUFHLEdBQUcsQ0FBQ25CLGdEQUFVLENBQUNTLE1BQU0sRUFBRVIsTUFBTTtJQUNoRCxLQUFLLENBQUNrQixVQUFVLENBQUNLLFdBQVc7QUFDaEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZGlzLWludHJvLXRlbXAvLi9saWIvcmVkaXMuanM/ZmFjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQsIEVudGl0eSwgU2NoZW1hLCBSZXBvc2l0b3J5IH0gZnJvbSAncmVkaXMtb20nXG5cbmNvbnN0IGNsaWVudCA9IG5ldyBDbGllbnQoKTtcblxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICBpZiAoIWNsaWVudC5pc09wZW4oKSkge1xuICAgICAgICBhd2FpdCBjbGllbnQub3Blbihwcm9jZXNzLmVudi5SRURJU19VUkwpO1xuICAgIH1cbn1cblxuY2xhc3MgQ2FyIGV4dGVuZHMgRW50aXR5e31cbmxldCBzY2hlbWEgPSBuZXcgU2NoZW1hKFxuICAgIENhcixcbiAgICB7XG4gICAgICAgIG1ha2U6IHsgdHlwZTogJ3N0cmluZyd9LFxuICAgICAgICBtb2RlbDogeyB0eXBlOiAnc3RyaW5nJ30sXG4gICAgICAgIGltYWdlOiB7IHR5cGU6ICdzdHJpbmcnfSxcbiAgICAgICAgZGVzY3JpcHRpb246IHsgdHlwZTogJ3N0cmluZycsIHRleHRTZWFyY2g6IHRydWV9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBkYXRhU3RydWN0dXJlOiAnSlNPTicsXG4gICAgfVxuKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhcihkYXRhKSB7XG4gICAgYXdhaXQgY29ubmVjdCgpO1xuXG4gICAgY29uc3QgcmVwb3NpdG9yeSA9IG5ldyBSZXBvc2l0b3J5KHNjaGVtYSwgY2xpZW50KTtcblxuICAgIGNvbnN0IGNhciA9IHJlcG9zaXRvcnkuY3JlYXRlRW50aXR5KGRhdGEpO1xuXG4gICAgY29uc3QgaWQgPSBhd2FpdCByZXBvc2l0b3J5LnNhdmUoY2FyKTtcblxuICAgIHJldHVybiBpZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUluZGV4KCkge1xuICAgIGF3YWl0IGNvbm5lY3QoKTtcblxuICAgIGNvbnN0IHJlcG9zaXRvcnkgPSBuZXcgUmVwb3NpdG9yeShzY2hlbWEsIGNsaWVudCk7XG4gICAgYXdhaXQgcmVwb3NpdG9yeS5jcmVhdGVJbmRleCgpXG59Il0sIm5hbWVzIjpbIkNsaWVudCIsIkVudGl0eSIsIlNjaGVtYSIsIlJlcG9zaXRvcnkiLCJjbGllbnQiLCJjb25uZWN0IiwiaXNPcGVuIiwib3BlbiIsInByb2Nlc3MiLCJlbnYiLCJSRURJU19VUkwiLCJDYXIiLCJzY2hlbWEiLCJtYWtlIiwidHlwZSIsIm1vZGVsIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsInRleHRTZWFyY2giLCJkYXRhU3RydWN0dXJlIiwiY3JlYXRlQ2FyIiwiZGF0YSIsInJlcG9zaXRvcnkiLCJjYXIiLCJjcmVhdGVFbnRpdHkiLCJpZCIsInNhdmUiLCJjcmVhdGVJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/redis.js\n");

/***/ }),

/***/ "./pages/api/createIndex.js":
/*!**********************************!*\
  !*** ./pages/api/createIndex.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/redis */ \"./lib/redis.js\");\n\nasync function handler(req, res) {\n    await (0,_lib_redis__WEBPACK_IMPORTED_MODULE_0__.createIndex)();\n    res.status(200).send('ok');\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY3JlYXRlSW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNkM7QUFFOUIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQzdDLEtBQUssQ0FBQ0gsdURBQVc7SUFDakJHLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUk7QUFDN0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZGlzLWludHJvLXRlbXAvLi9wYWdlcy9hcGkvY3JlYXRlSW5kZXguanM/YzFiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVJbmRleCB9IGZyb20gXCIuLi8uLi9saWIvcmVkaXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGF3YWl0IGNyZWF0ZUluZGV4KCk7XG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQoJ29rJyk7XG59Il0sIm5hbWVzIjpbImNyZWF0ZUluZGV4IiwiaGFuZGxlciIsInJlcSIsInJlcyIsInN0YXR1cyIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/createIndex.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/createIndex.js"));
module.exports = __webpack_exports__;

})();