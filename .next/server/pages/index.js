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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/CarForm.js":
/*!************************!*\
  !*** ./lib/CarForm.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CarForm)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction CarForm() {\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const form = new FormData(event.target);\n        const formData = Object.fromEntries(form.entries());\n        console.log(formData);\n        const res = await fetch('/api/cars', {\n            body: JSON.stringify(formData),\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            method: 'POST'\n        });\n        const result = await res.json();\n        console.log(result);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"make\"\n            }, void 0, false, {\n                fileName: \"/home/globotix/Downloads/redis-intro/lib/CarForm.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"make\",\n                type: \"text\"\n            }, void 0, false, {\n                fileName: \"/home/globotix/Downloads/redis-intro/lib/CarForm.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"model\"\n            }, void 0, false, {\n                fileName: \"/home/globotix/Downloads/redis-intro/lib/CarForm.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"model\",\n                type: \"text\"\n            }, void 0, false, {\n                fileName: \"/home/globotix/Downloads/redis-intro/lib/CarForm.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"image\"\n            }, void 0, false, {\n                fileName: \"/home/globotix/Downloads/redis-intro/lib/CarForm.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"image\",\n                type: \"text\"\n            }, void 0, false, {\n                fileName: \"/home/globotix/Downloads/redis-intro/lib/CarForm.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"description\"\n            }, void 0, false, {\n                fileName: \"/home/globotix/Downloads/redis-intro/lib/CarForm.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                name: \"description\",\n                type: \"text\"\n            }, void 0, false, {\n                fileName: \"/home/globotix/Downloads/redis-intro/lib/CarForm.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Create Car\"\n            }, void 0, false, {\n                fileName: \"/home/globotix/Downloads/redis-intro/lib/CarForm.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/globotix/Downloads/redis-intro/lib/CarForm.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvQ2FyRm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsUUFBUSxDQUFDQSxPQUFPLEdBQUcsQ0FBQztJQUUvQixLQUFLLENBQUNDLFlBQVksVUFBVUMsS0FBSyxHQUFLLENBQUM7UUFDbkNBLEtBQUssQ0FBQ0MsY0FBYztRQUVwQixLQUFLLENBQUNDLElBQUksR0FBRyxHQUFHLENBQUNDLFFBQVEsQ0FBQ0gsS0FBSyxDQUFDSSxNQUFNO1FBQ3RDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHQyxNQUFNLENBQUNDLFdBQVcsQ0FBQ0wsSUFBSSxDQUFDTSxPQUFPO1FBRWhEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsUUFBUTtRQUVwQixLQUFLLENBQUNNLEdBQUcsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUFXLFlBQUUsQ0FBQztZQUNsQ0MsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1YsUUFBUTtZQUM3QlcsT0FBTyxFQUFFLENBQUM7Z0JBQ04sQ0FBYyxlQUFFLENBQWtCO1lBQ3RDLENBQUM7WUFDREMsTUFBTSxFQUFFLENBQU07UUFDbEIsQ0FBQztRQUVELEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEtBQUssQ0FBQ1AsR0FBRyxDQUFDUSxJQUFJO1FBQzdCVixPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsTUFBTTtJQUN0QixDQUFDO0lBRUQsTUFBTSw2RUFDRGhCLENBQUk7UUFBQ2tCLFFBQVEsRUFBRXJCLFlBQVk7O3dGQUN2QnNCLENBQUU7MEJBQUMsQ0FBSTs7Ozs7O3dGQUNQQyxDQUFLO2dCQUFDQyxJQUFJLEVBQUMsQ0FBTTtnQkFBQ0MsSUFBSSxFQUFDLENBQU07Ozs7Ozt3RkFDN0JILENBQUU7MEJBQUMsQ0FBSzs7Ozs7O3dGQUNSQyxDQUFLO2dCQUFDQyxJQUFJLEVBQUMsQ0FBTztnQkFBQ0MsSUFBSSxFQUFDLENBQU07Ozs7Ozt3RkFDOUJILENBQUU7MEJBQUMsQ0FBSzs7Ozs7O3dGQUNSQyxDQUFLO2dCQUFDQyxJQUFJLEVBQUMsQ0FBTztnQkFBQ0MsSUFBSSxFQUFDLENBQU07Ozs7Ozt3RkFDOUJILENBQUU7MEJBQUMsQ0FBVzs7Ozs7O3dGQUNkSSxDQUFRO2dCQUFDRixJQUFJLEVBQUMsQ0FBYTtnQkFBQ0MsSUFBSSxFQUFDLENBQU07Ozs7Ozt3RkFFdkNFLENBQU07Z0JBQUNGLElBQUksRUFBQyxDQUFROzBCQUFDLENBQVU7Ozs7Ozs7Ozs7OztBQUc1QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVkaXMtaW50cm8tdGVtcC8uL2xpYi9DYXJGb3JtLmpzP2FlMWEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyRm9ybSgpIHtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybS5lbnRyaWVzKCkpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcblxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9jYXJzJywge1xuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLCBcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGgyPm1ha2U8L2gyPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJtYWtlXCIgdHlwZT1cInRleHRcIi8+XG4gICAgICAgICAgICA8aDI+bW9kZWw8L2gyPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJtb2RlbFwiIHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgICAgICAgPGgyPmltYWdlPC9oMj5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiaW1hZ2VcIiB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAgICAgIDxoMj5kZXNjcmlwdGlvbjwvaDI+XG4gICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImRlc2NyaXB0aW9uXCIgdHlwZT1cInRleHRcIi8+XG5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZSBDYXI8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn0iXSwibmFtZXMiOlsiQ2FyRm9ybSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiRm9ybURhdGEiLCJ0YXJnZXQiLCJmb3JtRGF0YSIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJmZXRjaCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIm1ldGhvZCIsInJlc3VsdCIsImpzb24iLCJvblN1Ym1pdCIsImgyIiwiaW5wdXQiLCJuYW1lIiwidHlwZSIsInRleHRhcmVhIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/CarForm.js\n");

/***/ }),

