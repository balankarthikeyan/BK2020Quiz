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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _GlobalContext_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../GlobalContext/context */ "./GlobalContext/context.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");





var _jsxFileName = "/Users/karthikeyan.b15/Personal/Quiz/BKQuiz/pages/index.tsx";




var IconLoading =
/*#__PURE__*/
styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "pages__IconLoading",
  componentId: "sc-1ltsz6q-0"
})(["font-size:20vw;"]);

var QuizDescription =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(QuizDescription, _React$Component);

  function QuizDescription() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuizDescription);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(QuizDescription).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QuizDescription, [{
    key: "render",
    value: function render() {
      var quiz = this.props.quiz;
      var image = quiz.image;

      var htmlDescription = function htmlDescription() {
        return {
          __html: quiz.introduction
        };
      };

      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("section", {
        className: "overviewSection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
        className: "imageWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("img", {
        src: image.filePath,
        alt: image.altText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
        className: "description",
        dangerouslySetInnerHTML: htmlDescription(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("button", {
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
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var Quizinator =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Quizinator, _React$Component2);

  function Quizinator() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Quizinator);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Quizinator).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Quizinator, [{
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
        return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("p", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("button", {
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

      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("section", {
        className: 'quizSection' + (this.props.buttonsDisabled ? ' transitionOut' : ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
        className: "questionNumber",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Question ", this.props.currentQuestionIndex + 1, " / ", quiz.questions.length), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
        className: "question",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
        dangerouslySetInnerHTML: htmlQuestion(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
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
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var QuizResults =
/*#__PURE__*/
function (_React$Component3) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(QuizResults, _React$Component3);

  function QuizResults() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuizResults);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(QuizResults).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QuizResults, [{
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
        return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("li", {
          className: "result" + (item.isCorrect ? " correct" : " incorrect"),
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
          className: "question",
          dangerouslySetInnerHTML: questionHtml(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
          className: "response",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, response, " ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, item.answers[item.correct - 1])), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("p", {
          className: "explanation",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("i", {
          dangerouslySetInnerHTML: explanationHtml(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        })));
      });
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("section", {
        className: "resultsSection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "Results"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
        className: "scoring",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "You got ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, numCorrect), " correct scoring a total of ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, score), " out of a possible ", react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, possibleScore), "."), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
        className: "badge",
        style: badgeStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, score), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("ol", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, results));
    }
  }]);

  return QuizResults;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

function Home() {
  var data = react__WEBPACK_IMPORTED_MODULE_5__["useContext"](_GlobalContext_context__WEBPACK_IMPORTED_MODULE_7__["QuizContext"]);
  console.log(data);
  return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Home Page!"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Following quiz provides Multiple Choice Questions (MCQs) related to Javascript Framework. You will have to read all the given answers and click over the correct answer. If you are not sure about the answer then you can check the answer using Show Answer button. You can use Next Quiz button to check new set of questions in the quiz."), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/Quiz",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, " Get Start "));
}


/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.db82dbb58090cbfc7cc6.hot-update.js.map