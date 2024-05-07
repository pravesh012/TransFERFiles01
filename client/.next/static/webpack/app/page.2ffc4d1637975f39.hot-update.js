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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Device; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var user_agents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! user-agents */ \"(app-pages-browser)/./node_modules/user-agents/dist/index.js\");\n/* harmony import */ var user_agents__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(user_agents__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _deviceCSS_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deviceCSS.css */ \"(app-pages-browser)/./app/components/deviceCSS.css\");\n/* harmony import */ var _Types_FormData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Types/FormData.js */ \"(app-pages-browser)/./app/components/Types/FormData.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Device() {\n    _s();\n    let clientSideSequenceCounter = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(0);\n    const finalFileResult = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)([]);\n    const renderCounter = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(0);\n    const myFileChosen = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const socket = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)((0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(\"http://192.168.2.20:3001/\"));\n    const [yourPlatform, setYourPlatform] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(navigator.platform || \"unknown\");\n    const [platform, setPlatform] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    // function that sends the data//\n    function handleTheSelectedFile(event) {\n        let instance = new _Types_FormData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](socket.current);\n        instance.HandleClicked(event);\n    }\n    ;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // dev mode renders twice on server prevent do this//\n        if (renderCounter.current == 0) {\n            // send your device to the server//\n            socket.current.on(\"connect\", ()=>{\n                socket.current.emit(\"newDevice\", yourPlatform);\n                socket.current.on(\"newUser\", (data)=>{\n                    function returnOtherDevice() {\n                        const OtherDevice = {\n                            ...data\n                        };\n                        // delete your own device//\n                        delete OtherDevice[socket.current.id];\n                        let arrayofUsers = Object.values(OtherDevice);\n                        function setThemP() {\n                            let initalarray = [];\n                            arrayofUsers.forEach((elements, index)=>{\n                                initalarray.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            onChange: handleTheSelectedFile,\n                                            type: \"file\",\n                                            ref: myFileChosen,\n                                            style: {\n                                                display: \"none\"\n                                            },\n                                            multiple: true\n                                        }, void 0, false, {\n                                            fileName: \"/home/praveshchhetri/Desktop/fileTransfer/client/app/components/device.jsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            onClick: ()=>{\n                                                myFileChosen.current.click();\n                                            },\n                                            children: [\n                                                \" \",\n                                                elements\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/praveshchhetri/Desktop/fileTransfer/client/app/components/device.jsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 37\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/home/praveshchhetri/Desktop/fileTransfer/client/app/components/device.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 37\n                                }, this));\n                            });\n                            setPlatform(initalarray);\n                        }\n                        ;\n                        setThemP();\n                    }\n                    ;\n                    returnOtherDevice();\n                });\n                // show the data to user//\n                function Setup() {\n                    let sequence = {\n                        previousSequence: undefined\n                    };\n                    socket.current.on(\"recievingData\", (param)=>{\n                        let { deviceSelected, data, type, sequenceCounter, isFinished } = param;\n                        (0,_Types_FormData_js__WEBPACK_IMPORTED_MODULE_5__.SequenceChecker)(deviceSelected, data, type, sequenceCounter, isFinished, finalFileResult.current, sequence, DownloadFile);\n                        function DownloadFile(file) {\n                            console.log(file);\n                            let blob = new Blob(...finalFileResult.current);\n                        }\n                    // if(isFinished && data == 'none'){\n                    //     console.log('finshed')\n                    //     let arrayOfUnit8Arrays = [];\n                    //     console.log(finalFileResult)\n                    //     // if download finisghed\n                    //             finalFileResult.current.forEach(( dataObject )=>{\n                    //                 // let {data, sequence} = dataObject;\n                    //             // should start with 1 sequence//\n                    //             // if(sequence == orderOfSequence )\n                    //             //     {\n                    //             //         arrayOfUnit8Arrays.push(data);\n                    //             //         ++orderOfSequence;\n                    //             //     }\n                    //             // else{\n                    //             //     // if sequence is messed up//\n                    //             //     console.log('sequence error. try again');\n                    //             //     }\n                    //             arrayOfUnit8Arrays.push(dataObject);\n                    //         });\n                    //     let blob = new Blob([...arrayOfUnit8Arrays]);\n                    //     console.log(blob)\n                    //     let url = URL.createObjectURL(blob);\n                    //     let body = document.getElementsByTagName('body')[0];\n                    //     let anchor = document.createElement('a');\n                    //         anchor.download = type;\n                    //         anchor.href = url;\n                    //         anchor.style.display = 'none';\n                    //         body.appendChild(anchor);\n                    //         anchor.click();\n                    //         URL.revokeObjectURL(url)\n                    //         body.removeChild(anchor);\n                    //         arrayOfUnit8Arrays = [];\n                    //         finalFileResult.current = [];\n                    // }\n                    // else{\n                    //         // finalFileResult.current.push( {data: new Uint8Array(data), sequence: sequenceCounter});                       \n                    //         // finalFileResult.current.push(new Uint8Array(data))\n                    // }\n                    });\n                }\n                Setup();\n            });\n            renderCounter.current = 1;\n        } else {\n            renderCounter.current = 0;\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"devices\",\n                children: \"Other devices\"\n            }, void 0, false, {\n                fileName: \"/home/praveshchhetri/Desktop/fileTransfer/client/app/components/device.jsx\",\n                lineNumber: 166,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"devicesContainer\",\n                children: platform\n            }, void 0, false, {\n                fileName: \"/home/praveshchhetri/Desktop/fileTransfer/client/app/components/device.jsx\",\n                lineNumber: 167,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Device, \"Cqsv9U8RPC5RoVjHNx/KORGAryQ=\");\n_c = Device;\n;\nvar _c;\n$RefreshReg$(_c, \"Device\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2RldmljZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDb0M7QUFDRTtBQUNaO0FBQ21DO0FBQ3JDO0FBQ3FDO0FBSzlDLFNBQVNTOztJQUN4QixJQUFJQyw0QkFBNEJKLDZDQUFNQSxDQUFDO0lBQ3ZDLE1BQU1LLGtCQUFrQkwsNkNBQU1BLENBQUMsRUFBRTtJQUNqQyxNQUFNTSxnQkFBZ0JOLDZDQUFNQSxDQUFDO0lBQzdCLE1BQU1PLGVBQWVQLDZDQUFNQSxDQUFDO0lBQzVCLE1BQU1RLFNBQVNSLDZDQUFNQSxDQUFDTCxvREFBRUEsQ0FBQztJQUN6QixNQUFNLENBQUNjLGNBQWNDLGdCQUFpQixHQUFHWiwrQ0FBUUEsQ0FBQ2EsVUFBVUMsUUFBUSxJQUFJO0lBQ3hFLE1BQU0sQ0FBQ0EsVUFBVUMsWUFBWSxHQUFHZiwrQ0FBUUEsQ0FBQyxFQUV4QztJQUVELGlDQUFpQztJQUUvQixTQUFTZ0Isc0JBQXNCQyxLQUFLO1FBQ2xDLElBQUlDLFdBQVcsSUFBSWYsMERBQVFBLENBQUNPLE9BQU9TLE9BQU87UUFDdENELFNBQVNFLGFBQWEsQ0FBQ0g7SUFHN0I7O0lBRUZsQixnREFBU0EsQ0FBQztRQUNOLHFEQUFxRDtRQUVyRCxJQUFHUyxjQUFjVyxPQUFPLElBQUksR0FBRTtZQUMxQixtQ0FBbUM7WUFDbkNULE9BQU9TLE9BQU8sQ0FBQ0UsRUFBRSxDQUFDLFdBQVc7Z0JBRXpCWCxPQUFPUyxPQUFPLENBQUNHLElBQUksQ0FBQyxhQUFhWDtnQkFLN0JELE9BQU9TLE9BQU8sQ0FBQ0UsRUFBRSxDQUFDLFdBQVcsQ0FBQ0U7b0JBRTFCLFNBQVNDO3dCQUNMLE1BQU1DLGNBQWM7NEJBQUMsR0FBR0YsSUFBSTt3QkFBQTt3QkFDNUIsMkJBQTJCO3dCQUMzQixPQUFPRSxXQUFXLENBQUNmLE9BQU9TLE9BQU8sQ0FBQ08sRUFBRSxDQUFDO3dCQUVyQyxJQUFJQyxlQUFlQyxPQUFPQyxNQUFNLENBQUNKO3dCQUU1QixTQUFTSzs0QkFDTixJQUFJQyxjQUFjLEVBQUU7NEJBRW5CSixhQUFhSyxPQUFPLENBQUMsQ0FBQ0MsVUFBVUM7Z0NBQzdCSCxZQUFZSSxJQUFJLGVBQ2hCLDhEQUFDQzs7c0RBQ0QsOERBQUNDOzRDQUFNQyxVQUFhdEI7NENBQXVCdUIsTUFBSzs0Q0FBT0MsS0FBSy9COzRDQUFjZ0MsT0FBTztnREFBQ0MsU0FBUTs0Q0FBTTs0Q0FBR0MsUUFBUTs7Ozs7O3NEQUMzRyw4REFBQ0M7NENBQUVDLFNBQVM7Z0RBQUtwQyxhQUFhVSxPQUFPLENBQUMyQixLQUFLOzRDQUFHOztnREFBRztnREFBRWI7Ozs7Ozs7O21DQUZ6Q0M7Ozs7OzRCQUlIOzRCQUVWbkIsWUFBWWdCO3dCQUNkOzt3QkFDQUQ7b0JBRVg7O29CQUNBTjtnQkFFUjtnQkFHQSwwQkFBMEI7Z0JBQzFCLFNBQVN1QjtvQkFDTCxJQUFJQyxXQUFXO3dCQUFDQyxrQkFBa0JDO29CQUFTO29CQUUzQ3hDLE9BQU9TLE9BQU8sQ0FBQ0UsRUFBRSxDQUFDLGlCQUFpQjs0QkFBQyxFQUFDOEIsY0FBYyxFQUFFNUIsSUFBSSxFQUFFZ0IsSUFBSSxFQUFFYSxlQUFlLEVBQUVDLFVBQVUsRUFBQzt3QkFFekZqRCxtRUFBZUEsQ0FBQytDLGdCQUFnQjVCLE1BQU1nQixNQUFNYSxpQkFBaUJDLFlBQVk5QyxnQkFBZ0JZLE9BQU8sRUFBRTZCLFVBQVVNO3dCQUU1RyxTQUFTQSxhQUFhQyxJQUFJOzRCQUV0QkMsUUFBUUMsR0FBRyxDQUFDRjs0QkFDWixJQUFJRyxPQUFPLElBQUlDLFFBQVFwRCxnQkFBZ0JZLE9BQU87d0JBR2xEO29CQUNBLG9DQUFvQztvQkFDcEMsNkJBQTZCO29CQUU3QixtQ0FBbUM7b0JBRW5DLG1DQUFtQztvQkFDbkMsK0JBQStCO29CQUUvQixnRUFBZ0U7b0JBQ2hFLHdEQUF3RDtvQkFFeEQsZ0RBQWdEO29CQUNoRCxrREFBa0Q7b0JBQ2xELHVCQUF1QjtvQkFDdkIsd0RBQXdEO29CQUN4RCw0Q0FBNEM7b0JBQzVDLHVCQUF1QjtvQkFFdkIsdUJBQXVCO29CQUN2QixtREFBbUQ7b0JBQ25ELCtEQUErRDtvQkFDL0QsdUJBQXVCO29CQUN2QixtREFBbUQ7b0JBRW5ELGNBQWM7b0JBRWQsb0RBQW9EO29CQUNwRCx3QkFBd0I7b0JBQ3hCLDJDQUEyQztvQkFDM0MsMkRBQTJEO29CQUMzRCxnREFBZ0Q7b0JBQ2hELGtDQUFrQztvQkFDbEMsNkJBQTZCO29CQUM3Qix5Q0FBeUM7b0JBQ3pDLG9DQUFvQztvQkFDcEMsMEJBQTBCO29CQUUxQixtQ0FBbUM7b0JBQ25DLG9DQUFvQztvQkFFcEMsbUNBQW1DO29CQUNuQyx3Q0FBd0M7b0JBSXhDLElBQUk7b0JBQ0osUUFBUTtvQkFFUiw0SEFBNEg7b0JBQzVILGdFQUFnRTtvQkFLaEUsSUFBSTtvQkFDUjtnQkFDSjtnQkFFQTRCO1lBR0o7WUFDQXZDLGNBQWNXLE9BQU8sR0FBRztRQUc1QixPQUNJO1lBQ0NYLGNBQWNXLE9BQU8sR0FBRztRQUM3QjtJQUVKLEdBQUcsRUFBRTtJQUlELHFCQUNJOzswQkFFQSw4REFBQ3lDO2dCQUFHQyxXQUFVOzBCQUFVOzs7Ozs7MEJBQ3hCLDhEQUFDekI7Z0JBQUl5QixXQUFVOzBCQUNWL0M7Ozs7Ozs7O0FBS2I7R0FqS3dCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9kZXZpY2UuanN4PzExYjMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgVXNlckFnZW50IGZyb20gXCJ1c2VyLWFnZW50c1wiO1xuaW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgJy4vZGV2aWNlQ1NTLmNzcydcbmltcG9ydCBGb3JtRGF0YSwge1NlcXVlbmNlQ2hlY2tlcn0gZnJvbSAnLi9UeXBlcy9Gb3JtRGF0YS5qcydcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV2aWNlKCl7XG5sZXQgY2xpZW50U2lkZVNlcXVlbmNlQ291bnRlciA9IHVzZVJlZigwKTtcbmNvbnN0IGZpbmFsRmlsZVJlc3VsdCA9IHVzZVJlZihbXSk7XG5jb25zdCByZW5kZXJDb3VudGVyID0gdXNlUmVmKDApO1xuY29uc3QgbXlGaWxlQ2hvc2VuID0gdXNlUmVmKG51bGwpXG5jb25zdCBzb2NrZXQgPSB1c2VSZWYoaW8oJ2h0dHA6Ly8xOTIuMTY4LjIuMjA6MzAwMS8nKSlcbmNvbnN0IFt5b3VyUGxhdGZvcm0sIHNldFlvdXJQbGF0Zm9ybSBdID0gdXNlU3RhdGUobmF2aWdhdG9yLnBsYXRmb3JtIHx8IFwidW5rbm93blwiKTtcbmNvbnN0IFtwbGF0Zm9ybSwgc2V0UGxhdGZvcm1dID0gdXNlU3RhdGUoW1xuICAgIFxuXSk7XG5cbi8vIGZ1bmN0aW9uIHRoYXQgc2VuZHMgdGhlIGRhdGEvL1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVRoZVNlbGVjdGVkRmlsZShldmVudCl7XG4gICAgbGV0IGluc3RhbmNlID0gbmV3IEZvcm1EYXRhKHNvY2tldC5jdXJyZW50KTtcbiAgICAgICAgaW5zdGFuY2UuSGFuZGxlQ2xpY2tlZChldmVudCk7XG5cblxuICB9O1xuIFxudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBkZXYgbW9kZSByZW5kZXJzIHR3aWNlIG9uIHNlcnZlciBwcmV2ZW50IGRvIHRoaXMvL1xuICAgIFxuICAgIGlmKHJlbmRlckNvdW50ZXIuY3VycmVudCA9PSAwKXtcbiAgICAgICAgLy8gc2VuZCB5b3VyIGRldmljZSB0byB0aGUgc2VydmVyLy9cbiAgICAgICAgc29ja2V0LmN1cnJlbnQub24oJ2Nvbm5lY3QnLCAoKT0+e1xuXG4gICAgICAgICAgICBzb2NrZXQuY3VycmVudC5lbWl0KCduZXdEZXZpY2UnLCB5b3VyUGxhdGZvcm0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzb2NrZXQuY3VycmVudC5vbignbmV3VXNlcicsIChkYXRhKSA9PntcblxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5PdGhlckRldmljZSgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgT3RoZXJEZXZpY2UgPSB7Li4uZGF0YX07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWxldGUgeW91ciBvd24gZGV2aWNlLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBPdGhlckRldmljZVtzb2NrZXQuY3VycmVudC5pZF07XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhcnJheW9mVXNlcnMgPSBPYmplY3QudmFsdWVzKE90aGVyRGV2aWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXRUaGVtUCgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5pdGFsYXJyYXkgPSBbXTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlvZlVzZXJzLmZvckVhY2goKGVsZW1lbnRzLCBpbmRleCApPT57IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGFsYXJyYXkucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2UgPSB7KGhhbmRsZVRoZVNlbGVjdGVkRmlsZSl9dHlwZT1cImZpbGVcIiByZWY9e215RmlsZUNob3Nlbn0gc3R5bGU9e3tkaXNwbGF5Oidub25lJ319IG11bHRpcGxlPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXsoKT0+e215RmlsZUNob3Nlbi5jdXJyZW50LmNsaWNrKCk7fX0+IHtlbGVtZW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pil9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGxhdGZvcm0oaW5pdGFsYXJyYXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGhlbVAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybk90aGVyRGV2aWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgLy8gc2hvdyB0aGUgZGF0YSB0byB1c2VyLy9cbiAgICAgICAgICAgIGZ1bmN0aW9uIFNldHVwKCl7XG4gICAgICAgICAgICAgICAgbGV0IHNlcXVlbmNlID0ge3ByZXZpb3VzU2VxdWVuY2U6IHVuZGVmaW5lZH07XG5cbiAgICAgICAgICAgICAgICBzb2NrZXQuY3VycmVudC5vbigncmVjaWV2aW5nRGF0YScsICh7ZGV2aWNlU2VsZWN0ZWQsIGRhdGEsIHR5cGUsIHNlcXVlbmNlQ291bnRlciwgaXNGaW5pc2hlZH0pPT57XG5cbiAgICAgICAgICAgICAgICAgICAgU2VxdWVuY2VDaGVja2VyKGRldmljZVNlbGVjdGVkLCBkYXRhLCB0eXBlLCBzZXF1ZW5jZUNvdW50ZXIsIGlzRmluaXNoZWQsIGZpbmFsRmlsZVJlc3VsdC5jdXJyZW50LCBzZXF1ZW5jZSAsRG93bmxvYWRGaWxlKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gRG93bmxvYWRGaWxlKGZpbGUpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2IgPSBuZXcgQmxvYiguLi5maW5hbEZpbGVSZXN1bHQuY3VycmVudCk7XG4gICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYoaXNGaW5pc2hlZCAmJiBkYXRhID09ICdub25lJyl7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnZmluc2hlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCBhcnJheU9mVW5pdDhBcnJheXMgPSBbXTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGZpbmFsRmlsZVJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGlmIGRvd25sb2FkIGZpbmlzZ2hlZFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZpbmFsRmlsZVJlc3VsdC5jdXJyZW50LmZvckVhY2goKCBkYXRhT2JqZWN0ICk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIGxldCB7ZGF0YSwgc2VxdWVuY2V9ID0gZGF0YU9iamVjdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyBzaG91bGQgc3RhcnQgd2l0aCAxIHNlcXVlbmNlLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gaWYoc2VxdWVuY2UgPT0gb3JkZXJPZlNlcXVlbmNlIClcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgICAgICBhcnJheU9mVW5pdDhBcnJheXMucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgICAgICArK29yZGVyT2ZTZXF1ZW5jZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICAvLyBpZiBzZXF1ZW5jZSBpcyBtZXNzZWQgdXAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ3NlcXVlbmNlIGVycm9yLiB0cnkgYWdhaW4nKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYXJyYXlPZlVuaXQ4QXJyYXlzLnB1c2goZGF0YU9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbLi4uYXJyYXlPZlVuaXQ4QXJyYXlzXSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhibG9iKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbGV0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGFuY2hvci5kb3dubG9hZCA9IHR5cGU7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgYW5jaG9yLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgYW5jaG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChhbmNob3IpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGFuY2hvci5jbGljaygpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoYW5jaG9yKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBhcnJheU9mVW5pdDhBcnJheXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBmaW5hbEZpbGVSZXN1bHQuY3VycmVudCA9IFtdO1xuICAgIFxuICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGVsc2V7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gZmluYWxGaWxlUmVzdWx0LmN1cnJlbnQucHVzaCgge2RhdGE6IG5ldyBVaW50OEFycmF5KGRhdGEpLCBzZXF1ZW5jZTogc2VxdWVuY2VDb3VudGVyfSk7ICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyBmaW5hbEZpbGVSZXN1bHQuY3VycmVudC5wdXNoKG5ldyBVaW50OEFycmF5KGRhdGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFNldHVwKClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIHJlbmRlckNvdW50ZXIuY3VycmVudCA9IDE7XG4gICAgICAgXG4gICAgICBcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgIHJlbmRlckNvdW50ZXIuY3VycmVudCA9IDA7XG4gICAgfVxuICBcbn0sIFtdKTtcblxuICAgIFxuICAgIFxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJkZXZpY2VzXCI+T3RoZXIgZGV2aWNlczwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV2aWNlc0NvbnRhaW5lclwiPlxuICAgICAgICAgICAge3BsYXRmb3JtfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG5cbiAgICApXG59O1xuXG5cblxuXG4iXSwibmFtZXMiOlsiVXNlckFnZW50IiwiaW8iLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlTWVtbyIsInVzZVJlZiIsIkZvcm1EYXRhIiwiU2VxdWVuY2VDaGVja2VyIiwiRGV2aWNlIiwiY2xpZW50U2lkZVNlcXVlbmNlQ291bnRlciIsImZpbmFsRmlsZVJlc3VsdCIsInJlbmRlckNvdW50ZXIiLCJteUZpbGVDaG9zZW4iLCJzb2NrZXQiLCJ5b3VyUGxhdGZvcm0iLCJzZXRZb3VyUGxhdGZvcm0iLCJuYXZpZ2F0b3IiLCJwbGF0Zm9ybSIsInNldFBsYXRmb3JtIiwiaGFuZGxlVGhlU2VsZWN0ZWRGaWxlIiwiZXZlbnQiLCJpbnN0YW5jZSIsImN1cnJlbnQiLCJIYW5kbGVDbGlja2VkIiwib24iLCJlbWl0IiwiZGF0YSIsInJldHVybk90aGVyRGV2aWNlIiwiT3RoZXJEZXZpY2UiLCJpZCIsImFycmF5b2ZVc2VycyIsIk9iamVjdCIsInZhbHVlcyIsInNldFRoZW1QIiwiaW5pdGFsYXJyYXkiLCJmb3JFYWNoIiwiZWxlbWVudHMiLCJpbmRleCIsInB1c2giLCJkaXYiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidHlwZSIsInJlZiIsInN0eWxlIiwiZGlzcGxheSIsIm11bHRpcGxlIiwicCIsIm9uQ2xpY2siLCJjbGljayIsIlNldHVwIiwic2VxdWVuY2UiLCJwcmV2aW91c1NlcXVlbmNlIiwidW5kZWZpbmVkIiwiZGV2aWNlU2VsZWN0ZWQiLCJzZXF1ZW5jZUNvdW50ZXIiLCJpc0ZpbmlzaGVkIiwiRG93bmxvYWRGaWxlIiwiZmlsZSIsImNvbnNvbGUiLCJsb2ciLCJibG9iIiwiQmxvYiIsImgzIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/device.jsx\n"));

/***/ })

});