"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/deepmerge";
exports.ids = ["vendor-chunks/deepmerge"];
exports.modules = {

/***/ "(ssr)/./node_modules/deepmerge/dist/es.js":
/*!*******************************************!*\
  !*** ./node_modules/deepmerge/dist/es.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar isMergeableObject = function isMergeableObject(value) {\n    return isNonNullObject(value) && !isSpecial(value);\n};\nfunction isNonNullObject(value) {\n    return !!value && typeof value === \"object\";\n}\nfunction isSpecial(value) {\n    var stringValue = Object.prototype.toString.call(value);\n    return stringValue === \"[object RegExp]\" || stringValue === \"[object Date]\" || isReactElement(value);\n}\n// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25\nvar canUseSymbol = typeof Symbol === \"function\" && Symbol.for;\nvar REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for(\"react.element\") : 0xeac7;\nfunction isReactElement(value) {\n    return value.$$typeof === REACT_ELEMENT_TYPE;\n}\nfunction emptyTarget(val) {\n    return Array.isArray(val) ? [] : {};\n}\nfunction cloneUnlessOtherwiseSpecified(value, options) {\n    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;\n}\nfunction defaultArrayMerge(target, source, options) {\n    return target.concat(source).map(function(element) {\n        return cloneUnlessOtherwiseSpecified(element, options);\n    });\n}\nfunction mergeObject(target, source, options) {\n    var destination = {};\n    if (options.isMergeableObject(target)) {\n        Object.keys(target).forEach(function(key) {\n            destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);\n        });\n    }\n    Object.keys(source).forEach(function(key) {\n        if (!options.isMergeableObject(source[key]) || !target[key]) {\n            destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);\n        } else {\n            destination[key] = deepmerge(target[key], source[key], options);\n        }\n    });\n    return destination;\n}\nfunction deepmerge(target, source, options) {\n    options = options || {};\n    options.arrayMerge = options.arrayMerge || defaultArrayMerge;\n    options.isMergeableObject = options.isMergeableObject || isMergeableObject;\n    var sourceIsArray = Array.isArray(source);\n    var targetIsArray = Array.isArray(target);\n    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;\n    if (!sourceAndTargetTypesMatch) {\n        return cloneUnlessOtherwiseSpecified(source, options);\n    } else if (sourceIsArray) {\n        return options.arrayMerge(target, source, options);\n    } else {\n        return mergeObject(target, source, options);\n    }\n}\ndeepmerge.all = function deepmergeAll(array, options) {\n    if (!Array.isArray(array)) {\n        throw new Error(\"first argument should be an array\");\n    }\n    return array.reduce(function(prev, next) {\n        return deepmerge(prev, next, options);\n    }, {});\n};\nvar deepmerge_1 = deepmerge;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deepmerge_1);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPO1FBQ04sT0FBT1MsWUFBWUwsUUFBUUMsUUFBUUw7SUFDcEM7QUFDRDtBQUVBRSxVQUFVZ0IsR0FBRyxHQUFHLFNBQVNDLGFBQWFDLEtBQUssRUFBRXBCLE9BQU87SUFDbkQsSUFBSSxDQUFDSCxNQUFNQyxPQUFPLENBQUNzQixRQUFRO1FBQzFCLE1BQU0sSUFBSUMsTUFBTTtJQUNqQjtJQUVBLE9BQU9ELE1BQU1FLE1BQU0sQ0FBQyxTQUFTQyxJQUFJLEVBQUVDLElBQUk7UUFDdEMsT0FBT3RCLFVBQVVxQixNQUFNQyxNQUFNeEI7SUFDOUIsR0FBRyxDQUFDO0FBQ0w7QUFFQSxJQUFJeUIsY0FBY3ZCO0FBRWxCLGlFQUFldUIsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyZWUtbmV4dGpzLWFkbWluLWRhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9kZWVwbWVyZ2UvZGlzdC9lcy5qcz9hNzM4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBpc01lcmdlYWJsZU9iamVjdCA9IGZ1bmN0aW9uIGlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSB7XG5cdHJldHVybiBpc05vbk51bGxPYmplY3QodmFsdWUpXG5cdFx0JiYgIWlzU3BlY2lhbCh2YWx1ZSlcbn07XG5cbmZ1bmN0aW9uIGlzTm9uTnVsbE9iamVjdCh2YWx1ZSkge1xuXHRyZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbmZ1bmN0aW9uIGlzU3BlY2lhbCh2YWx1ZSkge1xuXHR2YXIgc3RyaW5nVmFsdWUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuXG5cdHJldHVybiBzdHJpbmdWYWx1ZSA9PT0gJ1tvYmplY3QgUmVnRXhwXSdcblx0XHR8fCBzdHJpbmdWYWx1ZSA9PT0gJ1tvYmplY3QgRGF0ZV0nXG5cdFx0fHwgaXNSZWFjdEVsZW1lbnQodmFsdWUpXG59XG5cbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi9iNWFjOTYzZmI3OTFkMTI5OGU3ZjM5NjIzNjM4M2JjOTU1ZjkxNmMxL3NyYy9pc29tb3JwaGljL2NsYXNzaWMvZWxlbWVudC9SZWFjdEVsZW1lbnQuanMjTDIxLUwyNVxudmFyIGNhblVzZVN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBjYW5Vc2VTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG5cbmZ1bmN0aW9uIGlzUmVhY3RFbGVtZW50KHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFXG59XG5cbmZ1bmN0aW9uIGVtcHR5VGFyZ2V0KHZhbCkge1xuXHRyZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gW10gOiB7fVxufVxuXG5mdW5jdGlvbiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCh2YWx1ZSwgb3B0aW9ucykge1xuXHRyZXR1cm4gKG9wdGlvbnMuY2xvbmUgIT09IGZhbHNlICYmIG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QodmFsdWUpKVxuXHRcdD8gZGVlcG1lcmdlKGVtcHR5VGFyZ2V0KHZhbHVlKSwgdmFsdWUsIG9wdGlvbnMpXG5cdFx0OiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0QXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuXHRyZXR1cm4gdGFyZ2V0LmNvbmNhdChzb3VyY2UpLm1hcChmdW5jdGlvbihlbGVtZW50KSB7XG5cdFx0cmV0dXJuIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKGVsZW1lbnQsIG9wdGlvbnMpXG5cdH0pXG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG5cdHZhciBkZXN0aW5hdGlvbiA9IHt9O1xuXHRpZiAob3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCh0YXJnZXQpKSB7XG5cdFx0T2JqZWN0LmtleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuXHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHRhcmdldFtrZXldLCBvcHRpb25zKTtcblx0XHR9KTtcblx0fVxuXHRPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG5cdFx0aWYgKCFvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHNvdXJjZVtrZXldKSB8fCAhdGFyZ2V0W2tleV0pIHtcblx0XHRcdGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChzb3VyY2Vba2V5XSwgb3B0aW9ucyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRlc3RpbmF0aW9uW2tleV0gPSBkZWVwbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldLCBvcHRpb25zKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gZGVzdGluYXRpb25cbn1cblxuZnVuY3Rpb24gZGVlcG1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRvcHRpb25zLmFycmF5TWVyZ2UgPSBvcHRpb25zLmFycmF5TWVyZ2UgfHwgZGVmYXVsdEFycmF5TWVyZ2U7XG5cdG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QgPSBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0IHx8IGlzTWVyZ2VhYmxlT2JqZWN0O1xuXG5cdHZhciBzb3VyY2VJc0FycmF5ID0gQXJyYXkuaXNBcnJheShzb3VyY2UpO1xuXHR2YXIgdGFyZ2V0SXNBcnJheSA9IEFycmF5LmlzQXJyYXkodGFyZ2V0KTtcblx0dmFyIHNvdXJjZUFuZFRhcmdldFR5cGVzTWF0Y2ggPSBzb3VyY2VJc0FycmF5ID09PSB0YXJnZXRJc0FycmF5O1xuXG5cdGlmICghc291cmNlQW5kVGFyZ2V0VHlwZXNNYXRjaCkge1xuXHRcdHJldHVybiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChzb3VyY2UsIG9wdGlvbnMpXG5cdH0gZWxzZSBpZiAoc291cmNlSXNBcnJheSkge1xuXHRcdHJldHVybiBvcHRpb25zLmFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpXG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zKVxuXHR9XG59XG5cbmRlZXBtZXJnZS5hbGwgPSBmdW5jdGlvbiBkZWVwbWVyZ2VBbGwoYXJyYXksIG9wdGlvbnMpIHtcblx0aWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignZmlyc3QgYXJndW1lbnQgc2hvdWxkIGJlIGFuIGFycmF5Jylcblx0fVxuXG5cdHJldHVybiBhcnJheS5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgbmV4dCkge1xuXHRcdHJldHVybiBkZWVwbWVyZ2UocHJldiwgbmV4dCwgb3B0aW9ucylcblx0fSwge30pXG59O1xuXG52YXIgZGVlcG1lcmdlXzEgPSBkZWVwbWVyZ2U7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZXBtZXJnZV8xO1xuIl0sIm5hbWVzIjpbImlzTWVyZ2VhYmxlT2JqZWN0IiwidmFsdWUiLCJpc05vbk51bGxPYmplY3QiLCJpc1NwZWNpYWwiLCJzdHJpbmdWYWx1ZSIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsImlzUmVhY3RFbGVtZW50IiwiY2FuVXNlU3ltYm9sIiwiU3ltYm9sIiwiZm9yIiwiUkVBQ1RfRUxFTUVOVF9UWVBFIiwiJCR0eXBlb2YiLCJlbXB0eVRhcmdldCIsInZhbCIsIkFycmF5IiwiaXNBcnJheSIsImNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkIiwib3B0aW9ucyIsImNsb25lIiwiZGVlcG1lcmdlIiwiZGVmYXVsdEFycmF5TWVyZ2UiLCJ0YXJnZXQiLCJzb3VyY2UiLCJjb25jYXQiLCJtYXAiLCJlbGVtZW50IiwibWVyZ2VPYmplY3QiLCJkZXN0aW5hdGlvbiIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiYXJyYXlNZXJnZSIsInNvdXJjZUlzQXJyYXkiLCJ0YXJnZXRJc0FycmF5Iiwic291cmNlQW5kVGFyZ2V0VHlwZXNNYXRjaCIsImFsbCIsImRlZXBtZXJnZUFsbCIsImFycmF5IiwiRXJyb3IiLCJyZWR1Y2UiLCJwcmV2IiwibmV4dCIsImRlZXBtZXJnZV8xIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/deepmerge/dist/es.js\n");

/***/ })

};
;