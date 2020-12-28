webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: Home, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GlobalContext_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GlobalContext/context */ "./GlobalContext/context.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/karthikeyan.b15/Personal/Quiz/BKQuiz/pages/index.tsx";




var Main =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].main.withConfig({
  displayName: "pages__Main",
  componentId: "sc-1ltsz6q-0"
})(["width:70%;margin:auto;text-align:center;"]);
var Heading =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1.withConfig({
  displayName: "pages__Heading",
  componentId: "sc-1ltsz6q-1"
})(["font-size:4vw;margin:20px 0;"]);
var Paragraph =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "pages__Paragraph",
  componentId: "sc-1ltsz6q-2"
})(["font-size:1vw;"]);
var Button =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "pages__Button",
  componentId: "sc-1ltsz6q-3"
})(["padding:10px 20px;background:black;color:white;text-transform:uppercase;font-size:1vw;border:none;"]);

function Home() {
  var data = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_GlobalContext_context__WEBPACK_IMPORTED_MODULE_2__["QuizContext"]);
  console.log('---data', data);
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Heading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Technical Quiz"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Paragraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Following quiz provides Multiple Choice Questions (MCQs) related to Javascript Framework. You will have to read all the given answers and click over the correct answer. If you are not sure about the answer then you can check the answer using Show Answer button. You can use Next Quiz button to check new set of questions in the quiz."), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/quiz",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Get Start")));
}


/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.da7bfffabfd72c2a6f7f.hot-update.js.map