webpackHotUpdate("static/development/pages/quiz.js",{

/***/ "./pages/quiz.tsx":
/*!************************!*\
  !*** ./pages/quiz.tsx ***!
  \************************/
/*! exports provided: Quiz, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quiz", function() { return Quiz; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "/Users/karthikeyan.b15/Personal/Quiz/BKQuiz/pages/quiz.tsx";



function QuizTemplate() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _ref = props,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'text' : _ref$title,
      _ref$choice = _ref.choice,
      choice = _ref$choice === void 0 ? ['option 01', 'option 02'] : _ref$choice,
      _ref$onToggle = _ref.onToggle,
      onToggle = _ref$onToggle === void 0 ? function () {
    return '';
  } : _ref$onToggle;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, title), choice.length > 0 ? choice.map(function () {
    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      onClick: function onClick() {
        onToggle(index);
      },
      key: "".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, item);
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null));
}

function Quiz() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var Main =
  /*#__PURE__*/
  styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].main.withConfig({
    displayName: "quiz__Main",
    componentId: "sc-12jkv1r-0"
  })(["width:70%;margin:auto;text-align:center;"]);
  var _ref2 = props,
      _ref2$isServer = _ref2.isServer,
      isServer = _ref2$isServer === void 0 ? false : _ref2$isServer;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "About Page"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(QuizTemplate, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }));
}

Quiz.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var isServer;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          isServer = typeof window === 'undefined';
          return _context.abrupt("return", {
            isServer: isServer
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));

/* harmony default export */ __webpack_exports__["default"] = (Quiz);

/***/ })

})
//# sourceMappingURL=quiz.js.22e64c650ca26757ec54.hot-update.js.map