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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SequenceChecker: function() { return /* binding */ SequenceChecker; },\n/* harmony export */   \"default\": function() { return /* binding */ FormData; }\n/* harmony export */ });\nclass FormData {\n    HandleClicked(event) {\n        this.deviceSelected = event.target.parentNode.innerText;\n        this.files = Object.values(event.target.files);\n        if (!this.files) {\n            // no files\n            console.log(\"no files!\");\n            return \"no files!\";\n        }\n        console.log(this.socket);\n        this.files.forEach((file)=>{\n            this.SendServer(file);\n        });\n    }\n    SendServer(file) {\n        console.log(file.size);\n        const Kbyte = 100000;\n        let offset = 0;\n        let interval = setInterval(()=>{\n            console.log(\"called\", this.sequenceCounter);\n            if (offset < file.size) {\n                console.log(\"offset\", offset);\n                let slicedChunk = file.slice(offset, offset += Kbyte);\n                this.socket.emit(\"sendingData\", {\n                    deviceSelected: this.deviceSelected,\n                    data: slicedChunk,\n                    type: file.name,\n                    sequenceCounter: this.sequenceCounter,\n                    isFinished: false\n                });\n                this.sequenceCounter++;\n                offset += Kbyte;\n            } else {\n                console.log(\"offset ended in\", offset);\n                clearInterval(interval);\n                console.log(this.sequenceCounter);\n                this.socket.emit(\"sendingData\", {\n                    deviceSelected: this.deviceSelected,\n                    data: \"none\",\n                    type: file.name,\n                    sequenceCounter: this.sequenceCounter - 1,\n                    isFinished: true\n                });\n                offset = 0;\n            }\n        }, 200);\n    }\n    constructor(socket){\n        this.socket = socket;\n        this.deviceSelected;\n        this.files;\n        this.sequenceCounter = 0;\n    }\n}\n\n;\n// download it 1,2,3. not at same time.\nfunction SequenceChecker(data, sequenceCounter, type, isFinished, finalFileResult, sequence, callback) {\n    // console.log('called', sequenceCounter)\n    if (sequence.previousSequence == undefined && sequenceCounter == 0) {\n        finalFileResult.push(new Uint8Array(data));\n        sequence.previousSequence = 0;\n        console.log(sequence.previousSequence);\n    }\n    ;\n    if (sequence.previousSequence == sequenceCounter - 1 && isFinished == false) {\n        finalFileResult.push(new Uint8Array(data));\n        sequence.previousSequence = sequenceCounter;\n        console.log(sequence.previousSequence);\n    } else {\n        // when finished or duplicates//\n        if (data == \"none\" && isFinished) {\n            console.log(sequence.previousSequence);\n            console.log(\"done\");\n            console.log(finalFileResult);\n            callback(finalFileResult, type);\n            finalFileResult = [];\n        }\n    // this is duplicates, ignore it\n    }\n}\n_c = SequenceChecker;\n;\nvar _c;\n$RefreshReg$(_c, \"SequenceChecker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1R5cGVzL0Zvcm1EYXRhLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWUsTUFBTUE7SUFVakJDLGNBQWNDLEtBQUssRUFBQztRQUVoQixJQUFJLENBQUNDLGNBQWMsR0FBR0QsTUFBTUUsTUFBTSxDQUFDQyxVQUFVLENBQUNDLFNBQVM7UUFDdkQsSUFBSSxDQUFDQyxLQUFLLEdBQUdDLE9BQU9DLE1BQU0sQ0FBQ1AsTUFBTUUsTUFBTSxDQUFDRyxLQUFLO1FBRTdDLElBQUcsQ0FBQyxJQUFJLENBQUNBLEtBQUssRUFBQztZQUNYLFdBQVc7WUFDWEcsUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBTztRQUNYO1FBQ0FELFFBQVFDLEdBQUcsQ0FBQyxJQUFJLENBQUNDLE1BQU07UUFDdkIsSUFBSSxDQUFDTCxLQUFLLENBQUNNLE9BQU8sQ0FBQ0MsQ0FBQUE7WUFDZixJQUFJLENBQUNDLFVBQVUsQ0FBQ0Q7UUFDcEI7SUFJSjtJQUNBQyxXQUFXRCxJQUFJLEVBQUM7UUFDWkosUUFBUUMsR0FBRyxDQUFDRyxLQUFLRSxJQUFJO1FBQ3JCLE1BQU1DLFFBQVM7UUFDZixJQUFJQyxTQUFTO1FBRWIsSUFBSUMsV0FBV0MsWUFBWTtZQUN2QlYsUUFBUUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDVSxlQUFlO1lBQzFDLElBQUdILFNBQVNKLEtBQUtFLElBQUksRUFDckI7Z0JBQ0lOLFFBQVFDLEdBQUcsQ0FBQyxVQUFVTztnQkFDdEIsSUFBSUksY0FBY1IsS0FBS1MsS0FBSyxDQUFDTCxRQUFRQSxVQUFVRDtnQkFFL0MsSUFBSSxDQUFDTCxNQUFNLENBQUNZLElBQUksQ0FBQyxlQUFlO29CQUFFckIsZ0JBQWdCLElBQUksQ0FBQ0EsY0FBYztvQkFBRXNCLE1BQU1IO29CQUFhSSxNQUFLWixLQUFLYSxJQUFJO29CQUFHTixpQkFBZ0IsSUFBSSxDQUFDQSxlQUFlO29CQUFFTyxZQUFZO2dCQUFLO2dCQUNsSyxJQUFJLENBQUNQLGVBQWU7Z0JBQ3BCSCxVQUFTRDtZQUNiLE9BQ0k7Z0JBQ0FQLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJPO2dCQUMvQlcsY0FBY1Y7Z0JBQ2RULFFBQVFDLEdBQUcsQ0FBQyxJQUFJLENBQUNVLGVBQWU7Z0JBQ2hDLElBQUksQ0FBQ1QsTUFBTSxDQUFDWSxJQUFJLENBQUMsZUFBZTtvQkFBRXJCLGdCQUFnQixJQUFJLENBQUNBLGNBQWM7b0JBQUVzQixNQUFNO29CQUFRQyxNQUFLWixLQUFLYSxJQUFJO29CQUFHTixpQkFBaUIsSUFBSSxDQUFDQSxlQUFlLEdBQUc7b0JBQUlPLFlBQVk7Z0JBQUk7Z0JBQ2xLVixTQUFTO1lBQ2I7UUFFSixHQUFHO0lBSVA7SUF2REFZLFlBQVlsQixNQUFNLENBRWxCO1FBQ0ksSUFBSSxDQUFDQSxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDVCxjQUFjO1FBQ25CLElBQUksQ0FBQ0ksS0FBSztRQUNWLElBQUksQ0FBQ2MsZUFBZSxHQUFHO0lBRTNCO0FBb0RKO0FBQUM7O0FBQ0QsdUNBQXVDO0FBQ2hDLFNBQVNVLGdCQUFnQk4sSUFBSSxFQUFFSixlQUFlLEVBQUVLLElBQUksRUFBRUUsVUFBVSxFQUFFSSxlQUFlLEVBQUVDLFFBQVEsRUFBRUMsUUFBUTtJQUd4Ryx5Q0FBeUM7SUFDckMsSUFBSUQsU0FBU0UsZ0JBQWdCLElBQUlDLGFBQWFmLG1CQUFtQixHQUNqRTtRQUVJVyxnQkFBZ0JLLElBQUksQ0FBQyxJQUFJQyxXQUFXYjtRQUNwQ1EsU0FBU0UsZ0JBQWdCLEdBQUc7UUFDNUJ6QixRQUFRQyxHQUFHLENBQUNzQixTQUFTRSxnQkFBZ0I7SUFHekM7O0lBQ0EsSUFBSUYsU0FBU0UsZ0JBQWdCLElBQUtkLGtCQUFrQixLQUFNTyxjQUFjLE9BQ3hFO1FBR0lJLGdCQUFnQkssSUFBSSxDQUFDLElBQUlDLFdBQVdiO1FBQ3BDUSxTQUFTRSxnQkFBZ0IsR0FBR2Q7UUFDNUJYLFFBQVFDLEdBQUcsQ0FBQ3NCLFNBQVNFLGdCQUFnQjtJQUN6QyxPQUNJO1FBQ0EsZ0NBQWdDO1FBQ2hDLElBQUlWLFFBQVEsVUFBVUcsWUFDdEI7WUFDSWxCLFFBQVFDLEdBQUcsQ0FBQ3NCLFNBQVNFLGdCQUFnQjtZQUNyQ3pCLFFBQVFDLEdBQUcsQ0FBQztZQUNaRCxRQUFRQyxHQUFHLENBQUNxQjtZQUNaRSxTQUFTRixpQkFBaUJOO1lBQzFCTSxrQkFBa0IsRUFBRTtRQUV4QjtJQUNBLGdDQUFnQztJQUVwQztBQUdSO0tBckNnQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVHlwZXMvRm9ybURhdGEuanM/YzFmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtRGF0YXtcbiAgICBjb25zdHJ1Y3Rvcihzb2NrZXQpXG4gICAgXG4gICAgeyAgIFxuICAgICAgICB0aGlzLnNvY2tldCA9IHNvY2tldFxuICAgICAgICB0aGlzLmRldmljZVNlbGVjdGVkO1xuICAgICAgICB0aGlzLmZpbGVzO1xuICAgICAgICB0aGlzLnNlcXVlbmNlQ291bnRlciA9IDA7XG4gICAgICAgIFxuICAgIH1cbiAgICBIYW5kbGVDbGlja2VkKGV2ZW50KXtcbiAgICAgICBcbiAgICAgICAgdGhpcy5kZXZpY2VTZWxlY3RlZCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlubmVyVGV4dDtcbiAgICAgICAgdGhpcy5maWxlcyA9IE9iamVjdC52YWx1ZXMoZXZlbnQudGFyZ2V0LmZpbGVzKTtcbiAgICAgICAgXG4gICAgICAgIGlmKCF0aGlzLmZpbGVzKXtcbiAgICAgICAgICAgIC8vIG5vIGZpbGVzXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gZmlsZXMhJylcbiAgICAgICAgICAgIHJldHVybiAnbm8gZmlsZXMhJ1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc29ja2V0KVxuICAgICAgICB0aGlzLmZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICAgICAgICB0aGlzLlNlbmRTZXJ2ZXIoZmlsZSk7XG4gICAgICAgIH0pO1xuXG5cblxuICAgIH07XG4gICAgU2VuZFNlcnZlcihmaWxlKXtcbiAgICAgICAgY29uc29sZS5sb2coZmlsZS5zaXplKVxuICAgICAgICBjb25zdCBLYnl0ZSAgPSAxMDAwMDA7XG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuXG4gICAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2FsbGVkJywgdGhpcy5zZXF1ZW5jZUNvdW50ZXIpXG4gICAgICAgICAgICBpZihvZmZzZXQgPCBmaWxlLnNpemUpXG4gICAgICAgICAgICB7ICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29mZnNldCcsIG9mZnNldCwgKVxuICAgICAgICAgICAgICAgIGxldCBzbGljZWRDaHVuayA9IGZpbGUuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKz0gS2J5dGUpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ3NlbmRpbmdEYXRhJywgeyBkZXZpY2VTZWxlY3RlZDogdGhpcy5kZXZpY2VTZWxlY3RlZCwgZGF0YTogc2xpY2VkQ2h1bmssIHR5cGU6ZmlsZS5uYW1lICwgc2VxdWVuY2VDb3VudGVyOnRoaXMuc2VxdWVuY2VDb3VudGVyLCBpc0ZpbmlzaGVkOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VxdWVuY2VDb3VudGVyKytcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz1LYnl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29mZnNldCBlbmRlZCBpbicsIG9mZnNldCk7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZXF1ZW5jZUNvdW50ZXIpXG4gICAgICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnc2VuZGluZ0RhdGEnLCB7IGRldmljZVNlbGVjdGVkOiB0aGlzLmRldmljZVNlbGVjdGVkLCBkYXRhOiAnbm9uZScsIHR5cGU6ZmlsZS5uYW1lICwgc2VxdWVuY2VDb3VudGVyOih0aGlzLnNlcXVlbmNlQ291bnRlciAtIDEpLCBpc0ZpbmlzaGVkOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgIH0sIDIwMCk7XG4gICAgICAgXG5cbiAgICAgICAgXG4gICAgfTtcblxuXG5cbiAgICBcbn07XG4vLyBkb3dubG9hZCBpdCAxLDIsMy4gbm90IGF0IHNhbWUgdGltZS5cbmV4cG9ydCBmdW5jdGlvbiBTZXF1ZW5jZUNoZWNrZXIoZGF0YSwgc2VxdWVuY2VDb3VudGVyLCB0eXBlLCBpc0ZpbmlzaGVkLCBmaW5hbEZpbGVSZXN1bHQsIHNlcXVlbmNlICxjYWxsYmFjaylcbnsgICBcblxuICAgIC8vIGNvbnNvbGUubG9nKCdjYWxsZWQnLCBzZXF1ZW5jZUNvdW50ZXIpXG4gICAgICAgIGlmKCBzZXF1ZW5jZS5wcmV2aW91c1NlcXVlbmNlID09IHVuZGVmaW5lZCAmJiBzZXF1ZW5jZUNvdW50ZXIgPT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmaW5hbEZpbGVSZXN1bHQucHVzaChuZXcgVWludDhBcnJheShkYXRhKSk7XG4gICAgICAgICAgICBzZXF1ZW5jZS5wcmV2aW91c1NlcXVlbmNlID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlcXVlbmNlLnByZXZpb3VzU2VxdWVuY2UpXG5cbiAgICAgICAgICAgXG4gICAgICAgIH07XG4gICAgICAgIGlmKCBzZXF1ZW5jZS5wcmV2aW91c1NlcXVlbmNlID09IChzZXF1ZW5jZUNvdW50ZXIgLSAxKSAmJiBpc0ZpbmlzaGVkID09IGZhbHNlIClcbiAgICAgICAge1xuICAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgZmluYWxGaWxlUmVzdWx0LnB1c2gobmV3IFVpbnQ4QXJyYXkoZGF0YSkpO1xuICAgICAgICAgICAgc2VxdWVuY2UucHJldmlvdXNTZXF1ZW5jZSA9IHNlcXVlbmNlQ291bnRlcjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlcXVlbmNlLnByZXZpb3VzU2VxdWVuY2UpIFxuICAgICAgICB9IFxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgLy8gd2hlbiBmaW5pc2hlZCBvciBkdXBsaWNhdGVzLy9cbiAgICAgICAgICAgIGlmKCBkYXRhID09ICdub25lJyAmJiBpc0ZpbmlzaGVkIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZXF1ZW5jZS5wcmV2aW91c1NlcXVlbmNlKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb25lJylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmaW5hbEZpbGVSZXN1bHQpXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZmluYWxGaWxlUmVzdWx0LCB0eXBlKTtcbiAgICAgICAgICAgICAgICBmaW5hbEZpbGVSZXN1bHQgPSBbXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoaXMgaXMgZHVwbGljYXRlcywgaWdub3JlIGl0XG4gICAgICAgICAgIFxuICAgICAgICB9XG5cblxufTtcblxuIl0sIm5hbWVzIjpbIkZvcm1EYXRhIiwiSGFuZGxlQ2xpY2tlZCIsImV2ZW50IiwiZGV2aWNlU2VsZWN0ZWQiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiaW5uZXJUZXh0IiwiZmlsZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwic29ja2V0IiwiZm9yRWFjaCIsImZpbGUiLCJTZW5kU2VydmVyIiwic2l6ZSIsIktieXRlIiwib2Zmc2V0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNlcXVlbmNlQ291bnRlciIsInNsaWNlZENodW5rIiwic2xpY2UiLCJlbWl0IiwiZGF0YSIsInR5cGUiLCJuYW1lIiwiaXNGaW5pc2hlZCIsImNsZWFySW50ZXJ2YWwiLCJjb25zdHJ1Y3RvciIsIlNlcXVlbmNlQ2hlY2tlciIsImZpbmFsRmlsZVJlc3VsdCIsInNlcXVlbmNlIiwiY2FsbGJhY2siLCJwcmV2aW91c1NlcXVlbmNlIiwidW5kZWZpbmVkIiwicHVzaCIsIlVpbnQ4QXJyYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Types/FormData.js\n"));

/***/ })

});