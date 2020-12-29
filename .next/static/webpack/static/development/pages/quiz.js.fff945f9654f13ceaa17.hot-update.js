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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _GlobalContext_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../GlobalContext/context */ "./GlobalContext/context.tsx");




var _jsxFileName = "/Users/karthikeyan.b15/Personal/Quiz/BKQuiz/pages/quiz.tsx";





function QuizTemplate() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var Button =
  /*#__PURE__*/
  styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].button.withConfig({
    displayName: "quiz__Button",
    componentId: "sc-12jkv1r-0"
  })(["padding:10px 20px;background:#b2b2b2;color:black;text-transform:uppercase;font-size:1vw;border:none;margin:5px;", ";"], function (props) {
    return props.active && Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["css"])(["background:black;color:white;"]);
  });
  var pushed = [];

  var ButtonGroup = function ButtonGroup(props) {
    var list = props.list,
        _props$activeMenuIdx = props.activeMenuIdx,
        activeMenuIdx = _props$activeMenuIdx === void 0 ? 0 : _props$activeMenuIdx,
        _props$shouldToggle = props.shouldToggle,
        shouldToggle = _props$shouldToggle === void 0 ? false : _props$shouldToggle,
        renderTabItem = props.renderTabItem,
        renderTabItemMenu = props.renderTabItemMenu,
        renderTabItemContent = props.renderTabItemContent,
        remainingProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["list", "activeMenuIdx", "shouldToggle", "renderTabItem", "renderTabItemMenu", "renderTabItemContent"]);

    var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(activeMenuIdx),
        _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
        activeTabIdx = _React$useState2[0],
        setActiveTabIdx = _React$useState2[1];

    var onTabMenuClick = function onTabMenuClick(e) {
      e.preventDefault();
      var curMenuIdx = +e.currentTarget.getAttribute('data-key');

      if (curMenuIdx === activeTabIdx && shouldToggle === true) {
        setActiveTabIdx(-1);
      } else {
        setActiveTabIdx(curMenuIdx);
      }
    };

    var renderButtonGroup = function renderButtonGroup(item, index) {
      var title = item;
      var titleClassName = 'button-menu-title' + (activeTabIdx === index ? " active".concat(!shouldToggle ? ' prevent' : '') : '');
      var children = renderTabItemMenu !== undefined ? renderTabItemMenu(title, index) : title ? title : "Tab ".concat(index);
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
        key: "button-menu-".concat(index),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Button, {
        title: title,
        className: titleClassName,
        onClick: onTabMenuClick,
        "data-key": index,
        role: "navigation",
        active: activeTabIdx === index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, children));
    };

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("section", {
      className: "base-button-menu-panel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, list && list.map(renderButtonGroup));
  };

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
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, question), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ButtonGroup, {
    list: answers,
    activeMenuIdx: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }));
}

function QuizList() {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_4___default.a.useContext(_GlobalContext_context__WEBPACK_IMPORTED_MODULE_7__["QuizContext"]),
      _React$useContext$fet = _React$useContext.fetchListData,
      list = _React$useContext$fet === void 0 ? {} : _React$useContext$fet;

  var onToggle = function onToggle() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (obj) {
      list[obj.questionNumber].choosed = obj.index;
    }
  };

  return list.length > 0 ? list.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
      key: "item_".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(QuizTemplate, {
      questionNumber: index,
      answers: item.answers,
      question: item.question,
      onToggle: onToggle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }));
  }) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null);
}

function Quiz() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var Main =
  /*#__PURE__*/
  styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].main.withConfig({
    displayName: "quiz__Main",
    componentId: "sc-12jkv1r-1"
  })(["width:70%;margin:auto;text-align:center;"]);
  var Button =
  /*#__PURE__*/
  styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].button.withConfig({
    displayName: "quiz__Button",
    componentId: "sc-12jkv1r-2"
  })(["padding:10px 20px;background:black;color:white;text-transform:uppercase;font-size:1vw;border:none;margin:5px;margin-top:40px;"]);
  var config = [{}, {}, {}, {}, {}];
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Select Any One Option"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(QuizList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/result",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, " Submit ")));
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
//# sourceMappingURL=quiz.js.fff945f9654f13ceaa17.hot-update.js.map