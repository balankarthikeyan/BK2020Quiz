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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _GlobalContext_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../GlobalContext/context */ "./GlobalContext/context.tsx");



var _jsxFileName = "/Users/karthikeyan.b15/Personal/Quiz/BKQuiz/pages/quiz.tsx";




function QuizTemplate() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var Button =
  /*#__PURE__*/
  styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button.withConfig({
    displayName: "quiz__Button",
    componentId: "sc-12jkv1r-0"
  })(["padding:10px 20px;background:black;color:white;text-transform:uppercase;font-size:1vw;border:none;margin:5px;", ";"], function (props) {
    return props.active && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["background:white;color:black;"]);
  });
  var _ref = props,
      _ref$questionNumber = _ref.questionNumber,
      questionNumber = _ref$questionNumber === void 0 ? 0 : _ref$questionNumber,
      _ref$question = _ref.question,
      question = _ref$question === void 0 ? 'text' : _ref$question,
      _ref$answers = _ref.answers,
      answers = _ref$answers === void 0 ? ['option 01', 'option 02'] : _ref$answers,
      _ref$onToggle = _ref.onToggle,
      onToggle = _ref$onToggle === void 0 ? function () {
    return '';
  } : _ref$onToggle;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, question), answers.length > 0 ? answers.map(function () {
    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
        _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
        isVisible = _React$useState2[0],
        setVisibility = _React$useState2[1];

    var toggleVisibility = function toggleVisibility() {
      setVisibility(function (currentVisibility) {
        return !currentVisibility;
      });
      onToggle({
        index: index,
        item: item,
        question: question,
        questionNumber: questionNumber
      });
    };

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Button, {
      active: isVisible,
      onClick: function onClick(e) {
        setButtonActive(false);
        onToggle({
          index: index,
          item: item,
          question: question,
          questionNumber: questionNumber
        });
        toggleVisibility();
      },
      key: "".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, item, isVisible ? 'true' : 'false'));
  }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null));
}

function QuizList() {
  var list = react__WEBPACK_IMPORTED_MODULE_3___default.a.useContext(_GlobalContext_context__WEBPACK_IMPORTED_MODULE_5__["QuizContext"]);

  var onToggle = function onToggle() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (obj) {
      list[obj.questionNumber].choosed = obj.index;
    }
  };

  return list.length > 0 ? list.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
      key: "item_".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(QuizTemplate, {
      questionNumber: index,
      answers: item.answers,
      question: item.question,
      onToggle: onToggle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }));
  }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null);
}

function Quiz() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var Main =
  /*#__PURE__*/
  styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].main.withConfig({
    displayName: "quiz__Main",
    componentId: "sc-12jkv1r-1"
  })(["width:70%;margin:auto;text-align:center;"]);
  var Data = react__WEBPACK_IMPORTED_MODULE_3___default.a.useContext(_GlobalContext_context__WEBPACK_IMPORTED_MODULE_5__["QuizContext"]); // const {isServer = false} = props as any

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "About Page"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(QuizList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
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
//# sourceMappingURL=quiz.js.7cad70ca00b0403fa404.hot-update.js.map