"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var CircularLoading = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 40 : _b;
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            width: size,
            height: size,
            borderRadius: "50%",
            border: "4px solid #ccc",
            borderTopColor: "#00bcd4",
            animation: "spin 1s linear infinite",
        } }));
};
exports.default = CircularLoading;
