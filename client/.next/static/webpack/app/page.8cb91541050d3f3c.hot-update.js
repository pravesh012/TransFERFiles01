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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Device; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var user_agents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! user-agents */ \"(app-pages-browser)/./node_modules/user-agents/dist/index.js\");\n/* harmony import */ var user_agents__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(user_agents__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _deviceCSS_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deviceCSS.css */ \"(app-pages-browser)/./app/components/deviceCSS.css\");\n/* harmony import */ var _Types_FormData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Types/FormData.js */ \"(app-pages-browser)/./app/components/Types/FormData.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Device() {\n    _s();\n    let clientSideSequenceCounter = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(0);\n    const finalFileResult = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)([]);\n    const renderCounter = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(0);\n    const myFileChosen = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const socket = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)((0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(\"http://192.168.2.20:3001/\"));\n    const [yourPlatform, setYourPlatform] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(navigator.platform || \"unknown\");\n    const [platform, setPlatform] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    // function that sends the data//\n    function handleTheSelectedFile(event) {\n        let instance = new _Types_FormData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](socket.current);\n        instance.HandleClicked(event);\n    }\n    ;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // dev mode renders twice on server prevent do this//\n        if (renderCounter.current == 0) {\n            // send your device to the server//\n            socket.current.on(\"connect\", ()=>{\n                socket.current.emit(\"newDevice\", yourPlatform);\n                socket.current.on(\"newUser\", (data)=>{\n                    function returnOtherDevice() {\n                        const OtherDevice = {\n                            ...data\n                        };\n                        // delete your own device//\n                        delete OtherDevice[socket.current.id];\n                        let arrayofUsers = Object.values(OtherDevice);\n                        function setThemP() {\n                            let initalarray = [];\n                            arrayofUsers.forEach((elements, index)=>{\n                                initalarray.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            onChange: handleTheSelectedFile,\n                                            type: \"file\",\n                                            ref: myFileChosen,\n                                            style: {\n                                                display: \"none\"\n                                            },\n                                            multiple: true\n                                        }, void 0, false, {\n                                            fileName: \"/home/praveshchhetri/Desktop/fileTransfer/client/app/components/device.jsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            onClick: ()=>{\n                                                myFileChosen.current.click();\n                                            },\n                                            children: [\n                                                \" \",\n                                                elements\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/praveshchhetri/Desktop/fileTransfer/client/app/components/device.jsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 37\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/home/praveshchhetri/Desktop/fileTransfer/client/app/components/device.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 37\n                                }, this));\n                            });\n                            setPlatform(initalarray);\n                        }\n                        ;\n                        setThemP();\n                    }\n                    ;\n                    returnOtherDevice();\n                });\n                // show the data to user//\n                function Setup() {\n                    let sequence = {\n                        previousSequence: undefined\n                    };\n                    socket.current.on(\"recievingData\", (param)=>{\n                        let { deviceSelected, data, type, sequenceCounter, isFinished } = param;\n                        (0,_Types_FormData_js__WEBPACK_IMPORTED_MODULE_5__.SequenceChecker)(data, sequenceCounter, type, isFinished, finalFileResult.current, sequence, DownloadFile);\n                        function DownloadFile(file, type) {\n                            if (!file && !type) {\n                                console.log(\"no FILE!\");\n                            }\n                        // let blob = new Blob(...finalFileResult.current);\n                        }\n                    // if(isFinished && data == 'none'){\n                    //     console.log('finshed')\n                    //     let arrayOfUnit8Arrays = [];\n                    //     console.log(finalFileResult)\n                    //     // if download finisghed\n                    //             finalFileResult.current.forEach(( dataObject )=>{\n                    //                 // let {data, sequence} = dataObject;\n                    //             // should start with 1 sequence//\n                    //             // if(sequence == orderOfSequence )\n                    //             //     {\n                    //             //         arrayOfUnit8Arrays.push(data);\n                    //             //         ++orderOfSequence;\n                    //             //     }\n                    //             // else{\n                    //             //     // if sequence is messed up//\n                    //             //     console.log('sequence error. try again');\n                    //             //     }\n                    //             arrayOfUnit8Arrays.push(dataObject);\n                    //         });\n                    //     let blob = new Blob([...arrayOfUnit8Arrays]);\n                    //     console.log(blob)\n                    //     let url = URL.createObjectURL(blob);\n                    //     let body = document.getElementsByTagName('body')[0];\n                    //     let anchor = document.createElement('a');\n                    //         anchor.download = type;\n                    //         anchor.href = url;\n                    //         anchor.style.display = 'none';\n                    //         body.appendChild(anchor);\n                    //         anchor.click();\n                    //         URL.revokeObjectURL(url)\n                    //         body.removeChild(anchor);\n                    //         arrayOfUnit8Arrays = [];\n                    //         finalFileResult.current = [];\n                    // }\n                    // else{\n                    //         // finalFileResult.current.push( {data: new Uint8Array(data), sequence: sequenceCounter});                       \n                    //         // finalFileResult.current.push(new Uint8Array(data))\n                    // }\n                    });\n                }\n                Setup();\n            });\n            renderCounter.current = 1;\n        } else {\n            renderCounter.current = 0;\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"devices\",\n                children: \"Other devices\"\n            }, void 0, false, {\n                fileName: \"/home/praveshchhetri/Desktop/fileTransfer/client/app/components/device.jsx\",\n                lineNumber: 170,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"devicesContainer\",\n                children: platform\n            }, void 0, false, {\n                fileName: \"/home/praveshchhetri/Desktop/fileTransfer/client/app/components/device.jsx\",\n                lineNumber: 171,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Device, \"Cqsv9U8RPC5RoVjHNx/KORGAryQ=\");\n_c = Device;\n;\nvar _c;\n$RefreshReg$(_c, \"Device\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2RldmljZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDb0M7QUFDRTtBQUNaO0FBQ21DO0FBQ3JDO0FBQ3FDO0FBSzlDLFNBQVNTOztJQUN4QixJQUFJQyw0QkFBNEJKLDZDQUFNQSxDQUFDO0lBQ3ZDLE1BQU1LLGtCQUFrQkwsNkNBQU1BLENBQUMsRUFBRTtJQUNqQyxNQUFNTSxnQkFBZ0JOLDZDQUFNQSxDQUFDO0lBQzdCLE1BQU1PLGVBQWVQLDZDQUFNQSxDQUFDO0lBQzVCLE1BQU1RLFNBQVNSLDZDQUFNQSxDQUFDTCxvREFBRUEsQ0FBQztJQUN6QixNQUFNLENBQUNjLGNBQWNDLGdCQUFpQixHQUFHWiwrQ0FBUUEsQ0FBQ2EsVUFBVUMsUUFBUSxJQUFJO0lBQ3hFLE1BQU0sQ0FBQ0EsVUFBVUMsWUFBWSxHQUFHZiwrQ0FBUUEsQ0FBQyxFQUV4QztJQUVELGlDQUFpQztJQUUvQixTQUFTZ0Isc0JBQXNCQyxLQUFLO1FBQ2xDLElBQUlDLFdBQVcsSUFBSWYsMERBQVFBLENBQUNPLE9BQU9TLE9BQU87UUFDdENELFNBQVNFLGFBQWEsQ0FBQ0g7SUFHN0I7O0lBRUZsQixnREFBU0EsQ0FBQztRQUNOLHFEQUFxRDtRQUVyRCxJQUFHUyxjQUFjVyxPQUFPLElBQUksR0FBRTtZQUMxQixtQ0FBbUM7WUFDbkNULE9BQU9TLE9BQU8sQ0FBQ0UsRUFBRSxDQUFDLFdBQVc7Z0JBRXpCWCxPQUFPUyxPQUFPLENBQUNHLElBQUksQ0FBQyxhQUFhWDtnQkFLN0JELE9BQU9TLE9BQU8sQ0FBQ0UsRUFBRSxDQUFDLFdBQVcsQ0FBQ0U7b0JBRTFCLFNBQVNDO3dCQUNMLE1BQU1DLGNBQWM7NEJBQUMsR0FBR0YsSUFBSTt3QkFBQTt3QkFDNUIsMkJBQTJCO3dCQUMzQixPQUFPRSxXQUFXLENBQUNmLE9BQU9TLE9BQU8sQ0FBQ08sRUFBRSxDQUFDO3dCQUVyQyxJQUFJQyxlQUFlQyxPQUFPQyxNQUFNLENBQUNKO3dCQUU1QixTQUFTSzs0QkFDTixJQUFJQyxjQUFjLEVBQUU7NEJBRW5CSixhQUFhSyxPQUFPLENBQUMsQ0FBQ0MsVUFBVUM7Z0NBQzdCSCxZQUFZSSxJQUFJLGVBQ2hCLDhEQUFDQzs7c0RBQ0QsOERBQUNDOzRDQUFNQyxVQUFhdEI7NENBQXVCdUIsTUFBSzs0Q0FBT0MsS0FBSy9COzRDQUFjZ0MsT0FBTztnREFBQ0MsU0FBUTs0Q0FBTTs0Q0FBR0MsUUFBUTs7Ozs7O3NEQUMzRyw4REFBQ0M7NENBQUVDLFNBQVM7Z0RBQUtwQyxhQUFhVSxPQUFPLENBQUMyQixLQUFLOzRDQUFHOztnREFBRztnREFBRWI7Ozs7Ozs7O21DQUZ6Q0M7Ozs7OzRCQUlIOzRCQUVWbkIsWUFBWWdCO3dCQUNkOzt3QkFDQUQ7b0JBRVg7O29CQUNBTjtnQkFFUjtnQkFHQSwwQkFBMEI7Z0JBQzFCLFNBQVN1QjtvQkFDTCxJQUFJQyxXQUFXO3dCQUFDQyxrQkFBa0JDO29CQUFTO29CQUUzQ3hDLE9BQU9TLE9BQU8sQ0FBQ0UsRUFBRSxDQUFDLGlCQUFpQjs0QkFBQyxFQUFDOEIsY0FBYyxFQUFFNUIsSUFBSSxFQUFFZ0IsSUFBSSxFQUFFYSxlQUFlLEVBQUVDLFVBQVUsRUFBQzt3QkFFekZqRCxtRUFBZUEsQ0FBQ21CLE1BQU02QixpQkFBaUJiLE1BQU1jLFlBQVk5QyxnQkFBZ0JZLE9BQU8sRUFBRTZCLFVBQVVNO3dCQUU1RixTQUFTQSxhQUFhQyxJQUFJLEVBQUVoQixJQUFJOzRCQUU5QixJQUFHLENBQUNnQixRQUFRLENBQUNoQixNQUNYO2dDQUNJaUIsUUFBUUMsR0FBRyxDQUFDOzRCQUVoQjt3QkFDQSxtREFBbUQ7d0JBR3ZEO29CQUNBLG9DQUFvQztvQkFDcEMsNkJBQTZCO29CQUU3QixtQ0FBbUM7b0JBRW5DLG1DQUFtQztvQkFDbkMsK0JBQStCO29CQUUvQixnRUFBZ0U7b0JBQ2hFLHdEQUF3RDtvQkFFeEQsZ0RBQWdEO29CQUNoRCxrREFBa0Q7b0JBQ2xELHVCQUF1QjtvQkFDdkIsd0RBQXdEO29CQUN4RCw0Q0FBNEM7b0JBQzVDLHVCQUF1QjtvQkFFdkIsdUJBQXVCO29CQUN2QixtREFBbUQ7b0JBQ25ELCtEQUErRDtvQkFDL0QsdUJBQXVCO29CQUN2QixtREFBbUQ7b0JBRW5ELGNBQWM7b0JBRWQsb0RBQW9EO29CQUNwRCx3QkFBd0I7b0JBQ3hCLDJDQUEyQztvQkFDM0MsMkRBQTJEO29CQUMzRCxnREFBZ0Q7b0JBQ2hELGtDQUFrQztvQkFDbEMsNkJBQTZCO29CQUM3Qix5Q0FBeUM7b0JBQ3pDLG9DQUFvQztvQkFDcEMsMEJBQTBCO29CQUUxQixtQ0FBbUM7b0JBQ25DLG9DQUFvQztvQkFFcEMsbUNBQW1DO29CQUNuQyx3Q0FBd0M7b0JBSXhDLElBQUk7b0JBQ0osUUFBUTtvQkFFUiw0SEFBNEg7b0JBQzVILGdFQUFnRTtvQkFLaEUsSUFBSTtvQkFDUjtnQkFDSjtnQkFFQVY7WUFHSjtZQUNBdkMsY0FBY1csT0FBTyxHQUFHO1FBRzVCLE9BQ0k7WUFDQ1gsY0FBY1csT0FBTyxHQUFHO1FBQzdCO0lBRUosR0FBRyxFQUFFO0lBSUQscUJBQ0k7OzBCQUVBLDhEQUFDdUM7Z0JBQUdDLFdBQVU7MEJBQVU7Ozs7OzswQkFDeEIsOERBQUN2QjtnQkFBSXVCLFdBQVU7MEJBQ1Y3Qzs7Ozs7Ozs7QUFLYjtHQXJLd0JUO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2RldmljZS5qc3g/MTFiMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBVc2VyQWdlbnQgZnJvbSBcInVzZXItYWdlbnRzXCI7XG5pbXBvcnQgeyBpbyB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VNZW1vLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAnLi9kZXZpY2VDU1MuY3NzJ1xuaW1wb3J0IEZvcm1EYXRhLCB7U2VxdWVuY2VDaGVja2VyfSBmcm9tICcuL1R5cGVzL0Zvcm1EYXRhLmpzJ1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXZpY2UoKXtcbmxldCBjbGllbnRTaWRlU2VxdWVuY2VDb3VudGVyID0gdXNlUmVmKDApO1xuY29uc3QgZmluYWxGaWxlUmVzdWx0ID0gdXNlUmVmKFtdKTtcbmNvbnN0IHJlbmRlckNvdW50ZXIgPSB1c2VSZWYoMCk7XG5jb25zdCBteUZpbGVDaG9zZW4gPSB1c2VSZWYobnVsbClcbmNvbnN0IHNvY2tldCA9IHVzZVJlZihpbygnaHR0cDovLzE5Mi4xNjguMi4yMDozMDAxLycpKVxuY29uc3QgW3lvdXJQbGF0Zm9ybSwgc2V0WW91clBsYXRmb3JtIF0gPSB1c2VTdGF0ZShuYXZpZ2F0b3IucGxhdGZvcm0gfHwgXCJ1bmtub3duXCIpO1xuY29uc3QgW3BsYXRmb3JtLCBzZXRQbGF0Zm9ybV0gPSB1c2VTdGF0ZShbXG4gICAgXG5dKTtcblxuLy8gZnVuY3Rpb24gdGhhdCBzZW5kcyB0aGUgZGF0YS8vXG5cbiAgZnVuY3Rpb24gaGFuZGxlVGhlU2VsZWN0ZWRGaWxlKGV2ZW50KXtcbiAgICBsZXQgaW5zdGFuY2UgPSBuZXcgRm9ybURhdGEoc29ja2V0LmN1cnJlbnQpO1xuICAgICAgICBpbnN0YW5jZS5IYW5kbGVDbGlja2VkKGV2ZW50KTtcblxuXG4gIH07XG4gXG51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGRldiBtb2RlIHJlbmRlcnMgdHdpY2Ugb24gc2VydmVyIHByZXZlbnQgZG8gdGhpcy8vXG4gICAgXG4gICAgaWYocmVuZGVyQ291bnRlci5jdXJyZW50ID09IDApe1xuICAgICAgICAvLyBzZW5kIHlvdXIgZGV2aWNlIHRvIHRoZSBzZXJ2ZXIvL1xuICAgICAgICBzb2NrZXQuY3VycmVudC5vbignY29ubmVjdCcsICgpPT57XG5cbiAgICAgICAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoJ25ld0RldmljZScsIHlvdXJQbGF0Zm9ybSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNvY2tldC5jdXJyZW50Lm9uKCduZXdVc2VyJywgKGRhdGEpID0+e1xuXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJldHVybk90aGVyRGV2aWNlKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBPdGhlckRldmljZSA9IHsuLi5kYXRhfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSB5b3VyIG93biBkZXZpY2UvL1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIE90aGVyRGV2aWNlW3NvY2tldC5jdXJyZW50LmlkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFycmF5b2ZVc2VycyA9IE9iamVjdC52YWx1ZXMoT3RoZXJEZXZpY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNldFRoZW1QKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbml0YWxhcnJheSA9IFtdOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheW9mVXNlcnMuZm9yRWFjaCgoZWxlbWVudHMsIGluZGV4ICk9PnsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0YWxhcnJheS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZSA9IHsoaGFuZGxlVGhlU2VsZWN0ZWRGaWxlKX10eXBlPVwiZmlsZVwiIHJlZj17bXlGaWxlQ2hvc2VufSBzdHlsZT17e2Rpc3BsYXk6J25vbmUnfX0gbXVsdGlwbGU+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9eygpPT57bXlGaWxlQ2hvc2VuLmN1cnJlbnQuY2xpY2soKTt9fT4ge2VsZW1lbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQbGF0Zm9ybShpbml0YWxhcnJheSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaGVtUCgpO1xuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuT3RoZXJEZXZpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAvLyBzaG93IHRoZSBkYXRhIHRvIHVzZXIvL1xuICAgICAgICAgICAgZnVuY3Rpb24gU2V0dXAoKXtcbiAgICAgICAgICAgICAgICBsZXQgc2VxdWVuY2UgPSB7cHJldmlvdXNTZXF1ZW5jZTogdW5kZWZpbmVkfTtcblxuICAgICAgICAgICAgICAgIHNvY2tldC5jdXJyZW50Lm9uKCdyZWNpZXZpbmdEYXRhJywgKHtkZXZpY2VTZWxlY3RlZCwgZGF0YSwgdHlwZSwgc2VxdWVuY2VDb3VudGVyLCBpc0ZpbmlzaGVkfSk9PntcblxuICAgICAgICAgICAgICAgICAgICBTZXF1ZW5jZUNoZWNrZXIoZGF0YSwgc2VxdWVuY2VDb3VudGVyLCB0eXBlLCBpc0ZpbmlzaGVkLCBmaW5hbEZpbGVSZXN1bHQuY3VycmVudCwgc2VxdWVuY2UgLERvd25sb2FkRmlsZSk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIERvd25sb2FkRmlsZShmaWxlLCB0eXBlKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYoIWZpbGUgJiYgIXR5cGUpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIEZJTEUhJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGJsb2IgPSBuZXcgQmxvYiguLi5maW5hbEZpbGVSZXN1bHQuY3VycmVudCk7XG5cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBpZihpc0ZpbmlzaGVkICYmIGRhdGEgPT0gJ25vbmUnKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdmaW5zaGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbGV0IGFycmF5T2ZVbml0OEFycmF5cyA9IFtdO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZmluYWxGaWxlUmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gaWYgZG93bmxvYWQgZmluaXNnaGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgZmluYWxGaWxlUmVzdWx0LmN1cnJlbnQuZm9yRWFjaCgoIGRhdGFPYmplY3QgKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gbGV0IHtkYXRhLCBzZXF1ZW5jZX0gPSBkYXRhT2JqZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vIHNob3VsZCBzdGFydCB3aXRoIDEgc2VxdWVuY2UvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyBpZihzZXF1ZW5jZSA9PSBvcmRlck9mU2VxdWVuY2UgKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgICAgIGFycmF5T2ZVbml0OEFycmF5cy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgICAgICsrb3JkZXJPZlNlcXVlbmNlO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgIC8vIGlmIHNlcXVlbmNlIGlzIG1lc3NlZCB1cC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnc2VxdWVuY2UgZXJyb3IuIHRyeSBhZ2FpbicpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBhcnJheU9mVW5pdDhBcnJheXMucHVzaChkYXRhT2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgYmxvYiA9IG5ldyBCbG9iKFsuLi5hcnJheU9mVW5pdDhBcnJheXNdKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGJsb2IpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgYW5jaG9yLmRvd25sb2FkID0gdHlwZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBhbmNob3IuaHJlZiA9IHVybDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBhbmNob3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBib2R5LmFwcGVuZENoaWxkKGFuY2hvcik7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgYW5jaG9yLmNsaWNrKCk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChhbmNob3IpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGFycmF5T2ZVbml0OEFycmF5cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGZpbmFsRmlsZVJlc3VsdC5jdXJyZW50ID0gW107XG4gICAgXG4gICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gZWxzZXtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyBmaW5hbEZpbGVSZXN1bHQuY3VycmVudC5wdXNoKCB7ZGF0YTogbmV3IFVpbnQ4QXJyYXkoZGF0YSksIHNlcXVlbmNlOiBzZXF1ZW5jZUNvdW50ZXJ9KTsgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIGZpbmFsRmlsZVJlc3VsdC5jdXJyZW50LnB1c2gobmV3IFVpbnQ4QXJyYXkoZGF0YSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgU2V0dXAoKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgcmVuZGVyQ291bnRlci5jdXJyZW50ID0gMTtcbiAgICAgICBcbiAgICAgIFxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICAgcmVuZGVyQ291bnRlci5jdXJyZW50ID0gMDtcbiAgICB9XG4gIFxufSwgW10pO1xuXG4gICAgXG4gICAgXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICBcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImRldmljZXNcIj5PdGhlciBkZXZpY2VzPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXZpY2VzQ29udGFpbmVyXCI+XG4gICAgICAgICAgICB7cGxhdGZvcm19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cblxuICAgIClcbn07XG5cblxuXG5cbiJdLCJuYW1lcyI6WyJVc2VyQWdlbnQiLCJpbyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VNZW1vIiwidXNlUmVmIiwiRm9ybURhdGEiLCJTZXF1ZW5jZUNoZWNrZXIiLCJEZXZpY2UiLCJjbGllbnRTaWRlU2VxdWVuY2VDb3VudGVyIiwiZmluYWxGaWxlUmVzdWx0IiwicmVuZGVyQ291bnRlciIsIm15RmlsZUNob3NlbiIsInNvY2tldCIsInlvdXJQbGF0Zm9ybSIsInNldFlvdXJQbGF0Zm9ybSIsIm5hdmlnYXRvciIsInBsYXRmb3JtIiwic2V0UGxhdGZvcm0iLCJoYW5kbGVUaGVTZWxlY3RlZEZpbGUiLCJldmVudCIsImluc3RhbmNlIiwiY3VycmVudCIsIkhhbmRsZUNsaWNrZWQiLCJvbiIsImVtaXQiLCJkYXRhIiwicmV0dXJuT3RoZXJEZXZpY2UiLCJPdGhlckRldmljZSIsImlkIiwiYXJyYXlvZlVzZXJzIiwiT2JqZWN0IiwidmFsdWVzIiwic2V0VGhlbVAiLCJpbml0YWxhcnJheSIsImZvckVhY2giLCJlbGVtZW50cyIsImluZGV4IiwicHVzaCIsImRpdiIsImlucHV0Iiwib25DaGFuZ2UiLCJ0eXBlIiwicmVmIiwic3R5bGUiLCJkaXNwbGF5IiwibXVsdGlwbGUiLCJwIiwib25DbGljayIsImNsaWNrIiwiU2V0dXAiLCJzZXF1ZW5jZSIsInByZXZpb3VzU2VxdWVuY2UiLCJ1bmRlZmluZWQiLCJkZXZpY2VTZWxlY3RlZCIsInNlcXVlbmNlQ291bnRlciIsImlzRmluaXNoZWQiLCJEb3dubG9hZEZpbGUiLCJmaWxlIiwiY29uc29sZSIsImxvZyIsImgzIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/device.jsx\n"));

/***/ })

});