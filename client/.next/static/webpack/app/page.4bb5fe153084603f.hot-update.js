"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Types/FormData.js":
/*!******************************************!*\
  !*** ./app/components/Types/FormData.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SequenceChecker: function() { return /* binding */ SequenceChecker; },\n/* harmony export */   \"default\": function() { return /* binding */ FormData; }\n/* harmony export */ });\nclass FormData {\n    HandleClicked(event) {\n        this.deviceSelected = event.target.parentNode.innerText;\n        this.files = Object.values(event.target.files);\n        if (!this.files) {\n            // no files\n            console.log(\"no files!\");\n            return \"no files!\";\n        }\n        console.log(this.socket);\n        this.files.forEach((file)=>{\n            this.SendServer(file);\n        });\n    }\n    SendServer(file) {\n        const Kbyte = 100000;\n        let offset = 0;\n        let interval = setInterval(()=>{\n            console.log(\"called\", this.sequenceCounter);\n            if (offset < file.size) {\n                console.log(true);\n                let slicedChunk = file.slice(offset, offset += Kbyte);\n                this.socket.emit(\"sendingData\", {\n                    deviceSelected: this.deviceSelected,\n                    data: slicedChunk,\n                    type: file.name,\n                    sequenceCounter: this.sequenceCounter,\n                    isFinished: false\n                });\n                this.sequenceCounter++;\n                offset += Kbyte;\n            } else {\n                clearInterval(interval);\n                console.log(this.sequenceCounter);\n                this.socket.emit(\"sendingData\", {\n                    deviceSelected: this.deviceSelected,\n                    data: \"none\",\n                    type: file.name,\n                    sequenceCounter: this.sequenceCounter - 1,\n                    isFinished: true\n                });\n                offset = 0;\n            }\n        }, 200);\n    }\n    constructor(socket){\n        this.socket = socket;\n        this.deviceSelected;\n        this.files;\n        this.sequenceCounter = 0;\n    }\n}\n\n;\n// download it 1,2,3. not at same time.\nfunction SequenceChecker(deviceSelected, data, type, sequenceCounter, isFinished, finalFileResult, sequence, callback) {\n    // console.log('called', sequenceCounter)\n    let clientSequence = sequence.previousSequence;\n    if (sequence.previousSequence == undefined && sequenceCounter == 0) {\n        console.log(sequenceCounter);\n        finalFileResult.push(new Uint8Array(data));\n        sequence.previousSequence = 0;\n    }\n    ;\n    if (sequence.previousSequence == sequenceCounter - 1 && isFinished == false) {\n        finalFileResult.push(new Uint8Array(data));\n        sequence.previousSequence = sequenceCounter;\n        r;\n    } else {\n        // when finished or duplicates//\n        if (data == \"none\" && isFinished) {\n            console.log(sequenceCounter - 1, isFinished);\n            console.log(\"done\");\n            console.log(finalFileResult);\n            callback();\n            finalFileResult = [];\n        }\n    // this is duplicates, ignore it\n    }\n}\n_c = SequenceChecker;\n;\nvar _c;\n$RefreshReg$(_c, \"SequenceChecker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1R5cGVzL0Zvcm1EYXRhLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWUsTUFBTUE7SUFVakJDLGNBQWNDLEtBQUssRUFBQztRQUVoQixJQUFJLENBQUNDLGNBQWMsR0FBR0QsTUFBTUUsTUFBTSxDQUFDQyxVQUFVLENBQUNDLFNBQVM7UUFDdkQsSUFBSSxDQUFDQyxLQUFLLEdBQUdDLE9BQU9DLE1BQU0sQ0FBQ1AsTUFBTUUsTUFBTSxDQUFDRyxLQUFLO1FBRTdDLElBQUcsQ0FBQyxJQUFJLENBQUNBLEtBQUssRUFBQztZQUNYLFdBQVc7WUFDWEcsUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBTztRQUNYO1FBQ0FELFFBQVFDLEdBQUcsQ0FBQyxJQUFJLENBQUNDLE1BQU07UUFDdkIsSUFBSSxDQUFDTCxLQUFLLENBQUNNLE9BQU8sQ0FBQ0MsQ0FBQUE7WUFDZixJQUFJLENBQUNDLFVBQVUsQ0FBQ0Q7UUFDcEI7SUFJSjtJQUNBQyxXQUFXRCxJQUFJLEVBQUM7UUFDWixNQUFNRSxRQUFTO1FBQ2YsSUFBSUMsU0FBUztRQUViLElBQUlDLFdBQVdDLFlBQVk7WUFDdkJULFFBQVFDLEdBQUcsQ0FBQyxVQUFVLElBQUksQ0FBQ1MsZUFBZTtZQUMxQyxJQUFHSCxTQUFTSCxLQUFLTyxJQUFJLEVBQ3JCO2dCQUFJWCxRQUFRQyxHQUFHLENBQUM7Z0JBQ1osSUFBSVcsY0FBY1IsS0FBS1MsS0FBSyxDQUFDTixRQUFRQSxVQUFVRDtnQkFDL0MsSUFBSSxDQUFDSixNQUFNLENBQUNZLElBQUksQ0FBQyxlQUFlO29CQUFFckIsZ0JBQWdCLElBQUksQ0FBQ0EsY0FBYztvQkFBRXNCLE1BQU1IO29CQUFhSSxNQUFLWixLQUFLYSxJQUFJO29CQUFHUCxpQkFBZ0IsSUFBSSxDQUFDQSxlQUFlO29CQUFFUSxZQUFZO2dCQUFLO2dCQUNsSyxJQUFJLENBQUNSLGVBQWU7Z0JBQ3BCSCxVQUFTRDtZQUNiLE9BQ0k7Z0JBQ0FhLGNBQWNYO2dCQUNkUixRQUFRQyxHQUFHLENBQUMsSUFBSSxDQUFDUyxlQUFlO2dCQUNoQyxJQUFJLENBQUNSLE1BQU0sQ0FBQ1ksSUFBSSxDQUFDLGVBQWU7b0JBQUVyQixnQkFBZ0IsSUFBSSxDQUFDQSxjQUFjO29CQUFFc0IsTUFBTTtvQkFBUUMsTUFBS1osS0FBS2EsSUFBSTtvQkFBR1AsaUJBQWlCLElBQUksQ0FBQ0EsZUFBZSxHQUFHO29CQUFJUSxZQUFZO2dCQUFJO2dCQUNsS1gsU0FBUztZQUNiO1FBRUosR0FBRztJQUlQO0lBbkRBYSxZQUFZbEIsTUFBTSxDQUVsQjtRQUNJLElBQUksQ0FBQ0EsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ1QsY0FBYztRQUNuQixJQUFJLENBQUNJLEtBQUs7UUFDVixJQUFJLENBQUNhLGVBQWUsR0FBRztJQUUzQjtBQWdESjtBQUFDOztBQUNELHVDQUF1QztBQUNoQyxTQUFTVyxnQkFBZ0I1QixjQUFjLEVBQUVzQixJQUFJLEVBQUVDLElBQUksRUFBRU4sZUFBZSxFQUFFUSxVQUFVLEVBQUVJLGVBQWUsRUFBRUMsUUFBUSxFQUFFQyxRQUFRO0lBRXhILHlDQUF5QztJQUN6QyxJQUFJQyxpQkFBaUJGLFNBQVNHLGdCQUFnQjtJQUMxQyxJQUFJSCxTQUFTRyxnQkFBZ0IsSUFBSUMsYUFBYWpCLG1CQUFtQixHQUNqRTtRQUNJVixRQUFRQyxHQUFHLENBQUNTO1FBQ1pZLGdCQUFnQk0sSUFBSSxDQUFDLElBQUlDLFdBQVdkO1FBQ3BDUSxTQUFTRyxnQkFBZ0IsR0FBRztJQUdoQzs7SUFDQSxJQUFJSCxTQUFTRyxnQkFBZ0IsSUFBS2hCLGtCQUFrQixLQUFNUSxjQUFjLE9BQ3hFO1FBR0lJLGdCQUFnQk0sSUFBSSxDQUFDLElBQUlDLFdBQVdkO1FBQ3BDUSxTQUFTRyxnQkFBZ0IsR0FBR2hCO1FBQzVCb0I7SUFDSixPQUNJO1FBQ0EsZ0NBQWdDO1FBQ2hDLElBQUlmLFFBQVEsVUFBVUcsWUFDdEI7WUFDSWxCLFFBQVFDLEdBQUcsQ0FBQ1Msa0JBQWtCLEdBQUdRO1lBQ2pDbEIsUUFBUUMsR0FBRyxDQUFDO1lBQ1pELFFBQVFDLEdBQUcsQ0FBQ3FCO1lBQ1pFO1lBQ0FGLGtCQUFrQixFQUFFO1FBRXhCO0lBQ0EsZ0NBQWdDO0lBRXBDO0FBR1I7S0FwQ2dCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9UeXBlcy9Gb3JtRGF0YS5qcz9jMWZiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1EYXRhe1xuICAgIGNvbnN0cnVjdG9yKHNvY2tldClcbiAgICBcbiAgICB7ICAgXG4gICAgICAgIHRoaXMuc29ja2V0ID0gc29ja2V0XG4gICAgICAgIHRoaXMuZGV2aWNlU2VsZWN0ZWQ7XG4gICAgICAgIHRoaXMuZmlsZXM7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VDb3VudGVyID0gMDtcbiAgICAgICAgXG4gICAgfVxuICAgIEhhbmRsZUNsaWNrZWQoZXZlbnQpe1xuICAgICAgIFxuICAgICAgICB0aGlzLmRldmljZVNlbGVjdGVkID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaW5uZXJUZXh0O1xuICAgICAgICB0aGlzLmZpbGVzID0gT2JqZWN0LnZhbHVlcyhldmVudC50YXJnZXQuZmlsZXMpO1xuICAgICAgICBcbiAgICAgICAgaWYoIXRoaXMuZmlsZXMpe1xuICAgICAgICAgICAgLy8gbm8gZmlsZXNcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBmaWxlcyEnKVxuICAgICAgICAgICAgcmV0dXJuICdubyBmaWxlcyEnXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zb2NrZXQpXG4gICAgICAgIHRoaXMuZmlsZXMuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgICAgICAgIHRoaXMuU2VuZFNlcnZlcihmaWxlKTtcbiAgICAgICAgfSk7XG5cblxuXG4gICAgfTtcbiAgICBTZW5kU2VydmVyKGZpbGUpe1xuICAgICAgICBjb25zdCBLYnl0ZSAgPSAxMDAwMDA7XG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuXG4gICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2FsbGVkJywgdGhpcy5zZXF1ZW5jZUNvdW50ZXIpXG4gICAgICAgICAgICBpZihvZmZzZXQgPCBmaWxlLnNpemUpXG4gICAgICAgICAgICB7ICAgY29uc29sZS5sb2codHJ1ZSlcbiAgICAgICAgICAgICAgICBsZXQgc2xpY2VkQ2h1bmsgPSBmaWxlLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICs9IEtieXRlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdzZW5kaW5nRGF0YScsIHsgZGV2aWNlU2VsZWN0ZWQ6IHRoaXMuZGV2aWNlU2VsZWN0ZWQsIGRhdGE6IHNsaWNlZENodW5rLCB0eXBlOmZpbGUubmFtZSAsIHNlcXVlbmNlQ291bnRlcjp0aGlzLnNlcXVlbmNlQ291bnRlciwgaXNGaW5pc2hlZDogZmFsc2V9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcXVlbmNlQ291bnRlcisrXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9S2J5dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VxdWVuY2VDb3VudGVyKVxuICAgICAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ3NlbmRpbmdEYXRhJywgeyBkZXZpY2VTZWxlY3RlZDogdGhpcy5kZXZpY2VTZWxlY3RlZCwgZGF0YTogJ25vbmUnLCB0eXBlOmZpbGUubmFtZSAsIHNlcXVlbmNlQ291bnRlcjoodGhpcy5zZXF1ZW5jZUNvdW50ZXIgLSAxKSwgaXNGaW5pc2hlZDogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICB9LCAyMDApO1xuICAgICAgIFxuXG4gICAgICAgIFxuICAgIH07XG5cblxuXG4gICAgXG59O1xuLy8gZG93bmxvYWQgaXQgMSwyLDMuIG5vdCBhdCBzYW1lIHRpbWUuXG5leHBvcnQgZnVuY3Rpb24gU2VxdWVuY2VDaGVja2VyKGRldmljZVNlbGVjdGVkLCBkYXRhLCB0eXBlLCBzZXF1ZW5jZUNvdW50ZXIsIGlzRmluaXNoZWQsIGZpbmFsRmlsZVJlc3VsdCwgc2VxdWVuY2UgLGNhbGxiYWNrKVxueyAgIFxuICAgIC8vIGNvbnNvbGUubG9nKCdjYWxsZWQnLCBzZXF1ZW5jZUNvdW50ZXIpXG4gICAgbGV0IGNsaWVudFNlcXVlbmNlID0gc2VxdWVuY2UucHJldmlvdXNTZXF1ZW5jZTtcbiAgICAgICAgaWYoIHNlcXVlbmNlLnByZXZpb3VzU2VxdWVuY2UgPT0gdW5kZWZpbmVkICYmIHNlcXVlbmNlQ291bnRlciA9PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZXF1ZW5jZUNvdW50ZXIpXG4gICAgICAgICAgICBmaW5hbEZpbGVSZXN1bHQucHVzaChuZXcgVWludDhBcnJheShkYXRhKSk7XG4gICAgICAgICAgICBzZXF1ZW5jZS5wcmV2aW91c1NlcXVlbmNlID0gMDtcblxuICAgICAgICAgICBcbiAgICAgICAgfTtcbiAgICAgICAgaWYoIHNlcXVlbmNlLnByZXZpb3VzU2VxdWVuY2UgPT0gKHNlcXVlbmNlQ291bnRlciAtIDEpICYmIGlzRmluaXNoZWQgPT0gZmFsc2UgKVxuICAgICAgICB7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgZmluYWxGaWxlUmVzdWx0LnB1c2gobmV3IFVpbnQ4QXJyYXkoZGF0YSkpO1xuICAgICAgICAgICAgc2VxdWVuY2UucHJldmlvdXNTZXF1ZW5jZSA9IHNlcXVlbmNlQ291bnRlcjtcbiAgICAgICAgICAgIHJcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIC8vIHdoZW4gZmluaXNoZWQgb3IgZHVwbGljYXRlcy8vXG4gICAgICAgICAgICBpZiggZGF0YSA9PSAnbm9uZScgJiYgaXNGaW5pc2hlZCApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VxdWVuY2VDb3VudGVyIC0gMSwgaXNGaW5pc2hlZClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZG9uZScpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmluYWxGaWxlUmVzdWx0KVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgZmluYWxGaWxlUmVzdWx0ID0gW11cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoaXMgaXMgZHVwbGljYXRlcywgaWdub3JlIGl0XG4gICAgICAgICAgIFxuICAgICAgICB9XG5cblxufTtcblxuIl0sIm5hbWVzIjpbIkZvcm1EYXRhIiwiSGFuZGxlQ2xpY2tlZCIsImV2ZW50IiwiZGV2aWNlU2VsZWN0ZWQiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiaW5uZXJUZXh0IiwiZmlsZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwic29ja2V0IiwiZm9yRWFjaCIsImZpbGUiLCJTZW5kU2VydmVyIiwiS2J5dGUiLCJvZmZzZXQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwic2VxdWVuY2VDb3VudGVyIiwic2l6ZSIsInNsaWNlZENodW5rIiwic2xpY2UiLCJlbWl0IiwiZGF0YSIsInR5cGUiLCJuYW1lIiwiaXNGaW5pc2hlZCIsImNsZWFySW50ZXJ2YWwiLCJjb25zdHJ1Y3RvciIsIlNlcXVlbmNlQ2hlY2tlciIsImZpbmFsRmlsZVJlc3VsdCIsInNlcXVlbmNlIiwiY2FsbGJhY2siLCJjbGllbnRTZXF1ZW5jZSIsInByZXZpb3VzU2VxdWVuY2UiLCJ1bmRlZmluZWQiLCJwdXNoIiwiVWludDhBcnJheSIsInIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Types/FormData.js\n"));

/***/ })

});