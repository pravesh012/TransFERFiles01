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

/***/ "(app-pages-browser)/./app/components/device.jsx":
/*!***********************************!*\
  !*** ./app/components/device.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Device; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var user_agents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! user-agents */ \"(app-pages-browser)/./node_modules/user-agents/dist/index.js\");\n/* harmony import */ var user_agents__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(user_agents__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _deviceCSS_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deviceCSS.css */ \"(app-pages-browser)/./app/components/deviceCSS.css\");\n/* harmony import */ var _Types_FormData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Types/FormData.js */ \"(app-pages-browser)/./app/components/Types/FormData.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Device() {\n    _s();\n    let clientSideSequenceCounter = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(0);\n    const finalFileResult = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)([]);\n    const renderCounter = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(0);\n    const myFileChosen = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const socket = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)((0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(\"http://192.168.2.20:3001/\"));\n    const [yourPlatform, setYourPlatform] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(navigator.platform || \"unknown\");\n    const [platform, setPlatform] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    // function that sends the data//\n    function handleTheSelectedFile(event) {\n        let instance = new _Types_FormData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](socket.current);\n        instance.HandleClicked(event);\n    }\n    ;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // dev mode renders twice on server prevent do this//\n        if (renderCounter.current == 0) {\n            // send your device to the server//\n            socket.current.on(\"connect\", ()=>{\n                socket.current.emit(\"newDevice\", yourPlatform);\n                socket.current.on(\"newUser\", (data)=>{\n                    function returnOtherDevice() {\n                        const OtherDevice = {\n                            ...data\n                        };\n                        // delete your own device//\n                        delete OtherDevice[socket.current.id];\n                        let arrayofUsers = Object.values(OtherDevice);\n                        function setThemP() {\n                            let initalarray = [];\n                            arrayofUsers.forEach((elements, index)=>{\n                                initalarray.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            onChange: handleTheSelectedFile,\n                                            type: \"file\",\n                                            ref: myFileChosen,\n                                            style: {\n                                                display: \"none\"\n                                            },\n                                            multiple: true\n                                        }, void 0, false, {\n                                            fileName: \"/home/praveshchhetri/Desktop/fileTransfer/client/app/components/device.jsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            onClick: ()=>{\n                                                myFileChosen.current.click();\n                                            },\n                                            children: [\n                                                \" \",\n                                                elements\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/praveshchhetri/Desktop/fileTransfer/client/app/components/device.jsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 37\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/home/praveshchhetri/Desktop/fileTransfer/client/app/components/device.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 37\n                                }, this));\n                            });\n                            setPlatform(initalarray);\n                        }\n                        ;\n                        setThemP();\n                    }\n                    ;\n                    returnOtherDevice();\n                });\n                // show the data to user//\n                function Setup() {\n                    let sequence = {\n                        previousSequence: undefined\n                    };\n                    socket.current.on(\"recievingData\", (param)=>{\n                        let { deviceSelected, data, type, sequenceCounter, isFinished } = param;\n                        (0,_Types_FormData_js__WEBPACK_IMPORTED_MODULE_5__.SequenceChecker)(data, sequenceCounter, isFinished, finalFileResult.current, sequence, DownloadFile);\n                        function DownloadFile(file) {\n                            let arryblob = Object.values(file);\n                            let blob = new Blob(...arryblob);\n                        // let blob = new Blob(...finalFileResult.current);\n                        }\n                    // if(isFinished && data == 'none'){\n                    //     console.log('finshed')\n                    //     let arrayOfUnit8Arrays = [];\n                    //     console.log(finalFileResult)\n                    //     // if download finisghed\n                    //             finalFileResult.current.forEach(( dataObject )=>{\n                    //                 // let {data, sequence} = dataObject;\n                    //             // should start with 1 sequence//\n                    //             // if(sequence == orderOfSequence )\n                    //             //     {\n                    //             //         arrayOfUnit8Arrays.push(data);\n                    //             //         ++orderOfSequence;\n                    //             //     }\n                    //             // else{\n                    //             //     // if sequence is messed up//\n                    //             //     console.log('sequence error. try again');\n                    //             //     }\n                    //             arrayOfUnit8Arrays.push(dataObject);\n                    //         });\n                    //     let blob = new Blob([...arrayOfUnit8Arrays]);\n                    //     console.log(blob)\n                    //     let url = URL.createObjectURL(blob);\n                    //     let body = document.getElementsByTagName('body')[0];\n                    //     let anchor = document.createElement('a');\n                    //         anchor.download = type;\n                    //         anchor.href = url;\n                    //         anchor.style.display = 'none';\n                    //         body.appendChild(anchor);\n                    //         anchor.click();\n                    //         URL.revokeObjectURL(url)\n                    //         body.removeChild(anchor);\n                    //         arrayOfUnit8Arrays = [];\n                    //         finalFileResult.current = [];\n                    // }\n                    // else{\n                    //         // finalFileResult.current.push( {data: new Uint8Array(data), sequence: sequenceCounter});                       \n                    //         // finalFileResult.current.push(new Uint8Array(data))\n                    // }\n                    });\n                }\n                Setup();\n            });\n            renderCounter.current = 1;\n        } else {\n            renderCounter.current = 0;\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"devices\",\n                children: \"Other devices\"\n            }, void 0, false, {\n                fileName: \"/home/praveshchhetri/Desktop/fileTransfer/client/app/components/device.jsx\",\n                lineNumber: 168,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"devicesContainer\",\n                children: platform\n            }, void 0, false, {\n                fileName: \"/home/praveshchhetri/Desktop/fileTransfer/client/app/components/device.jsx\",\n                lineNumber: 169,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Device, \"Cqsv9U8RPC5RoVjHNx/KORGAryQ=\");\n_c = Device;\n;\nvar _c;\n$RefreshReg$(_c, \"Device\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2RldmljZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDb0M7QUFDRTtBQUNaO0FBQ21DO0FBQ3JDO0FBQ3FDO0FBSzlDLFNBQVNTOztJQUN4QixJQUFJQyw0QkFBNEJKLDZDQUFNQSxDQUFDO0lBQ3ZDLE1BQU1LLGtCQUFrQkwsNkNBQU1BLENBQUMsRUFBRTtJQUNqQyxNQUFNTSxnQkFBZ0JOLDZDQUFNQSxDQUFDO0lBQzdCLE1BQU1PLGVBQWVQLDZDQUFNQSxDQUFDO0lBQzVCLE1BQU1RLFNBQVNSLDZDQUFNQSxDQUFDTCxvREFBRUEsQ0FBQztJQUN6QixNQUFNLENBQUNjLGNBQWNDLGdCQUFpQixHQUFHWiwrQ0FBUUEsQ0FBQ2EsVUFBVUMsUUFBUSxJQUFJO0lBQ3hFLE1BQU0sQ0FBQ0EsVUFBVUMsWUFBWSxHQUFHZiwrQ0FBUUEsQ0FBQyxFQUV4QztJQUVELGlDQUFpQztJQUUvQixTQUFTZ0Isc0JBQXNCQyxLQUFLO1FBQ2xDLElBQUlDLFdBQVcsSUFBSWYsMERBQVFBLENBQUNPLE9BQU9TLE9BQU87UUFDdENELFNBQVNFLGFBQWEsQ0FBQ0g7SUFHN0I7O0lBRUZsQixnREFBU0EsQ0FBQztRQUNOLHFEQUFxRDtRQUVyRCxJQUFHUyxjQUFjVyxPQUFPLElBQUksR0FBRTtZQUMxQixtQ0FBbUM7WUFDbkNULE9BQU9TLE9BQU8sQ0FBQ0UsRUFBRSxDQUFDLFdBQVc7Z0JBRXpCWCxPQUFPUyxPQUFPLENBQUNHLElBQUksQ0FBQyxhQUFhWDtnQkFLN0JELE9BQU9TLE9BQU8sQ0FBQ0UsRUFBRSxDQUFDLFdBQVcsQ0FBQ0U7b0JBRTFCLFNBQVNDO3dCQUNMLE1BQU1DLGNBQWM7NEJBQUMsR0FBR0YsSUFBSTt3QkFBQTt3QkFDNUIsMkJBQTJCO3dCQUMzQixPQUFPRSxXQUFXLENBQUNmLE9BQU9TLE9BQU8sQ0FBQ08sRUFBRSxDQUFDO3dCQUVyQyxJQUFJQyxlQUFlQyxPQUFPQyxNQUFNLENBQUNKO3dCQUU1QixTQUFTSzs0QkFDTixJQUFJQyxjQUFjLEVBQUU7NEJBRW5CSixhQUFhSyxPQUFPLENBQUMsQ0FBQ0MsVUFBVUM7Z0NBQzdCSCxZQUFZSSxJQUFJLGVBQ2hCLDhEQUFDQzs7c0RBQ0QsOERBQUNDOzRDQUFNQyxVQUFhdEI7NENBQXVCdUIsTUFBSzs0Q0FBT0MsS0FBSy9COzRDQUFjZ0MsT0FBTztnREFBQ0MsU0FBUTs0Q0FBTTs0Q0FBR0MsUUFBUTs7Ozs7O3NEQUMzRyw4REFBQ0M7NENBQUVDLFNBQVM7Z0RBQUtwQyxhQUFhVSxPQUFPLENBQUMyQixLQUFLOzRDQUFHOztnREFBRztnREFBRWI7Ozs7Ozs7O21DQUZ6Q0M7Ozs7OzRCQUlIOzRCQUVWbkIsWUFBWWdCO3dCQUNkOzt3QkFDQUQ7b0JBRVg7O29CQUNBTjtnQkFFUjtnQkFHQSwwQkFBMEI7Z0JBQzFCLFNBQVN1QjtvQkFDTCxJQUFJQyxXQUFXO3dCQUFDQyxrQkFBa0JDO29CQUFTO29CQUUzQ3hDLE9BQU9TLE9BQU8sQ0FBQ0UsRUFBRSxDQUFDLGlCQUFpQjs0QkFBQyxFQUFDOEIsY0FBYyxFQUFFNUIsSUFBSSxFQUFFZ0IsSUFBSSxFQUFFYSxlQUFlLEVBQUVDLFVBQVUsRUFBQzt3QkFFekZqRCxtRUFBZUEsQ0FBQ21CLE1BQU02QixpQkFBaUJDLFlBQVk5QyxnQkFBZ0JZLE9BQU8sRUFBRTZCLFVBQVVNO3dCQUV0RixTQUFTQSxhQUFhQyxJQUFJOzRCQUV0QixJQUFJQyxXQUFXNUIsT0FBT0MsTUFBTSxDQUFDMEI7NEJBQzdCLElBQUlFLE9BQU8sSUFBSUMsUUFBUUY7d0JBRXZCLG1EQUFtRDt3QkFHdkQ7b0JBQ0Esb0NBQW9DO29CQUNwQyw2QkFBNkI7b0JBRTdCLG1DQUFtQztvQkFFbkMsbUNBQW1DO29CQUNuQywrQkFBK0I7b0JBRS9CLGdFQUFnRTtvQkFDaEUsd0RBQXdEO29CQUV4RCxnREFBZ0Q7b0JBQ2hELGtEQUFrRDtvQkFDbEQsdUJBQXVCO29CQUN2Qix3REFBd0Q7b0JBQ3hELDRDQUE0QztvQkFDNUMsdUJBQXVCO29CQUV2Qix1QkFBdUI7b0JBQ3ZCLG1EQUFtRDtvQkFDbkQsK0RBQStEO29CQUMvRCx1QkFBdUI7b0JBQ3ZCLG1EQUFtRDtvQkFFbkQsY0FBYztvQkFFZCxvREFBb0Q7b0JBQ3BELHdCQUF3QjtvQkFDeEIsMkNBQTJDO29CQUMzQywyREFBMkQ7b0JBQzNELGdEQUFnRDtvQkFDaEQsa0NBQWtDO29CQUNsQyw2QkFBNkI7b0JBQzdCLHlDQUF5QztvQkFDekMsb0NBQW9DO29CQUNwQywwQkFBMEI7b0JBRTFCLG1DQUFtQztvQkFDbkMsb0NBQW9DO29CQUVwQyxtQ0FBbUM7b0JBQ25DLHdDQUF3QztvQkFJeEMsSUFBSTtvQkFDSixRQUFRO29CQUVSLDRIQUE0SDtvQkFDNUgsZ0VBQWdFO29CQUtoRSxJQUFJO29CQUNSO2dCQUNKO2dCQUVBVDtZQUdKO1lBQ0F2QyxjQUFjVyxPQUFPLEdBQUc7UUFHNUIsT0FDSTtZQUNDWCxjQUFjVyxPQUFPLEdBQUc7UUFDN0I7SUFFSixHQUFHLEVBQUU7SUFJRCxxQkFDSTs7MEJBRUEsOERBQUN3QztnQkFBR0MsV0FBVTswQkFBVTs7Ozs7OzBCQUN4Qiw4REFBQ3hCO2dCQUFJd0IsV0FBVTswQkFDVjlDOzs7Ozs7OztBQUtiO0dBbkt3QlQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvZGV2aWNlLmpzeD8xMWIzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFVzZXJBZ2VudCBmcm9tIFwidXNlci1hZ2VudHNcIjtcbmltcG9ydCB7IGlvIH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICcuL2RldmljZUNTUy5jc3MnXG5pbXBvcnQgRm9ybURhdGEsIHtTZXF1ZW5jZUNoZWNrZXJ9IGZyb20gJy4vVHlwZXMvRm9ybURhdGEuanMnXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldmljZSgpe1xubGV0IGNsaWVudFNpZGVTZXF1ZW5jZUNvdW50ZXIgPSB1c2VSZWYoMCk7XG5jb25zdCBmaW5hbEZpbGVSZXN1bHQgPSB1c2VSZWYoW10pO1xuY29uc3QgcmVuZGVyQ291bnRlciA9IHVzZVJlZigwKTtcbmNvbnN0IG15RmlsZUNob3NlbiA9IHVzZVJlZihudWxsKVxuY29uc3Qgc29ja2V0ID0gdXNlUmVmKGlvKCdodHRwOi8vMTkyLjE2OC4yLjIwOjMwMDEvJykpXG5jb25zdCBbeW91clBsYXRmb3JtLCBzZXRZb3VyUGxhdGZvcm0gXSA9IHVzZVN0YXRlKG5hdmlnYXRvci5wbGF0Zm9ybSB8fCBcInVua25vd25cIik7XG5jb25zdCBbcGxhdGZvcm0sIHNldFBsYXRmb3JtXSA9IHVzZVN0YXRlKFtcbiAgICBcbl0pO1xuXG4vLyBmdW5jdGlvbiB0aGF0IHNlbmRzIHRoZSBkYXRhLy9cblxuICBmdW5jdGlvbiBoYW5kbGVUaGVTZWxlY3RlZEZpbGUoZXZlbnQpe1xuICAgIGxldCBpbnN0YW5jZSA9IG5ldyBGb3JtRGF0YShzb2NrZXQuY3VycmVudCk7XG4gICAgICAgIGluc3RhbmNlLkhhbmRsZUNsaWNrZWQoZXZlbnQpO1xuXG5cbiAgfTtcbiBcbnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gZGV2IG1vZGUgcmVuZGVycyB0d2ljZSBvbiBzZXJ2ZXIgcHJldmVudCBkbyB0aGlzLy9cbiAgICBcbiAgICBpZihyZW5kZXJDb3VudGVyLmN1cnJlbnQgPT0gMCl7XG4gICAgICAgIC8vIHNlbmQgeW91ciBkZXZpY2UgdG8gdGhlIHNlcnZlci8vXG4gICAgICAgIHNvY2tldC5jdXJyZW50Lm9uKCdjb25uZWN0JywgKCk9PntcblxuICAgICAgICAgICAgc29ja2V0LmN1cnJlbnQuZW1pdCgnbmV3RGV2aWNlJywgeW91clBsYXRmb3JtKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc29ja2V0LmN1cnJlbnQub24oJ25ld1VzZXInLCAoZGF0YSkgPT57XG5cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gcmV0dXJuT3RoZXJEZXZpY2UoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IE90aGVyRGV2aWNlID0gey4uLmRhdGF9O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVsZXRlIHlvdXIgb3duIGRldmljZS8vXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgT3RoZXJEZXZpY2Vbc29ja2V0LmN1cnJlbnQuaWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXJyYXlvZlVzZXJzID0gT2JqZWN0LnZhbHVlcyhPdGhlckRldmljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gc2V0VGhlbVAoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluaXRhbGFycmF5ID0gW107IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5b2ZVc2Vycy5mb3JFYWNoKChlbGVtZW50cywgaW5kZXggKT0+eyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRhbGFycmF5LnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlID0geyhoYW5kbGVUaGVTZWxlY3RlZEZpbGUpfXR5cGU9XCJmaWxlXCIgcmVmPXtteUZpbGVDaG9zZW59IHN0eWxlPXt7ZGlzcGxheTonbm9uZSd9fSBtdWx0aXBsZT48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17KCk9PntteUZpbGVDaG9zZW4uY3VycmVudC5jbGljaygpO319PiB7ZWxlbWVudHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBsYXRmb3JtKGluaXRhbGFycmF5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRoZW1QKCk7XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5PdGhlckRldmljZSgpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC8vIHNob3cgdGhlIGRhdGEgdG8gdXNlci8vXG4gICAgICAgICAgICBmdW5jdGlvbiBTZXR1cCgpe1xuICAgICAgICAgICAgICAgIGxldCBzZXF1ZW5jZSA9IHtwcmV2aW91c1NlcXVlbmNlOiB1bmRlZmluZWR9O1xuXG4gICAgICAgICAgICAgICAgc29ja2V0LmN1cnJlbnQub24oJ3JlY2lldmluZ0RhdGEnLCAoe2RldmljZVNlbGVjdGVkLCBkYXRhLCB0eXBlLCBzZXF1ZW5jZUNvdW50ZXIsIGlzRmluaXNoZWR9KT0+e1xuXG4gICAgICAgICAgICAgICAgICAgIFNlcXVlbmNlQ2hlY2tlcihkYXRhLCBzZXF1ZW5jZUNvdW50ZXIsIGlzRmluaXNoZWQsIGZpbmFsRmlsZVJlc3VsdC5jdXJyZW50LCBzZXF1ZW5jZSAsRG93bmxvYWRGaWxlKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gRG93bmxvYWRGaWxlKGZpbGUpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhcnJ5YmxvYiA9IE9iamVjdC52YWx1ZXMoZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmxvYiA9IG5ldyBCbG9iKC4uLmFycnlibG9iKVxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCBibG9iID0gbmV3IEJsb2IoLi4uZmluYWxGaWxlUmVzdWx0LmN1cnJlbnQpO1xuICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmKGlzRmluaXNoZWQgJiYgZGF0YSA9PSAnbm9uZScpe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ2ZpbnNoZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgYXJyYXlPZlVuaXQ4QXJyYXlzID0gW107XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhmaW5hbEZpbGVSZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBpZiBkb3dubG9hZCBmaW5pc2doZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBmaW5hbEZpbGVSZXN1bHQuY3VycmVudC5mb3JFYWNoKCggZGF0YU9iamVjdCApPT57XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBsZXQge2RhdGEsIHNlcXVlbmNlfSA9IGRhdGFPYmplY3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gc2hvdWxkIHN0YXJ0IHdpdGggMSBzZXF1ZW5jZS8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vIGlmKHNlcXVlbmNlID09IG9yZGVyT2ZTZXF1ZW5jZSApXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICAgICAgYXJyYXlPZlVuaXQ4QXJyYXlzLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICAgICAgKytvcmRlck9mU2VxdWVuY2U7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyBlbHNle1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgLy8gaWYgc2VxdWVuY2UgaXMgbWVzc2VkIHVwLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdzZXF1ZW5jZSBlcnJvci4gdHJ5IGFnYWluJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGFycmF5T2ZVbml0OEFycmF5cy5wdXNoKGRhdGFPYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCBibG9iID0gbmV3IEJsb2IoWy4uLmFycmF5T2ZVbml0OEFycmF5c10pO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coYmxvYilcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbGV0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBhbmNob3IuZG93bmxvYWQgPSB0eXBlO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGFuY2hvci5ocmVmID0gdXJsO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGFuY2hvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoYW5jaG9yKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBhbmNob3IuY2xpY2soKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybClcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGFuY2hvcik7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgYXJyYXlPZlVuaXQ4QXJyYXlzID0gW107XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgZmluYWxGaWxlUmVzdWx0LmN1cnJlbnQgPSBbXTtcbiAgICBcbiAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAvLyBlbHNle1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIGZpbmFsRmlsZVJlc3VsdC5jdXJyZW50LnB1c2goIHtkYXRhOiBuZXcgVWludDhBcnJheShkYXRhKSwgc2VxdWVuY2U6IHNlcXVlbmNlQ291bnRlcn0pOyAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gZmluYWxGaWxlUmVzdWx0LmN1cnJlbnQucHVzaChuZXcgVWludDhBcnJheShkYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBTZXR1cCgpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICByZW5kZXJDb3VudGVyLmN1cnJlbnQgPSAxO1xuICAgICAgIFxuICAgICAgXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgICByZW5kZXJDb3VudGVyLmN1cnJlbnQgPSAwO1xuICAgIH1cbiAgXG59LCBbXSk7XG5cbiAgICBcbiAgICBcbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgIFxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZGV2aWNlc1wiPk90aGVyIGRldmljZXM8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldmljZXNDb250YWluZXJcIj5cbiAgICAgICAgICAgIHtwbGF0Zm9ybX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuXG4gICAgKVxufTtcblxuXG5cblxuIl0sIm5hbWVzIjpbIlVzZXJBZ2VudCIsImlvIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZU1lbW8iLCJ1c2VSZWYiLCJGb3JtRGF0YSIsIlNlcXVlbmNlQ2hlY2tlciIsIkRldmljZSIsImNsaWVudFNpZGVTZXF1ZW5jZUNvdW50ZXIiLCJmaW5hbEZpbGVSZXN1bHQiLCJyZW5kZXJDb3VudGVyIiwibXlGaWxlQ2hvc2VuIiwic29ja2V0IiwieW91clBsYXRmb3JtIiwic2V0WW91clBsYXRmb3JtIiwibmF2aWdhdG9yIiwicGxhdGZvcm0iLCJzZXRQbGF0Zm9ybSIsImhhbmRsZVRoZVNlbGVjdGVkRmlsZSIsImV2ZW50IiwiaW5zdGFuY2UiLCJjdXJyZW50IiwiSGFuZGxlQ2xpY2tlZCIsIm9uIiwiZW1pdCIsImRhdGEiLCJyZXR1cm5PdGhlckRldmljZSIsIk90aGVyRGV2aWNlIiwiaWQiLCJhcnJheW9mVXNlcnMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzZXRUaGVtUCIsImluaXRhbGFycmF5IiwiZm9yRWFjaCIsImVsZW1lbnRzIiwiaW5kZXgiLCJwdXNoIiwiZGl2IiwiaW5wdXQiLCJvbkNoYW5nZSIsInR5cGUiLCJyZWYiLCJzdHlsZSIsImRpc3BsYXkiLCJtdWx0aXBsZSIsInAiLCJvbkNsaWNrIiwiY2xpY2siLCJTZXR1cCIsInNlcXVlbmNlIiwicHJldmlvdXNTZXF1ZW5jZSIsInVuZGVmaW5lZCIsImRldmljZVNlbGVjdGVkIiwic2VxdWVuY2VDb3VudGVyIiwiaXNGaW5pc2hlZCIsIkRvd25sb2FkRmlsZSIsImZpbGUiLCJhcnJ5YmxvYiIsImJsb2IiLCJCbG9iIiwiaDMiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/device.jsx\n"));

/***/ })

});