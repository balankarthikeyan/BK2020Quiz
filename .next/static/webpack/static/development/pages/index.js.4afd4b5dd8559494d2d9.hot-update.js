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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");








var _jsxFileName = "/Users/karthikeyan.b15/Personal/Quiz/BKQuiz/pages/index.tsx";


var IconLoading =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "pages__IconLoading",
  componentId: "sc-1ltsz6q-0"
})(["font-size:20vw"]);

var QuizDescription =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(QuizDescription, _React$Component);

  function QuizDescription() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, QuizDescription);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(QuizDescription).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(QuizDescription, [{
    key: "render",
    value: function render() {
      var quiz = this.props.quiz;
      var image = quiz.image;

      var htmlDescription = function htmlDescription() {
        return {
          __html: quiz.introduction
        };
      };

      return react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("section", {
        className: "overviewSection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("div", {
        className: "imageWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("img", {
        src: image.filePath,
        alt: image.altText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("div", {
        className: "description",
        dangerouslySetInnerHTML: htmlDescription(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("button", {
        onClick: this.props.showQuizQuestion,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Begin"));
    }
  }]);

  return QuizDescription;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var Quizinator =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Quizinator, _React$Component2);

  function Quizinator() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Quizinator);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Quizinator).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Quizinator, [{
    key: "render",
    value: function render() {
      var _this = this;

      var quiz = this.props.quiz,
          question = this.props.quiz.questions[this.props.currentQuestionIndex],
          htmlQuestion = function htmlQuestion() {
        return {
          __html: question.question
        };
      },
          answerButtons = question.answers.map(function (answer, i) {
        return react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("p", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("button", {
          className: answer.answer,
          onClick: _this.handleClick.bind(_this, i),
          disabled: _this.props.buttonsDisabled,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, answer));
      });

      return react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("section", {
        className: 'quizSection' + (this.props.buttonsDisabled ? ' transitionOut' : ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("div", {
        className: "questionNumber",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Question ", this.props.currentQuestionIndex + 1, " / ", quiz.questions.length), react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("div", {
        className: "question",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("div", {
        dangerouslySetInnerHTML: htmlQuestion(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("div", {
        className: "answers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, answerButtons));
    }
  }, {
    key: "handleClick",
    value: function handleClick(index, event) {
      var question = this.props.quiz.questions[this.props.currentQuestionIndex],
          answer = {
        value: index + 1,
        isCorrect: index + 1 === question.correct
      },
          target = event.currentTarget;
      this.props.submitAnswer(answer);
      target.classList.add('clicked', answer.isCorrect ? 'correct' : 'incorrect');
      window.setTimeout(function () {
        target.classList.remove('clicked', 'correct', 'incorrect');
      }, this.props.transitionDelay);
    }
  }]);

  return Quizinator;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var QuizResults =
/*#__PURE__*/
function (_React$Component3) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(QuizResults, _React$Component3);

  function QuizResults() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, QuizResults);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(QuizResults).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(QuizResults, [{
    key: "render",
    value: function render() {
      var badgeStyle = {
        backgroundImage: "url(".concat(this.props.thumbnail.filePath, ")"),
        width: this.props.thumbnail.height,
        height: this.props.thumbnail.height,
        lineHeight: this.props.thumbnail.height + 'px'
      };
      var numCorrect = 0,
          score = 0,
          possibleScore = 0;
      this.props.results.forEach(function (answer) {
        if (!!answer.isCorrect) {
          numCorrect += 1;
          score += (answer.level || 1) * 10;
        }

        possibleScore += (answer.level || 1) * 10;
      });
      var results = this.props.results.map(function (item, i) {
        var questionHtml = function questionHtml() {
          return {
            __html: item.question
          };
        };

        var explanationHtml = function explanationHtml() {
          return {
            __html: item.explanation
          };
        };

        var response = item.isCorrect === true ? "You correctly answered " : item.isCorrect === false ? "You answered ".concat(item.answers[item.value - 1], ". The correct answer is ") : "The correct answer is ";
        return react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("li", {
          className: "result" + (item.isCorrect ? " correct" : " incorrect"),
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("div", {
          className: "question",
          dangerouslySetInnerHTML: questionHtml(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("div", {
          className: "response",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, response, " ", react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, item.answers[item.correct - 1])), react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("p", {
          className: "explanation",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("i", {
          dangerouslySetInnerHTML: explanationHtml(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        })));
      });
      return react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("section", {
        className: "resultsSection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "Results"), react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("div", {
        className: "scoring",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "You got ", react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, numCorrect), " correct scoring a total of ", react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, score), " out of a possible ", react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, possibleScore), "."), react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("div", {
        className: "badge",
        style: badgeStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, score), react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("ol", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, results));
    }
  }]);

  return QuizResults;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var Home =
/*#__PURE__*/
function (_React$Component4) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Home, _React$Component4);

  function Home(props) {
    var _this2;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Home);

    _this2 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Home).call(this, props));
    _this2.state = {
      quiz: _this2.getData(),
      activeView: null,
      currentQuestionIndex: 0,
      answers: []
    };
    _this2.submitAnswer = _this2.submitAnswer.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2));
    return _this2;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, this.state.activeView === 'quizOverview' && react__WEBPACK_IMPORTED_MODULE_8__["createElement"](QuizDescription, {
        quiz: this.state.quiz,
        showQuizQuestion: this.showQuizQuestion.bind(this, 0),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }), this.state.activeView === 'quizQuestions' && react__WEBPACK_IMPORTED_MODULE_8__["createElement"](Quizinator, {
        submitAnswer: this.submitAnswer,
        quiz: this.state.quiz,
        currentQuestionIndex: this.state.currentQuestionIndex,
        buttonsDisabled: this.state.buttonsDisabled,
        transitionDelay: this.state.transitionDelay,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }), this.state.activeView === 'quizResults' && react__WEBPACK_IMPORTED_MODULE_8__["createElement"](QuizResults, {
        results: this.getResults(),
        thumbnail: this.state.quiz.thumbnail,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.showQuizDescription();
    }
  }, {
    key: "getData",
    value: function getData() {
      return {};
    }
  }, {
    key: "showQuizDescription",
    value: function showQuizDescription() {
      this.setState(function (prevState, props) {
        return {
          activeView: 'quizOverview'
        };
      });
    }
  }, {
    key: "showQuizQuestion",
    value: function showQuizQuestion(index) {
      console.log(index);
      this.setState(function (prevState) {
        return {
          currentQuestionIndex: index,
          activeView: 'quizQuestions',
          buttonsDisabled: false,
          transitionDelay: 1000
        };
      });
    }
  }, {
    key: "showResults",
    value: function showResults() {
      this.setState(function (prevState) {
        return {
          activeView: 'quizResults'
        };
      });
    }
  }, {
    key: "submitAnswer",
    value: function submitAnswer(answer) {
      var _this3 = this;

      var app = this; // save answer and disable button clicks

      this.setState(function (prevState) {
        return {
          buttonsDisabled: true,
          answers: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this3.state.currentQuestionIndex, answer), prevState.answers)
        };
      }); // pause for question result to show before callback

      window.setTimeout(function () {
        // determine if there are any other questions to show or show results
        var nextIndex = app.state.currentQuestionIndex + 1,
            hasMoreQuestions = (nextIndex < app.state.quiz.numOfQuestions)(hasMoreQuestions) ? app.showQuizQuestion(nextIndex) : app.showResults();
      }, this.state.transitionDelay);
    }
  }, {
    key: "getResults",
    value: function getResults() {
      var _this4 = this;

      return this.state.quiz.questions.map(function (item, index) {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, item, _this4.state.answers[index]);
      });
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);


/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.4afd4b5dd8559494d2d9.hot-update.js.map