webpackHotUpdate("static/development/pages/hooks/userefex.js",{

/***/ "./pages/hooks/userefex.js":
/*!*********************************!*\
  !*** ./pages/hooks/userefex.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/revanthmakkena/Work/JSXPrep/revreactapp/pages/hooks/userefex.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst useRefEx = () => {\n  _s();\n\n  const {\n    0: currentIndex,\n    1: setCurrentIndex\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1);\n  const refFromUseRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  const refFromCreateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createRef\"])();\n\n  if (!refFromUseRef.current) {\n    debugger;\n    refFromUseRef.current = currentIndex;\n  }\n\n  if (!refFromCreateRef.current) {\n    debugger;\n    refFromCreateRef.current = currentIndex;\n  }\n\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, \"Current Render Index = \", currentIndex), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, \"Index for UseRef = \", refFromUseRef.current), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, \"Index for CreateRef = \", refFromCreateRef.current), __jsx(\"button\", {\n    onClick: () => {\n      setCurrentIndex(prevIndex => prevIndex + 1);\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, \"Re-render\"));\n};\n\n_s(useRefEx, \"sIoO7IPDkIAfbUB8vGp0KHbQvI8=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRefEx);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ob29rcy91c2VyZWZleC5qcz80MmRiIl0sIm5hbWVzIjpbInVzZVJlZkV4IiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwidXNlU3RhdGUiLCJyZWZGcm9tVXNlUmVmIiwidXNlUmVmIiwicmVmRnJvbUNyZWF0ZVJlZiIsImNyZWF0ZVJlZiIsImN1cnJlbnQiLCJwcmV2SW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUFBOztBQUNyQixRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NDLHNEQUFRLENBQUMsQ0FBRCxDQUFoRDtBQUNBLFFBQU1DLGFBQWEsR0FBR0Msb0RBQU0sRUFBNUI7QUFDQSxRQUFNQyxnQkFBZ0IsR0FBR0MsdURBQVMsRUFBbEM7O0FBRUEsTUFBSSxDQUFDSCxhQUFhLENBQUNJLE9BQW5CLEVBQTRCO0FBQzFCO0FBQ0FKLGlCQUFhLENBQUNJLE9BQWQsR0FBd0JQLFlBQXhCO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDSyxnQkFBZ0IsQ0FBQ0UsT0FBdEIsRUFBK0I7QUFDN0I7QUFDQUYsb0JBQWdCLENBQUNFLE9BQWpCLEdBQTJCUCxZQUEzQjtBQUNEOztBQUNELFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQTZCQSxZQUE3QixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBeUJHLGFBQWEsQ0FBQ0ksT0FBdkMsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQTRCRixnQkFBZ0IsQ0FBQ0UsT0FBN0MsQ0FIRixFQUlFO0FBQ0UsV0FBTyxFQUFFLE1BQU07QUFDYk4scUJBQWUsQ0FBRU8sU0FBRCxJQUFlQSxTQUFTLEdBQUcsQ0FBNUIsQ0FBZjtBQUNELEtBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixDQURGO0FBY0QsQ0E1QkQ7O0dBQU1ULFE7O0FBOEJTQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2hvb2tzL3VzZXJlZmV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlUmVmLCB1c2VTdGF0ZSwgY3JlYXRlUmVmfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdXNlUmVmRXggPSAoKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgcmVmRnJvbVVzZVJlZiA9IHVzZVJlZigpO1xuICBjb25zdCByZWZGcm9tQ3JlYXRlUmVmID0gY3JlYXRlUmVmKCk7XG5cbiAgaWYgKCFyZWZGcm9tVXNlUmVmLmN1cnJlbnQpIHtcbiAgICBkZWJ1Z2dlcjtcbiAgICByZWZGcm9tVXNlUmVmLmN1cnJlbnQgPSBjdXJyZW50SW5kZXg7XG4gIH1cblxuICBpZiAoIXJlZkZyb21DcmVhdGVSZWYuY3VycmVudCkge1xuICAgIGRlYnVnZ2VyO1xuICAgIHJlZkZyb21DcmVhdGVSZWYuY3VycmVudCA9IGN1cnJlbnRJbmRleDtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PkN1cnJlbnQgUmVuZGVyIEluZGV4ID0ge2N1cnJlbnRJbmRleH08L2Rpdj5cbiAgICAgIDxkaXY+SW5kZXggZm9yIFVzZVJlZiA9IHtyZWZGcm9tVXNlUmVmLmN1cnJlbnR9PC9kaXY+XG4gICAgICA8ZGl2PkluZGV4IGZvciBDcmVhdGVSZWYgPSB7cmVmRnJvbUNyZWF0ZVJlZi5jdXJyZW50fTwvZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0Q3VycmVudEluZGV4KChwcmV2SW5kZXgpID0+IHByZXZJbmRleCArIDEpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBSZS1yZW5kZXJcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVmRXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/hooks/userefex.js\n");

/***/ })

})