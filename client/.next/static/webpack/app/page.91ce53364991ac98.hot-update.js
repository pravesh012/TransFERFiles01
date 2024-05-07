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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SequenceChecker: function() { return /* binding */ SequenceChecker; },\n/* harmony export */   \"default\": function() { return /* binding */ FormData; }\n/* harmony export */ });\nclass FormData {\n    HandleClicked(event) {\n        this.deviceSelected = event.target.parentNode.innerText;\n        this.files = Object.values(event.target.files);\n        if (!this.files) {\n            // no files\n            console.log(\"no files!\");\n            return \"no files!\";\n        }\n        console.log(this.socket);\n        this.files.forEach((file)=>{\n            this.SendServer(file);\n        });\n    }\n    SendServer(file) {\n        console.log(file.size);\n        const Kbyte = 100000;\n        let offset = 0;\n        let interval = setInterval(()=>{\n            console.log(\"called\", this.sequenceCounter);\n            if (offset < file.size) {\n                console.log(\"offset\", offset, \"to\", offset += Kbyte);\n                let slicedChunk = file.slice(offset, offset += Kbyte);\n                this.socket.emit(\"sendingData\", {\n                    deviceSelected: this.deviceSelected,\n                    data: slicedChunk,\n                    type: file.name,\n                    sequenceCounter: this.sequenceCounter,\n                    isFinished: false\n                });\n                this.sequenceCounter++;\n                offset += Kbyte;\n            } else {\n                console.log(\"offset ended in\", offset);\n                clearInterval(interval);\n                console.log(this.sequenceCounter);\n                this.socket.emit(\"sendingData\", {\n                    deviceSelected: this.deviceSelected,\n                    data: \"none\",\n                    type: file.name,\n                    sequenceCounter: this.sequenceCounter - 1,\n                    isFinished: true\n                });\n                offset = 0;\n            }\n        }, 200);\n    }\n    constructor(socket){\n        this.socket = socket;\n        this.deviceSelected;\n        this.files;\n        this.sequenceCounter = 0;\n    }\n}\n\n;\n// download it 1,2,3. not at same time.\nfunction SequenceChecker(data, sequenceCounter, type, isFinished, finalFileResult, sequence, callback) {\n    // console.log('called', sequenceCounter)\n    if (sequence.previousSequence == undefined && sequenceCounter == 0) {\n        finalFileResult.push(new Uint8Array(data));\n        sequence.previousSequence = 0;\n        console.log(sequence.previousSequence);\n    }\n    ;\n    if (sequence.previousSequence == sequenceCounter - 1 && isFinished == false) {\n        finalFileResult.push(new Uint8Array(data));\n        sequence.previousSequence = sequenceCounter;\n        console.log(sequence.previousSequence);\n    } else {\n        // when finished or duplicates//\n        if (data == \"none\" && isFinished) {\n            console.log(sequence.previousSequence);\n            console.log(\"done\");\n            console.log(finalFileResult);\n            callback(finalFileResult, type);\n            finalFileResult = [];\n        }\n    // this is duplicates, ignore it\n    }\n}\n_c = SequenceChecker;\n;\nvar _c;\n$RefreshReg$(_c, \"SequenceChecker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1R5cGVzL0Zvcm1EYXRhLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWUsTUFBTUE7SUFVakJDLGNBQWNDLEtBQUssRUFBQztRQUVoQixJQUFJLENBQUNDLGNBQWMsR0FBR0QsTUFBTUUsTUFBTSxDQUFDQyxVQUFVLENBQUNDLFNBQVM7UUFDdkQsSUFBSSxDQUFDQyxLQUFLLEdBQUdDLE9BQU9DLE1BQU0sQ0FBQ1AsTUFBTUUsTUFBTSxDQUFDRyxLQUFLO1FBRTdDLElBQUcsQ0FBQyxJQUFJLENBQUNBLEtBQUssRUFBQztZQUNYLFdBQVc7WUFDWEcsUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBTztRQUNYO1FBQ0FELFFBQVFDLEdBQUcsQ0FBQyxJQUFJLENBQUNDLE1BQU07UUFDdkIsSUFBSSxDQUFDTCxLQUFLLENBQUNNLE9BQU8sQ0FBQ0MsQ0FBQUE7WUFDZixJQUFJLENBQUNDLFVBQVUsQ0FBQ0Q7UUFDcEI7SUFJSjtJQUNBQyxXQUFXRCxJQUFJLEVBQUM7UUFDWkosUUFBUUMsR0FBRyxDQUFDRyxLQUFLRSxJQUFJO1FBQ3JCLE1BQU1DLFFBQVM7UUFDZixJQUFJQyxTQUFTO1FBRWIsSUFBSUMsV0FBV0MsWUFBWTtZQUN2QlYsUUFBUUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDVSxlQUFlO1lBQzFDLElBQUdILFNBQVNKLEtBQUtFLElBQUksRUFDckI7Z0JBQUlOLFFBQVFDLEdBQUcsQ0FBQyxVQUFTTyxRQUFRLE1BQU1BLFVBQVFEO2dCQUMzQyxJQUFJSyxjQUFjUixLQUFLUyxLQUFLLENBQUNMLFFBQVFBLFVBQVVEO2dCQUUvQyxJQUFJLENBQUNMLE1BQU0sQ0FBQ1ksSUFBSSxDQUFDLGVBQWU7b0JBQUVyQixnQkFBZ0IsSUFBSSxDQUFDQSxjQUFjO29CQUFFc0IsTUFBTUg7b0JBQWFJLE1BQUtaLEtBQUthLElBQUk7b0JBQUdOLGlCQUFnQixJQUFJLENBQUNBLGVBQWU7b0JBQUVPLFlBQVk7Z0JBQUs7Z0JBQ2xLLElBQUksQ0FBQ1AsZUFBZTtnQkFDcEJILFVBQVNEO1lBQ2IsT0FDSTtnQkFDQVAsUUFBUUMsR0FBRyxDQUFDLG1CQUFtQk87Z0JBQy9CVyxjQUFjVjtnQkFDZFQsUUFBUUMsR0FBRyxDQUFDLElBQUksQ0FBQ1UsZUFBZTtnQkFDaEMsSUFBSSxDQUFDVCxNQUFNLENBQUNZLElBQUksQ0FBQyxlQUFlO29CQUFFckIsZ0JBQWdCLElBQUksQ0FBQ0EsY0FBYztvQkFBRXNCLE1BQU07b0JBQVFDLE1BQUtaLEtBQUthLElBQUk7b0JBQUdOLGlCQUFpQixJQUFJLENBQUNBLGVBQWUsR0FBRztvQkFBSU8sWUFBWTtnQkFBSTtnQkFDbEtWLFNBQVM7WUFDYjtRQUVKLEdBQUc7SUFJUDtJQXREQVksWUFBWWxCLE1BQU0sQ0FFbEI7UUFDSSxJQUFJLENBQUNBLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNULGNBQWM7UUFDbkIsSUFBSSxDQUFDSSxLQUFLO1FBQ1YsSUFBSSxDQUFDYyxlQUFlLEdBQUc7SUFFM0I7QUFtREo7QUFBQzs7QUFDRCx1Q0FBdUM7QUFDaEMsU0FBU1UsZ0JBQWdCTixJQUFJLEVBQUVKLGVBQWUsRUFBRUssSUFBSSxFQUFFRSxVQUFVLEVBQUVJLGVBQWUsRUFBRUMsUUFBUSxFQUFFQyxRQUFRO0lBR3hHLHlDQUF5QztJQUNyQyxJQUFJRCxTQUFTRSxnQkFBZ0IsSUFBSUMsYUFBYWYsbUJBQW1CLEdBQ2pFO1FBRUlXLGdCQUFnQkssSUFBSSxDQUFDLElBQUlDLFdBQVdiO1FBQ3BDUSxTQUFTRSxnQkFBZ0IsR0FBRztRQUM1QnpCLFFBQVFDLEdBQUcsQ0FBQ3NCLFNBQVNFLGdCQUFnQjtJQUd6Qzs7SUFDQSxJQUFJRixTQUFTRSxnQkFBZ0IsSUFBS2Qsa0JBQWtCLEtBQU1PLGNBQWMsT0FDeEU7UUFHSUksZ0JBQWdCSyxJQUFJLENBQUMsSUFBSUMsV0FBV2I7UUFDcENRLFNBQVNFLGdCQUFnQixHQUFHZDtRQUM1QlgsUUFBUUMsR0FBRyxDQUFDc0IsU0FBU0UsZ0JBQWdCO0lBQ3pDLE9BQ0k7UUFDQSxnQ0FBZ0M7UUFDaEMsSUFBSVYsUUFBUSxVQUFVRyxZQUN0QjtZQUNJbEIsUUFBUUMsR0FBRyxDQUFDc0IsU0FBU0UsZ0JBQWdCO1lBQ3JDekIsUUFBUUMsR0FBRyxDQUFDO1lBQ1pELFFBQVFDLEdBQUcsQ0FBQ3FCO1lBQ1pFLFNBQVNGLGlCQUFpQk47WUFDMUJNLGtCQUFrQixFQUFFO1FBRXhCO0lBQ0EsZ0NBQWdDO0lBRXBDO0FBR1I7S0FyQ2dCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9UeXBlcy9Gb3JtRGF0YS5qcz9jMWZiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1EYXRhe1xuICAgIGNvbnN0cnVjdG9yKHNvY2tldClcbiAgICBcbiAgICB7ICAgXG4gICAgICAgIHRoaXMuc29ja2V0ID0gc29ja2V0XG4gICAgICAgIHRoaXMuZGV2aWNlU2VsZWN0ZWQ7XG4gICAgICAgIHRoaXMuZmlsZXM7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VDb3VudGVyID0gMDtcbiAgICAgICAgXG4gICAgfVxuICAgIEhhbmRsZUNsaWNrZWQoZXZlbnQpe1xuICAgICAgIFxuICAgICAgICB0aGlzLmRldmljZVNlbGVjdGVkID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaW5uZXJUZXh0O1xuICAgICAgICB0aGlzLmZpbGVzID0gT2JqZWN0LnZhbHVlcyhldmVudC50YXJnZXQuZmlsZXMpO1xuICAgICAgICBcbiAgICAgICAgaWYoIXRoaXMuZmlsZXMpe1xuICAgICAgICAgICAgLy8gbm8gZmlsZXNcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBmaWxlcyEnKVxuICAgICAgICAgICAgcmV0dXJuICdubyBmaWxlcyEnXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zb2NrZXQpXG4gICAgICAgIHRoaXMuZmlsZXMuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgICAgICAgIHRoaXMuU2VuZFNlcnZlcihmaWxlKTtcbiAgICAgICAgfSk7XG5cblxuXG4gICAgfTtcbiAgICBTZW5kU2VydmVyKGZpbGUpe1xuICAgICAgICBjb25zb2xlLmxvZyhmaWxlLnNpemUpXG4gICAgICAgIGNvbnN0IEtieXRlICA9IDEwMDAwMDtcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG5cbiAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYWxsZWQnLCB0aGlzLnNlcXVlbmNlQ291bnRlcilcbiAgICAgICAgICAgIGlmKG9mZnNldCA8IGZpbGUuc2l6ZSlcbiAgICAgICAgICAgIHsgICBjb25zb2xlLmxvZygnb2Zmc2V0JyxvZmZzZXQsICd0bycsIG9mZnNldCs9S2J5dGUpXG4gICAgICAgICAgICAgICAgbGV0IHNsaWNlZENodW5rID0gZmlsZS5zbGljZShvZmZzZXQsIG9mZnNldCArPSBLYnl0ZSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnc2VuZGluZ0RhdGEnLCB7IGRldmljZVNlbGVjdGVkOiB0aGlzLmRldmljZVNlbGVjdGVkLCBkYXRhOiBzbGljZWRDaHVuaywgdHlwZTpmaWxlLm5hbWUgLCBzZXF1ZW5jZUNvdW50ZXI6dGhpcy5zZXF1ZW5jZUNvdW50ZXIsIGlzRmluaXNoZWQ6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZUNvdW50ZXIrK1xuICAgICAgICAgICAgICAgIG9mZnNldCArPUtieXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb2Zmc2V0IGVuZGVkIGluJywgb2Zmc2V0KTtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlcXVlbmNlQ291bnRlcilcbiAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdzZW5kaW5nRGF0YScsIHsgZGV2aWNlU2VsZWN0ZWQ6IHRoaXMuZGV2aWNlU2VsZWN0ZWQsIGRhdGE6ICdub25lJywgdHlwZTpmaWxlLm5hbWUgLCBzZXF1ZW5jZUNvdW50ZXI6KHRoaXMuc2VxdWVuY2VDb3VudGVyIC0gMSksIGlzRmluaXNoZWQ6IHRydWV9KTtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgfSwgMjAwKTtcbiAgICAgICBcblxuICAgICAgICBcbiAgICB9O1xuXG5cblxuICAgIFxufTtcbi8vIGRvd25sb2FkIGl0IDEsMiwzLiBub3QgYXQgc2FtZSB0aW1lLlxuZXhwb3J0IGZ1bmN0aW9uIFNlcXVlbmNlQ2hlY2tlcihkYXRhLCBzZXF1ZW5jZUNvdW50ZXIsIHR5cGUsIGlzRmluaXNoZWQsIGZpbmFsRmlsZVJlc3VsdCwgc2VxdWVuY2UgLGNhbGxiYWNrKVxueyAgIFxuXG4gICAgLy8gY29uc29sZS5sb2coJ2NhbGxlZCcsIHNlcXVlbmNlQ291bnRlcilcbiAgICAgICAgaWYoIHNlcXVlbmNlLnByZXZpb3VzU2VxdWVuY2UgPT0gdW5kZWZpbmVkICYmIHNlcXVlbmNlQ291bnRlciA9PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZpbmFsRmlsZVJlc3VsdC5wdXNoKG5ldyBVaW50OEFycmF5KGRhdGEpKTtcbiAgICAgICAgICAgIHNlcXVlbmNlLnByZXZpb3VzU2VxdWVuY2UgPSAwO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2VxdWVuY2UucHJldmlvdXNTZXF1ZW5jZSlcblxuICAgICAgICAgICBcbiAgICAgICAgfTtcbiAgICAgICAgaWYoIHNlcXVlbmNlLnByZXZpb3VzU2VxdWVuY2UgPT0gKHNlcXVlbmNlQ291bnRlciAtIDEpICYmIGlzRmluaXNoZWQgPT0gZmFsc2UgKVxuICAgICAgICB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgXG4gICAgICAgICAgICBmaW5hbEZpbGVSZXN1bHQucHVzaChuZXcgVWludDhBcnJheShkYXRhKSk7XG4gICAgICAgICAgICBzZXF1ZW5jZS5wcmV2aW91c1NlcXVlbmNlID0gc2VxdWVuY2VDb3VudGVyO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2VxdWVuY2UucHJldmlvdXNTZXF1ZW5jZSkgXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICAvLyB3aGVuIGZpbmlzaGVkIG9yIGR1cGxpY2F0ZXMvL1xuICAgICAgICAgICAgaWYoIGRhdGEgPT0gJ25vbmUnICYmIGlzRmluaXNoZWQgKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlcXVlbmNlLnByZXZpb3VzU2VxdWVuY2UpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvbmUnKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbmFsRmlsZVJlc3VsdClcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhmaW5hbEZpbGVSZXN1bHQsIHR5cGUpO1xuICAgICAgICAgICAgICAgIGZpbmFsRmlsZVJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGhpcyBpcyBkdXBsaWNhdGVzLCBpZ25vcmUgaXRcbiAgICAgICAgICAgXG4gICAgICAgIH1cblxuXG59O1xuXG4iXSwibmFtZXMiOlsiRm9ybURhdGEiLCJIYW5kbGVDbGlja2VkIiwiZXZlbnQiLCJkZXZpY2VTZWxlY3RlZCIsInRhcmdldCIsInBhcmVudE5vZGUiLCJpbm5lclRleHQiLCJmaWxlcyIsIk9iamVjdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJzb2NrZXQiLCJmb3JFYWNoIiwiZmlsZSIsIlNlbmRTZXJ2ZXIiLCJzaXplIiwiS2J5dGUiLCJvZmZzZXQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwic2VxdWVuY2VDb3VudGVyIiwic2xpY2VkQ2h1bmsiLCJzbGljZSIsImVtaXQiLCJkYXRhIiwidHlwZSIsIm5hbWUiLCJpc0ZpbmlzaGVkIiwiY2xlYXJJbnRlcnZhbCIsImNvbnN0cnVjdG9yIiwiU2VxdWVuY2VDaGVja2VyIiwiZmluYWxGaWxlUmVzdWx0Iiwic2VxdWVuY2UiLCJjYWxsYmFjayIsInByZXZpb3VzU2VxdWVuY2UiLCJ1bmRlZmluZWQiLCJwdXNoIiwiVWludDhBcnJheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Types/FormData.js\n"));

/***/ })

});