"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var ProgressBar = function (_a) {
    var progress = _a.progress;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ style: { width: "100%", height: "20px", border: "1px solid #ccc" } }, { children: (0, jsx_runtime_1.jsx)("div", { style: {
                width: "".concat(progress, "%"),
                height: "100%",
                backgroundColor: "blue",
            } }) })));
};
exports.default = ProgressBar;
