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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SequenceChecker: function() { return /* binding */ SequenceChecker; },\n/* harmony export */   \"default\": function() { return /* binding */ FormData; }\n/* harmony export */ });\nclass FormData {\n    HandleClicked(event) {\n        this.deviceSelected = event.target.parentNode.innerText;\n        this.files = Object.values(event.target.files);\n        if (!this.files) {\n            // no files\n            console.log(\"no files!\");\n            return \"no files!\";\n        }\n        console.log(this.socket);\n        this.files.forEach((file)=>{\n            this.SendServer(file);\n        });\n    }\n    SendServer(file) {\n        const Kbyte = 100000;\n        let offset = 0;\n        let interval = setInterval(()=>{\n            console.log(\"called\", this.sequenceCounter);\n            if (offset < file.size) {\n                console.log(true);\n                let slicedChunk = file.slice(offset, offset += Kbyte);\n                this.socket.emit(\"sendingData\", {\n                    deviceSelected: this.deviceSelected,\n                    data: slicedChunk,\n                    type: file.name,\n                    sequenceCounter: this.sequenceCounter,\n                    isFinished: false\n                });\n                this.sequenceCounter++;\n                offset += Kbyte;\n            } else {\n                clearInterval(interval);\n                console.log(this.sequenceCounter);\n                this.socket.emit(\"sendingData\", {\n                    deviceSelected: this.deviceSelected,\n                    data: \"none\",\n                    type: file.name,\n                    sequenceCounter: this.sequenceCounter - 1,\n                    isFinished: true\n                });\n                offset = 0;\n            }\n        }, 200);\n    }\n    constructor(socket){\n        this.socket = socket;\n        this.deviceSelected;\n        this.files;\n        this.sequenceCounter = 0;\n    }\n}\n\n;\n// download it 1,2,3. not at same time.\nfunction SequenceChecker(deviceSelected, data, type, sequenceCounter, isFinished, finalFileResult, sequence, callback) {\n    // console.log('called', sequenceCounter)\n    let clientSequence = undefined;\n    if (sequence.previousSequence == undefined && sequenceCounter == 0) {\n        console.log(sequenceCounter);\n        finalFileResult.push(new Uint8Array(data));\n        sequence.previousSequence = 0;\n    }\n    ;\n    if (sequence.previousSequence == sequenceCounter - 1 && isFinished == false) {\n        finalFileResult.push(new Uint8Array(data));\n        clientSequence = sequenceCounter;\n        r;\n    } else {\n        // when finished or duplicates//\n        if (data == \"none\" && isFinished) {\n            console.log(sequenceCounter - 1, isFinished);\n            console.log(\"done\");\n            console.log(finalFileResult);\n            callback();\n            finalFileResult = [];\n        }\n    // this is duplicates, ignore it\n    }\n}\n_c = SequenceChecker;\n;\nvar _c;\n$RefreshReg$(_c, \"SequenceChecker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1R5cGVzL0Zvcm1EYXRhLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWUsTUFBTUE7SUFVakJDLGNBQWNDLEtBQUssRUFBQztRQUVoQixJQUFJLENBQUNDLGNBQWMsR0FBR0QsTUFBTUUsTUFBTSxDQUFDQyxVQUFVLENBQUNDLFNBQVM7UUFDdkQsSUFBSSxDQUFDQyxLQUFLLEdBQUdDLE9BQU9DLE1BQU0sQ0FBQ1AsTUFBTUUsTUFBTSxDQUFDRyxLQUFLO1FBRTdDLElBQUcsQ0FBQyxJQUFJLENBQUNBLEtBQUssRUFBQztZQUNYLFdBQVc7WUFDWEcsUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBTztRQUNYO1FBQ0FELFFBQVFDLEdBQUcsQ0FBQyxJQUFJLENBQUNDLE1BQU07UUFDdkIsSUFBSSxDQUFDTCxLQUFLLENBQUNNLE9BQU8sQ0FBQ0MsQ0FBQUE7WUFDZixJQUFJLENBQUNDLFVBQVUsQ0FBQ0Q7UUFDcEI7SUFJSjtJQUNBQyxXQUFXRCxJQUFJLEVBQUM7UUFDWixNQUFNRSxRQUFTO1FBQ2YsSUFBSUMsU0FBUztRQUViLElBQUlDLFdBQVdDLFlBQVk7WUFDdkJULFFBQVFDLEdBQUcsQ0FBQyxVQUFVLElBQUksQ0FBQ1MsZUFBZTtZQUMxQyxJQUFHSCxTQUFTSCxLQUFLTyxJQUFJLEVBQ3JCO2dCQUFJWCxRQUFRQyxHQUFHLENBQUM7Z0JBQ1osSUFBSVcsY0FBY1IsS0FBS1MsS0FBSyxDQUFDTixRQUFRQSxVQUFVRDtnQkFDL0MsSUFBSSxDQUFDSixNQUFNLENBQUNZLElBQUksQ0FBQyxlQUFlO29CQUFFckIsZ0JBQWdCLElBQUksQ0FBQ0EsY0FBYztvQkFBRXNCLE1BQU1IO29CQUFhSSxNQUFLWixLQUFLYSxJQUFJO29CQUFHUCxpQkFBZ0IsSUFBSSxDQUFDQSxlQUFlO29CQUFFUSxZQUFZO2dCQUFLO2dCQUNsSyxJQUFJLENBQUNSLGVBQWU7Z0JBQ3BCSCxVQUFTRDtZQUNiLE9BQ0k7Z0JBQ0FhLGNBQWNYO2dCQUNkUixRQUFRQyxHQUFHLENBQUMsSUFBSSxDQUFDUyxlQUFlO2dCQUNoQyxJQUFJLENBQUNSLE1BQU0sQ0FBQ1ksSUFBSSxDQUFDLGVBQWU7b0JBQUVyQixnQkFBZ0IsSUFBSSxDQUFDQSxjQUFjO29CQUFFc0IsTUFBTTtvQkFBUUMsTUFBS1osS0FBS2EsSUFBSTtvQkFBR1AsaUJBQWlCLElBQUksQ0FBQ0EsZUFBZSxHQUFHO29CQUFJUSxZQUFZO2dCQUFJO2dCQUNsS1gsU0FBUztZQUNiO1FBRUosR0FBRztJQUlQO0lBbkRBYSxZQUFZbEIsTUFBTSxDQUVsQjtRQUNJLElBQUksQ0FBQ0EsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ1QsY0FBYztRQUNuQixJQUFJLENBQUNJLEtBQUs7UUFDVixJQUFJLENBQUNhLGVBQWUsR0FBRztJQUUzQjtBQWdESjtBQUFDOztBQUNELHVDQUF1QztBQUNoQyxTQUFTVyxnQkFBZ0I1QixjQUFjLEVBQUVzQixJQUFJLEVBQUVDLElBQUksRUFBRU4sZUFBZSxFQUFFUSxVQUFVLEVBQUVJLGVBQWUsRUFBRUMsUUFBUSxFQUFFQyxRQUFRO0lBRXhILHlDQUF5QztJQUN6QyxJQUFJQyxpQkFBaUJDO0lBQ2pCLElBQUlILFNBQVNJLGdCQUFnQixJQUFJRCxhQUFhaEIsbUJBQW1CLEdBQ2pFO1FBQ0lWLFFBQVFDLEdBQUcsQ0FBQ1M7UUFDWlksZ0JBQWdCTSxJQUFJLENBQUMsSUFBSUMsV0FBV2Q7UUFDcENRLFNBQVNJLGdCQUFnQixHQUFHO0lBR2hDOztJQUNBLElBQUlKLFNBQVNJLGdCQUFnQixJQUFLakIsa0JBQWtCLEtBQU1RLGNBQWMsT0FDeEU7UUFHSUksZ0JBQWdCTSxJQUFJLENBQUMsSUFBSUMsV0FBV2Q7UUFDcENVLGlCQUFpQmY7UUFDakJvQjtJQUNKLE9BQ0k7UUFDQSxnQ0FBZ0M7UUFDaEMsSUFBSWYsUUFBUSxVQUFVRyxZQUN0QjtZQUNJbEIsUUFBUUMsR0FBRyxDQUFDUyxrQkFBa0IsR0FBR1E7WUFDakNsQixRQUFRQyxHQUFHLENBQUM7WUFDWkQsUUFBUUMsR0FBRyxDQUFDcUI7WUFDWkU7WUFDQUYsa0JBQWtCLEVBQUU7UUFFeEI7SUFDQSxnQ0FBZ0M7SUFFcEM7QUFHUjtLQXBDZ0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1R5cGVzL0Zvcm1EYXRhLmpzP2MxZmIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybURhdGF7XG4gICAgY29uc3RydWN0b3Ioc29ja2V0KVxuICAgIFxuICAgIHsgICBcbiAgICAgICAgdGhpcy5zb2NrZXQgPSBzb2NrZXRcbiAgICAgICAgdGhpcy5kZXZpY2VTZWxlY3RlZDtcbiAgICAgICAgdGhpcy5maWxlcztcbiAgICAgICAgdGhpcy5zZXF1ZW5jZUNvdW50ZXIgPSAwO1xuICAgICAgICBcbiAgICB9XG4gICAgSGFuZGxlQ2xpY2tlZChldmVudCl7XG4gICAgICAgXG4gICAgICAgIHRoaXMuZGV2aWNlU2VsZWN0ZWQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5pbm5lclRleHQ7XG4gICAgICAgIHRoaXMuZmlsZXMgPSBPYmplY3QudmFsdWVzKGV2ZW50LnRhcmdldC5maWxlcyk7XG4gICAgICAgIFxuICAgICAgICBpZighdGhpcy5maWxlcyl7XG4gICAgICAgICAgICAvLyBubyBmaWxlc1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGZpbGVzIScpXG4gICAgICAgICAgICByZXR1cm4gJ25vIGZpbGVzISdcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNvY2tldClcbiAgICAgICAgdGhpcy5maWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5TZW5kU2VydmVyKGZpbGUpO1xuICAgICAgICB9KTtcblxuXG5cbiAgICB9O1xuICAgIFNlbmRTZXJ2ZXIoZmlsZSl7XG4gICAgICAgIGNvbnN0IEtieXRlICA9IDEwMDAwMDtcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG5cbiAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYWxsZWQnLCB0aGlzLnNlcXVlbmNlQ291bnRlcilcbiAgICAgICAgICAgIGlmKG9mZnNldCA8IGZpbGUuc2l6ZSlcbiAgICAgICAgICAgIHsgICBjb25zb2xlLmxvZyh0cnVlKVxuICAgICAgICAgICAgICAgIGxldCBzbGljZWRDaHVuayA9IGZpbGUuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKz0gS2J5dGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ3NlbmRpbmdEYXRhJywgeyBkZXZpY2VTZWxlY3RlZDogdGhpcy5kZXZpY2VTZWxlY3RlZCwgZGF0YTogc2xpY2VkQ2h1bmssIHR5cGU6ZmlsZS5uYW1lICwgc2VxdWVuY2VDb3VudGVyOnRoaXMuc2VxdWVuY2VDb3VudGVyLCBpc0ZpbmlzaGVkOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VxdWVuY2VDb3VudGVyKytcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz1LYnl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZXF1ZW5jZUNvdW50ZXIpXG4gICAgICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnc2VuZGluZ0RhdGEnLCB7IGRldmljZVNlbGVjdGVkOiB0aGlzLmRldmljZVNlbGVjdGVkLCBkYXRhOiAnbm9uZScsIHR5cGU6ZmlsZS5uYW1lICwgc2VxdWVuY2VDb3VudGVyOih0aGlzLnNlcXVlbmNlQ291bnRlciAtIDEpLCBpc0ZpbmlzaGVkOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgIH0sIDIwMCk7XG4gICAgICAgXG5cbiAgICAgICAgXG4gICAgfTtcblxuXG5cbiAgICBcbn07XG4vLyBkb3dubG9hZCBpdCAxLDIsMy4gbm90IGF0IHNhbWUgdGltZS5cbmV4cG9ydCBmdW5jdGlvbiBTZXF1ZW5jZUNoZWNrZXIoZGV2aWNlU2VsZWN0ZWQsIGRhdGEsIHR5cGUsIHNlcXVlbmNlQ291bnRlciwgaXNGaW5pc2hlZCwgZmluYWxGaWxlUmVzdWx0LCBzZXF1ZW5jZSAsY2FsbGJhY2spXG57ICAgXG4gICAgLy8gY29uc29sZS5sb2coJ2NhbGxlZCcsIHNlcXVlbmNlQ291bnRlcilcbiAgICBsZXQgY2xpZW50U2VxdWVuY2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmKCBzZXF1ZW5jZS5wcmV2aW91c1NlcXVlbmNlID09IHVuZGVmaW5lZCAmJiBzZXF1ZW5jZUNvdW50ZXIgPT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2VxdWVuY2VDb3VudGVyKVxuICAgICAgICAgICAgZmluYWxGaWxlUmVzdWx0LnB1c2gobmV3IFVpbnQ4QXJyYXkoZGF0YSkpO1xuICAgICAgICAgICAgc2VxdWVuY2UucHJldmlvdXNTZXF1ZW5jZSA9IDA7XG5cbiAgICAgICAgICAgXG4gICAgICAgIH07XG4gICAgICAgIGlmKCBzZXF1ZW5jZS5wcmV2aW91c1NlcXVlbmNlID09IChzZXF1ZW5jZUNvdW50ZXIgLSAxKSAmJiBpc0ZpbmlzaGVkID09IGZhbHNlIClcbiAgICAgICAge1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGZpbmFsRmlsZVJlc3VsdC5wdXNoKG5ldyBVaW50OEFycmF5KGRhdGEpKTtcbiAgICAgICAgICAgIGNsaWVudFNlcXVlbmNlID0gc2VxdWVuY2VDb3VudGVyO1xuICAgICAgICAgICAgclxuICAgICAgICB9IFxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgLy8gd2hlbiBmaW5pc2hlZCBvciBkdXBsaWNhdGVzLy9cbiAgICAgICAgICAgIGlmKCBkYXRhID09ICdub25lJyAmJiBpc0ZpbmlzaGVkIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZXF1ZW5jZUNvdW50ZXIgLSAxLCBpc0ZpbmlzaGVkKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb25lJylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmaW5hbEZpbGVSZXN1bHQpXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICBmaW5hbEZpbGVSZXN1bHQgPSBbXVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGhpcyBpcyBkdXBsaWNhdGVzLCBpZ25vcmUgaXRcbiAgICAgICAgICAgXG4gICAgICAgIH1cblxuXG59O1xuXG4iXSwibmFtZXMiOlsiRm9ybURhdGEiLCJIYW5kbGVDbGlja2VkIiwiZXZlbnQiLCJkZXZpY2VTZWxlY3RlZCIsInRhcmdldCIsInBhcmVudE5vZGUiLCJpbm5lclRleHQiLCJmaWxlcyIsIk9iamVjdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJzb2NrZXQiLCJmb3JFYWNoIiwiZmlsZSIsIlNlbmRTZXJ2ZXIiLCJLYnl0ZSIsIm9mZnNldCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzZXF1ZW5jZUNvdW50ZXIiLCJzaXplIiwic2xpY2VkQ2h1bmsiLCJzbGljZSIsImVtaXQiLCJkYXRhIiwidHlwZSIsIm5hbWUiLCJpc0ZpbmlzaGVkIiwiY2xlYXJJbnRlcnZhbCIsImNvbnN0cnVjdG9yIiwiU2VxdWVuY2VDaGVja2VyIiwiZmluYWxGaWxlUmVzdWx0Iiwic2VxdWVuY2UiLCJjYWxsYmFjayIsImNsaWVudFNlcXVlbmNlIiwidW5kZWZpbmVkIiwicHJldmlvdXNTZXF1ZW5jZSIsInB1c2giLCJVaW50OEFycmF5IiwiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Types/FormData.js\n"));

/***/ })

});