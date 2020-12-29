webpackHotUpdate("static/development/pages/quiz.js",{

/***/ "./components/Tab/index.ts":
/*!*********************************!*\
  !*** ./components/Tab/index.ts ***!
  \*********************************/
/*! exports provided: Tab, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/Users/karthikeyan.b15/Personal/Quiz/BKQuiz/components/Tab/index.ts";


function Tab(props) {
  var _props$classList = props.classList,
      classList = _props$classList === void 0 ? [] : _props$classList,
      list = props.list,
      _props$activeMenuIdx = props.activeMenuIdx,
      activeMenuIdx = _props$activeMenuIdx === void 0 ? 0 : _props$activeMenuIdx,
      _props$shouldToggle = props.shouldToggle,
      shouldToggle = _props$shouldToggle === void 0 ? false : _props$shouldToggle,
      renderTabItem = props.renderTabItem,
      renderTabItemMenu = props.renderTabItemMenu,
      renderTabItemContent = props.renderTabItemContent,
      remainingProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classList", "list", "activeMenuIdx", "shouldToggle", "renderTabItem", "renderTabItemMenu", "renderTabItemContent"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(activeMenuIdx),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
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

  var renderTabMenu = function renderTabMenu(item, index) {
    var title = item.title;
    var titleClassName = 'tab-menu-title' + (activeTabIdx === index ? " active".concat(!shouldToggle ? ' prevent' : '') : '');
    var children = renderTabItemMenu !== undefined ? renderTabItemMenu(title, index) : title ? title : "Tab ".concat(index);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      key: "tab-menu-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      title: title,
      className: titleClassName,
      onClick: onTabMenuClick,
      "data-key": index,
      role: "navigation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, children));
  };

  var tabItemRenderProp = renderTabItem !== undefined ? renderTabItem : renderTabMenu;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "base-tab-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "base-tab-menu-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, list && list.map(tabItemRenderProp)));
}


/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Tab));

/***/ })

})
//# sourceMappingURL=quiz.js.22aad9da4ab6e179e19e.hot-update.js.map