/***/ "./lib/SearchForm.js":
/*!***************************!*\
  !*** ./lib/SearchForm.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SearchForm)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction SearchForm() {\n    const { 0: hits , 1: setHits  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const search = async (event)=>{\n        const q = event.target.value;\n        if (q.length > 2) {\n            const params = new URLSearchParams({\n                q\n            });\n            //TODO: Good idea to debounce this code\n            const res = await fetch('/api/search?' + params);\n            const result = await res.json();\n            console.log(result);\n            setHits(result['cars']);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: search,\n                type: \"text\"\n            }, void 0, false, {\n                fileName: \"/home/globotix/Downloads/redis-intro/lib/SearchForm.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: hits.map((hit)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            hit.make,\n                            \" \",\n                            hit.model\n                        ]\n                    }, hit.entityId, true, {\n                        fileName: \"/home/globotix/Downloads/redis-intro/lib/SearchForm.js\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, this)\n                )\n            }, void 0, false, {\n                fileName: \"/home/globotix/Downloads/redis-intro/lib/SearchForm.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/globotix/Downloads/redis-intro/lib/SearchForm.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvU2VhcmNoRm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0M7QUFFakIsUUFBUSxDQUFDQyxVQUFVLEdBQUcsQ0FBQztJQUNsQyxLQUFLLE1BQUVDLElBQUksTUFBRUMsT0FBTyxNQUFJSCwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUVuQyxLQUFLLENBQUNJLE1BQU0sVUFBVUMsS0FBSyxHQUFLLENBQUM7UUFDN0IsS0FBSyxDQUFDQyxDQUFDLEdBQUdELEtBQUssQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO1FBRTVCLEVBQUUsRUFBRUYsQ0FBQyxDQUFDRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDZixLQUFLLENBQUNDLE1BQU0sR0FBRyxHQUFHLENBQUNDLGVBQWUsQ0FBQyxDQUFDO2dCQUFDTCxDQUFDO1lBQUMsQ0FBQztZQUV4QyxFQUF1QztZQUN2QyxLQUFLLENBQUNNLEdBQUcsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUFjLGdCQUFHSCxNQUFNO1lBRS9DLEtBQUssQ0FBQ0ksTUFBTSxHQUFHLEtBQUssQ0FBQ0YsR0FBRyxDQUFDRyxJQUFJO1lBQzdCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsTUFBTTtZQUNsQlgsT0FBTyxDQUFDVyxNQUFNLENBQUMsQ0FBTTtRQUN6QixDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU0sNkVBQ0RJLENBQUc7O3dGQUNDQyxDQUFLO2dCQUFDQyxRQUFRLEVBQUVoQixNQUFNO2dCQUFFaUIsSUFBSSxFQUFDLENBQU07Ozs7Ozt3RkFDbkNDLENBQUU7MEJBQ0VwQixJQUFJLENBQUNxQixHQUFHLEVBQUVDLEdBQUcsK0VBQ1RDLENBQUU7OzRCQUNFRCxHQUFHLENBQUNFLElBQUk7NEJBQUMsQ0FBQzs0QkFBQ0YsR0FBRyxDQUFDRyxLQUFLOzt1QkFEaEJILEdBQUcsQ0FBQ0ksUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPekMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZGlzLWludHJvLXRlbXAvLi9saWIvU2VhcmNoRm9ybS5qcz9mMmE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaEZvcm0oKSB7XG4gICAgY29uc3QgW2hpdHMsIHNldEhpdHNdID0gdXNlU3RhdGUoW10pXG5cbiAgICBjb25zdCBzZWFyY2ggPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgcSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICBpZiAocS5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHsgcSB9KVxuXG4gICAgICAgICAgICAvL1RPRE86IEdvb2QgaWRlYSB0byBkZWJvdW5jZSB0aGlzIGNvZGVcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL3NlYXJjaD8nICsgcGFyYW1zKTtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgICAgICAgc2V0SGl0cyhyZXN1bHRbJ2NhcnMnXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtzZWFyY2h9IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7aGl0cy5tYXAoKGhpdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtoaXQuZW50aXR5SWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2hpdC5tYWtlfSB7aGl0Lm1vZGVsfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTZWFyY2hGb3JtIiwiaGl0cyIsInNldEhpdHMiLCJzZWFyY2giLCJldmVudCIsInEiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInJlcyIsImZldGNoIiwicmVzdWx0IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidHlwZSIsInVsIiwibWFwIiwiaGl0IiwibGkiLCJtYWtlIiwibW9kZWwiLCJlbnRpdHlJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/SearchForm.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_CarForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/CarForm */ \"./lib/CarForm.js\");\n/* harmony import */ var _lib_SearchForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/SearchForm */ \"./lib/SearchForm.js\");\n\n\n\nfunction Home() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Create a car\"\n            }, void 0, false, {\n                fileName: \"/home/globotix/Downloads/redis-intro/pages/index.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_SearchForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/globotix/Downloads/redis-intro/pages/index.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/globotix/Downloads/redis-intro/pages/index.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBb0M7QUFDTTtBQUUzQixRQUFRLENBQUNFLElBQUksR0FBRyxDQUFDO0lBQzlCLE1BQU0sNkVBQ0hDLENBQUc7O3dGQUNEQyxDQUFFOzBCQUFDLENBQVk7Ozs7Ozt3RkFDZkgsdURBQVU7Ozs7Ozs7Ozs7O0FBR2pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWRpcy1pbnRyby10ZW1wLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyRm9ybSBmcm9tIFwiLi4vbGliL0NhckZvcm1cIjtcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gXCIuLi9saWIvU2VhcmNoRm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+Q3JlYXRlIGEgY2FyPC9oMT5cbiAgICAgIDxTZWFyY2hGb3JtIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJDYXJGb3JtIiwiU2VhcmNoRm9ybSIsIkhvbWUiLCJkaXYiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();