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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Device; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var user_agents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! user-agents */ \"(app-pages-browser)/./node_modules/user-agents/dist/index.js\");\n/* harmony import */ var user_agents__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(user_agents__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _deviceCSS_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deviceCSS.css */ \"(app-pages-browser)/./app/components/deviceCSS.css\");\n/* harmony import */ var _Types_FormData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Types/FormData.js */ \"(app-pages-browser)/./app/components/Types/FormData.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Device() {\n    _s();\n    let clientSideSequenceCounter = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(0);\n    const finalFileResult = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)([]);\n    const renderCounter = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(0);\n    const myFileChosen = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const socket = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)((0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(\"http://192.168.2.20:3001/\"));\n    const [yourPlatform, setYourPlatform] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(navigator.platform || \"unknown\");\n    const [platform, setPlatform] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    // function that sends the data//\n    function handleTheSelectedFile(event) {\n        let instance = new _Types_FormData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](socket.current);\n        instance.HandleClicked(event);\n    }\n    ;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // dev mode renders twice on server prevent do this//\n        if (renderCounter.current == 0) {\n            // send your device to the server//\n            socket.current.on(\"connect\", ()=>{\n                socket.current.emit(\"newDevice\", yourPlatform);\n                socket.current.on(\"newUser\", (data)=>{\n                    function returnOtherDevice() {\n                        const OtherDevice = {\n                            ...data\n                        };\n                        // delete your own device//\n                        delete OtherDevice[socket.current.id];\n                        let arrayofUsers = Object.values(OtherDevice);\n                        function setThemP() {\n                            let initalarray = [];\n                            arrayofUsers.forEach((elements, index)=>{\n                                initalarray.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            onChange: handleTheSelectedFile,\n                                            type: \"file\",\n                                            ref: myFileChosen,\n                                            style: {\n                                                display: \"none\"\n                                            },\n                                            multiple: true\n                                        }, void 0, false, {\n                                            fileName: \"/home/praveshchhetri/Desktop/fileTransfer/client/app/components/device.jsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            onClick: ()=>{\n                                                myFileChosen.current.click();\n                                            },\n                                            children: [\n                                                \" \",\n                                                elements\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/praveshchhetri/Desktop/fileTransfer/client/app/components/device.jsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 37\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/home/praveshchhetri/Desktop/fileTransfer/client/app/components/device.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 37\n                                }, this));\n                            });\n                            setPlatform(initalarray);\n                        }\n                        ;\n                        setThemP();\n                    }\n                    ;\n                    returnOtherDevice();\n                });\n                // show the data to user//\n                socket.current.on(\"recievingData\", (param)=>{\n                    let { deviceSelected, data, type, sequenceCounter, isFinished } = param;\n                    if (isFinished && data == \"none\") {\n                        console.log(\"finshed\");\n                        let orderOfSequence = 1;\n                        let arrayOfUnit8Arrays = [];\n                        console.log(finalFileResult);\n                        // if download finisghed\n                        finalFileResult.current.forEach((dataObject)=>{\n                            // let {data, sequence} = dataObject;\n                            console.log(\"do\", dataObject);\n                            // should start with 1 sequence//\n                            // if(sequence == orderOfSequence )\n                            //     {\n                            //         arrayOfUnit8Arrays.push(data);\n                            //         ++orderOfSequence;\n                            //     }\n                            // else{\n                            //     // if sequence is messed up//\n                            //     console.log('sequence error. try again');\n                            //     }\n                            arrayOfUnit8Arrays.push(dataObject);\n                            ++orderOfSequence;\n                        });\n                        let blob = new Blob([\n                            ...arrayOfUnit8Arrays\n                        ]);\n                        console.log(blob);\n                        let url = URL.createObjectURL(blob);\n                        let body = document.getElementsByTagName(\"body\")[0];\n                        let anchor = document.createElement(\"a\");\n                        anchor.download = type;\n                        anchor.href = url;\n                        anchor.style.display = \"none\";\n                        body.appendChild(anchor);\n                        anchor.click();\n                        URL.revokeObjectURL(url);\n                        body.removeChild(anchor);\n                        arrayOfUnit8Arrays = [];\n                        finalFileResult.current = [];\n                    } else {\n                        console.log(\"pushed\", data);\n                        // finalFileResult.current.push( {data: new Uint8Array(data), sequence: sequenceCounter});                       \n                        finalFileResult.current.push(new Uint8Array(data));\n                    }\n                });\n            });\n            renderCounter.current = 1;\n        } else {\n            renderCounter.current = 0;\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"devices\",\n                children: \"Other devices\"\n            }, void 0, false, {\n                fileName: \"/home/praveshchhetri/Desktop/fileTransfer/client/app/components/device.jsx\",\n                lineNumber: 151,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"devicesContainer\",\n                children: platform\n            }, void 0, false, {\n                fileName: \"/home/praveshchhetri/Desktop/fileTransfer/client/app/components/device.jsx\",\n                lineNumber: 152,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Device, \"Cqsv9U8RPC5RoVjHNx/KORGAryQ=\");\n_c = Device;\n;\nvar _c;\n$RefreshReg$(_c, \"Device\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2RldmljZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDb0M7QUFDRTtBQUNaO0FBQ21DO0FBQ3JDO0FBQ2tCO0FBSTNCLFNBQVNROztJQUN4QixJQUFJQyw0QkFBNEJILDZDQUFNQSxDQUFDO0lBQ3ZDLE1BQU1JLGtCQUFrQkosNkNBQU1BLENBQUMsRUFBRTtJQUNqQyxNQUFNSyxnQkFBZ0JMLDZDQUFNQSxDQUFDO0lBQzdCLE1BQU1NLGVBQWVOLDZDQUFNQSxDQUFDO0lBQzVCLE1BQU1PLFNBQVNQLDZDQUFNQSxDQUFDTCxvREFBRUEsQ0FBQztJQUN6QixNQUFNLENBQUNhLGNBQWNDLGdCQUFpQixHQUFHWCwrQ0FBUUEsQ0FBQ1ksVUFBVUMsUUFBUSxJQUFJO0lBQ3hFLE1BQU0sQ0FBQ0EsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBQyxFQUV4QztJQUVELGlDQUFpQztJQUUvQixTQUFTZSxzQkFBc0JDLEtBQUs7UUFDbEMsSUFBSUMsV0FBVyxJQUFJZCwwREFBUUEsQ0FBQ00sT0FBT1MsT0FBTztRQUN0Q0QsU0FBU0UsYUFBYSxDQUFDSDtJQUc3Qjs7SUFFRmpCLGdEQUFTQSxDQUFDO1FBQ04scURBQXFEO1FBRXJELElBQUdRLGNBQWNXLE9BQU8sSUFBSSxHQUFFO1lBQzFCLG1DQUFtQztZQUNuQ1QsT0FBT1MsT0FBTyxDQUFDRSxFQUFFLENBQUMsV0FBVztnQkFFekJYLE9BQU9TLE9BQU8sQ0FBQ0csSUFBSSxDQUFDLGFBQWFYO2dCQUs3QkQsT0FBT1MsT0FBTyxDQUFDRSxFQUFFLENBQUMsV0FBVyxDQUFDRTtvQkFFMUIsU0FBU0M7d0JBQ0wsTUFBTUMsY0FBYzs0QkFBQyxHQUFHRixJQUFJO3dCQUFBO3dCQUM1QiwyQkFBMkI7d0JBQzNCLE9BQU9FLFdBQVcsQ0FBQ2YsT0FBT1MsT0FBTyxDQUFDTyxFQUFFLENBQUM7d0JBRXJDLElBQUlDLGVBQWVDLE9BQU9DLE1BQU0sQ0FBQ0o7d0JBRTVCLFNBQVNLOzRCQUNOLElBQUlDLGNBQWMsRUFBRTs0QkFFbkJKLGFBQWFLLE9BQU8sQ0FBQyxDQUFDQyxVQUFVQztnQ0FDN0JILFlBQVlJLElBQUksZUFDaEIsOERBQUNDOztzREFDRCw4REFBQ0M7NENBQU1DLFVBQWF0Qjs0Q0FBdUJ1QixNQUFLOzRDQUFPQyxLQUFLL0I7NENBQWNnQyxPQUFPO2dEQUFDQyxTQUFROzRDQUFNOzRDQUFHQyxRQUFROzs7Ozs7c0RBQzNHLDhEQUFDQzs0Q0FBRUMsU0FBUztnREFBS3BDLGFBQWFVLE9BQU8sQ0FBQzJCLEtBQUs7NENBQUc7O2dEQUFHO2dEQUFFYjs7Ozs7Ozs7bUNBRnpDQzs7Ozs7NEJBSUg7NEJBRVZuQixZQUFZZ0I7d0JBQ2Q7O3dCQUNBRDtvQkFFWDs7b0JBQ0FOO2dCQUVSO2dCQUdBLDBCQUEwQjtnQkFFMUJkLE9BQU9TLE9BQU8sQ0FBQ0UsRUFBRSxDQUFDLGlCQUFpQjt3QkFBQyxFQUFDMEIsY0FBYyxFQUFFeEIsSUFBSSxFQUFFZ0IsSUFBSSxFQUFFUyxlQUFlLEVBQUVDLFVBQVUsRUFBQztvQkFFekYsSUFBR0EsY0FBYzFCLFFBQVEsUUFBTzt3QkFDNUIyQixRQUFRQyxHQUFHLENBQUM7d0JBQ1osSUFBSUMsa0JBQWtCO3dCQUN0QixJQUFJQyxxQkFBcUIsRUFBRTt3QkFFM0JILFFBQVFDLEdBQUcsQ0FBQzVDO3dCQUNaLHdCQUF3Qjt3QkFFaEJBLGdCQUFnQlksT0FBTyxDQUFDYSxPQUFPLENBQUMsQ0FBRXNCOzRCQUM5QixxQ0FBcUM7NEJBQ3JDSixRQUFRQyxHQUFHLENBQUMsTUFBTUc7NEJBQ3RCLGlDQUFpQzs0QkFDakMsbUNBQW1DOzRCQUNuQyxRQUFROzRCQUNSLHlDQUF5Qzs0QkFDekMsNkJBQTZCOzRCQUM3QixRQUFROzRCQUVSLFFBQVE7NEJBQ1Isb0NBQW9DOzRCQUNwQyxnREFBZ0Q7NEJBQ2hELFFBQVE7NEJBQ1JELG1CQUFtQmxCLElBQUksQ0FBQ21COzRCQUN4QixFQUFFRjt3QkFDTjt3QkFFSixJQUFJRyxPQUFPLElBQUlDLEtBQUs7K0JBQUlIO3lCQUFtQjt3QkFDM0NILFFBQVFDLEdBQUcsQ0FBQ0k7d0JBQ1osSUFBSUUsTUFBTUMsSUFBSUMsZUFBZSxDQUFDSjt3QkFDOUIsSUFBSUssT0FBT0MsU0FBU0Msb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQUU7d0JBQ25ELElBQUlDLFNBQVNGLFNBQVNHLGFBQWEsQ0FBQzt3QkFDaENELE9BQU9FLFFBQVEsR0FBRzFCO3dCQUNsQndCLE9BQU9HLElBQUksR0FBR1Q7d0JBQ2RNLE9BQU90QixLQUFLLENBQUNDLE9BQU8sR0FBRzt3QkFDdkJrQixLQUFLTyxXQUFXLENBQUNKO3dCQUNqQkEsT0FBT2pCLEtBQUs7d0JBRVpZLElBQUlVLGVBQWUsQ0FBQ1g7d0JBQ3BCRyxLQUFLUyxXQUFXLENBQUNOO3dCQUVqQlYscUJBQXFCLEVBQUU7d0JBQ3ZCOUMsZ0JBQWdCWSxPQUFPLEdBQUcsRUFBRTtvQkFJcEMsT0FDSTt3QkFDSStCLFFBQVFDLEdBQUcsQ0FBQyxVQUFVNUI7d0JBQ3RCLGlIQUFpSDt3QkFDakhoQixnQkFBZ0JZLE9BQU8sQ0FBQ2dCLElBQUksQ0FBQyxJQUFJbUMsV0FBVy9DO29CQUtwRDtnQkFDSjtZQUdKO1lBQ0FmLGNBQWNXLE9BQU8sR0FBRztRQUc1QixPQUNJO1lBQ0NYLGNBQWNXLE9BQU8sR0FBRztRQUM3QjtJQUVKLEdBQUcsRUFBRTtJQUlELHFCQUNJOzswQkFFQSw4REFBQ29EO2dCQUFHQyxXQUFVOzBCQUFVOzs7Ozs7MEJBQ3hCLDhEQUFDcEM7Z0JBQUlvQyxXQUFVOzBCQUNWMUQ7Ozs7Ozs7O0FBS2I7R0FuSndCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9kZXZpY2UuanN4PzExYjMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgVXNlckFnZW50IGZyb20gXCJ1c2VyLWFnZW50c1wiO1xuaW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgJy4vZGV2aWNlQ1NTLmNzcydcbmltcG9ydCBGb3JtRGF0YSBmcm9tICcuL1R5cGVzL0Zvcm1EYXRhLmpzJ1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV2aWNlKCl7XG5sZXQgY2xpZW50U2lkZVNlcXVlbmNlQ291bnRlciA9IHVzZVJlZigwKTtcbmNvbnN0IGZpbmFsRmlsZVJlc3VsdCA9IHVzZVJlZihbXSk7XG5jb25zdCByZW5kZXJDb3VudGVyID0gdXNlUmVmKDApO1xuY29uc3QgbXlGaWxlQ2hvc2VuID0gdXNlUmVmKG51bGwpXG5jb25zdCBzb2NrZXQgPSB1c2VSZWYoaW8oJ2h0dHA6Ly8xOTIuMTY4LjIuMjA6MzAwMS8nKSlcbmNvbnN0IFt5b3VyUGxhdGZvcm0sIHNldFlvdXJQbGF0Zm9ybSBdID0gdXNlU3RhdGUobmF2aWdhdG9yLnBsYXRmb3JtIHx8IFwidW5rbm93blwiKTtcbmNvbnN0IFtwbGF0Zm9ybSwgc2V0UGxhdGZvcm1dID0gdXNlU3RhdGUoW1xuICAgIFxuXSk7XG5cbi8vIGZ1bmN0aW9uIHRoYXQgc2VuZHMgdGhlIGRhdGEvL1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVRoZVNlbGVjdGVkRmlsZShldmVudCl7XG4gICAgbGV0IGluc3RhbmNlID0gbmV3IEZvcm1EYXRhKHNvY2tldC5jdXJyZW50KTtcbiAgICAgICAgaW5zdGFuY2UuSGFuZGxlQ2xpY2tlZChldmVudCk7XG5cblxuICB9O1xuIFxudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBkZXYgbW9kZSByZW5kZXJzIHR3aWNlIG9uIHNlcnZlciBwcmV2ZW50IGRvIHRoaXMvL1xuICAgIFxuICAgIGlmKHJlbmRlckNvdW50ZXIuY3VycmVudCA9PSAwKXtcbiAgICAgICAgLy8gc2VuZCB5b3VyIGRldmljZSB0byB0aGUgc2VydmVyLy9cbiAgICAgICAgc29ja2V0LmN1cnJlbnQub24oJ2Nvbm5lY3QnLCAoKT0+e1xuXG4gICAgICAgICAgICBzb2NrZXQuY3VycmVudC5lbWl0KCduZXdEZXZpY2UnLCB5b3VyUGxhdGZvcm0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzb2NrZXQuY3VycmVudC5vbignbmV3VXNlcicsIChkYXRhKSA9PntcblxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiByZXR1cm5PdGhlckRldmljZSgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgT3RoZXJEZXZpY2UgPSB7Li4uZGF0YX07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWxldGUgeW91ciBvd24gZGV2aWNlLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBPdGhlckRldmljZVtzb2NrZXQuY3VycmVudC5pZF07XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhcnJheW9mVXNlcnMgPSBPYmplY3QudmFsdWVzKE90aGVyRGV2aWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXRUaGVtUCgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5pdGFsYXJyYXkgPSBbXTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlvZlVzZXJzLmZvckVhY2goKGVsZW1lbnRzLCBpbmRleCApPT57IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGFsYXJyYXkucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2UgPSB7KGhhbmRsZVRoZVNlbGVjdGVkRmlsZSl9dHlwZT1cImZpbGVcIiByZWY9e215RmlsZUNob3Nlbn0gc3R5bGU9e3tkaXNwbGF5Oidub25lJ319IG11bHRpcGxlPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXsoKT0+e215RmlsZUNob3Nlbi5jdXJyZW50LmNsaWNrKCk7fX0+IHtlbGVtZW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pil9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGxhdGZvcm0oaW5pdGFsYXJyYXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGhlbVAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybk90aGVyRGV2aWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgLy8gc2hvdyB0aGUgZGF0YSB0byB1c2VyLy9cblxuICAgICAgICAgICAgc29ja2V0LmN1cnJlbnQub24oJ3JlY2lldmluZ0RhdGEnLCAoe2RldmljZVNlbGVjdGVkLCBkYXRhLCB0eXBlLCBzZXF1ZW5jZUNvdW50ZXIsIGlzRmluaXNoZWR9KT0+e1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKGlzRmluaXNoZWQgJiYgZGF0YSA9PSAnbm9uZScpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmluc2hlZCcpXG4gICAgICAgICAgICAgICAgICAgIGxldCBvcmRlck9mU2VxdWVuY2UgPSAxO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXJyYXlPZlVuaXQ4QXJyYXlzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmluYWxGaWxlUmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBkb3dubG9hZCBmaW5pc2doZWRcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxGaWxlUmVzdWx0LmN1cnJlbnQuZm9yRWFjaCgoIGRhdGFPYmplY3QgKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQge2RhdGEsIHNlcXVlbmNlfSA9IGRhdGFPYmplY3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkbycsIGRhdGFPYmplY3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hvdWxkIHN0YXJ0IHdpdGggMSBzZXF1ZW5jZS8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYoc2VxdWVuY2UgPT0gb3JkZXJPZlNlcXVlbmNlIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgYXJyYXlPZlVuaXQ4QXJyYXlzLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICArK29yZGVyT2ZTZXF1ZW5jZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGlmIHNlcXVlbmNlIGlzIG1lc3NlZCB1cC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdzZXF1ZW5jZSBlcnJvci4gdHJ5IGFnYWluJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheU9mVW5pdDhBcnJheXMucHVzaChkYXRhT2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArK29yZGVyT2ZTZXF1ZW5jZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbLi4uYXJyYXlPZlVuaXQ4QXJyYXlzXSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJsb2IpXG4gICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG4gICAgICAgICAgICAgICAgICAgIGxldCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3IuZG93bmxvYWQgPSB0eXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoYW5jaG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvci5jbGljaygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGFuY2hvcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5T2ZVbml0OEFycmF5cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxGaWxlUmVzdWx0LmN1cnJlbnQgPSBbXTtcblxuXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwdXNoZWQnLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmluYWxGaWxlUmVzdWx0LmN1cnJlbnQucHVzaCgge2RhdGE6IG5ldyBVaW50OEFycmF5KGRhdGEpLCBzZXF1ZW5jZTogc2VxdWVuY2VDb3VudGVyfSk7ICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsRmlsZVJlc3VsdC5jdXJyZW50LnB1c2gobmV3IFVpbnQ4QXJyYXkoZGF0YSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIHJlbmRlckNvdW50ZXIuY3VycmVudCA9IDE7XG4gICAgICAgXG4gICAgICBcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgIHJlbmRlckNvdW50ZXIuY3VycmVudCA9IDA7XG4gICAgfVxuICBcbn0sIFtdKTtcblxuICAgIFxuICAgIFxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJkZXZpY2VzXCI+T3RoZXIgZGV2aWNlczwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV2aWNlc0NvbnRhaW5lclwiPlxuICAgICAgICAgICAge3BsYXRmb3JtfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG5cbiAgICApXG59O1xuXG5cblxuXG4iXSwibmFtZXMiOlsiVXNlckFnZW50IiwiaW8iLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlTWVtbyIsInVzZVJlZiIsIkZvcm1EYXRhIiwiRGV2aWNlIiwiY2xpZW50U2lkZVNlcXVlbmNlQ291bnRlciIsImZpbmFsRmlsZVJlc3VsdCIsInJlbmRlckNvdW50ZXIiLCJteUZpbGVDaG9zZW4iLCJzb2NrZXQiLCJ5b3VyUGxhdGZvcm0iLCJzZXRZb3VyUGxhdGZvcm0iLCJuYXZpZ2F0b3IiLCJwbGF0Zm9ybSIsInNldFBsYXRmb3JtIiwiaGFuZGxlVGhlU2VsZWN0ZWRGaWxlIiwiZXZlbnQiLCJpbnN0YW5jZSIsImN1cnJlbnQiLCJIYW5kbGVDbGlja2VkIiwib24iLCJlbWl0IiwiZGF0YSIsInJldHVybk90aGVyRGV2aWNlIiwiT3RoZXJEZXZpY2UiLCJpZCIsImFycmF5b2ZVc2VycyIsIk9iamVjdCIsInZhbHVlcyIsInNldFRoZW1QIiwiaW5pdGFsYXJyYXkiLCJmb3JFYWNoIiwiZWxlbWVudHMiLCJpbmRleCIsInB1c2giLCJkaXYiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidHlwZSIsInJlZiIsInN0eWxlIiwiZGlzcGxheSIsIm11bHRpcGxlIiwicCIsIm9uQ2xpY2siLCJjbGljayIsImRldmljZVNlbGVjdGVkIiwic2VxdWVuY2VDb3VudGVyIiwiaXNGaW5pc2hlZCIsImNvbnNvbGUiLCJsb2ciLCJvcmRlck9mU2VxdWVuY2UiLCJhcnJheU9mVW5pdDhBcnJheXMiLCJkYXRhT2JqZWN0IiwiYmxvYiIsIkJsb2IiLCJ1cmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJib2R5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImFuY2hvciIsImNyZWF0ZUVsZW1lbnQiLCJkb3dubG9hZCIsImhyZWYiLCJhcHBlbmRDaGlsZCIsInJldm9rZU9iamVjdFVSTCIsInJlbW92ZUNoaWxkIiwiVWludDhBcnJheSIsImgzIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/device.jsx\n"));

/***/ })

});