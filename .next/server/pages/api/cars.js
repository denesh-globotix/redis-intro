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
exports.id = "pages/api/cars";
exports.ids = ["pages/api/cars"];
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCar\": () => (/* binding */ createCar),\n/* harmony export */   \"createIndex\": () => (/* binding */ createIndex),\n/* harmony export */   \"searchCars\": () => (/* binding */ searchCars)\n/* harmony export */ });\n/* harmony import */ var redis_om__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redis-om */ \"redis-om\");\n/* harmony import */ var redis_om__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redis_om__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Client();\nasync function connect() {\n    if (!client.isOpen()) {\n        await client.open(process.env.REDIS_URL);\n    }\n}\nclass Car extends redis_om__WEBPACK_IMPORTED_MODULE_0__.Entity {\n}\nlet schema = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Schema(Car, {\n    make: {\n        type: 'string'\n    },\n    model: {\n        type: 'string'\n    },\n    image: {\n        type: 'string'\n    },\n    description: {\n        type: 'string',\n        textSearch: true\n    }\n}, {\n    dataStructure: 'JSON'\n});\nasync function createCar(data) {\n    await connect();\n    const repository = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Repository(schema, client);\n    const car = repository.createEntity(data);\n    const id = await repository.save(car);\n    return id;\n}\nasync function createIndex() {\n    await connect();\n    const repository = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Repository(schema, client);\n    await repository.createIndex();\n}\nasync function searchCars(q) {\n    await connect();\n    const repository = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Repository(schema, client);\n    const cars = await repository.search().where('make').eq(q).or('model').eq(q).or('description').matches(q).return.all();\n    return cars;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcmVkaXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkQ7QUFFN0QsS0FBSyxDQUFDSSxNQUFNLEdBQUcsR0FBRyxDQUFDSiw0Q0FBTTtlQUVWSyxPQUFPLEdBQUcsQ0FBQztJQUN0QixFQUFFLEdBQUdELE1BQU0sQ0FBQ0UsTUFBTSxJQUFJLENBQUM7UUFDbkIsS0FBSyxDQUFDRixNQUFNLENBQUNHLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVM7SUFDM0MsQ0FBQztBQUNMLENBQUM7TUFFS0MsR0FBRyxTQUFTViw0Q0FBTTs7QUFDeEIsR0FBRyxDQUFDVyxNQUFNLEdBQUcsR0FBRyxDQUFDViw0Q0FBTSxDQUNuQlMsR0FBRyxFQUNILENBQUM7SUFDR0UsSUFBSSxFQUFFLENBQUM7UUFBQ0MsSUFBSSxFQUFFLENBQVE7SUFBQSxDQUFDO0lBQ3ZCQyxLQUFLLEVBQUUsQ0FBQztRQUFDRCxJQUFJLEVBQUUsQ0FBUTtJQUFBLENBQUM7SUFDeEJFLEtBQUssRUFBRSxDQUFDO1FBQUNGLElBQUksRUFBRSxDQUFRO0lBQUEsQ0FBQztJQUN4QkcsV0FBVyxFQUFFLENBQUM7UUFBQ0gsSUFBSSxFQUFFLENBQVE7UUFBRUksVUFBVSxFQUFFLElBQUk7SUFBQSxDQUFDO0FBQ3BELENBQUMsRUFDRCxDQUFDO0lBQ0dDLGFBQWEsRUFBRSxDQUFNO0FBQ3pCLENBQUM7QUFHRSxlQUFlQyxTQUFTLENBQUNDLElBQUksRUFBRSxDQUFDO0lBQ25DLEtBQUssQ0FBQ2hCLE9BQU87SUFFYixLQUFLLENBQUNpQixVQUFVLEdBQUcsR0FBRyxDQUFDbkIsZ0RBQVUsQ0FBQ1MsTUFBTSxFQUFFUixNQUFNO0lBRWhELEtBQUssQ0FBQ21CLEdBQUcsR0FBR0QsVUFBVSxDQUFDRSxZQUFZLENBQUNILElBQUk7SUFFeEMsS0FBSyxDQUFDSSxFQUFFLEdBQUcsS0FBSyxDQUFDSCxVQUFVLENBQUNJLElBQUksQ0FBQ0gsR0FBRztJQUVwQyxNQUFNLENBQUNFLEVBQUU7QUFDYixDQUFDO0FBRU0sZUFBZUUsV0FBVyxHQUFHLENBQUM7SUFDakMsS0FBSyxDQUFDdEIsT0FBTztJQUViLEtBQUssQ0FBQ2lCLFVBQVUsR0FBRyxHQUFHLENBQUNuQixnREFBVSxDQUFDUyxNQUFNLEVBQUVSLE1BQU07SUFDaEQsS0FBSyxDQUFDa0IsVUFBVSxDQUFDSyxXQUFXO0FBQ2hDLENBQUM7QUFFTSxlQUFlQyxVQUFVLENBQUNDLENBQUMsRUFBRSxDQUFDO0lBQ2pDLEtBQUssQ0FBQ3hCLE9BQU87SUFFYixLQUFLLENBQUNpQixVQUFVLEdBQUcsR0FBRyxDQUFDbkIsZ0RBQVUsQ0FBQ1MsTUFBTSxFQUFFUixNQUFNO0lBRWhELEtBQUssQ0FBQzBCLElBQUksR0FBRyxLQUFLLENBQUNSLFVBQVUsQ0FBQ1MsTUFBTSxHQUNuQ0MsS0FBSyxDQUFDLENBQU0sT0FBRUMsRUFBRSxDQUFDSixDQUFDLEVBQ2xCSyxFQUFFLENBQUMsQ0FBTyxRQUFFRCxFQUFFLENBQUNKLENBQUMsRUFDaEJLLEVBQUUsQ0FBQyxDQUFhLGNBQUVDLE9BQU8sQ0FBQ04sQ0FBQyxFQUMzQk8sTUFBTSxDQUFDQyxHQUFHO0lBRVgsTUFBTSxDQUFDUCxJQUFJO0FBQ2YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZGlzLWludHJvLXRlbXAvLi9saWIvcmVkaXMuanM/ZmFjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQsIEVudGl0eSwgU2NoZW1hLCBSZXBvc2l0b3J5IH0gZnJvbSAncmVkaXMtb20nXG5cbmNvbnN0IGNsaWVudCA9IG5ldyBDbGllbnQoKTtcblxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICBpZiAoIWNsaWVudC5pc09wZW4oKSkge1xuICAgICAgICBhd2FpdCBjbGllbnQub3Blbihwcm9jZXNzLmVudi5SRURJU19VUkwpO1xuICAgIH1cbn1cblxuY2xhc3MgQ2FyIGV4dGVuZHMgRW50aXR5e31cbmxldCBzY2hlbWEgPSBuZXcgU2NoZW1hKFxuICAgIENhcixcbiAgICB7XG4gICAgICAgIG1ha2U6IHsgdHlwZTogJ3N0cmluZyd9LFxuICAgICAgICBtb2RlbDogeyB0eXBlOiAnc3RyaW5nJ30sXG4gICAgICAgIGltYWdlOiB7IHR5cGU6ICdzdHJpbmcnfSxcbiAgICAgICAgZGVzY3JpcHRpb246IHsgdHlwZTogJ3N0cmluZycsIHRleHRTZWFyY2g6IHRydWV9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBkYXRhU3RydWN0dXJlOiAnSlNPTicsXG4gICAgfVxuKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhcihkYXRhKSB7XG4gICAgYXdhaXQgY29ubmVjdCgpO1xuXG4gICAgY29uc3QgcmVwb3NpdG9yeSA9IG5ldyBSZXBvc2l0b3J5KHNjaGVtYSwgY2xpZW50KTtcblxuICAgIGNvbnN0IGNhciA9IHJlcG9zaXRvcnkuY3JlYXRlRW50aXR5KGRhdGEpO1xuXG4gICAgY29uc3QgaWQgPSBhd2FpdCByZXBvc2l0b3J5LnNhdmUoY2FyKTtcblxuICAgIHJldHVybiBpZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUluZGV4KCkge1xuICAgIGF3YWl0IGNvbm5lY3QoKTtcblxuICAgIGNvbnN0IHJlcG9zaXRvcnkgPSBuZXcgUmVwb3NpdG9yeShzY2hlbWEsIGNsaWVudCk7XG4gICAgYXdhaXQgcmVwb3NpdG9yeS5jcmVhdGVJbmRleCgpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hDYXJzKHEpIHtcbiAgICBhd2FpdCBjb25uZWN0KCk7XG5cbiAgICBjb25zdCByZXBvc2l0b3J5ID0gbmV3IFJlcG9zaXRvcnkoc2NoZW1hLCBjbGllbnQpO1xuXG4gICAgY29uc3QgY2FycyA9IGF3YWl0IHJlcG9zaXRvcnkuc2VhcmNoKClcbiAgICAud2hlcmUoJ21ha2UnKS5lcShxKVxuICAgIC5vcignbW9kZWwnKS5lcShxKVxuICAgIC5vcignZGVzY3JpcHRpb24nKS5tYXRjaGVzKHEpXG4gICAgLnJldHVybi5hbGwoKTtcblxuICAgIHJldHVybiBjYXJzO1xufSJdLCJuYW1lcyI6WyJDbGllbnQiLCJFbnRpdHkiLCJTY2hlbWEiLCJSZXBvc2l0b3J5IiwiY2xpZW50IiwiY29ubmVjdCIsImlzT3BlbiIsIm9wZW4iLCJwcm9jZXNzIiwiZW52IiwiUkVESVNfVVJMIiwiQ2FyIiwic2NoZW1hIiwibWFrZSIsInR5cGUiLCJtb2RlbCIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJ0ZXh0U2VhcmNoIiwiZGF0YVN0cnVjdHVyZSIsImNyZWF0ZUNhciIsImRhdGEiLCJyZXBvc2l0b3J5IiwiY2FyIiwiY3JlYXRlRW50aXR5IiwiaWQiLCJzYXZlIiwiY3JlYXRlSW5kZXgiLCJzZWFyY2hDYXJzIiwicSIsImNhcnMiLCJzZWFyY2giLCJ3aGVyZSIsImVxIiwib3IiLCJtYXRjaGVzIiwicmV0dXJuIiwiYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/redis.js\n");

/***/ }),

/***/ "./pages/api/cars.js":
/*!***************************!*\
  !*** ./pages/api/cars.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/redis */ \"./lib/redis.js\");\n\nasync function handler(req, res) {\n    const id = await (0,_lib_redis__WEBPACK_IMPORTED_MODULE_0__.createCar)(req.body);\n    res.status(200).json({\n        id\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2Fycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUU1QixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDN0MsS0FBSyxDQUFDQyxFQUFFLEdBQUcsS0FBSyxDQUFDSixxREFBUyxDQUFDRSxHQUFHLENBQUNHLElBQUk7SUFDbkNGLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7UUFBQ0gsRUFBRTtJQUFDLENBQUM7QUFDL0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZGlzLWludHJvLXRlbXAvLi9wYWdlcy9hcGkvY2Fycy5qcz8wNDhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNhciB9IGZyb20gXCIuLi8uLi9saWIvcmVkaXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGNvbnN0IGlkID0gYXdhaXQgY3JlYXRlQ2FyKHJlcS5ib2R5KTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGlkIH0pXG59Il0sIm5hbWVzIjpbImNyZWF0ZUNhciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpZCIsImJvZHkiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/cars.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/cars.js"));
module.exports = __webpack_exports__;

})();