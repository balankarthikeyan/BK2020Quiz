webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.ts");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.ts");
/* harmony import */ var _GlobalContext_context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../GlobalContext/context */ "./GlobalContext/context.tsx");









var _jsxFileName = "/Users/karthikeyan.b15/Personal/Quiz/BKQuiz/pages/_app.tsx";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  :root {\n    --color-orange: white;\n  }\n\n  html {\n    box-sizing: border-box;\n    background-color: var(--color-orange);\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  html, body {\n    margin: 0;\n    min-height: 100vh;\n    overflow-x: hidden;\n  }\n\n  body {\n    padding: 0;\n    font-family: \"Roboto\", \"Arial\", sans-serif, serif;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/**
 * @important @note
 * - App component to initialize pages
 * - Global components such as Header, Footer, Navigation Menu, Modals etc., can be added here
 * - file name must be _app.js
 * - path: pages/_app.js
 * https://nextjs.org/docs#custom-app
 */





 // import {GlobalFixture} from '../GlobalContext/GlobalFixture'

var AppGlobalStyles =
/*#__PURE__*/
Object(styled_components__WEBPACK_IMPORTED_MODULE_11__["createGlobalStyle"])(_templateObject());

var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MyApp, _App);

  function MyApp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MyApp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, [{
    key: "getData",
    value: function getData() {
      return __webpack_require__(/*! ../questions.json */ "./questions.json");
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var contextProps = this.getData();

      var AppText = function AppText() {
        return react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_GlobalContext_context__WEBPACK_IMPORTED_MODULE_14__["QuizContext"].Provider, {
          value: contextProps,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](next_app__WEBPACK_IMPORTED_MODULE_10__["Container"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](AppGlobalStyles, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_components_Header__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9__["createElement"](Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_components_Footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        })));
      };

      return react__WEBPACK_IMPORTED_MODULE_9__["createElement"](AppText, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      });
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_10___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ })

})
//# sourceMappingURL=_app.js.ec5b4a32b3505f691916.hot-update.js.map