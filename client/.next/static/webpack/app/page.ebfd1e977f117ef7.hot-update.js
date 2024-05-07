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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SequenceChecker: function() { return /* binding */ SequenceChecker; },\n/* harmony export */   \"default\": function() { return /* binding */ FormData; }\n/* harmony export */ });\nclass FormData {\n    HandleClicked(event) {\n        this.deviceSelected = event.target.parentNode.innerText;\n        this.files = Object.values(event.target.files);\n        if (!this.files) {\n            // no files\n            console.log(\"no files!\");\n            return \"no files!\";\n        }\n        this.files.forEach((file)=>{\n            this.SendServer(file);\n        });\n    }\n    SendServer(file) {\n        console.log(file.size);\n        const Kbyte = 100000;\n        let offset = 0;\n        let interval = setInterval(()=>{\n            console.log(\"called\", this.sequenceCounter);\n            if (offset < file.size) {\n                console.log(\"offset\", offset);\n                let slicedChunk = file.slice(offset, offset + Kbyte);\n                this.socket.emit(\"sendingData\", {\n                    deviceSelected: this.deviceSelected,\n                    data: slicedChunk,\n                    type: file.name,\n                    sequenceCounter: this.sequenceCounter,\n                    isFinished: false\n                });\n                this.sequenceCounter++;\n                offset += Kbyte;\n            } else {\n                console.log(\"offset ended in\", offset);\n                clearInterval(interval);\n                console.log(this.sequenceCounter);\n                this.socket.emit(\"sendingData\", {\n                    deviceSelected: this.deviceSelected,\n                    data: \"none\",\n                    type: file.name,\n                    sequenceCounter: this.sequenceCounter - 1,\n                    isFinished: true\n                });\n                offset = 0;\n            }\n        }, 200);\n    }\n    constructor(socket){\n        this.socket = socket;\n        this.deviceSelected;\n        this.files;\n        this.sequenceCounter = 0;\n    }\n}\n\n;\n// download it 1,2,3. not at same time.\nfunction SequenceChecker(data, sequenceCounter, type, isFinished, finalFileResult, sequence, callback) {\n    // console.log('called', sequenceCounter)\n    if (sequence.previousSequence == undefined && sequenceCounter == 0) {\n        finalFileResult.push(new Uint8Array(data));\n        sequence.previousSequence = 0;\n        console.log(sequence.previousSequence);\n    }\n    ;\n    if (sequence.previousSequence == sequenceCounter - 1 && isFinished == false) {\n        finalFileResult.push(new Uint8Array(data));\n        sequence.previousSequence = sequenceCounter;\n        console.log(sequence.previousSequence);\n    } else {\n        // when finished or duplicates//\n        if (data == \"none\" && isFinished) {\n            console.log(sequence.previousSequence);\n            console.log(\"done\");\n            console.log(finalFileResult);\n            callback(finalFileResult, type);\n            finalFileResult = [];\n        }\n    // this is duplicates, ignore it\n    }\n}\n_c = SequenceChecker;\n;\nvar _c;\n$RefreshReg$(_c, \"SequenceChecker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1R5cGVzL0Zvcm1EYXRhLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWUsTUFBTUE7SUFVakJDLGNBQWNDLEtBQUssRUFBQztRQUVoQixJQUFJLENBQUNDLGNBQWMsR0FBR0QsTUFBTUUsTUFBTSxDQUFDQyxVQUFVLENBQUNDLFNBQVM7UUFDdkQsSUFBSSxDQUFDQyxLQUFLLEdBQUdDLE9BQU9DLE1BQU0sQ0FBQ1AsTUFBTUUsTUFBTSxDQUFDRyxLQUFLO1FBRTdDLElBQUcsQ0FBQyxJQUFJLENBQUNBLEtBQUssRUFBQztZQUNYLFdBQVc7WUFDWEcsUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBTztRQUNYO1FBRUEsSUFBSSxDQUFDSixLQUFLLENBQUNLLE9BQU8sQ0FBQ0MsQ0FBQUE7WUFDZixJQUFJLENBQUNDLFVBQVUsQ0FBQ0Q7UUFDcEI7SUFJSjtJQUNBQyxXQUFXRCxJQUFJLEVBQUM7UUFDWkgsUUFBUUMsR0FBRyxDQUFDRSxLQUFLRSxJQUFJO1FBQ3JCLE1BQU1DLFFBQVM7UUFDZixJQUFJQyxTQUFTO1FBRWIsSUFBSUMsV0FBV0MsWUFBWTtZQUN2QlQsUUFBUUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDUyxlQUFlO1lBQzFDLElBQUdILFNBQVNKLEtBQUtFLElBQUksRUFDckI7Z0JBQ0lMLFFBQVFDLEdBQUcsQ0FBQyxVQUFVTTtnQkFDdEIsSUFBSUksY0FBY1IsS0FBS1MsS0FBSyxDQUFDTCxRQUFRQSxTQUFTRDtnQkFFOUMsSUFBSSxDQUFDTyxNQUFNLENBQUNDLElBQUksQ0FBQyxlQUFlO29CQUFFckIsZ0JBQWdCLElBQUksQ0FBQ0EsY0FBYztvQkFBRXNCLE1BQU1KO29CQUFhSyxNQUFLYixLQUFLYyxJQUFJO29CQUFHUCxpQkFBZ0IsSUFBSSxDQUFDQSxlQUFlO29CQUFFUSxZQUFZO2dCQUFLO2dCQUNsSyxJQUFJLENBQUNSLGVBQWU7Z0JBQ3BCSCxVQUFTRDtZQUNiLE9BQ0k7Z0JBQ0FOLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJNO2dCQUMvQlksY0FBY1g7Z0JBQ2RSLFFBQVFDLEdBQUcsQ0FBQyxJQUFJLENBQUNTLGVBQWU7Z0JBQ2hDLElBQUksQ0FBQ0csTUFBTSxDQUFDQyxJQUFJLENBQUMsZUFBZTtvQkFBRXJCLGdCQUFnQixJQUFJLENBQUNBLGNBQWM7b0JBQUVzQixNQUFNO29CQUFRQyxNQUFLYixLQUFLYyxJQUFJO29CQUFHUCxpQkFBaUIsSUFBSSxDQUFDQSxlQUFlLEdBQUc7b0JBQUlRLFlBQVk7Z0JBQUk7Z0JBQ2xLWCxTQUFTO1lBQ2I7UUFFSixHQUFHO0lBSVA7SUF2REFhLFlBQVlQLE1BQU0sQ0FFbEI7UUFDSSxJQUFJLENBQUNBLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNwQixjQUFjO1FBQ25CLElBQUksQ0FBQ0ksS0FBSztRQUNWLElBQUksQ0FBQ2EsZUFBZSxHQUFHO0lBRTNCO0FBb0RKO0FBQUM7O0FBQ0QsdUNBQXVDO0FBQ2hDLFNBQVNXLGdCQUFnQk4sSUFBSSxFQUFFTCxlQUFlLEVBQUVNLElBQUksRUFBRUUsVUFBVSxFQUFFSSxlQUFlLEVBQUVDLFFBQVEsRUFBRUMsUUFBUTtJQUd4Ryx5Q0FBeUM7SUFDckMsSUFBSUQsU0FBU0UsZ0JBQWdCLElBQUlDLGFBQWFoQixtQkFBbUIsR0FDakU7UUFFSVksZ0JBQWdCSyxJQUFJLENBQUMsSUFBSUMsV0FBV2I7UUFDcENRLFNBQVNFLGdCQUFnQixHQUFHO1FBQzVCekIsUUFBUUMsR0FBRyxDQUFDc0IsU0FBU0UsZ0JBQWdCO0lBR3pDOztJQUNBLElBQUlGLFNBQVNFLGdCQUFnQixJQUFLZixrQkFBa0IsS0FBTVEsY0FBYyxPQUN4RTtRQUdJSSxnQkFBZ0JLLElBQUksQ0FBQyxJQUFJQyxXQUFXYjtRQUNwQ1EsU0FBU0UsZ0JBQWdCLEdBQUdmO1FBQzVCVixRQUFRQyxHQUFHLENBQUNzQixTQUFTRSxnQkFBZ0I7SUFDekMsT0FDSTtRQUNBLGdDQUFnQztRQUNoQyxJQUFJVixRQUFRLFVBQVVHLFlBQ3RCO1lBQ0lsQixRQUFRQyxHQUFHLENBQUNzQixTQUFTRSxnQkFBZ0I7WUFDckN6QixRQUFRQyxHQUFHLENBQUM7WUFDWkQsUUFBUUMsR0FBRyxDQUFDcUI7WUFDWkUsU0FBU0YsaUJBQWlCTjtZQUMxQk0sa0JBQWtCLEVBQUU7UUFFeEI7SUFDQSxnQ0FBZ0M7SUFFcEM7QUFHUjtLQXJDZ0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1R5cGVzL0Zvcm1EYXRhLmpzP2MxZmIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybURhdGF7XG4gICAgY29uc3RydWN0b3Ioc29ja2V0KVxuICAgIFxuICAgIHsgICBcbiAgICAgICAgdGhpcy5zb2NrZXQgPSBzb2NrZXRcbiAgICAgICAgdGhpcy5kZXZpY2VTZWxlY3RlZDtcbiAgICAgICAgdGhpcy5maWxlcztcbiAgICAgICAgdGhpcy5zZXF1ZW5jZUNvdW50ZXIgPSAwO1xuICAgICAgICBcbiAgICB9XG4gICAgSGFuZGxlQ2xpY2tlZChldmVudCl7XG4gICAgICAgXG4gICAgICAgIHRoaXMuZGV2aWNlU2VsZWN0ZWQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5pbm5lclRleHQ7XG4gICAgICAgIHRoaXMuZmlsZXMgPSBPYmplY3QudmFsdWVzKGV2ZW50LnRhcmdldC5maWxlcyk7XG4gICAgICAgIFxuICAgICAgICBpZighdGhpcy5maWxlcyl7XG4gICAgICAgICAgICAvLyBubyBmaWxlc1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGZpbGVzIScpXG4gICAgICAgICAgICByZXR1cm4gJ25vIGZpbGVzISdcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5maWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5TZW5kU2VydmVyKGZpbGUpO1xuICAgICAgICB9KTtcblxuXG5cbiAgICB9O1xuICAgIFNlbmRTZXJ2ZXIoZmlsZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGUuc2l6ZSlcbiAgICAgICAgY29uc3QgS2J5dGUgID0gMTAwMDAwO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcblxuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbGxlZCcsIHRoaXMuc2VxdWVuY2VDb3VudGVyKVxuICAgICAgICAgICAgaWYob2Zmc2V0IDwgZmlsZS5zaXplKVxuICAgICAgICAgICAgeyAgIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvZmZzZXQnLCBvZmZzZXQpXG4gICAgICAgICAgICAgICAgbGV0IHNsaWNlZENodW5rID0gZmlsZS5zbGljZShvZmZzZXQsIG9mZnNldCArIEtieXRlKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdzZW5kaW5nRGF0YScsIHsgZGV2aWNlU2VsZWN0ZWQ6IHRoaXMuZGV2aWNlU2VsZWN0ZWQsIGRhdGE6IHNsaWNlZENodW5rLCB0eXBlOmZpbGUubmFtZSAsIHNlcXVlbmNlQ291bnRlcjp0aGlzLnNlcXVlbmNlQ291bnRlciwgaXNGaW5pc2hlZDogZmFsc2V9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcXVlbmNlQ291bnRlcisrXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9S2J5dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvZmZzZXQgZW5kZWQgaW4nLCBvZmZzZXQpO1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VxdWVuY2VDb3VudGVyKVxuICAgICAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ3NlbmRpbmdEYXRhJywgeyBkZXZpY2VTZWxlY3RlZDogdGhpcy5kZXZpY2VTZWxlY3RlZCwgZGF0YTogJ25vbmUnLCB0eXBlOmZpbGUubmFtZSAsIHNlcXVlbmNlQ291bnRlcjoodGhpcy5zZXF1ZW5jZUNvdW50ZXIgLSAxKSwgaXNGaW5pc2hlZDogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICB9LCAyMDApO1xuICAgICAgIFxuXG4gICAgICAgIFxuICAgIH07XG5cblxuXG4gICAgXG59O1xuLy8gZG93bmxvYWQgaXQgMSwyLDMuIG5vdCBhdCBzYW1lIHRpbWUuXG5leHBvcnQgZnVuY3Rpb24gU2VxdWVuY2VDaGVja2VyKGRhdGEsIHNlcXVlbmNlQ291bnRlciwgdHlwZSwgaXNGaW5pc2hlZCwgZmluYWxGaWxlUmVzdWx0LCBzZXF1ZW5jZSAsY2FsbGJhY2spXG57ICAgXG5cbiAgICAvLyBjb25zb2xlLmxvZygnY2FsbGVkJywgc2VxdWVuY2VDb3VudGVyKVxuICAgICAgICBpZiggc2VxdWVuY2UucHJldmlvdXNTZXF1ZW5jZSA9PSB1bmRlZmluZWQgJiYgc2VxdWVuY2VDb3VudGVyID09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZmluYWxGaWxlUmVzdWx0LnB1c2gobmV3IFVpbnQ4QXJyYXkoZGF0YSkpO1xuICAgICAgICAgICAgc2VxdWVuY2UucHJldmlvdXNTZXF1ZW5jZSA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZXF1ZW5jZS5wcmV2aW91c1NlcXVlbmNlKVxuXG4gICAgICAgICAgIFxuICAgICAgICB9O1xuICAgICAgICBpZiggc2VxdWVuY2UucHJldmlvdXNTZXF1ZW5jZSA9PSAoc2VxdWVuY2VDb3VudGVyIC0gMSkgJiYgaXNGaW5pc2hlZCA9PSBmYWxzZSApXG4gICAgICAgIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgIGZpbmFsRmlsZVJlc3VsdC5wdXNoKG5ldyBVaW50OEFycmF5KGRhdGEpKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLnByZXZpb3VzU2VxdWVuY2UgPSBzZXF1ZW5jZUNvdW50ZXI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZXF1ZW5jZS5wcmV2aW91c1NlcXVlbmNlKSBcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIC8vIHdoZW4gZmluaXNoZWQgb3IgZHVwbGljYXRlcy8vXG4gICAgICAgICAgICBpZiggZGF0YSA9PSAnbm9uZScgJiYgaXNGaW5pc2hlZCApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VxdWVuY2UucHJldmlvdXNTZXF1ZW5jZSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZG9uZScpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmluYWxGaWxlUmVzdWx0KVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZpbmFsRmlsZVJlc3VsdCwgdHlwZSk7XG4gICAgICAgICAgICAgICAgZmluYWxGaWxlUmVzdWx0ID0gW107XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0aGlzIGlzIGR1cGxpY2F0ZXMsIGlnbm9yZSBpdFxuICAgICAgICAgICBcbiAgICAgICAgfVxuXG5cbn07XG5cbiJdLCJuYW1lcyI6WyJGb3JtRGF0YSIsIkhhbmRsZUNsaWNrZWQiLCJldmVudCIsImRldmljZVNlbGVjdGVkIiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImlubmVyVGV4dCIsImZpbGVzIiwiT2JqZWN0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJmaWxlIiwiU2VuZFNlcnZlciIsInNpemUiLCJLYnl0ZSIsIm9mZnNldCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzZXF1ZW5jZUNvdW50ZXIiLCJzbGljZWRDaHVuayIsInNsaWNlIiwic29ja2V0IiwiZW1pdCIsImRhdGEiLCJ0eXBlIiwibmFtZSIsImlzRmluaXNoZWQiLCJjbGVhckludGVydmFsIiwiY29uc3RydWN0b3IiLCJTZXF1ZW5jZUNoZWNrZXIiLCJmaW5hbEZpbGVSZXN1bHQiLCJzZXF1ZW5jZSIsImNhbGxiYWNrIiwicHJldmlvdXNTZXF1ZW5jZSIsInVuZGVmaW5lZCIsInB1c2giLCJVaW50OEFycmF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Types/FormData.js\n"));

/***/ })

});