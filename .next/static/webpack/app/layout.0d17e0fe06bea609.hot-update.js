"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"d10585b8770e\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY3NzL3N0eWxlLmNzcz8xZTQ1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiZDEwNTg1Yjg3NzBlXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/css/style.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/layout.tsx":
/*!****************************!*\
  !*** ./src/app/layout.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var jsvectormap_dist_css_jsvectormap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsvectormap/dist/css/jsvectormap.css */ \"(app-pages-browser)/./node_modules/jsvectormap/dist/css/jsvectormap.css\");\n/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/flatpickr.min.css */ \"(app-pages-browser)/./node_modules/flatpickr/dist/flatpickr.min.css\");\n/* harmony import */ var _css_satoshi_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/css/satoshi.css */ \"(app-pages-browser)/./src/css/satoshi.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/css/style.css */ \"(app-pages-browser)/./src/css/style.css\");\n/* harmony import */ var primereact_resources_themes_lara_light_indigo_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/resources/themes/lara-light-indigo/theme.css */ \"(app-pages-browser)/./node_modules/primereact/resources/themes/lara-light-indigo/theme.css\");\n/* harmony import */ var primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/resources/primereact.min.css */ \"(app-pages-browser)/./node_modules/primereact/resources/primereact.min.css\");\n/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeicons/primeicons.css */ \"(app-pages-browser)/./node_modules/primeicons/primeicons.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_common_Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/common/Loader */ \"(app-pages-browser)/./src/components/common/Loader/index.tsx\");\n/* harmony import */ var _redux_Provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/Provider */ \"(app-pages-browser)/./src/redux/Provider.jsx\");\n/* harmony import */ var _components_ToastWrapper_ToastProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ToastWrapper/ToastProvider */ \"(app-pages-browser)/./src/components/ToastWrapper/ToastProvider.js\");\n/* harmony import */ var _components_Loader_LoaderProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Loader/LoaderProvider */ \"(app-pages-browser)/./src/components/Loader/LoaderProvider.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _helpers_apiService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/helpers/apiService */ \"(app-pages-browser)/./src/helpers/apiService.js\");\n/* harmony import */ var _helpers_apiService__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_helpers_apiService__WEBPACK_IMPORTED_MODULE_15__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(true);\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_14__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{\n        setTimeout(()=>setLoading(false), 1000);\n        checkLogin();\n        getProfile();\n        document.title = \"Nalmart Vendor Hub\";\n        document.description = \"Nalmart, Naturing the Authentic Legacy\";\n    }, []);\n    const checkLogin = ()=>{\n        let token = js_cookie__WEBPACK_IMPORTED_MODULE_13__[\"default\"].get(\"token\");\n        if (token) {\n            setIsLoggedIn(true);\n        } else {\n            router.push(\"/auth/signin\", {\n                scroll: false\n            });\n        }\n    };\n    const getProfile = ()=>{\n        const username = js_cookie__WEBPACK_IMPORTED_MODULE_13__[\"default\"].get(\"userID\");\n        try {\n            if (username) {\n                _helpers_apiService__WEBPACK_IMPORTED_MODULE_15___default().get(\"users/user/\".concat(username)).then((response)=>{\n                    if (response.status === 200) {\n                        js_cookie__WEBPACK_IMPORTED_MODULE_13__[\"default\"].set(\"profile\", JSON.stringify(response.data), {\n                            expires: 1\n                        });\n                    }\n                }).catch((error)=>{\n                    console.log(error.message);\n                });\n            }\n        } catch (e) {\n            console.log(e);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            suppressHydrationWarning: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dark:bg-boxdark-2 dark:text-bodydark\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_redux_Provider__WEBPACK_IMPORTED_MODULE_10__.StateProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ToastWrapper_ToastProvider__WEBPACK_IMPORTED_MODULE_11__.ToastProvider, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader_LoaderProvider__WEBPACK_IMPORTED_MODULE_12__.LoaderProvider, {}, void 0, false, {\n                                fileName: \"/home/christopher/Desktop/Nalmart work repo/nalmart-vendor-hub/src/app/layout.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 17\n                            }, this),\n                            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Loader__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/christopher/Desktop/Nalmart work repo/nalmart-vendor-hub/src/app/layout.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 28\n                            }, this) : isLoggedIn ? children : null\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/christopher/Desktop/Nalmart work repo/nalmart-vendor-hub/src/app/layout.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/christopher/Desktop/Nalmart work repo/nalmart-vendor-hub/src/app/layout.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/christopher/Desktop/Nalmart work repo/nalmart-vendor-hub/src/app/layout.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/christopher/Desktop/Nalmart work repo/nalmart-vendor-hub/src/app/layout.tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/christopher/Desktop/Nalmart work repo/nalmart-vendor-hub/src/app/layout.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(RootLayout, \"ajm0WvKWfzSQJUhCW6tmlQJ7Bpo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_14__.useRouter\n    ];\n});\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDOEM7QUFDSjtBQUNmO0FBQ0Y7QUFDd0M7QUFDaEI7QUFDZDtBQUNnQjtBQUNIO0FBQ0E7QUFDdUI7QUFDSjtBQUNwQztBQUNXO0FBQ0k7QUFFL0IsU0FBU1UsV0FBVyxLQUlqQztRQUppQyxFQUNqQ0MsUUFBUSxFQUdSLEdBSmlDOztJQU1qQyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQVU7SUFDaEQsTUFBTSxDQUFDWSxZQUFZQyxjQUFjLEdBQUdiLCtDQUFRQSxDQUFVO0lBQ3RELE1BQU1jLFNBQVNSLDJEQUFTQTtJQUd4QlAsZ0RBQVNBLENBQUM7UUFDUmdCLFdBQVcsSUFBTUosV0FBVyxRQUFRO1FBQ3BDSztRQUdBQztRQUNBQyxTQUFTQyxLQUFLLEdBQUc7UUFDakJELFNBQVNFLFdBQVcsR0FBRTtJQUN4QixHQUFHLEVBQUU7SUFFTCxNQUFNSixhQUFhO1FBQ2pCLElBQUlLLFFBQVFoQixrREFBT0EsQ0FBQ2lCLEdBQUcsQ0FBQztRQUN4QixJQUFJRCxPQUFPO1lBQ1RSLGNBQWM7UUFDaEIsT0FBTztZQUNMQyxPQUFPUyxJQUFJLENBQUMsZ0JBQWdCO2dCQUFFQyxRQUFRO1lBQU07UUFDOUM7SUFDRjtJQUVBLE1BQU1QLGFBQWE7UUFDakIsTUFBTVEsV0FBV3BCLGtEQUFPQSxDQUFDaUIsR0FBRyxDQUFDO1FBRTdCLElBQUc7WUFDRCxJQUFHRyxVQUFTO2dCQUNWbEIsK0RBQWMsQ0FBQyxjQUF1QixPQUFUa0IsV0FDNUJDLElBQUksQ0FBQyxDQUFDQztvQkFDTCxJQUFJQSxTQUFTQyxNQUFNLEtBQUssS0FBSTt3QkFDMUJ2QixrREFBT0EsQ0FBQ3dCLEdBQUcsQ0FBQyxXQUFXQyxLQUFLQyxTQUFTLENBQUNKLFNBQVNLLElBQUksR0FBRzs0QkFBRUMsU0FBUzt3QkFBRTtvQkFDckU7Z0JBQ0YsR0FBR0MsS0FBSyxDQUFDLENBQUNDO29CQUNSQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1HLE9BQU87Z0JBQzNCO1lBQ0Y7UUFDRixFQUFDLE9BQU1DLEdBQUU7WUFDUEgsUUFBUUMsR0FBRyxDQUFDRTtRQUNkO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBS0MsTUFBSztrQkFDVCw0RUFBQ0M7WUFBS0MsMEJBQTBCO3NCQUM5Qiw0RUFBQ0M7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUMzQywyREFBYUE7OEJBQ1osNEVBQUNDLGtGQUFhQTs7MENBQ1YsOERBQUNDLDhFQUFjQTs7Ozs7NEJBQ2RNLHdCQUFVLDhEQUFDVCxpRUFBTUE7Ozs7dUNBQU1XLGFBQWFILFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9oRTtHQS9Ed0JEOztRQVFQRix1REFBU0E7OztLQVJGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xheW91dC50c3g/NTdhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBcImpzdmVjdG9ybWFwL2Rpc3QvY3NzL2pzdmVjdG9ybWFwLmNzc1wiO1xuaW1wb3J0IFwiZmxhdHBpY2tyL2Rpc3QvZmxhdHBpY2tyLm1pbi5jc3NcIjtcbmltcG9ydCBcIkAvY3NzL3NhdG9zaGkuY3NzXCI7XG5pbXBvcnQgXCJAL2Nzcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBcInByaW1lcmVhY3QvcmVzb3VyY2VzL3RoZW1lcy9sYXJhLWxpZ2h0LWluZGlnby90aGVtZS5jc3NcIjtcbmltcG9ydCBcInByaW1lcmVhY3QvcmVzb3VyY2VzL3ByaW1lcmVhY3QubWluLmNzc1wiO1xuaW1wb3J0ICdwcmltZWljb25zL3ByaW1laWNvbnMuY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvY29tbW9uL0xvYWRlclwiO1xuaW1wb3J0IHtTdGF0ZVByb3ZpZGVyfSBmcm9tIFwiLi4vcmVkdXgvUHJvdmlkZXJcIjtcbmltcG9ydCB7VG9hc3RQcm92aWRlcn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9hc3RXcmFwcGVyL1RvYXN0UHJvdmlkZXJcIjtcbmltcG9ydCB7TG9hZGVyUHJvdmlkZXJ9IGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRlci9Mb2FkZXJQcm92aWRlclwiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBhcGlTZXJ2aWNlIGZyb20gXCJAL2hlbHBlcnMvYXBpU2VydmljZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb290TGF5b3V0KHtcbiAgY2hpbGRyZW4sXG59OiBSZWFkb25seTx7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59Pikge1xuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0TG9hZGluZyhmYWxzZSksIDEwMDApO1xuICAgIGNoZWNrTG9naW4oKTtcblxuXG4gICAgZ2V0UHJvZmlsZSgpO1xuICAgIGRvY3VtZW50LnRpdGxlID0gXCJOYWxtYXJ0IFZlbmRvciBIdWJcIlxuICAgIGRvY3VtZW50LmRlc2NyaXB0aW9uPSBcIk5hbG1hcnQsIE5hdHVyaW5nIHRoZSBBdXRoZW50aWMgTGVnYWN5XCI7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjaGVja0xvZ2luID0gKCkgPT4ge1xuICAgIGxldCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgc2V0SXNMb2dnZWRJbih0cnVlKTsgXG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvYXV0aC9zaWduaW4nLCB7IHNjcm9sbDogZmFsc2UgfSk7XG4gICAgfVxuICB9IFxuXG4gIGNvbnN0IGdldFByb2ZpbGUgPSAoKSA9PiB7XG4gICAgY29uc3QgdXNlcm5hbWUgPSBDb29raWVzLmdldCgndXNlcklEJyk7XG5cbiAgICB0cnl7XG4gICAgICBpZih1c2VybmFtZSl7XG4gICAgICAgIGFwaVNlcnZpY2UuZ2V0KGB1c2Vycy91c2VyLyR7dXNlcm5hbWV9YClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKXtcbiAgICAgICAgICAgIENvb2tpZXMuc2V0KFwicHJvZmlsZVwiLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSwgeyBleHBpcmVzOiAxIH0gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1jYXRjaChlKXtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8Ym9keSBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmc9e3RydWV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhcms6YmctYm94ZGFyay0yIGRhcms6dGV4dC1ib2R5ZGFya1wiPlxuICAgICAgICAgIDxTdGF0ZVByb3ZpZGVyPlxuICAgICAgICAgICAgPFRvYXN0UHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgPExvYWRlclByb3ZpZGVyLz5cbiAgICAgICAgICAgICAgICB7bG9hZGluZyA/IDxMb2FkZXIgLz4gOiBpc0xvZ2dlZEluID8gY2hpbGRyZW4gOiBudWxsfVxuICAgICAgICAgICAgPC9Ub2FzdFByb3ZpZGVyPlxuICAgICAgICAgIDwvU3RhdGVQcm92aWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMb2FkZXIiLCJTdGF0ZVByb3ZpZGVyIiwiVG9hc3RQcm92aWRlciIsIkxvYWRlclByb3ZpZGVyIiwiQ29va2llcyIsInVzZVJvdXRlciIsImFwaVNlcnZpY2UiLCJSb290TGF5b3V0IiwiY2hpbGRyZW4iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImlzTG9nZ2VkSW4iLCJzZXRJc0xvZ2dlZEluIiwicm91dGVyIiwic2V0VGltZW91dCIsImNoZWNrTG9naW4iLCJnZXRQcm9maWxlIiwiZG9jdW1lbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidG9rZW4iLCJnZXQiLCJwdXNoIiwic2Nyb2xsIiwidXNlcm5hbWUiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJzZXQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImV4cGlyZXMiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJlIiwiaHRtbCIsImxhbmciLCJib2R5Iiwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/layout.tsx\n"));

/***/ })

});