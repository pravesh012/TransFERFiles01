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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SequenceChecker: function() { return /* binding */ SequenceChecker; },\n/* harmony export */   \"default\": function() { return /* binding */ FormData; }\n/* harmony export */ });\nclass FormData {\n    HandleClicked(event) {\n        this.deviceSelected = event.target.parentNode.innerText;\n        this.files = Object.values(event.target.files);\n        if (!this.files) {\n            // no files\n            console.log(\"no files!\");\n            return \"no files!\";\n        }\n        console.log(this.socket);\n        this.files.forEach((file)=>{\n            this.SendServer(file);\n        });\n    }\n    SendServer(file) {\n        const Kbyte = 100000;\n        let offset = 0;\n        let interval = setInterval(()=>{\n            console.log(\"called\", this.sequenceCounter);\n            if (offset < file.size) {\n                console.log(true);\n                let slicedChunk = file.slice(offset, offset += Kbyte);\n                this.socket.emit(\"sendingData\", {\n                    deviceSelected: this.deviceSelected,\n                    data: slicedChunk,\n                    type: file.name,\n                    sequenceCounter: this.sequenceCounter,\n                    isFinished: false\n                });\n                this.sequenceCounter++;\n                offset += Kbyte;\n            } else {\n                clearInterval(interval);\n                console.log(this.sequenceCounter);\n                this.socket.emit(\"sendingData\", {\n                    deviceSelected: this.deviceSelected,\n                    data: \"none\",\n                    type: file.name,\n                    sequenceCounter: this.sequenceCounter - 1,\n                    isFinished: true\n                });\n                offset = 0;\n            }\n        }, 200);\n    }\n    constructor(socket){\n        this.socket = socket;\n        this.deviceSelected;\n        this.files;\n        this.sequenceCounter = 0;\n    }\n}\n\n;\n// download it 1,2,3. not at same time.\nfunction SequenceChecker(deviceSelected, data, type, sequenceCounter, isFinished, finalFileResult, callback) {\n    console.log(\"called\", sequenceCounter);\n    let clientSequence = undefined;\n    if (clientSequence == undefined && sequenceCounter == 0) {\n        console.log(sequenceCounter);\n        finalFileResult.push(new Uint8Array(data));\n        clientSequence = 0;\n    }\n    ;\n    if (clientSequence == sequenceCounter - 1 && isFinished == false) {\n        console.log(sequenceCounter);\n        finalFileResult.push(new Uint8Array(data));\n        clientSequence = sequenceCounter;\n        r;\n    } else {\n        // when finished or duplicates//\n        if (data == \"none\" && isFinished) {\n            console.log(\"done\");\n            console.log(finalFileResult);\n            callback();\n            finalFileResult = [];\n        }\n    // this is duplicates, ignore it\n    }\n}\n_c = SequenceChecker;\n;\nvar _c;\n$RefreshReg$(_c, \"SequenceChecker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1R5cGVzL0Zvcm1EYXRhLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWUsTUFBTUE7SUFVakJDLGNBQWNDLEtBQUssRUFBQztRQUVoQixJQUFJLENBQUNDLGNBQWMsR0FBR0QsTUFBTUUsTUFBTSxDQUFDQyxVQUFVLENBQUNDLFNBQVM7UUFDdkQsSUFBSSxDQUFDQyxLQUFLLEdBQUdDLE9BQU9DLE1BQU0sQ0FBQ1AsTUFBTUUsTUFBTSxDQUFDRyxLQUFLO1FBRTdDLElBQUcsQ0FBQyxJQUFJLENBQUNBLEtBQUssRUFBQztZQUNYLFdBQVc7WUFDWEcsUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBTztRQUNYO1FBQ0FELFFBQVFDLEdBQUcsQ0FBQyxJQUFJLENBQUNDLE1BQU07UUFDdkIsSUFBSSxDQUFDTCxLQUFLLENBQUNNLE9BQU8sQ0FBQ0MsQ0FBQUE7WUFDZixJQUFJLENBQUNDLFVBQVUsQ0FBQ0Q7UUFDcEI7SUFJSjtJQUNBQyxXQUFXRCxJQUFJLEVBQUM7UUFDWixNQUFNRSxRQUFTO1FBQ2YsSUFBSUMsU0FBUztRQUViLElBQUlDLFdBQVdDLFlBQVk7WUFDdkJULFFBQVFDLEdBQUcsQ0FBQyxVQUFVLElBQUksQ0FBQ1MsZUFBZTtZQUMxQyxJQUFHSCxTQUFTSCxLQUFLTyxJQUFJLEVBQ3JCO2dCQUFJWCxRQUFRQyxHQUFHLENBQUM7Z0JBQ1osSUFBSVcsY0FBY1IsS0FBS1MsS0FBSyxDQUFDTixRQUFRQSxVQUFVRDtnQkFDL0MsSUFBSSxDQUFDSixNQUFNLENBQUNZLElBQUksQ0FBQyxlQUFlO29CQUFFckIsZ0JBQWdCLElBQUksQ0FBQ0EsY0FBYztvQkFBRXNCLE1BQU1IO29CQUFhSSxNQUFLWixLQUFLYSxJQUFJO29CQUFHUCxpQkFBZ0IsSUFBSSxDQUFDQSxlQUFlO29CQUFFUSxZQUFZO2dCQUFLO2dCQUNsSyxJQUFJLENBQUNSLGVBQWU7Z0JBQ3BCSCxVQUFTRDtZQUNiLE9BQ0k7Z0JBQ0FhLGNBQWNYO2dCQUNkUixRQUFRQyxHQUFHLENBQUMsSUFBSSxDQUFDUyxlQUFlO2dCQUNoQyxJQUFJLENBQUNSLE1BQU0sQ0FBQ1ksSUFBSSxDQUFDLGVBQWU7b0JBQUVyQixnQkFBZ0IsSUFBSSxDQUFDQSxjQUFjO29CQUFFc0IsTUFBTTtvQkFBUUMsTUFBS1osS0FBS2EsSUFBSTtvQkFBR1AsaUJBQWlCLElBQUksQ0FBQ0EsZUFBZSxHQUFHO29CQUFJUSxZQUFZO2dCQUFJO2dCQUNsS1gsU0FBUztZQUNiO1FBRUosR0FBRztJQUlQO0lBbkRBYSxZQUFZbEIsTUFBTSxDQUVsQjtRQUNJLElBQUksQ0FBQ0EsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ1QsY0FBYztRQUNuQixJQUFJLENBQUNJLEtBQUs7UUFDVixJQUFJLENBQUNhLGVBQWUsR0FBRztJQUUzQjtBQWdESjtBQUFDOztBQUNELHVDQUF1QztBQUNoQyxTQUFTVyxnQkFBZ0I1QixjQUFjLEVBQUVzQixJQUFJLEVBQUVDLElBQUksRUFBRU4sZUFBZSxFQUFFUSxVQUFVLEVBQUVJLGVBQWUsRUFBRUMsUUFBUTtJQUU5R3ZCLFFBQVFDLEdBQUcsQ0FBQyxVQUFVUztJQUN0QixJQUFJYyxpQkFBaUJDO0lBQ2pCLElBQUdELGtCQUFrQkMsYUFBYWYsbUJBQW1CLEdBQ3JEO1FBQ0lWLFFBQVFDLEdBQUcsQ0FBQ1M7UUFDWlksZ0JBQWdCSSxJQUFJLENBQUMsSUFBSUMsV0FBV1o7UUFDcENTLGlCQUFpQjtJQUdyQjs7SUFDQSxJQUFJQSxrQkFBbUJkLGtCQUFrQixLQUFNUSxjQUFjLE9BQzdEO1FBQ0lsQixRQUFRQyxHQUFHLENBQUNTO1FBRVpZLGdCQUFnQkksSUFBSSxDQUFDLElBQUlDLFdBQVdaO1FBQ3BDUyxpQkFBaUJkO1FBQ2pCa0I7SUFDSixPQUNJO1FBQ0EsZ0NBQWdDO1FBQ2hDLElBQUliLFFBQVEsVUFBVUcsWUFDdEI7WUFDSWxCLFFBQVFDLEdBQUcsQ0FBQztZQUNaRCxRQUFRQyxHQUFHLENBQUNxQjtZQUNaQztZQUNBRCxrQkFBa0IsRUFBRTtRQUV4QjtJQUNBLGdDQUFnQztJQUVwQztBQUdSO0tBbkNnQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVHlwZXMvRm9ybURhdGEuanM/YzFmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtRGF0YXtcbiAgICBjb25zdHJ1Y3Rvcihzb2NrZXQpXG4gICAgXG4gICAgeyAgIFxuICAgICAgICB0aGlzLnNvY2tldCA9IHNvY2tldFxuICAgICAgICB0aGlzLmRldmljZVNlbGVjdGVkO1xuICAgICAgICB0aGlzLmZpbGVzO1xuICAgICAgICB0aGlzLnNlcXVlbmNlQ291bnRlciA9IDA7XG4gICAgICAgIFxuICAgIH1cbiAgICBIYW5kbGVDbGlja2VkKGV2ZW50KXtcbiAgICAgICBcbiAgICAgICAgdGhpcy5kZXZpY2VTZWxlY3RlZCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlubmVyVGV4dDtcbiAgICAgICAgdGhpcy5maWxlcyA9IE9iamVjdC52YWx1ZXMoZXZlbnQudGFyZ2V0LmZpbGVzKTtcbiAgICAgICAgXG4gICAgICAgIGlmKCF0aGlzLmZpbGVzKXtcbiAgICAgICAgICAgIC8vIG5vIGZpbGVzXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gZmlsZXMhJylcbiAgICAgICAgICAgIHJldHVybiAnbm8gZmlsZXMhJ1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc29ja2V0KVxuICAgICAgICB0aGlzLmZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICAgICAgICB0aGlzLlNlbmRTZXJ2ZXIoZmlsZSk7XG4gICAgICAgIH0pO1xuXG5cblxuICAgIH07XG4gICAgU2VuZFNlcnZlcihmaWxlKXtcbiAgICAgICAgY29uc3QgS2J5dGUgID0gMTAwMDAwO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcblxuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbGxlZCcsIHRoaXMuc2VxdWVuY2VDb3VudGVyKVxuICAgICAgICAgICAgaWYob2Zmc2V0IDwgZmlsZS5zaXplKVxuICAgICAgICAgICAgeyAgIGNvbnNvbGUubG9nKHRydWUpXG4gICAgICAgICAgICAgICAgbGV0IHNsaWNlZENodW5rID0gZmlsZS5zbGljZShvZmZzZXQsIG9mZnNldCArPSBLYnl0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnc2VuZGluZ0RhdGEnLCB7IGRldmljZVNlbGVjdGVkOiB0aGlzLmRldmljZVNlbGVjdGVkLCBkYXRhOiBzbGljZWRDaHVuaywgdHlwZTpmaWxlLm5hbWUgLCBzZXF1ZW5jZUNvdW50ZXI6dGhpcy5zZXF1ZW5jZUNvdW50ZXIsIGlzRmluaXNoZWQ6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZUNvdW50ZXIrK1xuICAgICAgICAgICAgICAgIG9mZnNldCArPUtieXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlcXVlbmNlQ291bnRlcilcbiAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdzZW5kaW5nRGF0YScsIHsgZGV2aWNlU2VsZWN0ZWQ6IHRoaXMuZGV2aWNlU2VsZWN0ZWQsIGRhdGE6ICdub25lJywgdHlwZTpmaWxlLm5hbWUgLCBzZXF1ZW5jZUNvdW50ZXI6KHRoaXMuc2VxdWVuY2VDb3VudGVyIC0gMSksIGlzRmluaXNoZWQ6IHRydWV9KTtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgfSwgMjAwKTtcbiAgICAgICBcblxuICAgICAgICBcbiAgICB9O1xuXG5cblxuICAgIFxufTtcbi8vIGRvd25sb2FkIGl0IDEsMiwzLiBub3QgYXQgc2FtZSB0aW1lLlxuZXhwb3J0IGZ1bmN0aW9uIFNlcXVlbmNlQ2hlY2tlcihkZXZpY2VTZWxlY3RlZCwgZGF0YSwgdHlwZSwgc2VxdWVuY2VDb3VudGVyLCBpc0ZpbmlzaGVkLCBmaW5hbEZpbGVSZXN1bHQgLGNhbGxiYWNrKVxueyAgIFxuICAgIGNvbnNvbGUubG9nKCdjYWxsZWQnLCBzZXF1ZW5jZUNvdW50ZXIpXG4gICAgbGV0IGNsaWVudFNlcXVlbmNlID0gdW5kZWZpbmVkO1xuICAgICAgICBpZihjbGllbnRTZXF1ZW5jZSA9PSB1bmRlZmluZWQgJiYgc2VxdWVuY2VDb3VudGVyID09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlcXVlbmNlQ291bnRlcilcbiAgICAgICAgICAgIGZpbmFsRmlsZVJlc3VsdC5wdXNoKG5ldyBVaW50OEFycmF5KGRhdGEpKTtcbiAgICAgICAgICAgIGNsaWVudFNlcXVlbmNlID0gMDtcblxuICAgICAgICAgICBcbiAgICAgICAgfTtcbiAgICAgICAgaWYoIGNsaWVudFNlcXVlbmNlID09IChzZXF1ZW5jZUNvdW50ZXIgLSAxKSAmJiBpc0ZpbmlzaGVkID09IGZhbHNlIClcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2VxdWVuY2VDb3VudGVyKVxuXG4gICAgICAgICAgICBmaW5hbEZpbGVSZXN1bHQucHVzaChuZXcgVWludDhBcnJheShkYXRhKSk7XG4gICAgICAgICAgICBjbGllbnRTZXF1ZW5jZSA9IHNlcXVlbmNlQ291bnRlcjtcbiAgICAgICAgICAgIHJcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIC8vIHdoZW4gZmluaXNoZWQgb3IgZHVwbGljYXRlcy8vXG4gICAgICAgICAgICBpZiggZGF0YSA9PSAnbm9uZScgJiYgaXNGaW5pc2hlZCApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvbmUnKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbmFsRmlsZVJlc3VsdClcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIGZpbmFsRmlsZVJlc3VsdCA9IFtdXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0aGlzIGlzIGR1cGxpY2F0ZXMsIGlnbm9yZSBpdFxuICAgICAgICAgICBcbiAgICAgICAgfVxuXG5cbn07XG5cbiJdLCJuYW1lcyI6WyJGb3JtRGF0YSIsIkhhbmRsZUNsaWNrZWQiLCJldmVudCIsImRldmljZVNlbGVjdGVkIiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImlubmVyVGV4dCIsImZpbGVzIiwiT2JqZWN0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsInNvY2tldCIsImZvckVhY2giLCJmaWxlIiwiU2VuZFNlcnZlciIsIktieXRlIiwib2Zmc2V0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNlcXVlbmNlQ291bnRlciIsInNpemUiLCJzbGljZWRDaHVuayIsInNsaWNlIiwiZW1pdCIsImRhdGEiLCJ0eXBlIiwibmFtZSIsImlzRmluaXNoZWQiLCJjbGVhckludGVydmFsIiwiY29uc3RydWN0b3IiLCJTZXF1ZW5jZUNoZWNrZXIiLCJmaW5hbEZpbGVSZXN1bHQiLCJjYWxsYmFjayIsImNsaWVudFNlcXVlbmNlIiwidW5kZWZpbmVkIiwicHVzaCIsIlVpbnQ4QXJyYXkiLCJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Types/FormData.js\n"));

/***/ })

});